import React, { Component } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";

import AdminEvents from "../Events/Events";
import AdminPanelInput from "../../components/AdminPanelInput/AdminPanelInput";
import Spinner from "../../components/Spinner/Spinner";

class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  deleteEvent(id, linktype) {
    let history = createBrowserHistory();
    let token = localStorage.getItem("authToken");
    axios
      .post(
        `/api/${linktype}/delete`,
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        alert("Event deleted");
        this.setState({ isLoading: false });
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("Login again please");
          history.go("admin/login");
        } else if (err.response.status === 500) {
          alert("Try again after some time");
          history.go("admin/login");
        } else if (err.response.status === 400) {
          alert("Missing Parameters");
        } else if (err.response.status === 404) {
          alert("Link Not Found");
        }
        this.setState({ isLoading: false });
      });
  }

  addEvent(data) {
    let token = localStorage.getItem("authToken");
    let finalData = new FormData();
    finalData.append("heading", data.heading);
    finalData.append("description", data.description);
    finalData.append("link", data.link);
    finalData.append("image", data.attachment);

    axios
      .post(`/api/${data.category}/add`, finalData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert("New Event Added");
        this.setState({ isLoading: false });
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 415) {
          alert(err.data.error);
        } else if (err.response.status === 400) {
          alert("Missing Parameters");
        }
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        <AdminPanelInput
          onSubmitForm={(values) => {
            this.setState({ isLoading: true });
            this.addEvent(values);
          }}
          logoutClicked={this.props.onLogout}
        />
        {this.state.isLoading ? <Spinner /> : null}
        <AdminEvents
          competitionRemove={(id) => {
            this.setState({ isLoading: true });
            this.deleteEvent(id, "competition");
          }}
          certificateRemove={(id) => {
            this.setState({ isLoading: true });
            this.deleteEvent(id, "certificate");
          }}
          webinarRemove={(id) => {
            this.setState({ isLoading: true });
            this.deleteEvent(id, "webinar");
          }}
          workshopRemove={(id) => {
            this.setState({ isLoading: true });
            this.deleteEvent(id, "workshop");
          }}
        />
      </React.Fragment>
    );
  }
}

export default AdminPanel;
