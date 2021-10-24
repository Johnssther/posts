import Header from './Header';
import Card from './Card';
import {useState, useEffect} from 'react';
import getPosts from '../helpers/getPosts';
import InputBrowser from './InputBrowser';
import Loading from './Loading';

const Layout = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPostsData = async() => {
        const response = await getPosts()
        setLoading(false)
        setPosts( response.data )
    }

    const getPostsComments = async() => {
        const response = await getPostsComments()
    }

    useEffect(() => {
        getPostsData();
    }, [])
    
    return (
      <div className="layout">
          <Header />
          <div className="container">
              <h3 className="display-3">POSTS</h3>
          </div>
          <div className="container">
              <InputBrowser></InputBrowser>
              {
                  loading ? <Loading />
                  :
                  <>
                    <div className="grid col-3 col-md-2 col-sm-1">
                        {
                            posts.map((item, index) => {
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
                  </>
              }
          </div>
  
          <footer>
              <nav className="footer">
                  <div className="container">
                      <span>Desarrollado de John Hernandez 2021</span>
                  </div>
              </nav>
          </footer>
      </div>
    );
  }
  
  export default Layout;
  