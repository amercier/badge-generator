// @flow

/**
 * @typedef ReactTestInstance
 */

/**
 * Convert anything to a string.
 *
 * @param {*} value - Any value.
 * @returns {string} The string representation of `value`.
 */
const toString = value => Object.prototype.toString.apply(value);

/**
 * Find a component by type within a react-test-renderer instance.
 *
 * @param {module:react-test-renderer.ReactTestInstance} testInstance - The test instance.
 * @param {Object} Type - Component type.
 * @returns {module:react.React.Component} The react component of type `Type`.
 */
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
