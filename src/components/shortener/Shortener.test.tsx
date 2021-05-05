import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { SHORTCODE_BASE_URL } from '../../shared/constants';
import { ShortenedUrl, ShortenedUrlResponse } from '../../models/ShortenedUrl';
import Shortener from './Shortener';
import * as StorageService from '../../services/StorageService';
import * as mocks from './Shortener.mocks';

const server = setupServer(
    rest.post<ShortenedUrlResponse>(`${SHORTCODE_BASE_URL}/shorten?url=${mocks.urlToShorten}`, (req, res, ctx) => {
      return res(ctx.json( mocks.shortenedUrlResponseMock ))
    }),
  )

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders Shortener', () => {
  render(<Shortener/>);
});

test('invalid url displays warning', async() => {
    render(<Shortener/>);

    const input = screen.getByPlaceholderText('Shorten a link here...');
    fireEvent.change(input, { target: { value: 'invalid_url' } })

    const button = screen.getByText('Shorten it!');
    button.click();

    await waitFor(() => screen.getByText('Please add a link'));
});

test('restore history renders urls', async() => {
    
    StorageService.savedUrls([mocks.shortenedUrlMock]);

    render(<Shortener/>);

    await waitFor(() => screen.getByText(mocks.shortenedUrlMock.short_link));
});

test('fetch a shortened url', async() => {
    render(<Shortener/>);

    const input = screen.getByPlaceholderText('Shorten a link here...');
    fireEvent.change(input, { target: { value: mocks.urlToShorten } })

    const button = screen.getByText('Shorten it!');
    button.click();

    await waitFor(() => screen.getByText(mocks.shortenedUrlResponseMock.result.short_link));
});