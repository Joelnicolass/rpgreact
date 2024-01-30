import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/presentation/routes/app_router";
import RootProvider from "./core/presentation/providers/root_provider";

const App = () => {
  return (
    <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    </>
  );
};

export default App;
