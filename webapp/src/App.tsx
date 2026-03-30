import { BrowserRouter, Routes, Route } from 'react-router';
import { AllModelsPage } from '../src/pages/AllModelPage';
import { TrpcProvider } from './lib/trpc';
import { ViewModelPage } from './pages/ViewModelPage';
import * as router from './lib/routes';
import { Layout } from './components/Layout';
import { NewModelPage } from './pages/NewModelPage';
import './styles/global.scss';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={router.getAllModelsRoute()} element={<AllModelsPage />} />
            <Route path={router.getNewModelRoute()} element={<NewModelPage />} />
            <Route path={router.getViewModelRoute(router.viewModelRouteParams)} element={<ViewModelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
