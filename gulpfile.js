const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');

const zipPluginName = 'lzb-CONTROL-NAME';
const zipDist = 'dist-zip';
const zipFiles = [
	'build/**/*',
	'controls/**/*',
	'languages/**/*',
	'src/**/*',
	'lzb-CONTROL-NAME.php',
	'readme.txt',
];

gulp.task('zip-clean', () => {
	return del(`${zipDist}/**`, { force: true });
});

gulp.task('zip-copy-files', () => {
	return gulp
		.src(zipFiles, { base: './' })
		.pipe(gulp.dest(`dist-zip/${zipPluginName}`));
});

gulp.task('zip-pack', () => {
	return gulp
		.src(`${zipDist}/**/*`, {
			nodir: true,
			base: zipDist,
		})
		.pipe(zip(`${zipPluginName}.zip`))
		.pipe(gulp.dest(zipDist));
});

gulp.task('zip', gulp.series('zip-clean', 'zip-copy-files', 'zip-pack'));
