import { PublicityContainer, PublicityContent, PublicityItens, PublicityTitle } from './styles';
import publicityImg from '../../../../assets/publicity-img.png';
import { ShoppingCart } from 'phosphor-react';

export function Publicity() {
  return (
    <PublicityContainer>
      <PublicityContent className="container">
        <div>
          <section>
            <PublicityTitle>
              Encontre o café perfeito para qualquer hora do dia
            </PublicityTitle>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </section>

          <PublicityItens>
            <ShoppingCart 
            
            />
            
          </PublicityItens>

        </div>

        <img src={publicityImg} />
      </PublicityContent>
    </PublicityContainer>
  );
}
