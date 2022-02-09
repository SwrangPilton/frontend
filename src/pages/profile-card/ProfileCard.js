/* eslint-disable jsx-a11y/alt-text */
import './index.css'
import cardBg from './images/bg-pattern-card.svg'
import avatar from './images/avatar.jpg'

function ProfileCard() {
    return (
        <main id='profile-component' className="bg-profile h-screen flex items-center">
            <div className="mx-auto w-3/4 lg:w-3/12 bg-red rounded-2xl bg-white profile_card">
                {/* <div className='bg-blue-500 rounded-t-2xl'>&nbsp;</div> */}
                <img className="h-48 w-full rounded-tl-2xl rounded-tr-2xl"
                    src={cardBg}
                    alt="" />

                <div className="flex flex-wrap flex-col items-center tracking-wide text-center px-4 pb-2 relative">
                    <img src={avatar}
                        alt="avatar" className='rounded-full w-32 lg:w-40 border-8 border-white relative bottom-16 lg:bottom-20' />
                    <div className="relative bottom-8">
                        <h1 className='text-3xl font-semibold mb-2'>Victor Crest <span className='text-3xl font-light'>26</span> </h1>
                        <p className='text-xl'>London</p>
                    </div>
                    {/* <hr className='profile_border border-white' /> */}
                </div>

                <div className="flex flex-wrap flex-row justify-between text-center items-center px-4 lg:px-10 pb-8 profile_border border-gray-600 pt-6">
                    <div className='flex-col tracking-wider'>
                        <h1 className='text-xl lg:text-2xl font-bold mb-2'>80K</h1>
                        <p className='lg:text-xl'>Followers</p>
                    </div>
                    <div className='flex-col tracking-wider'>
                        <h1 className='text-xl lg:text-2xl font-bold mb-2'>803K</h1>
                        <p className='lg:text-xl'>Likes</p>
                    </div>
                    <div className='flex-col tracking-wider'>
                        <h1 className='text-xl lg:text-2xl font-bold mb-2'>1.4K</h1>
                        <p className='lg:text-xl'>Photos</p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default ProfileCard;
