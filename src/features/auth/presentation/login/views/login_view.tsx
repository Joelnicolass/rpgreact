import bg from "../../../../../assets/bg.webp";
import Image from "../../../../../core/presentation/components/image/image";
import MainLayout from "../../../../../core/presentation/components/main_layout/main_layout";
import PixelatedButton from "../../../../../core/presentation/components/pixelated/pixelated_button/pixelated_button";
import PixelatedInput from "../../../../../core/presentation/components/pixelated/pixelated_input/pixelated_input";
import TitleGame from "../../components/title_game/title_game";
import {
  LOGIN_MODE_ATTRIBUTE,
  LoginFormFields,
  LoginModes,
  useLoginViewModel,
} from "./login.view_model";

const LoginView = () => {
  const {
    form: { email },
    formRef,
    handleSubmit,
    handleChange,
  } = useLoginViewModel();

  return (
    <div style={styles.container}>
      <MainLayout>
        <Image src={bg} alt="background" style={styles.bg} />
        <div style={styles.title}>
          <TitleGame />
        </div>

        <div style={styles.footer}>
          <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
            <PixelatedInput
              name={LoginFormFields.EMAIL}
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={email}
            />

            <div style={styles.buttonsContainer}>
              <PixelatedButton
                secondary
                onClick={() => {
                  formRef.current!.setAttribute(
                    LOGIN_MODE_ATTRIBUTE,
                    LoginModes.HISTORY
                  );
                }}
              >
                ONLINE
              </PixelatedButton>
              <PixelatedButton
                secondary
                onClick={() => {
                  formRef.current!.setAttribute(
                    LOGIN_MODE_ATTRIBUTE,
                    LoginModes.CASUAL
                  );
                }}
              >
                LOCAL
              </PixelatedButton>
            </div>
          </form>
        </div>
      </MainLayout>
    </div>
  );
};

export default LoginView;

// TODO: Mover a modulo css
const styles: any = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    width: "100dvw",
    overflow: "hidden",
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "180%",
    top: "-50%",
    objectFit: "cover",
    zIndex: -1,
    padding: "1rem",
    borderRadius: "16px",
  },
  title: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderBottom: "4px solid white",
    borderRadius: "16px 16px 0 0",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: "3rem",
    borderTop: "4px solid white",
    borderRadius: "0 0 16px 16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  buttonsContainer: {
    display: "flex",
    gap: "1rem",
    width: "100%",
  },
};
