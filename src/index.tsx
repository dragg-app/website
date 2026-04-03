import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import WebsiteApp from './core/WebsiteApp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <WebsiteApp />
    </StrictMode>,
);
