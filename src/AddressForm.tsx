import React from "react";
import FormWrapper from './FormWrapper';

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: number;
}

type AddressFormProps = AddressData & {
  updateField: (fields: Partial<AddressData>) => void;
}

const AddressForm = ({ street, city, state, zip, updateField }: AddressFormProps ) => {

  return (
    <FormWrapper title='Address'>
      <label>Street</label>
      <input type="text" required autoFocus value={street} onChange={e => updateField({ street: e.target.value })}/>
      <label>City</label>
      <input type="text" required value={city} onChange={e => updateField({ city: e.target.value })}/>
      <label>State</label>
      <input type="text" required value={state} onChange={e => updateField({ state: e.target.value })}/>
      <label>Zip</label>
      <input type="text" required value={zip} onChange={e => updateField({ zip: +e.target.value })}/>
    </FormWrapper>
  )
}

export default AddressForm;