import { Grid } from "@mui/material";
import styles from "./Left.module.css"
import Divider from '@mui/material/Divider';
const Left = () => {
    return (
        <div className={styles.left}>
            <h2>New</h2>
            <div><p><b>Hydrogen VS Electric Cars</b></p>
                <div> Will hydrogen-fueled cars ever catch up to EVs?</div></div>
                <Divider className={styles.divider}/>
            <div>
                <p><b>The Downsides of AI Artistry</b></p>
               <div> What are the possible adverse effects of on-demand AI image generation?</div>
            </div>
            <Divider className={styles.divider} />
            <div>
                <p><b> Is VC Funding Drying Up?</b></p>

                <div>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
            </div>
        </div>
    )
}

export default Left;
