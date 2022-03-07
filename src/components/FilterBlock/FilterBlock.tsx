import classes from "./filterBlock.module.scss"

const resources = {
  all: "Все",
  lenta: "Lenta.ru",
  mos: "Mos.ru"
}

type GetNews = {
  getNews: (resource: string) => void;
  setListView: (flag: boolean) => void;
  listView: boolean;
}

const FilterBlock = ({getNews, setListView, listView}: GetNews) => {

  return (
    <div className={classes.filterBlock}>
      <div className={classes.newsSources}>
        <button onClick={() => getNews('all')} className={classes.newsSourcesBtn}>{resources.all}</button>
        <button onClick={() => getNews('lenta')} className={classes.newsSourcesBtn}>{resources.lenta}</button>
        <button onClick={() => getNews('mos')} className={classes.newsSourcesBtn}>{resources.mos}</button>
      </div>
      <div className={classes.viewModes}>
        <button onClick={() => setListView(true)} className={classes.listView}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="8" fill={`${listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect y="10" width="18" height="8" fill={`${listView ? "#0029ff" : "#C4C4C4"}`}/>
          </svg>
        </button>
        <button onClick={() => setListView(false)} className={classes.blockView}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect y="10" width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect x="10" width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect x="10" y="10" width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default FilterBlock;