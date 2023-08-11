import { ButtonPrimary, Form, TextField } from "@telefonica/mistica";

export default function Home() {
  return (
    <Form
      onSubmit={async (formData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }}
    >
      <TextField label="name" name="name" />
      <ButtonPrimary submit>Send</ButtonPrimary>
    </Form>
  );
}
