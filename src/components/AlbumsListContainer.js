import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import {connect} from 'react-redux'
import  { helloWorld } from '../actions/test'

 class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.dispatch(helloWorld("Jeroen","Bike"))
    // this.props.dispatch({
    //     type: 'HELLO_WORLD',
    //     payload: {
    //       firstName: 'Alice',
    //       lastName: 'McDog'
    //     }
    //   })


    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

export default connect()(AlbumsListContainer)