import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../../src/App.css'
import ScrollableTabsButtonAuto from '../components/scrollableTabsButtonAuto'
import TitlebarGridList from '../components/titlebarGridList'
import SimpleBottomNavigation from '../components/SimpleBottomNavigation'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
// import MenuAppBar from '../components/menuAppBar'
// import withDrawer from '../components/withDrawer'
// import SearchIcon from '@material-ui/icons/Search'

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: 'darkSlateGrey'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const Home = props => {
  const { history } = props
  return (
    <React.Fragment>
      <div
        className="body"
        style={{
          paddingTop: 0
        }}
      >
        {/* <MenuAppBar title="" history={history} searchImage /> */}
        <ScrollableTabsButtonAuto history={history} />

        <center>
          <img
            alt="home icon"
            className="App-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
          />

          <div style={{ paddingTop: 0, paddingBottom: 80 }}>
            <Typography variant="display2">Charleston Crypto</Typography>
            <br />
            <Typography variant="title">
              Your Guide to Charleston's CryptoCurrency
            </Typography>
            <Typography variant="title">& Blockchain Community</Typography>
          </div>
          <br />
          <Link to="/dashboardpage"> Dashboard </Link>
          <br />
          <Link to="/market"> Market </Link>
          <br />
          <br />
          <Link to="/companies"> Companies </Link>
          <br />

          <iframe
            width="225"
            height="570"
            src="http://meetu.ps/3jdgTF"
            frameBorder="0"
            title="BTC MEETUP"
          />

          <div style={{ paddingTop: 2 }} />

          <div
            style={{
              borderTop: '1px solid',
              paddingTop: '12px',
              borderColor: '#9e9e9e'
            }}
          />

          <TitlebarGridList />
        </center>
      </div>
      <br />
      <SimpleBottomNavigation />
    </React.Fragment>
  )
}
const mapStateToProps = () => ({})

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Home))
