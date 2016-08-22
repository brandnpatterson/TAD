import    concat from "gulp-concat"
import       del from "del"
import      gulp from "gulp"
import      load from "gulp-load-plugins"
import    prefix from "gulp-autoprefixer"
import      sass from "gulp-sass"
import      sync from "browser-sync"

const $ = load()
const reload = sync.reload

gulp.task('clean', del.bind(null, ['app/styles/*.css', 'dist'], {read: false}))

gulp.task('fonts', () => {
    gulp.src(['app/fonts/**.eot', 'app/fonts/**.svg','app/fonts/**.ttf', 'app/fonts/**.woff'])
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', ['styles'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
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

gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: 'app'
    }
  })

  gulp.watch(['app/*.html', 'app/styles/**/*.sass', 'app/styles/*.scss']).on('change', reload)
  gulp.watch('app/styles/**/*.sass', ['styles'])
  gulp.watch('app/styles/*.scss', ['styles'])
})

gulp.task('serve:dist', () => {
  sync({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('styles', () => {
  gulp.src(['app/styles/**/*.sass', 'app/styles/**/*.scss'])
  .pipe(sass())
  .pipe(prefix('last 2 versions'))
  .pipe(gulp.dest('app/styles'))
})

gulp.task('build', ['html', 'fonts', 'images'])

gulp.task('dist', ['clean'], () => {
  gulp.start('build', 'serve:dist')
})

gulp.task('default', ['clean'], () => {
  gulp.start('build', 'serve')
})
