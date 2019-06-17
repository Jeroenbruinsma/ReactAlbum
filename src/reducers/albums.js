export default (state = [], action = {}) => {
    console.log("Album.js file called ", action)
    
    switch(action.type){
        case 'ADD_ALBUM':
            console.log("ADD ALBUM 6", action.payload)
            console.log("ADD ALBUM 7", state)

            const tmp = [...state, action.payload];
            console.log("tmp", tmp)
            return tmp


        default:
            return state
    }
    
    


  }