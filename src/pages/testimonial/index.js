/* eslint-disable jsx-a11y/alt-text */
import './index.css'

function App() {
    return (
        <main className="xl:p-0 bg-testimonial">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-2 gap-y-4 xl:gap-6 p-5 xl:px-16 xl:py-12">
                <div className="p-8 xl:col-span-2 bg-purple-800 text-white rounded-2xl order-1">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Daniel Clifford</h1>
                            <h3 className="text-sm lg:text-lg">Vertified Graduate</h3>
                        </div>
                    </div>

                    <h1 className="text-xl lg:text-2xl my-6 font-bold">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.</h1>

                    <p className="text-sm lg:text-lg tracking-tighter">I was an EMT for many years before I joined the bootcamp. rye been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free Intro course and found it Incredibly fun, I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."</p>
                </div>

                <div className="p-8 bg-gray-600 text-white rounded-2xl order-2">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Jonathan Walters</h1>
                            <h3 className="text-sm lg:text-lg">Vertified Graduate</h3>
                        </div>
                    </div>
                    <h1 className="text-xl lg:text-2xl my-6 font-bold">The team was very supportive and kept me motivated</h1>
                    <p className="text-sm lg:text-lg tracking-tighter">" I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself..
                    </p>
                </div>

                {/* //! CHANGE ORDER */}
                <div className="xl:row-span-2 p-8 shadow-2xl bg-white rounded-2xl order-5 xl:order-3 ">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Kira Whittle</h1>
                            <h3 className="text-sm lg:text-lg">Vertified Graduate</h3>
                        </div>
                    </div>

                    <h1 className="text-xl lg:text-2xl my-6 font-bold">Such a life-changing experience. Highly recommended!</h1>

                    <p className="text-sm lg:text-lg tracking-tighter">" Before joining the bootcamp, I,e never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to waIt long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend " </p>
                </div>

                <div className="p-8 shadow-2xl bg-white rounded-2xl order-4">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Jeanette Harmon</h1>
                            <h3 className="text-sm lg:text-lg">Vertified Graduate</h3>
                        </div>
                    </div>
                    <h1 className="text-xl lg:text-2xl my-6 font-bold">An overall wonderful and rewarding experience</h1>
                    <p className="text-sm lg:text-lg tracking-tighter">Thank you tor the wonderful experience, I now have a job I really enjoy, and make a good living while doing something I love."</p>
                </div>

                <div className="p-8 xl:col-span-2 bg-gray-800 text-white rounded-2xl order-4 lg:order-5">
                    <div>
                        <h1 className="text-lg font-bold">Patrick Abrams</h1>
                        <h3>Vertified Graduate</h3>
                    </div>
                    <h1 className="text-xl lg:text-2xl my-6 font-bold"> Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h1>

                    <p className="text-sm lg:text-lg tracking-tighter">The staff seem genuinely concerned about my progress which I find really refreshing The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest You will get the personal attention you need from an incredible community of smart and amazing people </p>
                </div>

            </div>
        </main>
    );
}

export default App;
