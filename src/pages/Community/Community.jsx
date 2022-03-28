import styles from './Community.module.css'
import PublicBuilds from '../../components/PublicBuilds/PublicBuilds';

const Community = (props) => {
   return (
      <>
         <div className={styles.background}>
            <h1>Recent News</h1>
            {/* 
         -  Put Genshin Impact updates/patches and maybe some stuff about our website and changes? 
         -  Recent News will be a banner that will lead into another component display full information. Community page will show short info.
         -  Style will be similar to a banner with background image blurred
         */}


            {/* -------------------------------------------------------- */}

            <h2>Recent Public Builds</h2>
            <PublicBuilds props={props} />
            {/* 
         -  Put component of public builds here!!! 
         -  Content will display underneath the Blurred Background Image + Genshin Impact/Genshin Build Webiste news 
         */}

         </div>
      </>
   );
}

export default Community;