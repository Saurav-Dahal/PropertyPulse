import { useState, useEffect } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'

const ListingDetails =()=>{
    const [listing, setListing] = useState(null)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)

    useEffect(() => {
        const fetchListing = async() => {
            try{
                await fetch(`http://127.0.0.1:3003/api/listing/:{useParams().listingId}`).then(
                //     (res) =>{
                //     if(res){
                    
                //     }
                // }
                console.log('ok')
                );
            }catch(error)
            {

            }
        }
    })

    return (
        <>
        ListingDetails
        </>
    )
}

export default ListingDetails