import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CrmList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CRMS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="complaint" source="complaint" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerID" source="customerId" />
        <TextField label="ID" source="id" />
        <TextField label="resolutionStatus" source="resolutionStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
