import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Navbar } from 'react-bootstrap'
import '../style.css'



class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) {}

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() {}

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) {}

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() {}

  render() {
    return (
      <div>
        <Grid className="grid">
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              <Image src ="/assets/images/dog-placeholder.jpg" thumbnail />
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
<PageHeader className="title">Daniel Lee
  <br />
  <small>About Me</small>
</PageHeader>
              {/* ADD ABOUT ME DESCRIPTION HERE */}

            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}
<PageHeader>
My interest
</PageHeader>

  <Panel className="Paragraph">
    <Panel.Body>
      <ul>
        <li>Watching T.v</li>
        <li>Going outside</li>
        <li>I like food</li>
      </ul>
    </Panel.Body>
  </Panel>
              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)