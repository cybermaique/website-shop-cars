import '../App.css';
import Item from '../components/Item';

import Acessories from '../assets/Desktop-Accessories.jpg'
import ModelS from '../assets/1.jpg'
import Model3 from '../assets/2.jpg'
// import ModelS from '../assets/Desktop-ModelS.jpeg'
// import Model3 from '../assets/Desktop-Model3.jpeg'
import ModelX from '../assets/Desktop-ModelX.jpeg'
import ModelY from '../assets/Desktop-ModelY.jpeg'
import SolarPanels from '../assets/willz_home_card1_desktop.webp'
import SolarRoof from '../assets/Desktop-SolarRoof.jpeg'


export default function Main() {
  return (
      <div className="app__itemsContainer">
        
        <div style={{color: 'white'}}>
          <Item 
            title='Seu novo carro usado está aqui'
            desc='Inspecionado e certificado.'
            descLink=''
            backgroundImg={SolarPanels}
            leftBtnTxt='VER OFERTAS'
            leftBtnLink=''
            rightBtnTxt='PESQUISAR VEÍCULO'
            rightBtnLink=''
            twoButtons='true'
            first
          />
        </div>

        <Item 
          title='Polo Mpi 1.0'
          desc='R$64.200'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='COMPRAR VEÍCULO'
          leftBtnLink=''
          rightBtnTxt='VER MAIS INFORMAÇÕES'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item 
          title='Renegade Longitude 1.8'
          desc='R$ 88.400'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='COMPRAR VEÍCULO'
          leftBtnLink=''
          rightBtnTxt='VER MAIS INFORMAÇÕES'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item 
          title='Model X'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='PESQUISAR VEÍCULO'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item 
          title='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='PESQUISAR VEÍCULO'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item 
          title='Model Solar for New Roogs'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='PESQUISAR VEÍCULO'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item 
          title='Acessories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Acessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt='PESQUISAR VEÍCULO'
          rightBtnLink=''
        />
      </div>
  );
}



