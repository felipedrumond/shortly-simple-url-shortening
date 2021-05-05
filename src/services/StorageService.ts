import { ShortenedUrl } from "../models/ShortenedUrl";
var ls = require('local-storage');

const STORAGE_KEY = 'shortenedUrls';

export function getSavedUrls(): Array<ShortenedUrl> {
    return ls.get(STORAGE_KEY) || [];
}

export function savedUrls(urls: Array<ShortenedUrl>): void {
    ls.set(STORAGE_KEY, urls);
}
