import "../../../styles/main/preview/Project_Image.scss";

function Project_Image({ image }) {
  return (
    <div className="projectImage">
      <img className="projectImage" src={image} />
    </div>
  );
}

export default Project_Image;
