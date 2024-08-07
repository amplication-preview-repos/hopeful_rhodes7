import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="failed" source="failed" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="subject" source="subject" />
        <NumberInput step={1} label="success" source="success" />
        <TextInput label="template" multiline source="template" />
        <NumberInput step={1} label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
