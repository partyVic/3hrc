import React from 'react'
import allNews from '../dataBase/news/allNews'
import NewsModal from '../components/news/NewsModal'


const News = () => {

  return (
    <div>
      {allNews.map(news => (
        <div key={news.date}>
          <NewsModal
            date={news.date}
            imageTitle={news.images.imageTitle}
            content={news.content}
            title={news.title}
          />
        </div>
      ))}
    </div>
  )
}

export default News