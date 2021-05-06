import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const ContainerPaginaLogin = styled.div`
    // Tamanho
    width: 100vw;
    height: 100vh;

    // Tipo tela
    display: flex;
    align-items: center;
    justify-content: center;

    // Imagem
    background: center / contain no-repeat url('https://ktgbrasil.com.br/wp-content/uploads/2015/07/background.jpg');
`

export const ContainerConteudoLogin = styled.div`
    // Tamanho
    width: 80%;
    height: 65%;

    // 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

`

export const ImagemLogin = styled.div`
    width: 85%;
    height: 100%;
    background: center / contain no-repeat url('https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_960_720.png');
`

export const FormLogin = styled(Form)`
    
`