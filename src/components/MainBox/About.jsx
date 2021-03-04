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
        <Tab label="" {...a11yProps(0)} />
        <Tab label="Sunflower" {...a11yProps(1)} />
        <Tab label="Ring Bella" {...a11yProps(2)} />
        <Tab label="Milena" {...a11yProps(3)} />
        <Tab label="Adelina" {...a11yProps(4)} />
        <Tab label="Margo" {...a11yProps(5)} />
        <Tab label="Marina" {...a11yProps(6)} />
      </Tabs>
      <TabPanel className="reviews" value={value} index={0}>
        <Typography>
          Bakyt Timurov, USA
        </Typography>
        <h4>
         really thebest ring</h4>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography>
          Tilek Makers. Bishkek, Kyrgyzstan
        </Typography>
        <h4>
          </h4>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography>
          John SMITH, Colorado, USA
        </Typography>
        <h4>
             Really Good!</h4>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography>
          John SMITH. Colorado, USA
        </Typography>
        <h4>
        The hardness of diamond contributes to its suitability as a gemstone.  <br/>
        Because it can only be scratched by other diamonds, 
        it maintains its polish extremely well. </h4>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Typography>
          Tilek Makers. Bishkek, Kyrgyzstan
        </Typography>
        <h4>
          Мне понравилось, такой красивый брилиант, прям завораживает. Обязательно купля девушке <br></br>
          Шикарно!</h4>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Typography>
          John SMITH, Colorado, USA
        </Typography>
        <h4>the diamond ring was so sunny and beautiful I could not stay away and bought it. 
          if anyone looking for great customer service and wants to make happy someone you are in a right place.</h4>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Typography>
          John SMITH, Colorado, USA
        </Typography>
        <h4>the diamond ring was so sunny and beautiful I could not stay away and bought it. 
          if anyone looking for great customer service and wants to make happy someone you are in a right place.<br></br>
         </h4>
      </TabPanel>
    </div>
  );
}