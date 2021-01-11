export interface Field {
  id?: string;
  label?: string;
  type?: any; // FieldType;
  required?: boolean;
  readOnly?: boolean;
  value?: string;
  dropdownFields?: any[];
  placeholder?: string;
  hidden?: boolean;
}
export interface FieldGroup {
  title?: string;
  id?: string;
  fields: Field[];
}
