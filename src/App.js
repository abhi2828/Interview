import { Controller, Form, useForm } from "react-hook-form";
import AccordianComp from "./AccordianComp";
import "./styles.css";
import { Col, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";

export default function App() {
  const {
    reset,
    control,
    setError,
    setValue,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const onSubmit = (data) => {

  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <AccordianComp />
    </div>
  );
}
