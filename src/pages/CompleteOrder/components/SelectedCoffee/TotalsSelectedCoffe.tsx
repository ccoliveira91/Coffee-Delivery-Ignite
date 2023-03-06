import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { CartContext } from '../../../../contexts/CartContext';
import { TotalsSelectedCoffeeContainer } from './styles';

export function TotalsSelectedCoffee() {
  const { cartItemsTotal } = useContext(CartContext);
  const cartTotal = 3.5 + cartItemsTotal;

  return (
    <TotalsSelectedCoffeeContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R${' '}
        {cartItemsTotal.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}</RegularText>
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
        {cartTotal.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartItemsTotal<1}
        type="submit"
      />
    </TotalsSelectedCoffeeContainer>
  );
}
