var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');

var fs = require('fs');
var nodemon = require('gulp-nodemon');
var stylus = require('gulp-stylus');

var browserSync = require('browser-sync').create();
 
/* ********* CONFIG ********** */

var config = {
	start: 'server.js', // ExpressJS app start point
	entry: 'index.jsx', // ReactJS landing page
	bundleDir: './build',
	bundleJS: 'build/js/bundle.js',
    cssDir: './build/css',
    
    jsx: {
		src: 'src/**/*.jsx',
        themes: 'themes/**/*.jsx'
	},
	styl: {
		src: 'src/styles/*.styl',
        themes: 'themes/styles/*.styl'
	},
    watch: { // note: we watch a bigger set than we compile!
        srcStyl: 'src/styles/**/*.styl',
        themeStyl: 'themes/styles/**/*.styl',
        js: 'src/**/*.js'
    }
};


/* ********* COMPILE ********** */

// Compile JSX files
gulp.task('build:jsx', function () {
	var browserBundle = browserify({
		entries: config.entry,
		extensions: ['.jsx'],
		debug: true,
		transform: [babelify.configure({
            presets:["react"],
            compact: false
        })]
	});

	return browserBundle.bundle()
		.pipe(fs.createWriteStream(config.bundleJS, 'utf8'));
});

// Compile STYL files
gulp.task('build:srcStyl', function() {
    return gulp.src(config.styl.src)
		.pipe(stylus(/*{use: nib(), compress: true}*/))
		.pipe(gulp.dest(config.cssDir))
		.pipe(browserSync.stream());
});

gulp.task('build:themeStyl', function() {
    return gulp.src(config.styl.themes)
		.pipe(stylus(/*{use: nib(), compress: true}*/))
		.pipe(gulp.dest(config.cssDir))
		.pipe(browserSync.stream());
});

/* ********* RELOAD open pages ********** */
gulp.task('js-watch', ['build:jsx'], function(){
    browserSync.reload();
});


/* ********* WATCH and rebuild ********** */
gulp.task('watch', ['build:jsx'], function() {
    nodemon({
        script: config.start,
        watch: [config.start]
    });
    
    browserSync.init({
        //server: config.bundleDir, // either server or proxy, not both
        proxy: 'http://localhost:5000', // proxy ExpressJS app located here
        port: 3000 // proxied app runs on this port; 3000 is the default anyway, but for completeness
    });
    
    // watch changes to *.jsx files, recompile them, and refresh open browser windows
    gulp.watch(config.jsx.src, ['js-watch']);
    gulp.watch(config.jsx.themes, ['js-watch']);
    
    // watch changes to *.js files // TODO stream it in?
    gulp.watch(config.watch.js, ['js-watch']);
    
    // watch changes to *.styl files and stream them into browser
    gulp.watch(config.watch.srcStyl, ['build:srcStyl']);
    gulp.watch(config.watch.themeStyl, ['build:themeStyl']);
});

/* ********* smart TASKS ********** */

gulp.task('start',['compile','watch']);
gulp.task('compile', ['compile:js', 'compile:styl']);
gulp.task('compile:js', ['build:jsx']);
gulp.task('compile:styl', ['build:srcStyl', 'build:themeStyl']);