import { BrowserRouter, Routes, Route } from 'react-router';
import { AllDetailsPage } from '../src/pages/AllDetailsPage';
import { TrpcProvider } from './lib/trpc';
import { ViewDetailPage } from './pages/ViewDetailPage';
import { getAllDetailsRoute, getViewDetailRoute, viewDetailRouteParams } from './lib/routes';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllDetailsRoute()} element={<AllDetailsPage />} />
          <Route path={getViewDetailRoute(viewDetailRouteParams)} element={<ViewDetailPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
