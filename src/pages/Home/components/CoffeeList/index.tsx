import { CoffeeCard } from '../CoffeeCard';
import { CoffeeListContainer, CoffeeListContent } from './styles';

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <h1>Nossos Cafés</h1>
      <CoffeeListContent>
        {PRODUCTS.map((product) => (
          <CoffeeCard key={product.id} product={product} />
        ))}
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}

const PRODUCTS = [
  {
    id: 1,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: 'src/assets/expresso-tradicional.svg',
  },
  {
    id: 2,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: 'src/assets/expresso-americano.svg',
  },
  {
    id: 3,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: 'src/assets/expresso-cremoso.svg',
  },
  {
    id: 4,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: 'src/assets/expresso-gelado.svg',
  },
  {
    id: 5,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: 'src/assets/cafe-com-leite.svg',
  },
  {
    id: 6,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: 'src/assets/latte.svg',
  },
  {
    id: 7,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: 'src/assets/capuccino.svg',
  },
  {
    id: 8,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: 'src/assets/macchiato.svg',
  },
  {
    id: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: 'src/assets/mocaccino.svg',
  },
  {
    id: 10,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: 'src/assets/chocolate-quente.svg',
  },
  {
    id: 11,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: 'src/assets/cubano.svg',
  },
  {
    id: 12,
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: 'src/assets/havaiano.svg',
  },
  {
    id: 13,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: 'src/assets/arabe.svg',
  },
  {
    id: 14,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: 'src/assets/irlandes.svg',
  },
];

const PAYMENT = [
  {
    id: 1,
    method: 'Cartão de Crédito',
  },
  {
    id: 2,
    method: 'Cartão de Débito',
  },
  {
    id: 3,
    method: 'Dinheiro',
  },
];
