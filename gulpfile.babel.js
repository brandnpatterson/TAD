import      gulp from "gulp"
import    concat from "gulp-concat"
import       del from "del"
import      load from "gulp-load-plugins"
import    prefix from "gulp-autoprefixer"
import    rename from "gulp-rename"
import      sass from "gulp-sass"
import      sync from "browser-sync"

const $ = load()
const reload = sync.reload

gulp.task('clean', del.bind(null, ['app/css/main.min.css', 'app/js/main.min.js', 'app/js/**.min.js', 'dist/css/style.min.css', 'dist/fonts', 'dist/images', 'dist/js/main.min.js'], {read: false}))

gulp.task('default', ['html', 'dep', 'fonts', 'images'], () => {
  gulp.start('serve')
})

gulp.task('dep', () => {
  return gulp.src(['app/dep/**.*'])
  .pipe(gulp.dest('dist/dep'))
})

gulp.task('fonts', () => {
    gulp.src(['app/fonts/**.eot', 'app/fonts/**.svg','app/fonts/**.ttf', 'app/fonts/**.woff'])
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', ['scripts', 'styles'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['app']}))
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
    .pipe(gulp.dest('dist/images'))
})

gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: 'app'
    }
  })

  gulp.watch(['app/*.html', 'app/css/**/*.sass', 'app/css/**/*.scss', 'app/js/*.min.js']).on('change', reload)
  gulp.watch('app/css/**/*.sass', ['styles'])
  gulp.watch('app/css/**/*.scss', ['styles'])
  gulp.watch('app/js/*.js', ['scripts'])
})

gulp.task('serve:dist', () => {
  sync({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('scripts', () => {
  return gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('app/js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('styles', () => {
  gulp.src('app/css/style.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(prefix('last 2 versions'))
  .pipe(gulp.dest('app/css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(reload({stream: true}))
})
