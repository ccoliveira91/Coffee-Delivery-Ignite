import { Bank, CreditCard, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { RegularText } from '../../../../components/Typography';
import { PaymentInput } from '../PaymentInput';
import { PaymentOptionsContainer } from './styles';

export const paymentMethods = {
  credit: {
    id:1,
    method: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    id:2,
    method: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    id:3,
    method: 'Dinheiro',
    icon: <Money size={16} />,
  },
};

export function PaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { id, method, icon }]) => (
        <PaymentInput
          key={id}
          id={key}
          icon={icon}
          label={method}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentOptionsContainer>
  );
}
