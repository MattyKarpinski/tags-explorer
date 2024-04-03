import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Footer.css';

export default function footer()  {

    const currentYear = new Date().getFullYear(); 
    
    return (
        <>
            <footer className='footer-signature'>
                <span>Made with</span><i><FavoriteBorderIcon></FavoriteBorderIcon></i> by&nbsp;<span><a href="https://mateuszkarpinski.netlify.app/"> MK </a>{currentYear}</span>
            </footer>
        </>

    );

}