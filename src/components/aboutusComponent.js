import React, { Component } from "react";
import "../components/aboutus.css";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeOpen: true,
      isContactUsOpen: false,
    };
    this.homeOpenToggle = this.homeOpenToggle.bind(this);
    this.contactUsOpenToggle = this.contactUsOpenToggle.bind(this);
  }

  homeOpenToggle() {
    if (this.state.isHomeOpen) {
      this.setState({
        isHomeOpen: true,
        isContactUsOpen: false,
      });
    } else {
      this.setState({
        isHomeOpen: true,
        isContactUsOpen: false,
      });
    }
  }

  contactUsOpenToggle() {
    if (this.state.isContactUsOpen) {
      this.setState({
        isHomeOpen: false,
        isContactUsOpen: true,
      });
    } else {
      this.setState({
        isHomeOpen: false,
        isContactUsOpen: true,
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="fluid-row">
          <div style={{ marginLeft: "100px" }}>
            <h5 style={{ color: "red", fontSize: 28 }} dark>
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  style={{ color: "white", fontSize: 28 }}
                  onClick={this.homeOpenToggle}
                  className="aTagHover"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  style={{ color: "white", fontSize: 28 }}
                  onClick={this.contactUsOpenToggle}
                  className="aTagHover"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="about-us-section">
            <div className="check">
              {this.state.isHomeOpen ? (
                <div className="scroller">
                  <table
                    style={{ marginLeft: "100px" }}
                    responsive
                    className="table-fixed"
                  >
                    <h5 style={{ color: "#fff" }} dark>
                      About Us
                    </h5>
                    <address style={{ color: "#fff", fontSize: 32 }} dark>
                      Student Activity Centre <br />
                      IIT Delhi Campus, Hauz Khas
                      <br />
                      New Delhi, 110016
                      <br />
                    </address>
                  </table>
                </div>
              ) : null}
            </div>
          </div>
          <div className="about-us-section">
            <div className="check-2">
              {this.state.isContactUsOpen ? (
                <div className="scroller">
                  <table
                    style={{ marginLeft: "100px" }}
                    responsive
                    className="table-fixed"
                  >
                    <h5 style={{ color: "#fff" }} dark>
                      Contact Us
                    </h5>
                    <address style={{ color: "#fff", fontSize: 32 }} dark>
                      Student Activity Centre <br />
                      IIT Delhi Campus, Hauz Khas
                      <br />
                      New Delhi, 110016
                      <br />
                    </address>
                  </table>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
