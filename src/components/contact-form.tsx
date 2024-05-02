import { useState } from "react";

import { Input } from './input';
import { Button } from './button';
import { Textarea } from './textarea';
import { FormDescription } from './form-description';

type FormStateType = {
  name: string;
  email: string;
  message: string;
};

const defaultFormState = {
  name: '',
  email: '',
  message: ''
};

function ContactForm() {
  const [formState, setFormState] = useState<FormStateType>(defaultFormState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('SUCCESS!');

    setFormState(defaultFormState);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormState(prevState => ({
      ...prevState,
      name: e.target.value
    }));
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormState(prevState => ({
      ...prevState,
      email: e.target.value
    }));
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setFormState(prevState => ({
      ...prevState,
      message: e.target.value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      <div className='m-2'>
        <Input
          placeholder="Name"
          onChange={handleChangeName}
          value={formState.name}
          required
        />
      </div>

      <div className='m-2'>
        <Input
          placeholder="Email"
          type='email'
          onChange={handleChangeEmail}
          value={formState.email}
          required
        />
      </div>

      <div className='m-2'>
        <Textarea
          placeholder="Message"
          onChange={handleChangeMessage}
          value={formState.message}
          rows={6}
          required
        />
      </div>

      <div className='flex justify-end m-2'>
        <Button
          type='submit'
          className='bg-gray-800 text-white'
        >
          Send message
        </Button>
      </div>
    </form>
  )
}

export default ContactForm;
