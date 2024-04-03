import './ErrorMessage.css';
import Button from '../button/Button';

export default function ErrorMessage ({err}) {

    function reloadePage() {
        window.location.reload(false);
    }

    return (
        <div className='error-message'>
            <div className='img-box'>
                <img src="../src/assets/error.webp" alt="error image" loading="lazy" className='error-img'/>
            </div>
            <div className='error-text'>
                <h2>{err}</h2>
                <span>Oops! Something went wrong. <br></br>Please reloade the page or try again later.</span>
                <Button variant={'outlined'} onClick={reloadePage}>RELOAD</Button>
            </div>
        </div>
    )
}