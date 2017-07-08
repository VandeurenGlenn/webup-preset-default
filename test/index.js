var chai = require('chai');
var assert = chai.assert;
var _default = require('./../dist/default-node');

var preset = _default({dest: 'build'});
var keys = [
  ['dest', 'inlineJs', 'inlineCss', 'plugins'], ['cwd', 'entry', 'fragments', 'dest',
    'inlineJs', 'inlineCss', 'bundle', 'strategy', 'urlMapper'
  ]
];

describe('description', () => {

  it('Is an array', () => {
    assert.isArray(preset, 'preset is an Array.');
  });

  it('Exports 2 objects', () => {
    assert.lengthOf(preset, 2, 'array has length of 2');
    // check if objects
    assert.isObject(preset[0], 'preset[0] is an object.');
    assert.isObject(preset[1], 'preset[1] is an object.');
  });

  it('preset[0] contains all keys', () => {
    assert.hasAllKeys(preset[0], keys[0], keys[0]);
  });

  it('preset[1] contains all keys', () => {
    assert.hasAllKeys(preset[1], keys[1], keys[1]);
  });

});
