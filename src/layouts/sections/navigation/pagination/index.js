/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Copyright 2023 Marcus Wilson (https://www.marcustwilson.com)




Coded by www.marcustwilson.com




 =========================================================




* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import PaginationSimple from "layouts/sections/navigation/pagination/components/PaginationSimple";

// Stats page components code
import paginationSimpleCode from "layouts/sections/navigation/pagination/components/PaginationSimple/code";

function Pagination() {
  return (
    <BaseLayout
      title="Pagination"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/pagination" },
        { label: "Pagination" },
      ]}
    >
      <View title="Pagination simple" code={paginationSimpleCode}>
        <MKBox py={3}>
          <PaginationSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Pagination;
