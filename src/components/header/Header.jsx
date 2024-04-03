import './Header.css';

export default function header() {

    return (
            <header className='header-box'>
                <div className='app-name'>stack exchange<span> tags</span></div>
                <nav>
                    <ul>
                        <li><a href="https://api.stackexchange.com/">API Docs</a></li>
                        <li><a href="https://api.stackexchange.com/docs/tags">Tags Docs</a></li>
                    </ul>
                </nav>
            </header>
       
    )
}