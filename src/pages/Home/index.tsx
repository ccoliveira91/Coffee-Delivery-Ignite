import { CoffeeList } from './components/CoffeeList';
import { Publicity } from './components/Publicity';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Publicity />
      <CoffeeList />
    </HomeContainer>
  );
}
