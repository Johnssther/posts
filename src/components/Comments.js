
import {useState, useEffect} from 'react';
import getPostsComments from '../helpers/getPostsComments';
import Loading from './Loading';

const Comments = ({owner, id}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getPostsCommentsData = async() => {
        const response = await getPostsComments(id)
        setLoading(false)
        setComments( response.data )
    }

    useEffect(() => {
        getPostsCommentsData();
    }, [])

    return (
        <>
        {
            comments.length > 0 ?
                comments.map((item, index) => {
                    return(
                        <div className="comment grid" key={index}>
                            <div className="comment-content">
                                <div className="comment-img">
                                    <div className="img">
                                        <img src={item.owner.picture}></img>
                                    </div>
                                </div>
                                <div className="comment-owner">
                                    <p className="name-owner">{item.owner.firstName} {item.owner.lastName}</p>
                                </div>
                            </div>
                            <div className="comment-text">
                                <p>{item.message} - <i>{new Date(item.publishDate).toDateString()}</i></p>
                            </div>
                        </div>
                    )
                })
            :
            <>
            {
                loading ? <Loading /> :
                <div className="comment-text">
                    <p>No existen comentarios</p>
                </div>
            }
            </>
        }
        </>
    );
}

export default Comments;
