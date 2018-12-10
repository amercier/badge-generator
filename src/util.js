// @flow

export type InputEvent = SyntheticInputEvent<HTMLInputElement>;

export function nameToKey(name: string) {
  return name.replace(/ /g, '-').toLowerCase();
}

export function styleName(style: string) {
  const name = style.replace(/-/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}
