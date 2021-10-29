const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babelify = require('babelify')
const watchify = require('watchify')
const browserify = require('browserify');
const transform = require('vinyl-transform');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('default', ()=>{
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'));
});
