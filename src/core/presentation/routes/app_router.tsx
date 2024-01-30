import { createBrowserRouter } from "react-router-dom";
import LoginView from "../../../features/auth/presentation/login/views/login_view";
import CharacterCreationView from "../../../features/character_creation/presentation/views/character_creation_view";
import BattleView from "../../../features/battle/presentation/views/battle_view";

export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  CHARACTER_CREATION: "/character-creation",
  BATTLE: "/battle",
};

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
  },
  {
    path: ROUTES.LOGIN,
    Component: () => <LoginView />,
  },
  {
    path: ROUTES.CHARACTER_CREATION,
    Component: () => <CharacterCreationView />,
  },
  {
    path: ROUTES.BATTLE,
    Component: () => <BattleView />,
  },
]);
