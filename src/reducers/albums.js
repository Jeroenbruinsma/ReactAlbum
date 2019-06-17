export default (state = [], action = {}) => {
    console.log("Album.js file called ", action)
    
    switch(action.type){
        case 'ADD_ALBUM':
            console.log("ADD ALBUM 6", action.payload)
            console.log("ADD ALBUM 7", state)
                      
            return [...state, action.payload];
        case 'SET_ALBUMS':
            console.log('set allbums in reducer called')
            const tmp = action.payload.arr
            console.log("tmp", tmp)  

            return tmp 

           
        default:
            return state
    }
    
    


  }