import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffee } from './components/SelectedCoffee';
import { CompleteOrderContainer } from './styles';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

const CompleteOrderFormValidationSchema = z.object({
  cep: z
    .string()
    .min(8, { message: 'Informe o CEP, deve conter 8 dígitos' })
    .max(8, { message: 'Maxímo de 8 dígitos' }),
  street: z.string().min(1, {message: 'Informe o nome da rua'}),
  number: z.string().min(1, {message: 'Informe o número'}),
  neighborhood: z.string().min(1, {message: 'Informe o nome do bairro'}),
  city: z.string().min(1, {message: 'Informe o nome da cidade'}),
  uf: z.string().min(1, {message: 'Informe o nome do estado'}),
});

export type OrderData = z.infer<typeof CompleteOrderFormValidationSchema>;

type CompleteOrderFormData = OrderData;

export function CompleteOrder() {
  const completeOrderForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(CompleteOrderFormValidationSchema),
  });

  const { handleSubmit } = completeOrderForm;

  function handleCompleteOrder(data: CompleteOrderFormData) {
    console.log(data);
  }

  return (
    <FormProvider {...completeOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleCompleteOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffee />
      </CompleteOrderContainer>
    </FormProvider>
  );
}
