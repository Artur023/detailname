import { BrowserRouter, Routes, Route } from 'react-router';
import { AllDetailsPage } from '../src/pages/AllDetailsPage';
import { TrpcProvider } from './lib/trpc';
import { ViewDetailPage } from './pages/ViewDetailPage';
import * as router from './lib/routes';
import { Layout } from './components/Layout';
import { NewDetailPage } from './pages/NewDetailPage';
import './styles/global.scss';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={router.getAllDetailsRoute()} element={<AllDetailsPage />} />
            <Route path={router.getNewDetailRoute()} element={<NewDetailPage />} />
            <Route path={router.getViewDetailRoute(router.viewDetailRouteParams)} element={<ViewDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
