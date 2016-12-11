var gulp = require("gulp");
var merge = require('merge-stream');
var watch = require('gulp-watch');
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var include = require("gulp-include");

var paths = {
	scripts: {
		compile: [
			'./assets/js/*.js'
		],
		watch: [
			'./assets/js/**/*.js'
		]
	},
	css: {
		compile: [
			'./assets/scss/*.scss'
		],
		watch: [
			'./assets/scss/**/*.scss'
		]
	}
};

gulp.task('default', ['watch', 'scripts', 'css']);

gulp.task('watch', function() {
	return merge(
		watch(paths.scripts.watch, {base: './'}, function() { return gulp.start('scripts'); }),
		watch(paths.css.watch, {base: './'}, function() { return gulp.start('css'); })
	);
});

gulp.task("css", function () {
	return gulp.src(paths.css.compile)
	.pipe(plumber())
	.pipe(sass.sync())
	.pipe(cleanCSS({ keepSpecialComments: 0 }))
	.pipe(plumber.stop())
	.pipe(gulp.dest("./assets"));
});

gulp.task("scripts", function () {
	return gulp.src(paths.scripts.compile)
	.pipe(plumber())
	.pipe(include({ extensions: "js" }))
	.pipe(babel())
	.pipe(uglify())
	.pipe(plumber.stop())
	.pipe(gulp.dest("./assets"));
});