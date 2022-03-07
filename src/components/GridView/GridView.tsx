import React from 'react'
import {INews} from "../../interfaces"

import GridViewItem from "../GridView/GridViewItem"

import classes from "./gridView.module.scss"

const GridView: React.FC<INews> = ({news}) => {

  return <div className={classes.gridContainer}>
    {
      news.length && news.map(item => <GridViewItem
        id={item.id}
        title={item.title}
        preview={item.preview}
        link={item.link}
        source={item.source}
        date={item.date}
        key={item.id}
      />)
    }
  </div>
}

export default GridView;