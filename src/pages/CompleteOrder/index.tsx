import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffee } from './components/SelectedCoffee';
import { CompleteOrderContainer } from './styles';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const CompleteOrderFormValidationSchema = z.object({
  cep: z
    .string()
    .min(8, { message: 'Informe o CEP, ele deve conter 8 dígitos' })
    .max(8, { message: 'Maxímo de 8 dígitos' }),
  rua: z.string().min(1, { message: 'Informe o nome da rua' }),
  numero: z.string().min(1, { message: 'Informe o número' }),
  complemento: z.string(),
  bairro: z.string().min(1, { message: 'Informe o nome do bairro' }),
  cidade: z.string().min(1, { message: 'Informe o nome da cidade' }),
  uf: z.string().min(1, { message: 'Informe a UF' }),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe um método de pagamento' };
    },
  }),
});

export type OrderData = z.infer<typeof CompleteOrderFormValidationSchema>;

type CompleteOrderFormData = OrderData;

export function CompleteOrder() {
  function useCart() {
    const context = useContext(CartContext);
    return context;
  }

  const completeOrderForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(CompleteOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = completeOrderForm;
  const navigate = useNavigate();
  const { cleanOrder } = useCart();

  function handleCompleteOrder(data: CompleteOrderFormData) {
    navigate('/confirmedOrder', {
      state: data,
    });
    cleanOrder();
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
