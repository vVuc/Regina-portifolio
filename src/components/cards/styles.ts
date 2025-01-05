import styled from "styled-components";

export const CardStyles = styled.section`
&{
    margin: 5rem 0 4.25rem;
    display: flex;
    gap: 3.5rem;

    color: #4A4A4A;

    font-family: "Cormorant Garamond";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
ul{
    padding-left:2rem;
}
div{
    padding: 1rem;
    width: 15.875rem;
    height: 14.375rem;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    border: 1px solid #E5BD6E;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;

    h1{
        color: #241C1A;
        font-size: 1.375rem;
    }

    p{
        text-align: center;
        font-size: 1rem;
        opacity: 0.7;

    }
}
`