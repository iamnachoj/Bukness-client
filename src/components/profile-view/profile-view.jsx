//Modules
import React from 'react';
import axios from 'axios';

//React-bootstrap
import { Row, Col, Button, Card, Form, CardDeck} from 'react-bootstrap';

//CSS
import './profile-view.scss';

//ProfileView Component
export class ProfileView extends React.Component{
  
  constructor(){
    super();
    this.state = {
      Name: null,
      Password: null,
      Email: null, 
      Birthday: null,
      FavouriteBooks: [],
      validated: null    
    };
  }

  //Methods

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('Name');
    props.setState({
      user: null
    });
  }
  //GET method 
  getUser(token) {
    let url = `${process.env.URL}/users/` + localStorage.getItem('Name');
      console.log(url)
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
            this.setState({
                Name: response.data.Name,
                Password: response.data.Password,
                Email: response.data.Email,
                Birthday: response.data.Birthday,
                FavouriteBooks: response.data.FavouriteBooks
            });
        });   
  }
  
  // PUT method
  handleUpdate(e, newName, newPassword, newEmail, newBirthdate) {
      this.setState({
        validated: null,
      });

      const form = e.currentTarget;
      if (form.checkValidity() === true) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          validated: true,
        });
        return;
      }
      e.preventDefault();

      const token = localStorage.getItem('token');
      const username = localStorage.getItem('Name');

      axios.put(`${process.env.URL}/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          Name: newName ? newName : this.state.Name,
          Password: newPassword ? newPassword : this.state.Password,
          Email: newEmail ? newEmail : this.state.Email,
          Birthdate: newBirthdate ? newBirthdate : this.state.Birthdate,
        },
      })
        .then((response) => {
          alert('Saved Changes');
          this.setState({
            Name: response.data.Name,
            Password: response.data.Password,
            Email: response.data.Email,
            Birthdate: response.data.Birthdate,
          });
          localStorage.setItem('Name', this.state.Name);
          window.open('/my-profile', '_self');
        })
        .catch(function (error) {
         console.log(error);
      });
  }
  

  //set different inputs

  setName(input) {
    this.Name = input;
  }

  setPassword(input) {
    this.Password = input;
  }

  setEmail(input) {
    this.Email = input;
  }

  setBirthdate(input) {
    this.Birthdate = input;
  }
  
  // DELETE Favourite Books 
  removeFavouriteBook(e, book) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('Name');

    axios
      .delete(`${process.env.URL}/users/${username}/books/${book._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert('Book was removed');
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //DELETE method for users
  handleDeleteUser(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    let url = `${process.env.URL}/users/` + localStorage.getItem('Name');

    axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        alert('Your account has been deleted.');
        window.open(`/`, '_self');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render(){
    const { FavouriteBooks, validated } = this.state;
    const { user, books } = this.props;
    return(
      <>  
      {/* Profile View */}
     <Card className="profile-card">
            <Row className="profile-view">
              <Col></Col>
              <Col>
               <h2 className="profile-view-title">My Profile</h2>
               <div className="user-name">
                <span className="label"><b>Name: </b></span>
                <span className="value">{user}</span>
              </div>
              <div className="user-email">
               <span className="label"><b>Email: </b> </span>
               <span className="value">{this.state.Email}</span>--
              </div>
              <div className="user-date">
               <span className="label"><b>Birthdate: </b> </span>
               <span className="value">{this.state.Birthday}</span>
             </div>
              <Button className="back-button" href="/">Back</Button>
              <a href="/"><Button variant="secondary"className="logout-button" onClick={()=>{this.onLoggedOut()}}>Log out</Button></a>
             </Col>
             <Col></Col>
            </Row>
      </Card>

      {/* Favourited books */}
      <Card className="favbook-card">
          <Card.Title className="card-title"><h3>Favourite Books</h3></Card.Title>
                {FavouriteBooks.length === 0 && <div className="text-center">Empty.</div>}
                 <div className="favourites-books ">
                      {FavouriteBooks.length > 0 &&
                         books.map((book) => {
                          if (book._id === FavouriteBooks.find((favBook) => favBook === book._id)) {
                             return (
                               <CardDeck key={book._id} className="book-card-deck">
                                 <Card className="favourites-item card-content" style={{ width: '16rem' }} key={book._id}>
                                   <Card.Body>
                                    <h5 className="book-card-title">{book.Title}</h5>
                                    <Button size='sm' className='profile-button remove-favourite' variant='danger' value={book._id} onClick={(e) => this.removeFavouriteBook(e, book)}>Remove</Button>
                                   </Card.Body>
                                  </Card>
                               </CardDeck>
                               );
                           }
                        })
                      }
                 </div>
       </Card>
       <Card> 
          <h2 className="card-title">Update Profile</h2>
          <Card.Body>
            <Form className="update-form" noValidate validated={validated} onSubmit={(e) => this.handleUpdate(e, this.Name, this.Password, this.Email, this.Birthdate)}>

              <Form.Group controlId="formName">
                <Form.Label className="form-label">Name</Form.Label>
                <Form.Control type="text" placeholder="Change Name" onChange={(e) => this.setName(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label">
                  Password<span className="required">*</span>
                </Form.Label>
                <Form.Control type="password" placeholder="New Password" onChange={(e) => this.setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control type="email" placeholder={this.state.Email} readOnly/>
              </Form.Group>

              <Form.Group controlId="formBasicBirthday">
                <Form.Label className="form-label">Birthdate</Form.Label>
                <Form.Control type="date" placeholder="Change Birthdate" onChange={(e) => this.setBirthdate(e.target.value)} />
              </Form.Group>

              <Button variant='primary' type="submit" onClick={(e) => this.handleUpdate(e)}>
                Update
              </Button>
            </Form>
          </Card.Body>
       </Card>
       <Card className="card-title">
         <Card.Title><h3>Delete your Account</h3></Card.Title>
         <Card.Body>
                <Button variant='danger' onClick={(e) => this.handleDeleteUser(e)}>
                  Delete Account
                </Button>
        </Card.Body>
       </Card>
     </>
    )
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    this.getUser(accessToken);
  }
}
