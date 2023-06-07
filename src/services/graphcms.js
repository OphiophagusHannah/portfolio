import gql from "graphql-tag";
import { GraphQLClient } from 'graphql-request';
export default class GraphCMSContent {
    constructor() {
        this.Client = new GraphQLClient(
            'https://api-us-east-1.hygraph.com/v2/cl579626s4dsj01up298i8o7r/master',
            {
                headers: {
                    Authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODYxMDY1MDcsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w1Nzk2MjZzNGRzajAxdXAyOThpOG83ci9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiN2E3MDc2ZGQtOGE2Yy00MjllLWEwNjMtZGExNDdjOGU3NTcyIiwianRpIjoiY2xpbDRhM2UxMDY0NzAxdWY2aGgxMjl6NyJ9.Occ5xvPW-SpS3lDWQcPQN7HV-DnhsW5PRnMaab-0TNAhHNQae8l01zgqq2w-WdZBIUi5E3TLKDVmtLis6m4WRCO3Qb2Jf1gvq13_OBFlyp_1u6koBY40NW1--FQFMUfWsYCxCB2-j3VLBkEVns7xJaVMmII2Ik5IKXpUrBDXvMmk8NeeeGn8Y54m_SWVqTCJxvThaKLZWe9NKjp4vVSlOWuvdk1jrdeAY2aK20G4uOKMsve6pBAWRldIuSTTe_HgsHjEYqKwPJEV9zaR-w8M0Uu3MDZzhCgG9H7E5hTfkmroQwrxf5uNuqXW1njn2l9HwhJeYxpE8LL6Yn-1h3UI2weaVxWMaVo_0RfQzeB-Fn5N7THieRFFwfbjOJeqoGeVZq7kmC9_mVbzzeE5RemcZDhJafjLvZsC7iHxo8CmATqnUKQ8ZdexKf6YDIjLiu4sf3qQdO-YcHEZz4cN81IxtMFXd-5AITbih8d-ToFWmROWns8YwF_GVaLZ_o3Po39Ur0_vDb9tbqFbWy6xTiZGllKA8eSdFka-w1B54saOA_ry9BpM_MdTtnvKjXtjYlpw2UoCbY9X2Sj1lrItn_-tkSzmTOABMhB1p5FBBPDyUg5ll1nTMH37rNXrzUApHJqX0z5r185DUT5YizGtUZhYZ6u249UW-G1R5dsH7Vw7VbQ'
                }
            }
        );
    };

    fetchPosts() {
        const myProjects = gql`
      query {
        projects {
            id
            projectTitle
            projectDescription
        }

      }
    `;
        return myProjects;
    };
};
