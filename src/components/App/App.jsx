import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container, Loading } from './App.styled';
const Layout = lazy(() => import('../Layout/Layout'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const Homepage = lazy(() => import('pages/HomePage/HomePage'));
const Moviespage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MoviesDetailsPage/MovieDetailsPage')
);

export function App() {
  return (
    <Container>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="movies/" element={<Moviespage />} />
            <Route path="movies/:id/" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
