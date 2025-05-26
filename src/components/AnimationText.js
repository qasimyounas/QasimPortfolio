import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Muhammad Qasim",
          "a Frontend Developer",
          "a UI/UX Developer",
          "a Reactjs Developer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
