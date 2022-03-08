import LinesEllipsis from 'react-lines-ellipsis'
import {INew} from "../../interfaces/"

import classes from "./listViewItem.module.scss"

const resources = {
  detail: "Подробнее"
}

const ListViewItem = ({title, preview, link, source, date, id, imageLink}: INew) => {

  return (
    <article className={classes.newArticle}>
      <div className={classes.newInfo}>
        <div className={classes.imageBlock}>
          <img className={classes.newImage} src={imageLink} alt={title}/>
        </div>
        <div className={classes.textBlock}>
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
        </div>
      </div>
      <div className={classes.newFooter}>
        <span className={classes.newArticleSource}><a href={source}>{source}</a></span>
        <span className={classes.newArticleDate}>{date}</span>
      </div>
    </article>
  )
}

export default ListViewItem;