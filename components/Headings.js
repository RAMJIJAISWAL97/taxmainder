import styles from "styles/Home.module.css";


export default function Headings({ title, content }) {
  return (
    <div className="heading text-center">
      <h3 className="title">{title}</h3>
      <h1>{content}</h1>
    </div>
  );
}
