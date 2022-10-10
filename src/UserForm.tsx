import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: number;  
};

type UserFormProps = UserData & {  
  updateField: (fields: Partial<UserData>) => void;
}

const UserForm = ({ firstName, lastName, age, updateField }: UserFormProps) => {

  return (
    <FormWrapper title='User Details'>
      <label>First Name</label>
      <input type="text" required autoFocus value={firstName} onChange={e => updateField({ firstName: e.target.value })}/>
      <label>Last Name</label>
      <input type="text" required value={lastName} onChange={e => updateField({ lastName: e.target.value })}/>
      <label>Age</label>
      <input type="number" min={1} required value={age} onChange={e => updateField({ age: +e.target.value })}/>
    </FormWrapper> 
  )
}

export default UserForm;