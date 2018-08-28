import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import BarChartIcon from '@material-ui/icons/BarChart'
import WorkIcon from '@material-ui/icons/Work'

const styles = {
  root: {
    width: '100%'
  }
}

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, history } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={e => history.push('/companies')}
          label="Companies"
          icon={<WorkIcon />}
        />
        <BottomNavigationAction
          onClick={e => history.push('/market/btcusd')}
          label="TradeView"
          icon={<BarChartIcon />}
        />
        {/* <BottomNavigationAction label="Get Involved" icon={<BarChartIcon />} /> */}
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(SimpleBottomNavigation)