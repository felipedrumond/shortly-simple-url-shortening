import React, { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import LinkButton, { LinkButtonShape, LinkButtonSize } from '../linkButton/LinkButton';
import UrlItem from './urlItem/UrlItem';

import * as ShortCodeService from '../../services/ShortCodeService';
import * as StorageService from '../../services/StorageService';

import './Shortener.scss';
import { ShortenedUrl } from '../../models/ShortenedUrl';

const Shortener = () => {

    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [isUrlValid, setIsUrlValid] = useState(true);
    const [urls, setUrls] = useState(new Array<ShortenedUrl>()); 

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    const onSubmit = async () =>  {
        const urlRegEx = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
        const isUrlValid = urlRegEx.test(url);
        setIsUrlValid(isUrlValid);

        if (!isUrlValid)
            return;

        setLoading(true);
        const shortenedUrl = await ShortCodeService.getShortenedUrl(url);
        const newUrlsState = [ shortenedUrl, ...urls];

        setUrls(newUrlsState);
        saveHistory(newUrlsState);
        setLoading(false);
    }

    const saveHistory = (urls: Array<ShortenedUrl>): void => {
        StorageService.savedUrls(urls);
    }

    useEffect(() => {
        async function loadHistory() {
          const history = StorageService.getSavedUrls();
          setUrls(history);
        }
    
        loadHistory();
    }, []);

    return (
        <div>

            {/* shadow */}
            <div className="shadow">
            </div>

            {/* shortener */}
            <div
                className="shortener"
                style={{ 
                    backgroundImage: `url('assets/images/bg-shorten-desktop.svg')`
                }}
            >
                <div className="wrapper">
                    <div className="input-cointainer">
                        <input
                            placeholder="Shorten a link here..."
                            onChange={onChange}
                            className={ !isUrlValid ? 'invalid' : '' }
                            ></input>
                        
                        { !isUrlValid && <span className="invalid-alert">Please add a link</span> }
                    </div>
                    <div className="button-container">
                        <LinkButton
                            caption="Shorten it!"
                            size={LinkButtonSize.Large}
                            shape={LinkButtonShape.Square}
                            onClick={onSubmit}
                            loading={loading}
                            ></LinkButton>
                    </div>
                </div>
            </div>

            {/* shortened urls  */}
            <div className="shortened-urls-container">
                {
                    urls.map((url, key) =>
                        <UrlItem
                            originalLink={url.original_link}
                            shortLink={url.short_link}
                            key={key}
                        />
                    )
                }
            </div>
        
        </div>
    );
};

export default Shortener;