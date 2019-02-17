import React, { Component } from "react";
import Search from "./components/Search";
import ImageContainer from "./components/ImageContainer";
import Loader from "./components/loader/loader";
import "./App.css";
// import axios from 'axios';
import { searchPhotos } from "./utils/api";

class App extends Component {
  state = {
    showLoader: false,
    imageList: [],
    totalPages: 0,
    currentPage: 1,
    searchedText: ""
  };

  handleSubmit = async value => {
    // console.log(value);

    // axios.get('https://api.unsplash.com/search/photos', {
    //   headers : {
    //     'Authorization': 'Client-ID your_access_key'
    //   },
    //   params : {
    //     query : value
    //   }
    // }).then(
    //   res => console.log(res)
    // )

    const { currentPage } = this.state;

    const { data } = await searchPhotos.get("search/photos", {
      params: {
        query: value,
        page: currentPage,
        per_page: 30
      }
    });

    console.log(data);

    this.setState(() => ({
      imageList: data.results,
      totalPages: data.total_pages,
      searchedText: value,
      showLoader: false
    }));
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({showLoader : true})
  //   }, 1000);

  //   setTimeout(() => {
  //     this.setState({showLoader : false})
  //   }, 4000);
  // }

  previousPage = () => {
    const { currentPage, searchedText } = this.state;

    if (currentPage > 1) {
      this.setState(
        prevState => ({ currentPage: --prevState.currentPage }),
        () => this.handleSubmit(searchedText)
      );
    }
  };

  nextPage = () => {
    const { currentPage, searchedText, totalPages } = this.state;

    if (currentPage !== totalPages) {
      this.setState(
        prevState => ({ currentPage: ++prevState.currentPage }),
        () => this.handleSubmit(searchedText)
      );
    }
  };

  render() {
    const { imageList, showLoader, currentPage, totalPages } = this.state;

    return (
      <div className={showLoader ? "App loading" : "App"}>
        <div className="container pt-3">
          <Search handleSubmit={this.handleSubmit} />
        </div>
        <ImageContainer
          imageList={imageList}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />

        {!showLoader || <Loader />}
      </div>
    );
  }
}

export default App;
