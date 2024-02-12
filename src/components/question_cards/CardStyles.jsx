import styled from "styled-components";

export const StyledView = styled.div`
  background-color: #fedaf6;
  padding: 10px;
  font-size: 20px;
  color: #ac5293;
  margin: 25px;
  display: flex;
  flex-direction: column;
  overflow: clip;
  text-align: center;
  border-radius: 5px;
  width: 400px;
`;

export const StyledButton = styled.button`
background-color: #dffffa;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #bffcff;
border-radius: 3px;
width: 10em;
margin-left: auto;
margin-right: auto;
color: #ac5293;
font-family: "Smooch Sans", sans-serif;
font-weight: 700;

&:hover {
  background-color: #e5c6ff;
}
`;

export const StyledTextArea = styled.textarea`
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: centre;
  font-size: 20px;
  max-width: 90%;
  color: AC5293;
`;

export const StyledSettingsButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: #fedaf6;
  font-family: "Smooch Sans", sans-serif;
  border-radius: 5px;

  &:hover {
    background-color: #e5c6ff;
  }
`;

export const StyledSettingsContainer = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: row;
`;