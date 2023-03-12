import React from 'react';

type Props = {
  onSubmit: () => void;
  name?: string;
  className?: string;
  children?: React.ReactNode;
};

const Form = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };
  return <form {...props} onSubmit={handleSubmit} />;
};

export default Form;
