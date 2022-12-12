import React from 'react'
import allNews from '../dataBase/news/allNews'
import NewsModal from '../components/news/NewsModal'


const News = () => {

  console.log(allNews)
  return (
    <div>
      <NewsModal />
    </div>
  )
}

export default News