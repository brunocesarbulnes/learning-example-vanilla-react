import styled from "styled-components";

export const DefaultFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: #f0f0f0;
  flex-wrap: wrap;

  & > .dds__container {
    width: 100%;

    ul {
      display: flex;
      list-style: none;
      padding: 0px;
      margin: 0px;
    }

    li > a {
      color: #636363;
      text-decoration: none;
      display: flex;

      &:hover {
        color: #636363;
        text-decoration: underline;
      }
    }

    .footer-navigation li > a {
      font-weight: 700;
    }
  }
` 