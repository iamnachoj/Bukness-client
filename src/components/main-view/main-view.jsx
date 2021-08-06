//Modules
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//React Redux
import { connect } from 'react-redux';
import { setBooks } from '../../actions/actions';
import { setUser } from '../../actions/actions';

//React Components
import { NavbarView } from '../navbar-view/navbar-view';
import { LoginView } from '../login-view/login-view';
import { BookView } from '../book-view/book-view';
import { RegistrationView } from "../registration-view/registration-view";
import { AuthorView } from '../author-view/author-view';
import { ProfileView } from '../profile-view/profile-view';
import { GenreView } from '../genre-view/genre-view';
import BooksList from '../books-list/books-list';
import {Footer} from '../footer/footer';

//React Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

//Main-view CSS
import './main-view.scss';

//Class MainView component 
class MainView extends React.Component {


  //Methods
  
  getBooks(token){
    axios
      .get('https://bukness-app.herokuapp.com/API/Books', {headers: { Authorization: `Bearer ${token}`}})
      .then(response => {
        this.props.setBooks(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    this.props.setUser(authData.user.Name);
    localStorage.setItem('token', authData.token);
    localStorage.setItem('Name', authData.user.Name);
    this.getBooks(authData.token);
  }


  //Render method
  render() {
    let { books, user } = this.props
    // 1. we are returning the NAVBAR together on each Router. So there is a container fluid that spans both the navbar and the component desired, and another container
    //encapsulating just  the component wanted, to leave the fluidity just to the navbar, and keep room for the rest.

    return (
      <Router> 
      <Row className="main-view justify-content-md-center">
           { /* All Routes */}
        <Route exact path="/" render={() => {            
            if (!user) return <Container><Col><LoginView onLoggedIn={(user) => this.onLoggedIn(user)} /></Col></Container>;
            return ( //2. here you can see it, container fluid to cover navbar and container no fluid, and container no fluid to cover the booklist
            <Container fluid>
            <NavbarView user={user}></NavbarView>
            <Container><Row><BooksList key={books._id} books={books}/></Row></Container>
            </Container>
            )
          }
        } />


          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <RegistrationView onBackClick={() => history.goBack()}/> 
          }} />


          <Route path="/books/:bookId" render={({ match, history }) => {
            if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
            return (
            <Container fluid>
            <NavbarView user={user}></NavbarView>
            <Container><BookView book={books.find(book => book._id === match.params.bookId)} onBackClick={() => history.goBack()} /></Container>
            </Container>
            )
          }} />


          <Route path="/author/:name" render={({match, history}) => {
            if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
            return (
            <Container fluid>
            <NavbarView user={user}></NavbarView>
            <Container><Col md={8}><AuthorView book={books.find(book => book.Author.Name === match.params.name)} onBackClick={() => history.goBack()}/> </Col></Container>
            </Container>
            )
          }} />

          <Route path="/genre/:name" render={({match, history}) => {
            if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
            return (
            <Container fluid>
            <NavbarView user={user}></NavbarView>
            <Container><Col md={8}> <GenreView book={books.find(book => book.Genre.Name === match.params.name)} onBackClick={() => history.goBack()}/></Col></Container>
            </Container>
            )
          }}/>

          <Route path="/my-profile" render={({ history}) => {
            if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
            return (
            <Container fluid>
            <NavbarView user={user}></NavbarView>
            <Container><Col md={12}><ProfileView user={user} books={books} onBackClick={() => history.goBack()}/></Col></Container>
            </Container>
            )
          }}/>

        </Row>
      </Router>
    );
  }

  componentDidMount(){ 
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
        this.props.setUser(localStorage.getItem("Name"))
      this.getBooks(accessToken);
    }
  }
  
}

let mapStateToProps = state => {
  return { books: state.books,
  user: state.user }
}

export default connect(mapStateToProps, { setBooks, setUser } )(MainView);