import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      pickUp: "",
      delivery: "",
      items: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    fetch(
      `${window.location.protocol}//${
        window.location.hostname
      }:7000/send-email`,
      {
        method: "POST",
        body: JSON.stringify(this.state),
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => {
        this.setState({
          submitted: true,
          name: "",
          phone: "",
          email: "",
          pickUp: "",
          delivery: "",
          items: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="contact-form">
        <fieldset>
          <legend>Request a free quote:</legend>
          <label>name*</label>
          <br />
          <input
            name="name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <label>Phone Number*</label>
          <br />
          <input
            name="phone"
            value={this.state.phone}
            onChange={e => this.change(e)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            name="email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <label>Pick up Postcode</label>
          <br />
          <input
            name="pickUp"
            value={this.state.pickUp}
            onChange={e => this.change(e)}
          />
          <br />
          <label>delivery Postcode</label>
          <br />
          <input
            name="delivery"
            value={this.state.delivery}
            onChange={e => this.change(e)}
          />
          <br />
          <label>Items</label>
          <br />
          <textarea
            cols="27"
            rows="4"
            name="items"
            type="textarea"
            value={this.state.items}
            onChange={e => this.change(e)}
          />
          <br />
          {this.state.submitted ? (
            <p style={{ color: "red" }}>
              THANK YOU ! We will get back to you within an hour
            </p>
          ) : null}

          <button
            type="submit"
            className="btn btn-block btn-l"
            onClick={e => this.onSubmit(e)}
          >
            Send
          </button>
        </fieldset>
      </form>
    );
  }
}
