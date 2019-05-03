import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  // console.log(props.tabs)
  // console.log(props.selectedTab)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/};
            {props.tabs.map(tab => (
              // console.log(tab),
            <Tab tab={tab} selectTabHandler={props.changeSelected} selectedTab={props.selected} key={tab} />
              ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
// PropTypes
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  changeSelected: PropTypes.func,
}

export default Tabs;
