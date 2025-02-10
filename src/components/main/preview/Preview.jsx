import "../../../styles/main/preview/Preview.scss";
import Card from "./Card";
import Project_Image from "./Project_Image";

function Preview(props) {
  return (
    <section className="preview">
      <Project_Image image={props.formData.image} />
      <Card formData={props.formData} />
    </section>
  );
}

export default Preview;
