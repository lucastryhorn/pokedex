import React, { ElementType } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

type withFormTypes = {
  validationSchema: AnyObjectSchema;
  defaultValues: DefaultValues<object>;
};

export const withForm = (
  EnhancedComponent: ElementType,
  { validationSchema, defaultValues }: withFormTypes,
) => () => {
  const { handleSubmit, setValue, register, ...restProps } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <EnhancedComponent
      {...restProps}
      register={register}
      setValue={setValue}
      handleSubmit={handleSubmit}
    />
  );
};
