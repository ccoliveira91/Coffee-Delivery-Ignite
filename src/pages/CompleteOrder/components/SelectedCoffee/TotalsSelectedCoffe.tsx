import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { CartContext } from '../../../../contexts/CartContext';
import { TotalsSelectedCoffeeContainer } from './styles';

export function TotalsSelectedCoffee() {
  const { orderState } = useContext(CartContext);
  const orderItemsTotal = orderState.items.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  const orderTotal = 3.5 + orderItemsTotal;

  return (
    <TotalsSelectedCoffeeContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>
          R${' '}
          {orderItemsTotal.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R${' '}
          {orderTotal.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={orderItemsTotal < 1}
        type="submit"
      />
    </TotalsSelectedCoffeeContainer>
  );
}
