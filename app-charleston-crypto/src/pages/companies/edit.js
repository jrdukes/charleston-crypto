import React from 'react'
import { connect } from 'react-redux'
import { TextField, withStyles, Button } from '@material-ui/core'
// import SaveIcon from "@material-ui/icons/Save"
import MenuAppBar from '../../components/menuAppBar'
import {
  changeCompany,
  setCompany,
  deleteCompany
} from '../../action-creators/companies'
import {
  EDIT_COMPANY_FORM_UPDATED
  // EDIT_COMPANY_FORM_LOADED
} from '../../constants'
// import { find, propEq } from "ramda"

// import { Link } from 'react-router-dom'

const styles = theme => ({
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    width: '75%',
    color: 'primary'
  },
  margin: {
    margin: theme.spacing.unit
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

class CompanyView extends React.Component {
  componentDidMount() {
    const { match, load } = this.props

    load(match.params.id)
  }
  render() {
    const { firstName, lastName, description, name, _id } = this.props.company
    const { textField, center } = this.props.classes
    const { onChange, onSubmit, history, onDelete } = this.props

    return (
      <div
        className="body"
        style={{
          paddingTop: 0,
          backgroundRepeat: 'noRepeat',
          height: '100%',
          width: '100%'
        }}
      >
        <center>
          <form
            className={center}
            autoComplete="off"
            onSubmit={onSubmit(history)}
          >
            <React.Fragment>
              <MenuAppBar title="Company Profile" backArrow history={history} />
              <TextField
                style={{
                  marginTop: 120
                }}
                id="company_name"
                label="Company Name"
                value={name}
                onChange={e => onChange('name', e.target.value)}
                className={textField}
                required
              />
              <TextField
                style={{
                  marginTop: '80'
                }}
                id="description"
                label="Description"
                value={description}
                onChange={e => onChange('description', e.target.value)}
                className={textField}
                required
              />

              <TextField
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={e => onChange('firstName', e.target.value)}
                className={textField}
                required
              />
              <TextField
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={e => onChange('lastName', e.target.value)}
                className={textField}
                required
              />
              <Button
                color="primary"
                type="submit"
                variant="raised"
                aria-label="submit"
                // className="fab-button"
                style={{ marginTop: 45 }}
              >
                SUBMIT
              </Button>
              <Button
                color="primary"
                type="button"
                variant="raised"
                aria-label="delete"
                onClick={e => onDelete(_id, history)}
                // className="fab-button"
                style={{ marginTop: 45 }}
              >
                DELETE
              </Button>
            </React.Fragment>
          </form>
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    company: state.editCompany
  }
}
const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch({
        type: EDIT_COMPANY_FORM_UPDATED,
        payload: { [field]: value }
      })
    },
    onSubmit: history => e => {
      e.preventDefault()
      dispatch(changeCompany(history))
    },
    load: id => dispatch(setCompany(id)),
    onDelete: (id, history) => {
      dispatch(deleteCompany(id, history))
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)
export default connector(withStyles(styles)(CompanyView))
