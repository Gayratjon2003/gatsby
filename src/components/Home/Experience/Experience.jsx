import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import "./Experience.scss";
import { experienceData } from "./data";
import { Fade } from "react-reveal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="background">
      <div className="experience container">
        <Fade bottom duration={1500}>
          <h2 className="experience_title">My Experience</h2>
        </Fade>

        <Box className="experience_tab">
          <Fade left duration={2000} delay={100}>
            <Tabs
              className="experience_tab-header"
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="Vertical tabs example"
            >
              {experienceData.map((data, ind) => {
                return (
                  <Tab
                    label={data.date}
                    className="experience_tab-title"
                    {...a11yProps(ind)}
                  />
                );
              })}
            </Tabs>
          </Fade>
          {experienceData.map((data, ind) => {
            return (
              <TabPanel
                value={value}
                className="experience_tab-content"
                index={ind}
              >
                <Fade right duration={2000}>
                  <h5 className="company company-my">
                    <a href={data.url} target="_blank">
                      {data.company}
                    </a>{" "}
                    <span className="role"> - {data.role}</span>
                  </h5>
                  <p className="description description-my">{data.description}</p>
                  <ul className="works works-my">
                    {data.works.map((work) => (
                      <li>
                        <i class="bx bx-chevrons-right"></i>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </Fade>
              </TabPanel>
            );
          })}
        </Box>
      </div>
    </div>
  );
}

export default Experience;
