import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Films, FilmPage } from './pages';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/:page" element={<Films />} />
        <Route path="/film/:filmId" element={<FilmPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>404</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
