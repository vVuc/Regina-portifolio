import styled from "styled-components";

export const InfoData = styled.div`
&{
    display: flex;
    gap: 10px;
}
img{
    width:1.5rem;
    height:1.5rem ;
}
`

export const Info = styled.div`
&{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: 2rem;
}

@media (width <= 900px) {
    margin-left: 0rem;
    margin-top: 3rem;
}

.Bar{
    width: 8rem;
    height: 1px;
    background-color: #000;
}

h2 {
    margin-left: 5px;
    color: #241C1A;
    font-family: Inter;
    font-size: .875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.4px;
}

h3{
    color: #000;
    font-family: Inter;
    font-size: .875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 121.071%; /* 16.95px */
    letter-spacing: 1.4px;
}

p{
    color: rgba(0, 0, 0, 0.60);
    font-family: Inter;
    font-size: .875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 121.071%; /* 16.95px */
    letter-spacing: 1.4px;
}`

export const PerfilRegina = styled.div`
    border-radius: 79px;
    border: 1px solid #B8860B;
    background: url(ReginaPerfil.jpg) lightgray -25.363px -38.799px / 139.513% 154.167% no-repeat;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    
    width: 17.1875rem;
    height: 19.8125rem;
`

export const Contato = styled.div`
&{
    display: flex;
    align-items: center;
    margin-left: 2rem;
}

@media (width <= 900px) {
    margin-left: 0rem;
    flex-direction: column ;
}
`