const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
// query for nodes to create project pages
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

//Gatsby API - create pages from data
exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    
    //creates a page for each project
    const getProject = makeRequest(graphql, `
    {
        allContentfulProject(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `).then(result => {
        result.data.allContentfulProject.edges.forEach(({ node }) => {
            createPage({
                path: `project/${node.slug}`,
                component: path.resolve(`src/templates/post.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });
    const getExperiment = makeRequest(graphql, `
    {
        allContentfulExperiments(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
        {
            edges {
                node {
                    id
                    
                }
            }
        }
    }
    `);

    const getAbout = makeRequest(graphql, `
    {
        allContentfulWork(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
        {
            edges {
                node {
                    id
                    
                }
            }
        },

        allContentfulEducation(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
        {
            edges {
                node {
                    id
                    
                }
            }
        },
        allContentfulLanguage(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
        {
            edges {
                node {
                    id
                    
                }
            }
        },
        allContentfulTools(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
        {
            edges {
                node {
                    id
                    
                }
            }
        }
    }
    `);

 


    return Promise.all([
        getProject,
        getExperiment,
        getAbout

    ])
};