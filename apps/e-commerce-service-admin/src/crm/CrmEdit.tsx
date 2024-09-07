import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CrmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="complaint" multiline source="complaint" />
        <NumberInput step={1} label="customerID" source="customerId" />
        <TextInput label="resolutionStatus" source="resolutionStatus" />
      </SimpleForm>
    </Edit>
  );
};
