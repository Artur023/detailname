import { BrowserRouter, Routes, Route } from 'react-router';
import { AllDetailsPage } from '../src/pages/AllDetailsPage';
import { TrpcProvider } from './lib/trpc';
import { ViewDetailPage } from './pages/ViewDetailPage';
import { getAllDetailsRoute, getViewDetailRoute, viewDetailRouteParams } from './lib/routes';
import { Layout } from './components/Layout';
import './styles/global.scss';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllDetailsRoute()} element={<AllDetailsPage />} />
            <Route path={getViewDetailRoute(viewDetailRouteParams)} element={<ViewDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
