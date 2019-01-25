// @flow

export type InputEvent = SyntheticInputEvent<HTMLInputElement>;

/**
 * Convert a service or style name to a kebab-cased key.
 *
 * @param {string} name - A name.
 * @returns {string} The kebab-cased representation of `name`.
 */
export function nameToKey(name: string) {
  return name.replace(/ /g, '-').toLowerCase();
}

/**
 * Convert a kebab-cased style to a name.
 *
 * @param {string} style - A kebab-cased style key.
 * @returns {string} The human-friendly representation of `style`.
 */
export function styleName(style: string) {
  const name = style.replace(/-/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}
