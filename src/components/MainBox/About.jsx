import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './About.css'
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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    height: 324,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{display:'flex',flexWrap:'wrap', justifyContent: 'center'}} className={classes.root} className='main-div'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Vanilla Villa" {...a11yProps(0)} />
        <Tab label="Sheraton Villa" {...a11yProps(1)} />
        <Tab label="Ottoman Villa" {...a11yProps(2)} />
        <Tab label="Hamilton Villa" {...a11yProps(3)} />
        <Tab label="Chique La Villa" {...a11yProps(4)} />
        <Tab label="Jannat Villa" {...a11yProps(5)} />
        <Tab label="Vanilla Villa" {...a11yProps(6)} />
      </Tabs>
      <TabPanel className="reviews" value={value} index={0}>
        <Typography>
          Bakyt Timurov, USA
        </Typography>
        <h4>
          I really liked the Villa, very spacious, beautiful, large pool, 
          wonderful view from the window.<br></br>Nice interior with excellent furnishings. 
          I will come again! Really Good!</h4>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography>
          Tilek Makers. Bishkek, Kyrgyzstan
        </Typography>
        <h4>
          Мне понравилось, такая большая вилла, прям завораживает. Обязательно приду с друзьями <br></br>
          Классный был отдых!</h4>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography>
          John SMITH, Colorado, USA
        </Typography>
        <h4>
          I really liked the Villa, very spacious, beautiful, large pool, 
          wonderful view from the window.<br></br>Nice interior with excellent furnishings. 
          I will come again! Really Good!</h4>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography>
          John SMITH. Colorado, USA
        </Typography>
        <h4>
          I really liked the Villa, very spacious, beautiful, large pool, 
          wonderful view from the window.<br></br>Nice interior with excellent furnishings. 
          I will come again! Really Good!</h4>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Typography>
          Tilek Makers. Bishkek, Kyrgyzstan
        </Typography>
        <h4>
          Мне понравилось, такая большая вилла, прям завораживает. Обязательно приду с друзьями <br></br>
          Классный был отдых!</h4>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Typography>
          John SMITH, Colorado, USA
        </Typography>
        <h4>I really liked the Villa, very spacious, beautiful, large pool, 
          wonderful view from the window.<br></br>Nice interior with excellent furnishings.
          I will come again! Really Good!</h4>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Typography>
          John SMITH, Colorado, USA
        </Typography>
        <h4>I really liked the Villa, very spacious, beautiful, large pool, 
          wonderful view from the window.<br></br>Nice interior with excellent furnishings. 
          I will come again! Really Good!</h4>
      </TabPanel>
    </div>
  );
}