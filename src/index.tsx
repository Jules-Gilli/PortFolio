import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AchievementsProvider } from './context/AchievementsContext';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <HashRouter>
                <AchievementsProvider>
                    <App />
                </AchievementsProvider>
            </HashRouter>
        </React.StrictMode>
    );
}
