// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import ShallowTestRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import InputWithStyle, { Input } from './Input';
import { type Service, services, styles } from './config';

/**
 * No operation.
 *
 * @returns {undefined} Nothing.
 */
const noop = () => {};

const serviceSelection = services.map((service, index) => !!(index % 2));

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(() => {
      ReactDOM.render(
        <InputWithStyle
          repository="REPOSITORY"
          badgeStyle="STYLE"
          serviceSelection={serviceSelection}
          handleRepositoryChange={noop}
          handleServiceToggle={() => noop}
          handleStyleChange={noop}
        />,
        div,
      );
    }).not.toThrow();
    expect(() => {
      ReactDOM.unmountComponentAtNode(div);
    }).not.toThrow();
  });

  it('renders its components', () => {
    const renderer = new ShallowTestRenderer();
    renderer.render(
      <Input
        repository="REPOSITORY"
        badgeStyle={styles[0]}
        serviceSelection={serviceSelection}
        handleRepositoryChange={noop}
        handleServiceToggle={() => noop}
        handleStyleChange={noop}
        classes={{
          gridItem: '',
        }}
      />,
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('calls handleRepositoryChange when repository changes', () => {
    const handleRepositoryChangeMock = jest.fn();
    const input = mount(
      <InputWithStyle
        repository="REPOSITORY"
        badgeStyle={styles[0]}
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
        badgeStyle={styles[0]}
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

  it('calls handleStyleChange when repository changes', () => {
    const handleStyleChangeMock = jest.fn();
    const input = mount(
      <InputWithStyle
        repository="REPOSITORY"
        badgeStyle={styles[0]}
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
