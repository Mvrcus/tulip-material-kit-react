/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Copyright 2023 Marcus Wilson (https://www.marcustwilson.com)




Coded by www.marcustwilson.com




 =========================================================




* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { white } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};
