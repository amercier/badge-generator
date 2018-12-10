import { nameToKey, styleName } from './util';

describe('nameToKey', () => {
  it('returns a key for a name', () => {
    expect(nameToKey('Example of a name')).toBe('example-of-a-name');
    expect(nameToKey('example-of-a-name')).toBe('example-of-a-name');
  });
});

describe('styleName', () => {
  it('returns a name for a style', () => {
    expect(styleName('example-of-a-style')).toBe('Example of a style');
    expect(styleName('Example of a style')).toBe('Example of a style');
  });
});
