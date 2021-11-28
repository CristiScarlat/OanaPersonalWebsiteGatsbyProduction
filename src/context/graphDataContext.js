import React, { createContext } from 'react'
import { graphql, useStaticQuery } from "gatsby";

const GraphqlContext = createContext({});


export const GraphDataProvider = ({ children }) => {
    const { allFile, allDirectory } = useStaticQuery(graphql`
    query {
        allDirectory(filter: {sourceInstanceName: {eq: "images"}}) 
        {
          edges {
            node {
              name
            }
          }
        },
      allFile(filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
        sourceInstanceName: {eq: "images"}}) 
      {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
            relativeDirectory
            id
          }
        }
      }
    }`);

    const getImageObjs = (data) => {
        const imageObjs = data.map(iobj => ({...iobj.node.childImageSharp.fluid, relativeDirectory: iobj.node.relativeDirectory, id: iobj.node.id}))
        return imageObjs
      }

    const getAllAlbums = (data) => {
        return data.map(d => d.node.name).filter(name => name !== 'albums')
    }

    return(
        <GraphqlContext.Provider value={{allImages: getImageObjs(allFile.edges), allAlbums: getAllAlbums(allDirectory.edges)}}>{children}</GraphqlContext.Provider>
    )
}

export default GraphqlContext;

