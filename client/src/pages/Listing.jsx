import { useParams } from "react-router-dom";
import Spinner from '../components/Spinner';
import ListItem from "../components/ListItem";


const Listing =()=>{

    return (
        <>
        <div className="category">
            <header>
                <p className="pageHeader">
                    {useParams().categoryName ==='rent' ? 'Places for rent' : 'Places for sale'}</p>
            </header>
            <main>
                <ul className="categoryListings">
                    <ListItem categoryType={useParams().categoryName} id='1' />
                </ul>
            </main>
            
        </div>
        </>
    )
}

export default Listing