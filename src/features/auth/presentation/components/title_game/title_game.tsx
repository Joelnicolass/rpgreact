import Title from "../../../../../core/presentation/components/title/title";

const TitleGame = () => {
  return (
    <Title>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          margin: "0",
          padding: "0",
        }}
      >
        O R I G E
        <span
          style={{
            color: "#ed9e70",
          }}
        >
          {" "}
          N{" "}
        </span>
        E S
      </h1>
    </Title>
  );
};

export default TitleGame;
