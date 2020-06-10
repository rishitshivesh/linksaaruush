import React, { Component } from "react";
import axios from "axios";

import AdminEvents from "../Events/Events";
import AdminPanelInput from "../../components/AdminPanelInput/AdminPanelInput";

class AdminPanel extends Component {
  deleteEvent(id, linktype) {
    axios
      .post(`/api/${linktype}/delete`, {
        id: id,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  addEvent(data) {
    let finalData = new FormData();
    finalData.append("heading", data.heading);
    finalData.append("description", data.description);
    finalData.append("link", data.link);
    finalData.append("image", data.attachment);

    axios
      .post(`/api/${data.category}/add`, finalData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <AdminPanelInput onSubmitForm={(values) => this.addEvent(values)} />
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
