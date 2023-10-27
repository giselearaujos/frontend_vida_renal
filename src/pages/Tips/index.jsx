import { ButtonAction } from '../../components/ButtonAction';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import * as Styled from './Tips.styles';
import { Card } from '../../components/Card';
import Tip01 from '../../assets/tip01.svg';
import Tip02 from '../../assets/tip02.svg';
import Tip03 from '../../assets/tip03.svg';
import Tip04 from '../../assets/tip04.svg';
import Tip05 from '../../assets/tip05.svg';
import Tip06 from '../../assets/tip06.svg';
import Tip07 from '../../assets/tip07.svg';
import Tip08 from '../../assets/tip08.svg';

export const Tips = () => {
  return (
    <Styled.Container>
      <Styled.WrapperButton>
      <ButtonAction
          icon={<AddCircleRoundedIcon/>}
          iconBackground="#1CA47E"
          iconColor="#FFF"
          text="Adicionar recomendação"
          textColor="#FFF"
          hoverBackground="#86a9e0"
          hoverColor="#FFF"
          onClick={() => {}}
        />
        <ButtonAction
          icon={<DownloadForOfflineIcon />}
          iconBackground="#001459"
          iconColor="#fff"
          text="Baixar em PDF"
          textColor="#fff"
          hoverBackground="#86a9e0"
          hoverColor="#FFF"
          onClick={() => {}}
        />
        <ButtonAction
          icon={<EditRoundedIcon/>}
          iconBackground="#edb610"
          iconColor="#FFF"
          text="Editar lista"
          textColor="#FFF"
          hoverBackground="#86a9e0"
          hoverColor="#FFF"
          onClick={() => {}}
        />
      </Styled.WrapperButton>
      <Styled.Content>
        <Styled.WrapperCard>
          <Card
            imageSrc={Tip07}
            text="Seu limite de ingestão de água diária é de 600 ml (ou 3 copos americanos)."
          />
          <Card
            imageSrc={Tip04}
            text="Não faça consumo de refrigerantes ou bebidas alcoólicas."
          />
          <Card
            imageSrc={Tip03}
            text="Faça exercícios físicos regularmente. Sua médica lhe recomendou 30 minutos de caminhada diariamente."
          />
          <Card
            imageSrc={Tip01}
            text="Evite comportamentos prejudiciais à saúde do seus rins. Gerencie seus níveis de estresse com atividades prazerosas, e siga todas as recomendações da equipe multidisciplinar."
          />
        </Styled.WrapperCard>
        <Styled.WrapperCard>
          <Card
            imageSrc={Tip08}
            text="Controle sua pressão arterial. Verifique sua pressão arterial 3x ao dia. Seus horários de medição são 10:00h, 16:00h e 21:00h."
          />
          <Card
            imageSrc={Tip05}
            text="Tome seu RENAGEL. Sua dose é de 1 comprimido em todas as refeições."
          />
          <Card
            imageSrc={Tip06}
            text="Evite oleagenosas (amendoim, paçoca, castanha de caju e nozes). Seus níveis de fósforo estão altos, baseado no seu último exame."
          />
          <Card
            imageSrc={Tip02}
            text="Mantenha hábitos saudáveis, sejam eles, alimentares, emocionais, sociais ou comportamentais. Lembre-se, tudo o que fazemos repetidamente, tornam-se hábitos."
          />
        </Styled.WrapperCard>
      </Styled.Content>
    </Styled.Container>
  );
}