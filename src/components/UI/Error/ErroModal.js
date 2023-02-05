import classes from "./ErrorModal.module.css";
import Button from "../Button/Button";
import ReactDOM from "react-dom";
import Card from "../Card/Card";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} title={props.title} message={props.message} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default ErrorModal;
