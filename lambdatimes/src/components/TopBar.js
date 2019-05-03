import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  @media (min-width: 1280px) {
    .top-bar {
      width: 1280px;
    }
  }
`
const Topbarcontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    .container {
      width: 1280px;
    }
  }
`

const Leftcontainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`

const Centercontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
    :last-child {
      margin-right: 0;
    }
    :hover {
      text-decoration: underline;
    }
  }
`
const Rightcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
`


const TopBar = () => {
  return (
    <Topbar>
      <Topbarcontainer>
        <Leftcontainer>
          <span>TOPICS</span><span>SEARCH</span>
        </Leftcontainer>
        <Centercontainer>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </Centercontainer>
        <Rightcontainer>
          <span>LOG IN</span>
        </Rightcontainer>
      </Topbarcontainer>
    </Topbar>
  )
}

export default TopBar;