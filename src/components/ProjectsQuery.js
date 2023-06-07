import React from 'react';
import { Query } from 'react-apollo';
import ProjectView from '../components/ProjectView';
import GraphCMSContent from '../services/graphcms';

const ProjectsQuery = props => {
    const [posts, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
        <div className="section-hero section-loading" >
            <div>{posts}</div>
        </div>
    );
    const ErrorLoadingPostsJsx = () => (
        <div className="mx-auto alert-danger">
            Error!
        </div>
    );
    return (
        <>
            <div className="">

                <div className="">
                    <Query query={Client.fetchPosts()}>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return LoadingPostsJsx();
                                if (error) {
                                    console.log(error);
                                    return ErrorLoadingPostsJsx();
                                }
                                const POSTS = data.posts;
                                setPosts(POSTS);
                                return POSTS.slice(0, 6).map(post => (
                                    <ProjectView post={post} />
                                ));
                            }
                        }
                    </Query>
                </div>

            </div>
        </>
    );
};
export default ProjectsQuery;
