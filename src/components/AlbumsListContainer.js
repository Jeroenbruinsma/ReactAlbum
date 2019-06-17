import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld, addAlbum,setAlbums } from '../actions/test'



// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
//)

class AlbumsListContainer extends React.Component {
     state = {}
     

     componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
          .then(response => this.props.setAlbums(response.body))
      } 
    // componentDidMount() {
    //     sleep(2000)
    //       .then(message => this.props.setAlbums([
    //         {
    //           id: 1,
    //           title: message
    //         },
    //         {
    //           id: 2,
    //           title: 'This is the second album'
    //         },
    //         {
    //           id: 3,
    //           title: 'The last album'
    //         }
    //       ]))
    //   }


    // //3rd
    // this.props.helloWorld('Alice', 'Seriously Alice')
    // this.props.addAlbum(5, 'Enjoying sunshine', 102)
    // this.props.addAlbum(6, 'Eating is funQy', 102)


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


    // request('https://jsonplaceholder.typicode.com/albums')
    //     .then(response => this.setState({ albums: response.body }))
    //  }


    render() {
        console.log("lala",this.props )
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}

const mapStateToProps = (reduxState) => {
    console.log("mapState called ")
    return {
        albums: reduxState.albums
    }
}

// export default connect()(AlbumsListContainer)
export default connect(mapStateToProps, { helloWorld, addAlbum,setAlbums })(AlbumsListContainer)