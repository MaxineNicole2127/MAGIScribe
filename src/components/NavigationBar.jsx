import Plus_Math from '../assets/images/Plus_Math.png';
import Mask_Group from '../assets/images/Mask_Group.png';

const NavigationBar = () => {
    return (
        <nav>
            <h1>Home</h1>
            <div className="right">
                <button className='join-class'>
                    <img src={Plus_Math} alt="join-class" />
                    Join Class
                </button>
                <img src={Mask_Group} alt="account" className='account-pic'/>
            </div>
        </nav>
    )
}

export default NavigationBar;