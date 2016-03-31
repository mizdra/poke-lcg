'use strict';

var merge = require('merge2');
var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
    var tsResult = gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('./lib')),
        tsResult.js
            .pipe(babel())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./lib'))
    ]);
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('clean', del.bind(null, ['lib']));

gulp.task('default', ['build']);