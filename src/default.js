import { join, basename } from 'path';
import { generateSharedDepsMergeStrategy,
       generateCountingSharedBundleUrlMapper } from 'polymer-bundler';
import { FSUrlLoader } from 'polymer-analyzer';

export default ({dest}) => {

  // do something with the options (in this case dest)
  const base = basename(dest);

  // return an array or object as preset, each object is an build
  return [{
    dest: `build/unbundled/${base}`,
    inlineJs: true,
    inlineCss: true,
    bundle: false
    // plugins: 'rollup'
  }, {
    entry: `${base}`,
    dest: `build/bundled/${base}`,
    sources: 'build/unbundled/**/**',
    inlineJs: true,
    inlineCss: true,
    bundle: true,
    urlLoader: new FSUrlLoader(join(process.cwd(), 'build/unbundled')),
    // plugins: 'rollup'
    // Merge shared dependencies into a single bundle when
    // they have at least three dependents.
    strategy: generateSharedDepsMergeStrategy(3),
    // Shared bundles will be named:
    // `shared/bundle_1.html`, `shared/bundle_2.html`, etc...
    urlMapper: generateCountingSharedBundleUrlMapper('shared/bundle_')
  }];
}
