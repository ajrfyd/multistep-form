import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateField: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateField }: AccountFormProps) => {

  return (
    <FormWrapper title='Account creation'>
      <label>Email</label>
      <input type="email" required autoFocus value={email} onChange={e => updateField({ email: e.target.value })}/>
      <label>Password</label>
      <input type="password" required value={password} onChange={e => updateField({ password: e.target.value })}/>
    </FormWrapper>
  )
}

export default AccountForm;