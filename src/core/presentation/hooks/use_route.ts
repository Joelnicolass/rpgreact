import { useNavigate } from "react-router-dom";

export const useRoute = () => {
  const navigate = useNavigate();

  const goTo = (path: string, replace: boolean = false) => {
    navigate(path, { replace });
  };

  return { goTo };
};
