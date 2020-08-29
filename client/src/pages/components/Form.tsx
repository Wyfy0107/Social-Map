import React from "react";
import styled from "styled-components";

type formProps = {
  heading: string;
  email: string;
  password: string;
  label: string;
};

const Input = styled.input``;

const Button = styled.button``;

function Form(props: formProps) {
  return (
    <div>
      <h1 style={{ margin: "0" }}>{props.heading}</h1>
      <Input placeholder={props.email} />
      <Input placeholder={props.password} />
      <Button>{props.label}</Button>
    </div>
  );
}

export default Form;
