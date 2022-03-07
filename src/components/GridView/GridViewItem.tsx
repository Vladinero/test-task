import LinesEllipsis from 'react-lines-ellipsis'

import classes from "./gridViewItem.module.scss"

import {INew} from "../../interfaces/"

const resources = {
  detail: "Подробнее"
}
const GridViewItem = ({title, preview, link, source, date, id}: INew) => {

  return (
    <article className={classes.newArticle}>
      <LinesEllipsis
        className={classes.newArticleTitle}
        text={title}
        maxLine='3'
        ellipsis='...'
        trimRight
        basedOn='letters'
      />
      <div>
        <LinesEllipsis
          className={classes.newArticlePreview}
          text={preview}
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        <a className={classes.newArticleLink} href={link}>{resources.detail}</a>
      </div>
      <div className={classes.newFooter}>
        <span className={classes.newArticleSource}><a href={source}>{source}</a></span>
        <span className={classes.newArticleDate}>{date}</span>
      </div>
    </article>
  )
}

export default GridViewItem;