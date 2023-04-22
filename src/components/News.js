import React from 'react';
import Newitem from './Newitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends React.Component {
    static defautProps = {
      country : "in",
      pagesize : 10 ,
      category : 'general',

    }

    static propTypes = {
      country : PropTypes.string,
      pagesize : PropTypes.number,
      category : PropTypes.string,
    }
    constructor()
    {
      super();
      console.log("Running");
      this.state = {
        articles: [],
        page : 1,
        loading : true,
        totalResults : 0
      }

    }

    async updatepage(){
      this.props.setprogress(10);
      const  url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f6476e6e610648789e20cdd987f76eb3&page=${this.state.page}&pageSize=${this.props.pagesize}`
      this.setState({loading: true})
      let data = await fetch(url);
      this.props.setprogress(30);
      let parseddata = await data.json();
      this.props.setprogress(70);
      console.log(parseddata)
      this.setState({articles : parseddata.articles , totalResults : parseddata.totalResults , loading : false}) 
      this.props.setprogress(100);
    }

    async componentDidMount(){
      this.updatepage()
    }


    fetchData = async()=>{
      this.setState({page: this.state.page + 1})
      const  url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f6476e6e610648789e20cdd987f76eb3&page=${this.state.page}&pageSize=${this.props.pagesize}`
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata[0])
      this.setState({articles : this.state.articles.concat(parseddata.articles) , totalResults : parseddata.totalResults , loading : false}) 
    }

    render() {
        return <div>
            <h1 className='px-20 py-10 text-4xl font-bold dark:text-black'>Featured HeadLines</h1>
            
            <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            >
            <div className="grid grid-cols-4 gap-5 px-20 py-10 ">
            {this.state.articles.map((event)=>{
              return <Newitem  key = {event.url} title = {event.title?event.title.slice(0,40):""} author = {event.author?event.author:"Source"} time = {event.publishedAt} desc = {event.description?event.description.slice(0,88):""} imgurl = {event.urlToImage?event.urlToImage:"/"} newsurl = {event.url}/>
            })}
            </div>
            </InfiniteScroll>
            
        </div>;
    }
}

export default News;