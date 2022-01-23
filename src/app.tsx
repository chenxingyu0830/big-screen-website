import React from 'react';
import { Routes, HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Config } from './pages/config';
import { Suspense } from 'react';
import backGorundBg from "./images/background.png";

function App() {

    return (
        <div className="flex flex-1 bg-cover" style={{backgroundImage: `url(${backGorundBg})`}}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={(
                        <Suspense fallback={<div>loading...</div>}>
                            <Home />
                        </Suspense>
                    )} />
                    <Route path="/config" element={<Config />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;