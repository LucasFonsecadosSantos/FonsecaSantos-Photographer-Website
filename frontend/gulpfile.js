var gulp        =   require('gulp');
var concat      =   require('gulp-concat');
var sass        =   require('gulp-sass');
var pug         =   require('gulp-pug');
var typescript  =   require('gulp-typescript');
var browserSync =   require('browser-sync').create();
var tsProject   =   typescript.createProject('typescript/tsconfig.json');

gulp.task('copy-images', () => {

    gulp.src('img/**/*')
        .pipe(gulp.dest('../dist/img/'));

});

gulp.task('pug-compile', () => {

    return gulp.src(['*.pug', 'pug/**/*.pug'])
            .pipe(pug().on('error', error => {
                console.log('Error on pug compilation process: ' + error);
            }))
            .pipe(gulp.dest('../dist'));

});

gulp.task('sass-compile', () => {

    return gulp.src('sass/**/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('../dist/ext/css'))

});

gulp.task('typescript-compile', () => {
    
    return gulp.src(['*.ts', 'typescript/**/*.ts'])
            .pipe(tsProject().on('error', error => {
                console.log('Error on typescript compilation process: ' + error);
            }))
            .pipe(gulp.dest('../dist/ext/js'));

});

gulp.task('monitor', () => {

    gulp.watch(['*.pug',    'pug/**/*.pug'],        gulp.series('pug-compile'));
    gulp.watch(['*.sass',   'sass/**/*.sass'],      gulp.series('sass-compile'));
    gulp.watch(['*.ts',     'typescript/**/*.ts'],  gulp.series('typescript-compile'));
    gulp.watch('img/**/*',                          gulp.series('copy-images'));
    gulp.watch('../dist/**/*.html',           browserSync.reload);
    gulp.watch('../dist/ext/css/**/*.css',    browserSync.reload);
    browserSync.init(
        {
            server: {
                baseDir: '../dist/'
            }
        }
    );

});

gulp.task('default', gulp.series('monitor'));