import React from 'react';
import { render } from '@testing-library/react';
import {
  createGeneralPageData,
  createNodeReleasesData,
} from '../../../__fixtures__/page';
import ReleasesPage, { ReleasesNodeReleases } from '../releases';

const mockNodeReleasesData = createNodeReleasesData();
const mockReleasesNodeReleases: ReleasesNodeReleases = {
  nodeReleases: {
    nodeReleasesData: mockNodeReleasesData,
  },
};

const mockPageData = createGeneralPageData();
const mockData = {
  data: {
    ...mockPageData.data,
    ...mockReleasesNodeReleases,
  },
};

describe('Releases page', () => {
  it('renders correctly', () => {
    const { container } = render(<ReleasesPage data={mockData.data} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const pageContent = container.querySelector('main');

    expect(pageContent).toMatchSnapshot();
  });
});
