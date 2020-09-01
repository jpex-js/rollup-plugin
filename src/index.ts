import babel from 'rollup-plugin-babel';

export default (options: any) => babel({
  babelrc: false,
  configFile: false,
  extensions: [ '.ts', '.tsx' ],
  plugins: [
    '@babel/plugin-syntax-typescript',
    [
      '@jpex/babel-plugin',
      options,
    ],
  ],
});
