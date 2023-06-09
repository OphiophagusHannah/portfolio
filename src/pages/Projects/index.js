import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import ViewProject from '../../components/ViewProject';
import GraphCMSContent from '../../services/graphcms';
import FadeIn from 'react-fade-in';

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
        <section className="tabs" id="projects">
            {/* <h2>personal projects & studies</h2> */}
            <FadeIn>
                <Query query={Client.fetchPosts()}>
                    {
                        ({ loading, data }) => {
                            if (loading) return LoadingPostsJsx();
                            const POSTS = data.projects;
                            setPosts(POSTS);
                            return POSTS.slice(0, 6).map(project => (
                                <ViewProject project={project} />
                            ));
                        }
                    }
                </Query>
                <div className="codepen-projects">
                    {/* <h3><a target="_blank" href="https://codepen.io/hannahavgust/pens/public">codepen</a></h3> */}
                    <h3><a target="_blank" rel="noreferrer" href="
                    https://www.gulosolutions.com/portfolio/">gulo projects</a></h3>
                </div>
            </FadeIn>
        </section>
    );
};
export default Projects;
