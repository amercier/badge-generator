// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import * as TestRenderer from 'react-test-renderer';
import ShallowTestRenderer from 'react-test-renderer/shallow';
import AppWithStyle, { App } from './app';
import { Input } from './input';
import { Output } from './output';
import { services } from './config';
import { findByType } from './testHelpers';

describe('App', () => {
  describe('when repository is not set and services are not checked', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AppWithStyle />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders its components', () => {
      const renderer = new ShallowTestRenderer();
      renderer.render(<App classes={{ container: '', paper: '' }} />);
      expect(renderer.getRenderOutput()).toMatchSnapshot();
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

  describe('#handleRepositoryChange()', () => {
    it('is a function', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(app.handleRepositoryChange).toBeFunction();
    });

    it('is passed to <Input> component as is', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(renderer.root.findByType(Input).props.handleRepositoryChange).toBe(
        app.handleRepositoryChange,
      );
    });

    it("updates App 'repository' state", () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(app.state.repository).not.toBe('REPOSITORY');

      const target = { value: 'REPOSITORY' };
      app.handleRepositoryChange({ target });
      expect(app.state.repository).toBe('REPOSITORY');
    });
  });

  describe('#handleServiceToggle()', () => {
    it('is a function', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(app.handleServiceToggle).toBeFunction();
    });

    it('is passed to <Input> component as is', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(renderer.root.findByType(Input).props.handleServiceToggle).toBe(
        app.handleServiceToggle,
      );
    });

    it("returns a function that updates App 'serviceSelection' state", () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(app.state.serviceSelection[0]).not.toBe(true);

      const handleFirstServiceToggle = app.handleServiceToggle(0);
      expect(handleFirstServiceToggle).toBeFunction();

      const target = { checked: true };
      handleFirstServiceToggle({ target });
      expect(app.state.serviceSelection[0]).toBe(true);
    });
  });

  describe('#handleStyleChange()', () => {
    it('is a function', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(app.handleStyleChange).toBeFunction();
    });

    it('is passed to <Input> component as is', () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(renderer.root.findByType(Input).props.handleStyleChange).toBe(
        app.handleStyleChange,
      );
    });

    it("updates App 'style' state", () => {
      const renderer = TestRenderer.create(<AppWithStyle />);
      const app = findByType(renderer.root, App);
      expect(app.state.style).not.toBe('STYLE');

      app.handleStyleChange({}, 'STYLE');
      expect(app.state.style).toBe('STYLE');
    });
  });
});
