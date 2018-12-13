// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputWithStyle from './input';
import { type Service, services, styles } from './config';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => {};
const serviceSelection = services.map((service, index) => !!(index % 2));

describe('Input', () => {
  it('renders', () => {
    const component = renderer.create(
      <InputWithStyle
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

  it('calls handleRepositoryChange when respository changes', () => {
    const handleRepositoryChangeMock = jest.fn();
    const input = mount(
      <InputWithStyle
        repository="REPOSITORY"
        style={styles[0]}
        serviceSelection={serviceSelection}
        handleRepositoryChange={handleRepositoryChangeMock}
        handleServiceToggle={noop}
        handleStyleChange={noop}
      />,
    );

    expect(handleRepositoryChangeMock).toHaveBeenCalledTimes(0);
    input.find('input[type="text"]').simulate('change');
    expect(handleRepositoryChangeMock).toHaveBeenCalledTimes(1);
  });

  it('calls handleServiceToggle when a service is toggled', () => {
    const handleServiceToggleMocks = services.map(() => jest.fn());
    const input = mount(
      <InputWithStyle
        repository="REPOSITORY"
        style={styles[0]}
        serviceSelection={serviceSelection}
        handleRepositoryChange={noop}
        handleServiceToggle={index => handleServiceToggleMocks[index]}
        handleStyleChange={noop}
      />,
    );

    services.forEach((service: Service, index: number) => {
      expect(handleServiceToggleMocks[index]).toHaveBeenCalledTimes(0);
      input
        .find('input[type="checkbox"]')
        .at(index)
        .simulate('change');
      expect(handleServiceToggleMocks[index]).toHaveBeenCalledTimes(1);
    });
  });

  it('calls handleStyleChange when respository changes', () => {
    const handleStyleChangeMock = jest.fn();
    const input = mount(
      <InputWithStyle
        repository="REPOSITORY"
        style={styles[0]}
        serviceSelection={serviceSelection}
        handleRepositoryChange={noop}
        handleServiceToggle={noop}
        handleStyleChange={handleStyleChangeMock}
      />,
    );

    expect(handleStyleChangeMock).toHaveBeenCalledTimes(0);
    input
      .find('input[type="radio"][value="plastic"]')
      .simulate('change', { target: { checked: true } });
    expect(handleStyleChangeMock).toHaveBeenCalledTimes(1);
  });
});
