export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
export const ADD_ALBUM = "ADD_ALBUM"
export const SET_ALBUMS = "SET_ALBUMS"

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  }
}


export function addAlbum(id, title,userId) {
    console.log("got here:",id,title)
    return {
      type: ADD_ALBUM,
      payload: {
        id,
        title,
        userId
      }
    }
  }
  export function setAlbums(arr) {
    console.log("got here:",arr)
    return {
      type: SET_ALBUMS,
      payload: {
        arr
        
      }
    }
  }


