// @flow

import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import AppWithStyle, { App } from './App';
import { Input } from './Input';
import { Output } from './Output';
import { services } from './config';

const toString = value => Object.prototype.toString.apply(value);

function findByType(testInstance: ReactTestInstance, Type: Object) {
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

describe('App', () => {
  describe('when repository is not set and services are not checked', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AppWithStyle />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders component tree', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it('renders <Input> component', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      expect(renderer.root.findByType(Input).props).toMatchSnapshot();
    });

    it('does not render <Output> component', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      expect(renderer.root.findAllByType(Output).length).toBe(0);
    });
  });

  describe('when repository is set and services are checked', () => {
    const state = {
      repository: 'REPOSITORY',
      serviceSelection: services.map(() => true),
    };

    it('updates <Input> component', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      findByType(renderer.root, App).setState(state);
      expect(renderer.root.findByType(Input).props).toMatchSnapshot();
    });

    it('renders <Output> component', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      findByType(renderer.root, App).setState(state);
      expect(renderer.root.findByType(Output).props).toMatchSnapshot();
    });
  });
});
