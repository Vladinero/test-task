import React, {useEffect, useState} from 'react'
import cn from "classnames"
import {INew} from "../../interfaces"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

import Header from ".././Header/Header"
import FilterBlock from '../FilterBlock/FilterBlock'
import GridView from '../GridView/GridView'
import ListView from '.././ListView/ListView'

import classes from './app.module.scss'

const resources = {
  title: "Список новостей"
}

function App() {
  const [listView, setListView] = useState(true)
  const [search, setSearch] = useState('')
  const [sortedNews, setSortedNews] = useState('all')

  const {news, loading, error} = useTypedSelector(state => state.news)
  const {fetchNews} = useActions()

  useEffect(() => {
    fetchNews()
  }, [])



  let sortedData: INew[];

  switch (sortedNews) {
    case 'all':
      sortedData = [...news]
      break;
    case 'lenta':
      sortedData = [...news].filter(el => el.source === "https://lenta.ru")
      break;
    case 'mos':
      sortedData = [...news].filter(el => el.source === "https://Mos.ru")
      break;
    default:
      sortedData = [...news]
  }

  const getNewsFromResource = (resource: string) => {
    setSortedNews(resource);
  }

  const searchedNews = news.filter(newItem => {
    return (newItem.title.toLowerCase().includes(search.toLowerCase()) || newItem.preview.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div className={classes.app}>
      <div className={cn(classes.container, classes.appContainer)}>
        <Header title={resources.title}
                search={search}
                setSearch={setSearch}
        />
        <FilterBlock
          setListView={setListView}
          listView={listView}
          getNews={getNewsFromResource}
        />
        {loading && <h3 className={classes.loader}>News loading...</h3>}
        {error && <h3 className={classes.error}>{error}</h3>}
        {!listView && !search.length && <GridView news={sortedData}/>}
        {listView && !search.length && <ListView news={sortedData}/>}
        {!listView && search.length && <GridView news={searchedNews}/>}
        {listView && search.length && <ListView news={searchedNews}/>}
      </div>
    </div>
  );
}

export default App;
