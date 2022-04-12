import styles from './Community.module.css'
import PublicBuilds from '../../components/PublicBuilds/PublicBuilds';
import RecentNews from '../../components/RecentNews/RecentNews';

const Community = (props) => {
   return (
      <>
         <div className={styles.background}>
            <div className={styles.news}>
               <h2 className='is-size-2'>Recent News</h2>
               <RecentNews />
               {/* 
                  -  Put Genshin Impact updates/patches and maybe some stuff about our website and changes? 
                  -  Recent News will be a banner that will lead into another component display full information. Community page will show short info.
                  -  Style will be similar to a banner with background image blurred
               */}
            </div>

            {/* ---------------------------------------------------------------------*/}

            <div className={styles.public_builds}>
               <h2 className='is-size-2'>Community Team Builds</h2>
               <PublicBuilds props={props} />
               {/* 
               -  Put component of public builds here!!! 
               -  Content will display underneath the Blurred Background Image + Genshin Impact/Genshin Build Webiste news 
               */}
            </div>
         </div>
      </>
   );
}

export default Community;