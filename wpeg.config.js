const cfg = {};

// Build Paths.
cfg.src = './src';
cfg.dist_root = './dist';
cfg.dist = '{dist_root}/lzb-CONTROL-NAME';

// Copy files.
cfg.copy_files_src = [ '{src}/**/*', '!{src}/**/*.{js,scss}', '{src}/**/vendor/**/*.{js,scss}' ];

// Compile SCSS files.
cfg.compile_scss_files_src = [ '{src}/**/*.scss', '!{src}/**/vendor/**/*' ];

// Compile JS files.
cfg.compile_js_files_src = [ '{src}/*assets/js/CONTROL-NAME.js' ];

// Correct line endings files.
cfg.correct_line_endings_files_src = '{dist}/**/*.{js,css}';

// Translate PHP files.
cfg.translate_php_files_src = '{dist}/**/*.php';
cfg.translate_php_files_dist = `{dist}/languages/lzb-CONTROL-NAME.pot`;
cfg.translate_php_options = {
    domain: 'TEXTDOMAIN',
    package: 'Lazy Blocks: CONTROL_LABEL Control',
    lastTranslator: 'AUTHOR_NAME',
    team: 'AUTHOR_NAME',
};

// Watch files.
cfg.watch_files = [ '{src}/**/*', '!{src}/**/*.{js,scss}' ];

cfg.watch_js_files = [ '{src}/**/*.js', '{src}/**/*.scss', '!{src}/*vendor/**/*' ];

cfg.watch_scss_files = '{src}/**/*.scss';

module.exports = cfg;
