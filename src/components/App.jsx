import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => (
      <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
         <Route path="/movies" element={<MoviesPage />} />
         <Route path="/movies/:movieId" element={<MoviesDetailsPage />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
         </Route>
            <Route path='*' element={<NotFound />} />
         </Route>
      </Routes>
);