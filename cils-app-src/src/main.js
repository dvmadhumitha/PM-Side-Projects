// Entry point: the original styles, the Immersione layer on top, then the app.
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import './styles/immersione.css';
import './styles/screens.css';
import './styles/screens-reading.css';
import './styles/screens-writing-speaking.css';
import './styles/screens-grammar-words.css';
import './styles/legacy-polish.css';
import App from './shell/App.jsx';

createRoot(document.getElementById('root')).render(createElement(App));
