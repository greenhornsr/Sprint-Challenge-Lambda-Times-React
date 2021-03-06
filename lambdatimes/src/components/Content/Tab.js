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
      // const myClassName = props.tab===props.selectedTab ?<div className='tab active-tab'/>: <div className='tab'/>
      // props.tab===props.selectedTab ?console.log(props.tab + true + props.selectedTab): console.log(props.tab + false + props.selectedTab)
      const myClassName = props.tab===props.selectedTab ? 'tab active-tab': 'tab'
      const selectTabHandler = () => {props.selectTabHandler(props.tab)}
      // console.log(props.tab.className === 'active-tab')

  return (
    <div
      className={myClassName}
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
  tab: PropTypes.string.isRequired,
  // selectedTab: PropTypes.string,
  // selectTabHandler: PropTypes.func,
}


export default Tab;
