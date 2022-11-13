const cfg = {};

// Build Paths.
cfg.src = '.';
cfg.dist = './dist';

// Compile SCSS files.
cfg.compile_scss_files_src = ['{src}/*assets/**/*.scss'];
cfg.compile_scss_files_rtl = true;

// Compile JS files.
cfg.compile_js_files_src = [ '{src}/*assets/js/CONTROL-NAME.js' ];

// Correct line endings files.
cfg.correct_line_endings_files_src = '{dist}/**/*.{js,css}';

// Translate PHP files.
cfg.translate_php_files_src = '{src}/**/*.php';
cfg.translate_php_files_dist = `{src}/languages/lzb-CONTROL-NAME.pot`;
cfg.translate_php_options = {
    domain: 'TEXTDOMAIN',
    package: 'Lazy Blocks: CONTROL_LABEL Control',
    lastTranslator: 'AUTHOR_NAME',
    team: 'AUTHOR_NAME',
};

// Watch files.
cfg.watch_js_files = ['{src}/assets/**/*.js', '!{src}/*vendor/**/*'];

cfg.watch_scss_files = '{src}/assets/**/*.scss';

module.exports = cfg;
