import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CrmCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="complaint" multiline source="complaint" />
        <NumberInput step={1} label="customerID" source="customerId" />
        <TextInput label="resolutionStatus" source="resolutionStatus" />
      </SimpleForm>
    </Create>
  );
};
