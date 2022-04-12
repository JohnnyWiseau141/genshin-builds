import styles from './RecentNews.module.css'

const RecentNews = (props) => {
   return (
      <>
         <h1>Recent News Component</h1>
         {/* Map out three to five most recent updates genshin impact has made showing: 
            - short description 
            - image of related update
            - time and date of update 
            
         Clicking on image or div of news will redirect to details page, NewsDetails PAGE**.
         */}


         {/* Here will be a redirect link to a new page, AddNews component, to add information for a new genshin impact update to be added.  */}
         <button className="button is-primary">Add News</button>
      </>
   );
}

export default RecentNews;