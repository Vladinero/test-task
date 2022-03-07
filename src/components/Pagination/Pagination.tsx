import PaginationItem from "./PaginationItem";

import classes from "./pagination.module.scss";

const  Pagination = () => {
let pages = [1, 2, 3, 4, 5]

  return <div className={classes.pagination}>
    {pages.map(page => <PaginationItem key={page} num={page}/>)}
  </div>

};

export default Pagination;