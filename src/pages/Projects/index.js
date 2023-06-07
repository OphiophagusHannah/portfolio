import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import ProjectView from '../../components/ProjectView';
import GraphCMSContent from '../../services/graphcms';

const Projects = props => {
    const [projects, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
        <div className="section-hero section-loading" >
            <div>{projects}</div>
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
                        const POSTS = data.projects;
                        setPosts(POSTS);
                        return POSTS.slice(0, 6).map(project => (
                            <ProjectView project={project} />
                        ));
                    }
                }
            </Query>
        </div>



    );
};
export default Projects;
