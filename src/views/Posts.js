import {useState, useEffect} from 'react';
import Layout from '../contains/Layout';
import Card from '../components/Card';

import getPosts from '../helpers/getPosts';
import InputBrowser from '../components/InputBrowser';
import Loading from '../components/Loading';

import { useSelector,useDispatch } from 'react-redux'
import { actions } from "../redux/actions/index";
import Paginate from '../components/Paginate';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const getPostsData = async() => {
        const response = await getPosts()
        response != 'error' && dispatch(actions.posts.addPosts(response))
        setLoading(false)
    }

    const page_previous = async(page, limit) => {
        setLoading(true)
        const response = await getPosts(page, limit)
        response != 'error' && dispatch(actions.posts.addPosts(response))
        setLoading(false)
    }
    const page_next = async(page, limit) => {
        setLoading(true)
        const response = await getPosts(page, limit)
        response != 'error' && dispatch(actions.posts.addPosts(response))
        setLoading(false)
    }

    useEffect(() => {
        getPostsData();
    }, [])

    return (
        <Layout>
            <div className="container">
              <h3 className="display-3">POSTS</h3>
            </div>
            <div className="container">
                <InputBrowser></InputBrowser>
                <Paginate 
                    limit={posts.limit}
                    page={posts.page}
                    total={posts.total}
                    page_previous={page_previous}
                    page_next={page_next}
                />
                {loading && <Loading />}
                <div className="grid col-3 col-md-2 col-sm-1">
                    {
                        posts.data.map((item, index) => {
                            return(
                                <Card  
                                    key={item.id}
                                    id_post={item.id}
                                    image={item.image}
                                    likes={item.likes}
                                    tags={item.tags}
                                    owner={item.owner}
                                    text={item.text}
                                    publishDate={item.publishDate}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Posts;