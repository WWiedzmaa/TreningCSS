import Button from '@mui/material/Button';
import styles from "./Header.module.css";
const Header = ()=>{
    return(
        <div>
<img src="/images/logo.svg" />
<div className={styles.bnt}>
<Button>Home</Button>
<Button>New</Button>
<Button>Popular</Button>
<Button>Trending</Button>
<Button>Categories</Button>
</div>
</div>
    )
}
export default Header