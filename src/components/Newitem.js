import React from "react";
class Newitem extends React.Component {
  render() {
    let { title, desc, imgurl, newsurl, author, time } = this.props;
    return (
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={imgurl} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
          <div className="px-6 font-medium dark:text-black text-left">
            <div>{author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last Updated : {new Date(time).toGMTString()}
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 ">
            <a href={newsurl} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newitem;
