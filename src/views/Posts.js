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
    const searchTags = useSelector((state) => state.searchTags.searchTags);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const reducer = (previousTag, currentTag) => previousTag && currentTag;

    const haveTag = tags => searchTags.map(searchTag => tags.includes(searchTag)).reduce(reducer)

    const getPostsData = async (page = 1, limit = 50) => {
        setLoading(true)
        const response = await getPosts(page, limit)
        if(searchTags.length > 0) {
            const filterResponse = response.data.filter(item => haveTag(item.tags))
            response !== 'error' && dispatch(actions.posts.addPosts({...response, data: filterResponse}))
        } else {
            response !== 'error' && dispatch(actions.posts.addPosts(response))
        }
        setLoading(false)
    }
    const page_previous = async (page, limit) => getPostsData(page, limit)
    const page_next = async (page, limit) => getPostsData(page, limit)

    useEffect(() => {
        getPostsData();
    }, [searchTags])

    return (
        <Layout>
            <div className="container">
              <h3 className="display-3">POSTS</h3>
            </div>
            <div className="container">
                <InputBrowser getPostsData={getPostsData}></InputBrowser>
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
                    {posts.data.length === 0 && <p>Sin resultados</p>}
                </div>
            </div>
        </Layout>
    );
}

export default Posts;