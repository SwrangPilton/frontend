import React from 'react'
import pc from './images/pc.png'
import logo from './images/logo.svg'
import blacklist from './images/blacklist.svg'
import preview from './images/preview.svg'
import plainText from './images/text.svg'
import device from './images/device.png'
import googleLogo from './images/logo-google.png'
import ibmLogo from './images/logo-ibm.png'
import microsoftLogo from './images/logo-microsoft.png'
import hpLogo from './images/logo-hp.png'
import vectorLogo from './images/logo-vector-graphics.png'
import './index.css'

export default function index() {
    return (
        <div className='clipboard-landing'>
            {/* //! Head  */}
            <div className="middle px-5 md:px-3 md:w-3/4 lg:w-3/5 mx-auto text-center my-16">
                <img src={logo} className='my-10 mx-auto' alt="" />
                <h1 className='text-4xl md:text-5xl font-bold mb-5'>A history of everything you copy</h1>
                <p className='text-gray-500 text-xl mb-10'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all of your devices.</p>

                <div className="flex flex-wrap items-center justify-center">
                    <button className='w-full md:w-auto mb-5 md:mb-0 py-3 px-6 text-xl bg-green-600 hover:bg-green-500 shadow-md text-white rounded-3xl mr-0 md:mr-4'>Download for iOS</button>
                    <button className='w-full md:w-auto py-3 px-6 text-xl bg-blue-600 hover:bg-blue-500 shadow-md text-white rounded-3xl'>Download for Mac</button>
                </div>
            </div>

            {/* //! Features  */}
            <div className="middle px-5 md:px-0 md:w-3/4 lg:w-3/5 mx-auto text-center my-16">
                <h1 className='text-4xl md:text-5xl font-bold mb-5'>Keep Track of your snippets</h1>
                <p className='text-gray-500 text-xl mb-10'>Clipboard instantly stores any item of your copy in the cloud, meaning you can access your snippets immediately on all of your devicecs. Our Mac and iOS apps will help you organize everything.</p>
            </div>

            <div className="feature grid grid-cols-1 md:grid-cols-2 gap-x-10 my-16 items-center">
                <div className='px-5 md:px-0 mb-10 md:mb-0 relative md:right-10'>
                    <img src={pc} className='' alt="" />
                </div>
                <div className='flex flex-wrap flex-col text-center px-5 md:px-0 md:text-left md:w-3/4 lg:w-1/2'>
                    <div className=''>
                        <h1 className='text-3xl font-semibold mb-3'>Quick Search</h1>
                        <p className='text-xl text-gray-500'>Easily search your snippets by content, category, web address, application and much more.</p>
                    </div>
                    <div className='my-10'>
                        <h1 className='text-3xl font-semibold mb-3'>iCloud Sync</h1>
                        <p className='text-xl text-gray-500'>Instantly saves and sync snippets across all your devices.</p>
                    </div>
                    <div className=''>
                        <h1 className='text-3xl font-semibold mb-3'>Complete History</h1>
                        <p className='text-xl text-gray-500'>Retrieve any snippets from the first moment you started using the app.</p>
                    </div>
                </div>
            </div>

            {/* //! Feature  */}
            <div className="middle px-5 md:px-0 md:w-3/4 lg:w-1/2 mx-auto text-center my-16">
                <h1 className='text-4xl md:text-5xl font-bold mb-5'>Access clipboard anywhere</h1>
                <p className='text-gray-500 text-xl mb-10'>Whether you're on the go, or at your computer, you can acess all your Clipboard snippets in a few simple clicks.</p>
            </div>

            <div className="middle md:w-3/5 mx-auto">
                <img src={device} className='w-full h-full' alt="" />
            </div>

            {/* //! Feature  */}
            <div className="middle px-5 md:px-0 md:w-3/4 lg:w-1/2 mx-auto text-center mb-16">
                <h1 className='text-4xl lg:text-5xl font-bold mb-5'>Supercharge your work flow</h1>
                <p className='text-gray-500 text-xl mb-10'>We've got the tools to boost your productivity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 md:w-5/6 px-5 lg:px-0 md:px-0 mx-auto mt-10 md:mt-20 text-center">
                <div className='mb-8'>
                    <img src={blacklist} className='mx-auto mb-8' alt="" />
                    <h1 className='text-2xl xl:text-3xl font-bold mb-5'>Create blacklists</h1>
                    <p className='text-gray-500 text-xl'>Ensure your sensitive information  never makes its way to your clipboard by excluding certain sources.</p>
                </div>

                <div className='mb-8'>
                    <img src={plainText} className='mx-auto mb-8' alt="" />
                    <h1 className='text-2xl xl:text-3xl font-bold mb-5'>Plain text snippets</h1>
                    <p className='text-gray-500 text-xl'>Remove unwanted formatting from the copied text for a consistent look.</p>
                </div>

                <div className='mb-8'>
                    <img src={preview} className='mx-auto mb-8' alt="" />
                    <h1 className='text-2xl xl:text-3xl font-bold mb-5'>Sneak preview</h1>
                    <p className='text-gray-500 text-xl'>Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>
            </div>

            {/* //! Companies  */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 md:gap-5 md:w-5/6 px-5 md:px-0 items-center mx-auto mt-10 md:mt-20">
                <img src={googleLogo} className='mx-auto' style={{ width: '160px' }} alt="" />
                <img src={ibmLogo} className='mx-auto' style={{ width: '160px' }} alt="" />
                <img src={microsoftLogo} className='mx-auto' style={{ width: '160px' }} alt="" />
                <img src={hpLogo} className='mx-auto' style={{ width: '160px' }} alt="" />
                <img src={vectorLogo} className='mx-auto' style={{ width: '160px' }} alt="" />
            </div>
            {/* //! Feature  */}
            <div className="middle px-5 md:px-0 md:w-3/4 lg:w-1/2 mx-auto text-center my-16">
                <h1 className='text-4xl md:text-5xl font-bold mb-5'>Clipboard for iOS and Mac OS</h1>
                <p className='text-gray-500 text-xl mb-10'>Available for free on the App Store. Download for iOS or Mac OS, sync with iCloud and you're ready to start adding to your clipboard.</p>

                <div className="flex flex-wrap items-center justify-center">
                    <button className='w-full md:w-auto mb-5 md:mb-0 py-3 px-6 text-xl bg-green-600 hover:bg-green-500 shadow-md text-white rounded-3xl mr-0 md:mr-4'>Download for iOS</button>
                    <button className='w-full md:w-auto py-3 px-6 text-xl bg-blue-600 hover:bg-blue-500 shadow-md text-white rounded-3xl'>Download for Mac</button>
                </div>
            </div>

        </div>
    )
}
