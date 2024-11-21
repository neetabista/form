import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none !important;
  list-style: none;
  outline: none;
  border: none;
 font-family: "Rubik", sans-serif;
}

  :root {
        --primary__color:  "#05C7F2",

        --black__color: "#000000",
        --white__color: "#ffffff",


      
  }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  color: inherit;
  margin: 0;
}
a:hover {
  text-decoration: none !important;
}


 .section{
  padding: 3rem 0;
 }


.btn-close:focus {
  box-shadow: unset;
}


.form-control:focus,.form-select:focus {
  box-shadow: none;
  border-color:${(props) => props.theme.primary};
}
.form-select:focus{
  box-shadow: none;

}

.form__group{
.form-label{
  text-transform: capitalize;
 
}
 input, select{
    font-size: 15px;
  }
}


`;
