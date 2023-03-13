import { useContext } from 'react';
import { TitleText } from '../../../../components/Typography';
import { CartContext } from '../../../../contexts/CartContext';
import { CartCoffeeCard } from '../CartCoffeeCard';
import { DetailsContainer, SelectedCoffeeContainer } from './styles';
import { TotalsSelectedCoffee } from './TotalsSelectedCoffe';

export function SelectedCoffee() {
  const { orderState } = useContext(CartContext);

  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" weight={700} color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {orderState.items.map((item) => (
          <CartCoffeeCard key={item.id} product={item} />
        ))}

        <TotalsSelectedCoffee />
      </DetailsContainer>
    </SelectedCoffeeContainer>
  );
}
