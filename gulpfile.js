var gulp = require('gulp');

// js压缩
var uglify = require('gulp-uglify');

// css monify
var minifyCss = require('gulp-minify-css');

// some file minify to one
var concat = require('gulp-concat');

// md5
var rev = require('gulp-rev');

//path replace
var revCollector = require('gulp-rev-collector');

// manifest
var manifest = require('gulp-manifest');

// shell
var shell = require('gulp-shell');

// javascript 
gulp.task('script',function(){
	gulp.src('js/*.js')
		.pipe(concat('wap.min.js'))
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('build/js'))
});

// auto
gulp.task('auto',function(){
	gulp.watch('js/*.js',['script']);
	gulp.watch('css/*.css',['css']);
});

// css 
gulp.task('css',function(){
	gulp.src('css/*.css')
		.pipe(concat('wap.min.css'))
		.pipe(minifyCss())
		.pipe(rev())
		.pipe(gulp.dest('build/css'))
		.pipe(manifest())
		.pipe(gulp.dest('build/rev'))
});

// default
gulp.task('default',['script','css','auto']);
