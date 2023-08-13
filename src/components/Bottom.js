import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from "./Bottom.module.css"
const Bottom = (props) => {
    console.log(props);
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`/images/${props.image}.jpg`}
                    alt="Old computer"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.box}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <div className={styles.numbers}><b>0{props.image}</b></div>
                        <h4> {props.title}</h4>
                        <div>{props.article}</div>
                    </CardContent>

                </Box>
            </Card>
        </div>
    )
}
export default Bottom