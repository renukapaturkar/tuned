import axios from 'axios'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthProvider'
import { useCustomPlaylistContext } from '../context/CustomPlaylistContext'

export const useWatchlistData = () => {
    const {token} = useAuth()
    const {watchlaterdata, PlaylistDispatch} = useCustomPlaylistContext()

    const getData = async() => {
        try {
              
              const response = await axios.get("https://think-tunes-server.herokuapp.com/watchlater")
              console.log(response)
              if(response.status === 200){
                PlaylistDispatch({
                    type: "ADD_TO_WATCH_LATER", 
                    payload: response.data.watchlaterdata.WatchLaterArray
                  })
    
              }

        }catch(error){
            console.log(error, "Something went wrong while fetching data");
        }
    }

    useEffect(()=> {
        if(token && watchlaterdata.length === 0){
            getData()
        }
    }, [token])
}