/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Copyright 2023 Marcus Wilson (https://www.marcustwilson.com)




Coded by www.marcustwilson.com




 =========================================================




* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Why choose
                    <br />
                    Tulip City Cleaning?
                  </>
                }
                description="Find out what makes Tulip City Cleaning stand out from others"
              />
              <RotatingCardBack
                image={bgBack}
                title="Contact Us"
                description="Reach out to us with your preffered method!"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Click to contact",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Qualified & Trustworthy Cleaners"
                  description="We carefully screen, select, and train our professionals. As employees, every team member is vetted with ample experience servicing homes in West Michigan"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Streamlined Online Booking"
                  description="Our online quoting and booking system is fast & user-friendly. Feel free to get a quote, book a cleaning, and quickly put any special request in your account."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="100% Satisfaction Guarantee"
                  description="Our primary goal is your happiness. If our technicians miss a spot, do let us know. Our team will re-clean the area at no extra charge anytime during the following 24-hour window."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Local Family Owned Cleaning Company"
                  description="We’re a local family-owned and operated company. Our varied residential and commercial cleaning services are available in West Michigan"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
