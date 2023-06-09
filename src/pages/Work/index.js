import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import ViewExpertise from '../../components/ViewExpertise';
import GraphCMSContent from '../../services/graphcms';
import FadeIn from 'react-fade-in';

const Work = props => {
    const [expertises, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
        <div className="section-hero section-loading" >
            <div>{expertises}</div>
        </div>
    );

    return (

        <section className="expertise" id="keys">
            {/* <h2>expertise & competence</h2> */}
            <div className="tabs competence-wrapper">

                <Query query={Client.fetchPosts()}>
                    {
                        ({ loading, data }) => {
                            if (loading) return LoadingPostsJsx();

                            const POSTS = data.expertises;
                            setPosts(POSTS);
                            return POSTS.slice(0, 6).map(expertise => (
                                <ViewExpertise expertise={expertise} />
                            ));
                        }
                    }
                </Query>

            </div>
        </section>
    );
};
export default Work;
