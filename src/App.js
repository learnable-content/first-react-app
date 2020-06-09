import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {

  state = {
    avatarId: 51,
    personName: 'James Smith'
  }

  changeAvatar = () => {
    this.setState({
      avatarId: 65,
      personName: 'Oliver Turn'
    })
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <Card name={this.state.personName} job="Pilot" avatarId={this.state.avatarId}/>
            <Card name="Jessica Jones" job="Nurse" avatarId={28}/>
            <Card name="Tom Hanks" job="Lawyer" avatarId={68}/>
          </div>
          <div class="row">
            <div class="col-md-3">
              <a onClick={this.changeAvatar} className="changeAvatar" href="#">Change Details</a>
            </div>
          </div>
        </div>

    );
  }
}

export default App;
