import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const libraryName = 'immutableArrays';

const banner = `/*!
 * ${pkg.name}
 * ${pkg.description}
 *
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository.url}
 * @license ${pkg.license}
 */`;

export default commandLineArgs => {
  const configs = [
    // UMD Development
    {
      input: 'src/index.js',
      output: {
        banner,
        name: libraryName,
        file: pkg.browser,
        format: 'umd'
      },
      plugins: [
        babel({
          exclude: ['node_modules/**']
        })
      ]
    },

    // CommonJS (for Node) and ES module (for bundlers) build
    {
      input: 'src/index.js',
      external: [], // indicate which modules should be treated as external
      output: [
        {
          banner,
          file: pkg.main,
          format: 'cjs'
        },
        {
          banner,
          file: pkg.module,
          format: 'es'
        }
      ],
      plugins: [
        babel({
          exclude: ['node_modules/**']
        })
      ]
    }
  ];

  if (commandLineArgs.environment === 'BUILD:production') {
    // UMD Production
    configs.push({
      input: 'src/index.js',
      output: {
        banner,
        name: libraryName,
        file: `dist/${pkg.name}.umd.min.js`,
        format: 'umd'
      },
      plugins: [
        babel({
          exclude: ['node_modules/**']
        }),
        terser({
          output: {
            comments: /^!/
          }
        })
      ]
    });
  }

  return configs;
};
