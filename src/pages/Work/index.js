import React, { useEffect } from "react";
import { Query } from "react-apollo";
import ViewExpertise from "../../components/ViewExpertise";
import GraphCMSContent from "../../services/graphcms";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = (props) => {
  const [expertises, setPosts] = React.useState([]);
  const Client = new GraphCMSContent();
  const LoadingPostsJsx = () => (
    <div className="section-hero section-loading">
      <div>{expertises}</div>
    </div>
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="expertise" id="keys" data-aos={"fade-up"}>
      {/* <h2>expertise & competence</h2> */}
      <div className="tabs competence-wrapper" >
        <Query query={Client.fetchPosts()}>
          {({ loading, data }) => {
            if (loading) return LoadingPostsJsx();

            const POSTS = data.expertises;
            setPosts(POSTS);
            return POSTS.slice(0, 6).map((expertise) => (
              <ViewExpertise expertise={expertise}  />
            ));
          }}
        </Query>
      </div>
    </section>
  );
};
export default Work;
