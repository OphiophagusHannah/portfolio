import React from 'react';
import { Query } from 'react-apollo';
import ViewAbout from '../../components/ViewAbout';
import GraphCMSContent from '../../services/graphcms';

const About = props => {
    const [abouts, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
        <div className="section-hero section-loading" >
            <div>{abouts}</div>
        </div>
    );

    return (

        <div>
            <section id="about" className="about">
                {/* <h2>about</h2> */}


                <Query query={Client.fetchPosts()}>
                    {
                        ({ loading, data }) => {
                            if (loading) return LoadingPostsJsx();

                            const POSTS = data.abouts;
                            setPosts(POSTS);
                            return POSTS.slice(0, 6).map(about => (
                                <ViewAbout about={about} />
                            ));
                        }
                    }
                </Query>


            </section>
        </div>
    );
};
export default About;
