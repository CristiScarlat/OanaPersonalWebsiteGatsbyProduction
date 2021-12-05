import React, { createContext, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from "gatsby";

const GraphqlContext = createContext({});


export const GraphDataProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [albums, setAlbums] = useState([]);

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

  useEffect(() => {
      const imageObjs = allFile.edges.map(iobj => ({ ...iobj.node.childImageSharp.fluid, relativeDirectory: iobj.node.relativeDirectory, id: iobj.node.id }))
      const allAlbums = allDirectory.edges.map(d => d.node.name).filter(name => name !== 'albums');
      setImages(imageObjs)
      setAlbums(allAlbums);

  }, [allFile, allDirectory])


  return (
    <GraphqlContext.Provider value={{ allImages: images, allAlbums: albums }}>{children}</GraphqlContext.Provider>
  )
}

export default GraphqlContext;

