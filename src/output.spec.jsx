// @flow

import React from 'react';
import TestRenderer from 'react-test-renderer';
import OutputWithStyle, { Output } from './output';
import { findByType } from './testHelpers';

describe('Output', () => {
  describe('when services are empty', () => {
    it('renders', () => {
      const component = TestRenderer.create(
        <OutputWithStyle
          services={[]}
          badgeStyle="STYLE"
          repository="REPOSITORY"
        />,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('when services are set', () => {
    it('renders', () => {
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
      const component = TestRenderer.create(
        <OutputWithStyle
          services={services}
          badgeStyle="STYLE"
          repository="REPOSITORY"
        />,
      );
      expect(component.toJSON()).toMatchSnapshot();
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
