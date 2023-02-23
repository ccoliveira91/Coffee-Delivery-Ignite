import { CoffeeCard } from '../CoffeeCard';
import { CoffeeListContainer, CoffeeListContent } from './styles';

export function CoffeeList() {
  return (
    <CoffeeListContainer className='container'>
      <h1>Nossos Cafés</h1>
      <CoffeeListContent>
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}
