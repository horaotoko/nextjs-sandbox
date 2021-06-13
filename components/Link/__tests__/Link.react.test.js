// Link.react.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Link from '../Link.react';
import * as Router from 'next/router';
import '@testing-library/jest-dom';

const mockUseRouter = (...params) => {
  return jest.spyOn(Router, 'useRouter').mockImplementation(() => {
    return {
      ...{
        query: {},
        prefetch: jest.fn(),
        // query: { id: 'foo' }
      },
      ...params
    }
  });
};

describe('Link', () => {
  it('render', async () => {
    const router = await mockUseRouter( { query: { id: 'foo' }} );
    console.log(router)
    const { asFragment } = render(
      <Link />
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(await screen.findByText('ID is foo', {}, {interval: 200})).toBeInTheDocument();

    await waitFor(
      () => {
        // expect(screen.getByRole('link')).toBeInTheDocument();
        // expect(screen.queryByText('ID is bar')).not.toBeInTheDocument();
      },
      {  }
    );

    // expect(asFragment()).toMatchSnapshot();
  });
});