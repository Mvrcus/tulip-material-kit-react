/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Copyright 2023 Marcus Wilson (https://www.marcustwilson.com)




Coded by www.marcustwilson.com




 =========================================================




* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKInput
import MKInputRoot from "components/MKInput/MKInputRoot";

const MKInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MKInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of MKInput
MKInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MKInput
MKInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MKInput;
