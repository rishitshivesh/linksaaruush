import React, { Component } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";

import AdminEvents from "../Events/Events";
import AdminPanelInput from "../../components/AdminPanelInput/AdminPanelInput";

class AdminPanel extends Component {
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
      })
      .catch((err) => {
        if (err.response.status === 415) {
          alert(err.data.error);
        } else if (err.response.status === 400) {
          alert("Missing Parameters");
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <AdminPanelInput
          onSubmitForm={(values) => this.addEvent(values)}
          logoutClicked={this.props.onLogout}
        />
        <AdminEvents
          competitionRemove={(id) => this.deleteEvent(id, "competition")}
          certificateRemove={(id) => this.deleteEvent(id, "certificate")}
          webinarRemove={(id) => this.deleteEvent(id, "webinar")}
          workshopRemove={(id) => this.deleteEvent(id, "workshop")}
        />
      </React.Fragment>
    );
  }
}

export default AdminPanel;
