import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default function News(props) {

   

    const [page, setPage] = useState(1)
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState([])
    const [loading, setLoading] = useState(false)


    document.title = `NewsMonkey - ${props.category}`



    const update = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
    }

    useEffect( () => {
    
      return () => {
        update()
      }
    },[])


    const handlePreviousBtn = async () => {
        console.log('previous')
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7674db0b54604034a31e2ec4b127bdd1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
        //     loading: false
        // })
        setPage(page - 1)
        update()
    }
    const handleNextBtn = async () => {
        console.log('next')
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7674db0b54604034a31e2ec4b127bdd1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parseData.articles,
        //     loading: false
        // })
        setPage(page + 1)
        update()
    }


    return (
        <div className='container'>
            {loading && <Spinner />}
            <h1 className='text-center'>News Monkey</h1>
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={!element.title ? "Lorem Ipsum" : element.title} desc={!element.description ? "Can you help translate this site into a foreign language ? Please email us with details if you can help." : element.description} imgUrl={!element.urlToImage ? "https://c.ndtvimg.com/2019-12/pasi7rqs_gurgaon-police-generic_625x300_19_December_19.jpg" : element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}

            </div>
            <div className="container d-flex justify-content-between my-3">
                <button disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousBtn}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextBtn}>Next &rarr;</button>
            </div>
        </div>
    )


}
News.defaultProps = {
    country: 'in',
    category: 'science'
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}
