import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld, addAlbum } from '../actions/test'


class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        //3rd
        this.props.helloWorld('Alice', 'Seriously Alice')
        this.props.addAlbum(1111, 'Enjoying sunshine', 102)

        //2nd:
        //this.props.dispatch(helloWorld("Jeroen","Bike"))

        //1st
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

// export default connect()(AlbumsListContainer)
export default connect(null, { helloWorld, addAlbum })(AlbumsListContainer)