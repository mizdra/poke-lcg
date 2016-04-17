'use strict';

var merge      = require('merge2');
var del        = require('del');
var gulp       = require('gulp');
var ts         = require('gulp-typescript');
var babel      = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var typedoc    = require('gulp-typedoc');
var tsProject  = ts.createProject('tsconfig.json');

gulp.task('build', function () {
    var tsResult = gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('.')),
        tsResult.js
            .pipe(babel())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.'))
    ]);
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('clean', del.bind(null, ['./uint32']));

gulp.task('typedoc', function() {
    return gulp.src('src/**/*.ts')
        .pipe(typedoc({
            module: 'commonjs',
            target: 'es6',
            out: './docs/',
            entryPoint: './uint32/index.ts',
            name: 'poke-lcg',
            mode: 'file'
        }))
    ;
});

gulp.task('default', ['build']);