import { AllDetailsPage } from "./AllDetailsPage";
import { TrpcProvider } from "./lib/trpc";

export const App = () => {
  return (
    <TrpcProvider>
      <AllDetailsPage />
    </TrpcProvider>
  );
};


