import { formats } from './config';

describe('formats', () => {
  it('contains 9 formats', () => {
    expect(formats).toHaveLength(9);
  });

  it('contains 1 default format', () => {
    expect(formats.filter(f => f.default)).toHaveLength(1);
  });

  formats.forEach(({ name, template }) => {
    describe(`${name} template`, () => {
      it('is a function', () => {
        expect(template).toBeFunction();
      });

      it('returns a string', () => {
        expect(template('TITLE', 'URL', 'IMAGE_URL')).toBeString();
      });

      it('returns a string that contains the URL or image URL', () => {
        expect(template('TITLE', 'URL', 'IMAGE_URL')).toContain('URL');
      });
    });
  });
});
