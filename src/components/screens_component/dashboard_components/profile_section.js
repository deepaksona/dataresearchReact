import power from '../../../assets/svg/power.svg';
import setting from '../../../assets/svg/setting.svg';
import profile from '../../../assets/svg/profile.svg';

function ProfileSection() {
    
    return (
        <div className='proifle-section'>

                      <img src={power} className='icon-size'></img>
                      <div className='profile-detail'>
                        <img src={profile} className='profile-image'></img>
                        <text className='profile-text' >Deepak Sona</text>
                        <text className='profile-email-text' >deepaksona2000@gmail.com</text>
                      </div>
                      <img src={setting} className='icon-size'></img>
                      
                    </div>
    );
}
export default ProfileSection