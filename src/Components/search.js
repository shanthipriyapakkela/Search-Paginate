import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const search = ({ change }) => {
  return (
    <div className="mx-auto">
      <Form>
        <FormGroup>
          <Label>Enter Search Text</Label>
          <Input type="text" name="text" onChange={change} />
        </FormGroup>
      </Form>
    </div>
  );
};

export default search;
