import { ButtonAction } from '../../../components/ButtonAction';
import * as Styled from './Notes.styles';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export const Notes = () => {
    return (
        <Styled.Container>
        <ButtonAction
            icon={<DownloadForOfflineIcon />}
            iconBackground="#5084d8"
            iconColor="#000"
            text="Baixar relatórios"
            textColor="#000"
            hoverBackground="#86a9e0"
            hoverColor="#FFF"
            onClick={() => {}}
        />
        <Styled.CardReport>
            <Styled.ContentReport>
                <p>
                Tenho sentindo muita ansia toda vez que começo a dialisar. Em casa também quando chego da diálise fico com muita fraqueza, não consigo fazer nada.
                </p>
                <Styled.HourReport>04/10 12:20</Styled.HourReport>
            </Styled.ContentReport>
        </Styled.CardReport>  
        <Styled.CardReport>      
            <Styled.ContentReport>
                <p>
                Quando estava quase chegando em casa minha fístula começou a vazar muito e tive que ir no postinho pra fazer um novo curativo.
                </p>        
                <Styled.HourReport>04/10 15:12</Styled.HourReport>
            </Styled.ContentReport>
        </Styled.CardReport>
        <Styled.CardReport>
            <Styled.ContentReport>
                <p>
                Estou com muitas coceiras no corpo, principalmente depois do jantar.
                </p>
                <Styled.HourReport>04/10  18:40</Styled.HourReport>
            </Styled.ContentReport>
        </Styled.CardReport>
        </Styled.Container>
    );
}