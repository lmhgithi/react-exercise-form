import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
    state = {
        name: 'myName',
        gender: 'male',
        description: '',
        checkReadTerms: '',
    }

    handleChange = (field, event) => {
        this.setState({
            [field]: event.target.value,
        })
    }
    handleSubmit = () => {
        console.log(this.state)
        event.preventDefault()
    }
  render() {
    return (
        <div className='myProfileForm'>
          <h1>My Profile</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' name = 'name'
                   // value={this.state.name}
                   placeholder='Your name'
                   onChange={() => {this.handleChange('name', event)}}
            />
            <label htmlFor='gender'>Gender</label>
            <select name = 'gender'
                    onChange={() => {this.handleChange('gender', event)}}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="male">Other</option>
            </select>
            <label htmlFor='description'>Description</label>
            <textarea name = 'description' placeholder='Description about yourself'
                      onChange={() => {this.handleChange('description', event)}}
            />
            <input className='checkboxInput' type='checkbox' name = 'checkReadTerms'
                   onChange={() => {this.handleChange('checkReadTerms', event)}}
            />
            <label className='checkboxLabel' htmlFor='checkReadTerms'>I have read the terms of conduct</label>
            <input  className='submitButton' type='submit' name='Submit' value='Submit'
                   disabled={!this.state.name ||
                   !this.state.checkReadTerms ||
                   !this.state.description ||
                   !this.state.gender}
            />
          </form>
        </div>
    );
  }
}

export default MyProfile;


