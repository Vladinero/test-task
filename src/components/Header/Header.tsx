import {useState} from "react"
import {INews} from "../../interfaces"
import RefreshBtn from "../../UI/RefreshBtn/RefreshBtn"
import SearchField from "../../UI/SearchField/SearchField"

import classes from "./header.module.scss";

interface HeaderProps {
  title: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({title, search, setSearch}: HeaderProps) => {

  return (
    <header className={classes.header}>
      <div className={classes.titleBlock}>
        <h1>{title}</h1>
        <RefreshBtn/>
      </div>
      <div className={classes.search}>
        <SearchField searchValue={search} setSearchValue={setSearch}/>
      </div>
    </header>
  )
}

export default Header;