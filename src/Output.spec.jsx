// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import OutputWithStyle from './Output';

describe('Output', () => {
  describe('when services are empty', () => {
    it('renders', () => {
      const component = renderer.create(
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
      const component = renderer.create(
        <OutputWithStyle
          services={services}
          badgeStyle="STYLE"
          repository="REPOSITORY"
        />,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
