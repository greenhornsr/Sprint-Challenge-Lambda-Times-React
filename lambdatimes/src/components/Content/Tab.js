import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  // console.log(props)
  // console.log(props.tab)
  // console.log(props.tab)
  // console.log(props.selectedTab)
  // console.log(props.selectTabHandler)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      props.tab===props.selectedTab ?<Tab className='tab active-tab'/>: <Tab className='tab'/>
      // props.tab===props.selectedTab ?console.log(props.tab + true + props.selectedTab): console.log(props.tab + false + props.selectedTab)
      const selectTabHandler = event => {event.preventDefault(), props.selectTabHandler(props.tab)}
      console.log(props.tab.className === 'active-tab')

  return (
    <div
      className={''}
      onClick={selectTabHandler}
      // onClick={() => {
      //   /* Replace this dummy click handler function with your selectTabHandler function from props 
      //    you'll need to pass the `tab` in as an argument to this handler. */
      // }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  // tab: PropTypes.string.isRequired,
  // selectedTab: PropTypes.string,
  // selectTabHandler: PropTypes.func,
}


export default Tab;
