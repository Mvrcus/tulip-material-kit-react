/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Copyright 2023 Marcus Wilson (https://www.marcustwilson.com)




Coded by www.marcustwilson.com




 =========================================================




* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Dropdowns page components
import DropdownAndDropup from "layouts/sections/elements/dropdowns/components/DropdownAndDropup";

// Dropdowns page components code
import dropdownAndDropupCode from "layouts/sections/elements/dropdowns/components/DropdownAndDropup/code";

function Dropdowns() {
  return (
    <BaseLayout
      title="Dropdowns"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/dropdowns" },
        { label: "Dropdowns" },
      ]}
    >
      <View title="Dropdown and Dropup" code={dropdownAndDropupCode}>
        <DropdownAndDropup />
      </View>
    </BaseLayout>
  );
}

export default Dropdowns;
