import styles from "./Main.module.css"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Main = () => {
    return (
        <Grid container className={styles.padding}>
            <img className={styles.img} src="/images/image-web-3-desktop.jpg" />
            <div className={styles.under} >
                <Grid item xs={6}><h1>The Bright Future of Web 3.0?</h1></Grid>
                <Grid item xs={6}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?
                    <div>
                        <Button variant="contained" size="small" color="error">
                            read more
                        </Button>
                    </div>
                </Grid>
            </div>
        </Grid>
    )
}
export default Main