import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const GallerySwipe = ({ imageList }) => {
    const localList = imageList.map(o => (
        {
            original: o.src,
            thumbnail: o.src,
            width:"1024",
            height:"768",
            aspectRatio: o.aspectRatio,
            index: Number(o.originalName.substr(0,2)),
            title: o.originalName
        }))

    console.log(localList.sort((a, b) => a.index > b.index))

    return (
        <div className="gallery-swipe-container">
            <Gallery 
            shareButton={false}
            >
                {localList.sort((a, b) => a.index > b.index ? 1 : -1).map((imgObj, index) => <Item
                    key={imgObj.id + "gallery-swipe" + index}
                    original={imgObj.original}
                    thumbnail={imgObj.thumbnail}
                    width={imgObj.width}
                    height={(imgObj.width / imgObj.aspectRatio)}
                    style={{ margin: '1rem' }}
                    title={imgObj.title.replace(/_/g, ' ').split('.jpg')[0]}
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={imgObj.original}/>
                    )}
                </Item>)}
            </Gallery>
        </div >
    )
}

export default GallerySwipe;