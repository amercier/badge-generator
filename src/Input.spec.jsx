// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';
import { services, styles } from './config';

const noop = () => {};
const serviceSelection = services.map((service, index) => !!(index % 2));

describe('Input', () => {
  it('renders', () => {
    const component = renderer.create(
      <Input
        repository="REPOSITORY"
        style={styles[0]}
        serviceSelection={serviceSelection}
        handleRepositoryChange={noop}
        handleServiceToggle={noop}
        handleStyleChange={noop}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
