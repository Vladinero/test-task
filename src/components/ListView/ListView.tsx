import React from "react"
import {INews} from "../../interfaces"

import ListViewItem from "./ListViewItem"

import classes from "./listView.module.scss"

const ListView: React.FC<INews> = ({news}) => {

  return <div className={classes.listContainer}>
    {
      news.length && news.map(item => <ListViewItem
        imageLink={item.imageLink}
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

export default ListView;