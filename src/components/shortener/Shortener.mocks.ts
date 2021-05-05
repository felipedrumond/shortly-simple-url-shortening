import { ShortenedUrl } from "../../models/ShortenedUrl";

export const urlToShorten = 'http://hello-world.com';

export const shortenedUrlResponseMock = 
{
    ok: true,
    result: {
        code: 'wKZQuM',
        short_link: 'shrtco.de/wKZQuM',
        full_short_link: 'https://shrtco.de/wKZQuM',
        short_link2: '9qr.de/wKZQuM',
        full_short_link2: 'https://9qr.de/wKZQuM',
        short_link3: 'shiny.link/wKZQuM',
        full_short_link3: 'https://shiny.link/wKZQuM',
        share_link: 'shrtco.de/share/wKZQuM',
        full_share_link: 'https://shrtco.de/share/wKZQuM',
        original_link: urlToShorten
    }
}

export const shortenedUrlMock: ShortenedUrl = {
    code: 'code',
    short_link: 'short_link',
    full_short_link: 'full_short_link',
    short_link2: 'short_link2',
    full_short_link2: 'full_short_link2',
    share_link: 'share_link',
    full_share_link: 'full_share_link',
    original_link: 'original_link',
}