import { basename } from 'path';
import http2 from 'webup-preset-http2';
import bundle from 'webup-preset-bundle';

export default ({dest, fragments}) => {

  // do something with the options (in this case dest)
  const base = basename(dest);

  // return an array or object as preset, each object is an build
  return [
    http2(
      {dest: dest}
    )[0],
    bundle(
      {dest: dest}
    )[0]
  ];
}
