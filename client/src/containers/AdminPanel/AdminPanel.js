import React, { Component } from "react";
import axios from "axios";

import AdminEvents from "../Events/Events";
import AdminPanelInput from "../../components/AdminPanelInput/AdminPanelInput";

class AdminPanel extends Component {
  deleteEvent(id, linktype) {
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
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
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
