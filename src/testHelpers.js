// @flow

const toString = value => Object.prototype.toString.apply(value);

export function findByType(testInstance: ReactTestInstance, Type: Object) {
  const { instance } = testInstance.findByType(Type);
  if (!(instance instanceof Type)) {
    throw new TypeError(
      `Expected app to be an instance of ${Type.name}, got ${toString(
        instance,
      )}`,
    );
  }
  return instance;
}
