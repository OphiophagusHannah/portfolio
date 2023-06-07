import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import ExpertiseView from '../../components/ExpertiseView';
import GraphCMSContent from '../../services/graphcms';

const Work = props => {
    const [expertises, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
        <div className="section-hero section-loading" >
            <div>{expertises}</div>
        </div>
    );
    // const ErrorLoadingPostsJsx = () => (
    //     <div className="mx-auto alert-danger">
    //         Error!
    //     </div>
    // );

    return (

        <div className="">

            <Query query={Client.fetchPosts()}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return LoadingPostsJsx();
                        // if (error) {
                        //     console.log(error);
                        //     return ErrorLoadingPostsJsx();
                        // }
                        const POSTS = data.expertises;
                        setPosts(POSTS);
                        return POSTS.slice(0, 6).map(expertise => (
                            <ExpertiseView expertise={expertise} />
                        ));
                    }
                }
            </Query>
        </div>
    );
};
export default Work;
