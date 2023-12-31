import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class NewsCompo extends Component {
  //for setting static images or news
  // articles = [
  //     {
  //         "source": { "id": "fox-sports", "name": "Fox Sports" },
  //         "author": "David Helman",
  //         "title": "Cowboys' trade for Trey Lance is opportunistic — and straight out of Eagles' playbook - FOX Sports",
  //         "description": "The Dallas Cowboys gave up a fourth-round pick for a young QB the 49ers spent three first-rounders to draft. It's the sort of opportunistic move they should make more often.",
  //         "url": "https://www.foxsports.com/stories/nfl/cowboys-trade-for-trey-lance-is-opportunistic-and-straight-out-of-eagles-playbook",
  //         "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.25.23_Trey-Lance-to-the-Cowboys_Horizontal.jpg?ve=1&tl=1",
  //         "publishedAt": "2023-08-26T00:53:00Z",
  //         "content": "Maybe the decision-makers in the Cowboys front office got tired of all the high praise for their rivals to the northeast.\r\nThat's what it feels like on Friday night, in the immediate aftermath of the… [+5480 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "NBCSports.com" },
  //         "author": "Nick Zaccardi",
  //         "title": "Noah Lyles completes 100m-200m sweep; Shericka Jackson scares Flo-Jo world record at track worlds - NBC Sports",
  //         "description": "Noah Lyles became the first man since Usain Bolt to sweep the 100m and 200m at a world championships.",
  //         "url": "https://www.nbcsports.com/olympics/news/noah-lyles-shericka-jackson-track-and-field-world-championships-200-meters",
  //         "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/0379d24/2147483647/strip/true/crop/7200x4050+0+375/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Fd7%2F69%2F9b5b9d6042b18e8d87c8083772ea%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1623589471",
  //         "publishedAt": "2023-08-25T23:46:39Z",
  //         "content": "BUDAPEST As Noah Lyles went off to race the world championships 200m final, his coach, Lance Brauman, had some parting words.\r\nNext time I see you, youre going to be a three-time 200m world champion,… [+4777 chars]"
  //       },
  //       {
  //         "source": { "id": "politico", "name": "Politico" },
  //         "author": null,
  //         "title": "Fox News debate host defends playing 'Rich Men North of Richmond' amid singer's criticism of GOP candidates - POLITICO",
  //         "description": "Fox News co-host Martha MacCallum kicked off the first GOP debate by placing the song at the center of the night’s discourse.",
  //         "url": "https://www.politico.com/news/2023/08/25/singer-gop-debate-00113095",
  //         "urlToImage": "https://static.politico.com/92/6d/39103fa145b1aae1e0229ea2feb3/ap23232045391496.jpg",
  //         "publishedAt": "2023-08-25T22:52:39Z",
  //         "content": "It was funny seeing my song at the presidential debate cause its like, I wrote that song about those people, so for them to have to sit there and listen to it, that cracks me up, singer Oliver Anthon… [+2182 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "WESH Orlando" },
  //         "author": "Chelsea Robinson",
  //         "title": "Tropics update: Models show system developing, working its way into the Gulf - WESH 2 Orlando",
  //         "description": "The tropical disturbance in the Gulf has a 80% chance of becoming a cyclone in the next seven days.",
  //         "url": "https://www.wesh.com/article/tropical-disturbance-gulf-florida/44909176",
  //         "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/f4zvi8hwyaarg65-64e9140465b39.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  //         "publishedAt": "2023-08-25T22:32:00Z",
  //         "content": "ORLANDO, Fla. —The National Hurricane Center is keeping an eye on a total of four disturbances in the tropics: Franklin and three more undeveloped systems.\r\nTropical Storm Franklin\r\n is moving north … [+2707 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "Hollywood Reporter" },
  //         "author": "Lesley Goldberg",
  //         "title": "Talks Between Writers, Studios at a Standstill After Week of Trading Barbs - Hollywood Reporter",
  //         "description": "There is no date to return to the negotiating table as the Writers Guild strike heads into its 18th week.",
  //         "url": "https://www.hollywoodreporter.com/tv/tv-news/writers-studios-standstill-1235575169/",
  //         "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/GettyImages-1619487791-copy.jpg?w=1024",
  //         "publishedAt": "2023-08-25T22:24:22Z",
  //         "content": "Following an eventful week in which members of the Writers Guild of America as well as the Alliance of Motion Picture and Television Producers traded barbs following the publication of the studios’ c… [+2638 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "the-wall-street-journal",
  //           "name": "The Wall Street Journal"
  //         },
  //         "author": "Jaewon Kang",
  //         "title": "Instacart Files for IPO, Shows Growing Profitability - The Wall Street Journal",
  //         "description": "Grocery-delivery firm reports $242 million profit for first half of 2023; to list on Nasdaq under ticker symbol CART",
  //         "url": "https://www.wsj.com/finance/instacart-files-for-ipo-shows-growing-profitability-97027acf",
  //         "urlToImage": "https://images.wsj.net/im-842435/social",
  //         "publishedAt": "2023-08-25T21:41:00Z",
  //         "content": null
  //       },
  //       {
  //         "source": { "id": "abc-news", "name": "ABC News" },
  //         "author": "JUAN A. LOZANO Associated Press",
  //         "title": "Judge asks if poverty qualifies for Biden policy letting migrants from 4 countries into US - ABC News",
  //         "description": "A federal judge is questioning whether living in poverty would be enough to qualify someone for a key immigration policy from President Joe Biden",
  //         "url": "https://abcnews.go.com/US/wireStory/texas-trial-biden-policy-letting-migrants-4-countries-102558605",
  //         "urlToImage": "https://s.abcnews.com/images/US/wirestory_080faf3d3d756bb5fb91b2175742c383_16x9_992.jpg",
  //         "publishedAt": "2023-08-25T21:21:53Z",
  //         "content": "HOUSTON -- A federal judge on Friday questioned whether living in poverty would be enough to qualify someone for a key immigration policy from President Joe Biden that allows a limited number of peop… [+4192 chars]"
  //       },
  //       {
  //         "source": { "id": "independent", "name": "Independent" },
  //         "author": "Namita Singh",
  //         "title": "Russia hits out at Biden's 'unacceptable' Wagner boss dig at Putin – Ukraine war live - The Independent",
  //         "description": "US refuses to say whether bomb suspected cause of ‘assassination’",
  //         "url": "https://www.independent.co.uk/news/world/europe/ukraine-wagner-prigozhin-russia-putin-live-b2399184.html",
  //         "urlToImage": "https://static.independent.co.uk/2023/08/25/06/Screenshot%202023-08-25%20103147.png?quality=75&width=1200&auto=webp",
  //         "publishedAt": "2023-08-25T21:00:07Z",
  //         "content": "I warned Wagner chief to watch out for threats to his life, says Belarus President Lukashenko\r\nBelarusian President Alexander Lukashenko has said that he he warned the Wagner mercenary chief, Yevgeny… [+1542 chars]"
  //       },
  //       {
  //         "source": { "id": "usa-today", "name": "USA Today" },
  //         "author": "Phillip M. Bailey, Rachel Looker",
  //         "title": "Georgia governor pressured to publicly back Fani Willis in Trump case - USA TODAY",
  //         "description": "One of Georgia's most outspoken faith leader wants assurances prosecutor Fani Willis won't be punished amid election case as GOP scrutiny intensifies.",
  //         "url": "https://www.usatoday.com/story/news/politics/2023/08/25/georgia-brian-kemp-support-fani-willis-trump-indictment/70677179007/",
  //         "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/15/USAT/70593326007-gty-1615613099.jpg?crop=2996,1695,x3,y77&width=2996&height=1695&format=pjpg&auto=webp",
  //         "publishedAt": "2023-08-25T20:59:24Z",
  //         "content": "ATLANTA A Georgia faith leader representing more than 530 churches is calling upon Gov. Brian Kemp to publicly oppose Republican efforts to remove or discipline Fulton County District Attorney Fani W… [+7452 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "entertainment-weekly",
  //           "name": "Entertainment Weekly"
  //         },
  //         "author": "Wesley Stenzel",
  //         "title": "Selena Gomez pulls a notorious 'Sex and the City' move in new music video - Entertainment Weekly News",
  //         "description": "The singer's breakup etiquette definitely wouldn't pass muster with Carrie Bradshaw.",
  //         "url": "https://ew.com/music/selena-gomez-sex-and-the-city-post-it-single-soon-music-video/",
  //         "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C0%2C2000%2C1000&poi=%5B980%2C0%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F08%2F25%2FSelena-Gomez-Sarah-Jessica-Parker-082523.jpg",
  //         "publishedAt": "2023-08-25T20:51:00Z",
  //         "content": "Selena Gomez is celebrating singleness, and Carrie Bradshaw would not approve.\r\nIn the music video for her new song \"Single Soon,\" the pop star takes a page — or rather, a Post-it note — from one of … [+2093 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "Honolulu Star-Advertiser" },
  //         "author": "Nina Wu",
  //         "title": "Health Department warns of COVID uptick on Maui, statewide - Honolulu Star-Advertiser",
  //         "description": "Health officials say Maui County is experiencing an uptick in COVID-19 cases in the midst of its wildfire crisis.",
  //         "url": "https://www.staradvertiser.com/2023/08/25/breaking-news/health-department-warns-of-covid-uptick-on-maui-statewide/",
  //         "urlToImage": "https://www.staradvertiser.com/wp-content/uploads/2023/08/web1_072522-WEB-Maui-COVID-testing.jpg",
  //         "publishedAt": "2023-08-25T20:35:29Z",
  //         "content": "Health officials say Maui County is experiencing an uptick in COVID-19 cases in the midst of its wildfire crisis.\r\nDr. Sarah Kemble, state epidemiologist, said COVID numbers have been steadily increa… [+1908 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "GameSpot" },
  //         "author": "David Wolinsky",
  //         "title": "GTA 6 Hacker Was A Teenager On Bail In A Hotel Room Using An Amazon Fire Stick - GameSpot",
  //         "description": "The teenagers who were part of an international cyber-crime gang were found responsible for a hacking spree, and will be sentenced at a later date.",
  //         "url": "https://www.gamespot.com/articles/gta-6-hacker-was-a-teenager-on-bail-in-a-hotel-room-using-an-amazon-fire-stick/1100-6517235/",
  //         "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1600/16003485/4184161-cropped.jpeg",
  //         "publishedAt": "2023-08-25T20:31:53Z",
  //         "content": "In a recent court ruling, an 18-year-old from Oxford was identified as a member of an international cyber-crime collective responsible for a series of hacks targeting major tech corporations, includi… [+2872 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "NBC Chicago" },
  //         "author": "Max Molski",
  //         "title": "How to watch Simone Biles and Suni Lee at the 2023 US Gymnastics Championships - NBC Chicago",
  //         "description": "Simone Biles and Suni Lee headline a stacked field at the 2023 Xfinity U.S. Gymnastics Championships. Here is how you can watch the competition.",
  //         "url": "https://www.nbcchicago.com/news/sports/how-to-watch-simone-biles-and-suni-lee-at-the-2023-us-gymnastics-championships/3215052/",
  //         "urlToImage": "https://media.nbcchicago.com/2023/08/web-230825-simone-biles.jpg?quality=85&strip=all&resize=1200%2C675",
  //         "publishedAt": "2023-08-25T20:00:13Z",
  //         "content": "Simone Biles and Americas top gymnasts are taking the next step on their path to Paris.\r\nThe 2023 Xfinity U.S. Gymnastics Championships are here, less than one year ahead of the 2024 Paris Olympics. … [+2003 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "New York Post" },
  //         "author": "Josh Christenson",
  //         "title": "White House claims Biden ‘didn’t hear’ question on Maui wildfires before answering ‘No comment’ - New York Post ",
  //         "description": "The White House said Thursday that President Biden “didn’t hear” a question a reporter shouted at him more than a week ago about raging wildfires.",
  //         "url": "https://nypost.com/2023/08/25/white-house-says-biden-didnt-hear-question-on-maui-wildfires-before-answering-no-comment/",
  //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000026759448.jpg?quality=75&strip=all&w=1024",
  //         "publishedAt": "2023-08-25T19:55:00Z",
  //         "content": "Say what?\r\nThe White House changed its tune following backlash over President Biden responding No comment earlier this month to a question about the deadly wildfires on Maui.\r\nDeputy White House pres… [+3931 chars]"
  //       },
  //       {
  //         "source": { "id": "cnn", "name": "CNN" },
  //         "author": "Jackie Wattles",
  //         "title": "See stunning footage captured by India’s Chandrayaan-3 lunar lander - CNN",
  //         "description": "India’s lunar lander deployed a tiny six-wheeled rover to traverse the moon’s surface and analyze the chemical composition of the soil.",
  //         "url": "https://www.cnn.com/2023/08/25/world/india-chandrayaan-3-lander-rover-images-scn/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230825104900-03-india-chandrayaan-3-lander-rover-new-photos-0823-screenshot.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-08-25T19:50:00Z",
  //         "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThe history-making Chandrayaan-3 mission, which landed… [+2758 chars]"
  //       },
  //       {
  //         "source": { "id": "cnn", "name": "CNN" },
  //         "author": "Ashley Strickland",
  //         "title": "Mysterious dark spot detected on Neptune - CNN",
  //         "description": "Astronomers have observed a mysterious large dark spot in Neptune’s atmosphere, along with a bright feature that has never been spotted before.",
  //         "url": "https://www.cnn.com/2023/08/25/world/neptune-dark-spot-scn/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230825130230-02-neptune-dark-spot.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-08-25T19:26:00Z",
  //         "content": "Editors note: Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers have spotted a large and mys… [+4532 chars]"
  //       },
  //       {
  //         "source": { "id": "abc-news", "name": "ABC News" },
  //         "author": "Meredith Deliso",
  //         "title": "Woman rescued from kidnapping after passing note to gas station customer, authorities say - ABC News",
  //         "description": "The note said \"help\" and \"call 911,\" authorities said.",
  //         "url": "https://abcnews.go.com/US/woman-rescued-kidnapping-after-passing-note-gas-station/story?id=102567908",
  //         "urlToImage": "https://s.abcnews.com/images/US/car2-ht-ml-230825_1692987175912_hpMain_16x9_992.jpg",
  //         "publishedAt": "2023-08-25T19:15:03Z",
  //         "content": "An Arizona woman was saved from an alleged kidnapping by passing a note to a gas station customer that said to call 911, authorities said.\r\nThe woman was allegedly kidnapped from a car dealership in … [+2123 chars]"
  //       },
  //       {
  //         "source": { "id": null, "name": "Space.com" },
  //         "author": "Tereza Pultarova",
  //         "title": "Watch new NASA sensor measure US air pollution from space in real time (video) - Space.com",
  //         "description": "The TEMPO instrument is the first to monitor air pollution levels across America in real time.",
  //         "url": "https://www.space.com/new-nasa-satellite-real-time-air-pollution-maps",
  //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/AUp74mwk2DDvqpBKoPp25Z-1200-80.jpg",
  //         "publishedAt": "2023-08-25T19:00:24Z",
  //         "content": "The first images from NASA's new spaceborne air pollution sensor reveal how levels of toxic pollutants change within a day across the United States. \r\nThe images taken by the Tropospheric Emissions: … [+3323 chars]"
  //       }
  // ]
  static defaultProps = {
    country: "in",
    page: 5,
    cat: "general",
    pageSize: 5,
  };
  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
    cat: PropTypes.string,
    pageSize: PropTypes.number,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.cat
    )} -- FastNews`;
  }
  async update() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=7fbac38761a84d099b03cc4db42fef6d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //Using fetch api
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // //url is news api
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=7fbac38761a84d099b03cc4db42fef6d&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url); //Using fetch api

    // let parseData = await data.json()
    // console.log(parseData)
    // this.setState({articles:parseData.articles,totalResults : parseData.totalResults,loading:false})
    this.update();
  }
  handlePrev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=7fbac38761a84d099b03cc4db42fef6d&page=${this.state.page - 1}&pageSize=${this.props.page}`;
    // this.setState({loading:true})
    // let data = await fetch(url); //Using fetch api
    // let parseData = await data.json()
    // console.log(parseData)

    // this.setState({page: this.state.page-1,articles:parseData.articles,loading:false})
    this.setState({ page: this.state.page - 1 });
    this.update();
  };
  handleNext = async () => {
    // if(!(this.state.page + 1 > Math.ceil( this.state.totalResults/this.props.page))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=7fbac38761a84d099b03cc4db42fef6d&page=${this.state.page + 1}&pageSize=${this.props.page}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url); //Using fetch api
    // let parseData = await data.json()
    // console.log(parseData)

    // this.setState({page: this.state.page+1,articles:parseData.articles,loading:false})
    // }
    this.setState({ page: this.state.page + 1 });
    this.update();
  };
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.cat}&apiKey=7fbac38761a84d099b03cc4db42fef6d&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url); //Using fetch api

    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h3 className="headingcomp text-center my-4" style={{ margin: "50px" }}>
          FastNews Top {this.capitalizeFirstLetter(this.props.cat)} Readings
        </h3>
        {/* {this.state.loading && <Spin />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.dataLength !== this.state.totalResults}
          loader={<Spin />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      desc={element.description ? element.description : ""}
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      time={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            style={{ margin: "30px" }}
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-light"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            style={{ margin: "30px" }}
            disabled={
              this.state.page + 1 >=
              Math.ceil(this.state.totalResults / this.props.page)
            }
            type="button"
            className="btn btn-light"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default NewsCompo;
