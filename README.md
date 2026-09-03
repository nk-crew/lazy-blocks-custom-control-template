# Lazy Blocks Custom Control Template

Welcome to the official Lazy Blocks - Custom Control Template repository on GitHub. Here you will find a starter-kit for creating a new custom control plugin.

Production-ready scripts and styles build placed in `build` directory. Sources placed in `src` directory.

Looking for documentation? Please read the [Create custom control article](https://www.lazyblocks.com/docs/examples/create-custom-control/).

## Development

### Installation

- Run `npm install` in the command line

### Building

- `npm run build` to run build
- `npm run build:prod` to run build and prepare zip files for production
- `npm run dev` to run build and start files watcher

### Linting

Biome owns JavaScript and JSON, Stylelint owns SCSS. Both use the shared configs from [@nk-crew/plugin-toolkit](https://www.npmjs.com/package/@nk-crew/plugin-toolkit), the same ones the Lazy Blocks plugin uses.

- `npm run lint` to run both linters
- `npm run format:js` and `npm run format:css` to write the fixes

### Translations

Both commands need [WP-CLI](https://wp-cli.org/) on your PATH.

- `npm run make-pot` to rebuild the `.pot` file from the PHP and JavaScript sources
- `npm run make-json` to build the JSON files that `wp_set_script_translations()` loads for the editor script
