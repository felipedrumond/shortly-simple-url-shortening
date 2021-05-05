import axios from 'axios';
import { ShortenedUrl, ShortenedUrlResponse } from '../models/ShortenedUrl';
import { SHORTCODE_BASE_URL } from '../shared/constants';

export function getShortenedUrl(url: string): Promise<ShortenedUrl> {
    url = `${SHORTCODE_BASE_URL}/shorten?url=${url}`;
    return axios
        .post<ShortenedUrlResponse>(url)
        .then(response => {
            return response.data.result;
        })
}