import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'

import ExpenseForm from '../forms/ExpenseForm'
import EventForm from '../forms/EventForm'
import LeftHouseFeed from '../components/LeftHouseFeed'
import RightHouseFeed from '../components/RightHouseFeed'

class HouseholdPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Segment>
          <label>Create New</label>
          <br/><br/>
          <EventForm />
          <ExpenseForm />
        </Segment>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={7}>
              <LeftHouseFeed/>
            </Grid.Column>
            <Grid.Column width={7}>
              <RightHouseFeed/>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default HouseholdPage
