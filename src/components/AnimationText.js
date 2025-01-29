import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Muhammad Qasim",
          "a Full Stack Developer",
          "a web designer",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
