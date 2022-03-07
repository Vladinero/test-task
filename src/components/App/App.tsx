import React, {useEffect, useState} from 'react'
import cn from "classnames"
import {INew} from "../../interfaces"

import Header from ".././Header/Header"
import FilterBlock from '../FilterBlock/FilterBlock'
import GridView from '../GridView/GridView'
import Pagination from '../Pagination/Pagination'
import ListView from '.././ListView/ListView'

import classes from './app.module.scss'

const resourses = {
  title: "Список новостей"
}

function App() {
  const [listView, setListView] = useState(true)
  const [news, setNews] = useState<INew[]>([])
  const [search, setSearch] = useState('')
  const [sortedNews, setSortedNews] = useState('all')

  async function getNews() {
    try {
      const response = await fetch('./mockApi/NEWS_DATA.json')
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных')
      }
      setNews(await response.json())

    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  let sortedData: INew[] = []

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
      console.log('all')
  }

  const getNewsFromResourse = (resourse: string) => {
    setSortedNews(resourse);
  }

  const searchedNews = news.filter(newItem => {
    return (newItem.title.toLowerCase().includes(search.toLowerCase()) || newItem.preview.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div className={classes.app}>
      <div className={cn(classes.container, classes.appContainer)}>
        <Header title={resourses.title}
                search={search}
                setSearch={setSearch}
        />
        <FilterBlock
          setListView={setListView}
          listView={listView}
          getNews={getNewsFromResourse}
        />
        {!listView && !search.length && <GridView news={sortedData}/>}
        {listView && !search.length && <ListView news={sortedData}/>}
        {!listView && search.length && <GridView news={searchedNews}/>}
        {listView && search.length && <ListView news={searchedNews}/>}
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
