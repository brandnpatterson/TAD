import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import concat from 'gulp-concat'
import del from 'del'
import gulp from 'gulp'
import load from 'gulp-load-plugins'
import sass from 'gulp-sass'

const $ = load()
const reload = browserSync.reload

gulp.task('styles', () => {
  gulp.src('app/styles/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('app/styles'))
  .pipe(gulp.dest('dist/styles'))
})

gulp.task('html', ['styles'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
})

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
})

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app']
    }
  })

  gulp.watch([
    'app/*.html',
    'app/styles/**/*.scss'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles'])
  gulp.watch('app/scripts/**/*.js', ['scripts'])
})

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  })
})

gulp.task('clean', del.bind(null, ['.tmp', 'app/styles/*.css', 'dist/styles'], {read: false}))

gulp.task('build', ['html', 'images', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}))
})

gulp.task('default', ['clean'], () => {
  gulp.start('build')
})
