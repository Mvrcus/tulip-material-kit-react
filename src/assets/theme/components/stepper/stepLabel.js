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
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import rgba from "assets/theme/functions/rgba";

const { size, fontWeightRegular } = typography;
const { white } = colors;

export default {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};
