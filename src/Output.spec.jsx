// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import * as TestRenderer from 'react-test-renderer';
import ShallowTestRenderer from 'react-test-renderer/shallow';
import OutputWithStyle, { Output } from './Output';
import { findByType } from './testHelpers';

const classesMock = {
  subtitle: '',
  badges: '',
  badge: '',
  formats: '',
  radioGroup: '',
  code: '',
};

describe('Output', () => {
  describe('when services are empty', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      expect(() => {
        ReactDOM.render(
          <OutputWithStyle
            services={[]}
            badgeStyle="STYLE"
            repository="REPOSITORY"
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
        <Output
          services={[]}
          badgeStyle="STYLE"
          repository="REPOSITORY"
          classes={classesMock}
        />,
      );
      expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
  });

  describe('when services are set', () => {
    const services = [
      {
        name: 'GitHub stars',
        url: 'https://github.com/{repository}',
        imageUrl: 'https://img.shields.io/github/stars/{repository}.svg',
        title: 'Build Status',
      },
      {
        name: 'Travis CI',
        url: 'https://travis-ci.org/{repository}',
        imageUrl: 'https://img.shields.io/travis/{repository}/{branch}.svg',
        title: 'Build Status',
      },
    ];

    it('renders without crashing', () => {
      const div = document.createElement('div');
      expect(() => {
        ReactDOM.render(
          <OutputWithStyle
            services={services}
            badgeStyle="STYLE"
            repository="REPOSITORY"
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
        <Output
          services={services}
          badgeStyle="STYLE"
          repository="REPOSITORY"
          classes={classesMock}
        />,
      );
      expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
  });

  describe('#handleFormatChange()', () => {
    const classes = {
      subtitle: '',
      badges: '',
      badge: '',
      formats: '',
      radioGroup: '',
      code: '',
    };

    it('is a function', () => {
      const renderer = TestRenderer.create(
        <Output
          services={[]}
          badgeStyle="STYLE"
          repository="REPOSITORY"
          classes={classes}
        />,
      );
      const component = findByType(renderer.root, Output);
      expect(component.handleFormatChange).toBeFunction();
    });

    it("updates Output 'formatIndex' state", () => {
      const renderer = TestRenderer.create(
        <Output
          services={[]}
          badgeStyle="STYLE"
          repository="REPOSITORY"
          classes={classes}
        />,
      );
      const component = findByType(renderer.root, Output);
      expect(component.state.formatIndex).not.toBe(1);

      component.handleFormatChange({}, '1');
      expect(component.state.formatIndex).toBe(1);
    });
  });
});
