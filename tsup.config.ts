import {defineConfig} from 'tsup';

export default defineConfig(options => {
  return {
    clean: true,
    shims: true,
    bundle: true,
    sourcemap: true,
    treeshake: true,

    outDir: 'dist',
    platform: 'node',
    format: ['esm'],
    external: ['react'],
    entry: ['./src/index.ts'],
    ignoreWatch: ['**/{.git,node_modules}/**', './dist'],
    minify: !options.watch,
  };
});
