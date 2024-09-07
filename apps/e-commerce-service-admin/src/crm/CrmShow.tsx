import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CrmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="complaint" source="complaint" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerID" source="customerId" />
        <TextField label="ID" source="id" />
        <TextField label="resolutionStatus" source="resolutionStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
