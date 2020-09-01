import { join } from 'path';
import { rollup } from 'rollup';
import jpexPlugin from '../dist';
import tsPlugin from 'rollup-plugin-typescript2';

export default async(fixture, options = {}) => {
  const compiler = await rollup({
    // eslint-disable-next-line no-undef
    input: join(__dirname, fixture),
    external: [ 'some-lib', 'jpex' ],
    plugins: [
      jpexPlugin(options),
      tsPlugin(),
    ],
  });
  const { output: [ chunk ] } = await compiler.generate({
    format: 'es',
  });
  const { code: output } = chunk;
  return output;
};
