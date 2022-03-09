import React from "react";
import './Home.css'
import { AiFillPlayCircle } from "react-icons/ai";
import { FcManager } from "react-icons/fc";
import { BsLightningFill } from "react-icons/bs";
import { BsMegaphoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { ImGoogle } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';
import Img5 from './images/5.jpg';
import Img6 from './images/6.jpg';
import Img7 from './images/7.jpg';
import Img8 from './images/8.jpg';
import Img9 from './images/9.jpg';


const Home = () => {
    return ( 
        <div className="all bg-slate-50	">
            <nav className="stage1 flex ml-8 pb-2 mt-16 bg-white rounded-b-2xl" id="nav">
                <div className="flex">
                    <label id="logo" className="ml-2 font-bold text-3xl text-blue-600">Besnik.</label>
                </div>
                <div className="flex mx-auto mt-3 whitespace-nowrap OV scrollbar-hide">
                    <ul>
                        <a href="/" className="a text-blue-600 ml-8">Home</a>
                        <a href="/" className="a text-blue-600 ml-8">Offers</a>
                        <a href="/" className="a text-blue-600 ml-8">Company</a>
                        <a href="/" className="a text-blue-600 ml-8">Services</a>
                        <a href="/" className="a text-blue-600 ml-8">Contact</a>
                    </ul>
                </div>
                <div className="flex mr-4 whitespace-nowrap">
                    <a href="/" className="text-blue-700 mt-3 mr-4">Sign in</a>
                    <button className="bg-blue-600 p-2 mt-1 text-white rounded-xl" id="logos">Get started</button>
                </div>
            </nav>
            <div className="MT mt-24">
                <div className="grid">
                    <div className="">
                        <h1 className="text-blue-900 font-bold text-4xl">Professionnal <br />marketing copy <br />for anyone</h1>
                        <div className="flex">
                            <p className="mt-8 bg-yellow-500 text-3xl p-4 Zt"><FcManager/></p>
                            <p className="text-blue-800 font-medium text-xl mt-8 ml-4">We blend insights and strategy to create digital <br />products for forward-thinking organisations.</p>
                        </div>
                        <div className="mt-6 BTN">
                            <button className="whitespace-nowrap px-4 py-2 text-white bg-blue-700 rounded-xl">Learn more</button>
                                <p className="flex mt-4 mx-3 font-medium text-blue-800"><a href="/" className="text-6xl text-white pl-1 bg-red-400 rounded-full"><AiFillPlayCircle/></a><span className="mt-4 ml-4">How it works</span></p>
                        </div>
                    </div>
                    <div className="img mb-8 t-0">
                        <img src={Img1} alt="loading" className='LG absolute mt-16 ml-52'/>
                        <div className="ps bg-white px-8 py-4 w-60 rounded-2xl relative ml-8  mr-2/5">
                            <p  className="text-blue-500 font-medium flex mb-4"><p className="text-yellow-500 font-bold mt-2 mx-2"><BsLightningFill/></p>Performance</p>
                            <div className="p-1 rounded mb-2 w-16 bg-gray-300"></div>
                            <div className="p-1 rounded mb-2 w-40 bg-blue-700"></div>
                            <div className="p-1 rounded mb-2 w-32 my-8 bg-gray-300"></div>
                            <div className="p-1 rounded mb-2 w-40 bg-blue-700"></div>
                            <div className="p-1 rounded mb-2 w-24 my-8 bg-gray-300"></div>
                            <div className="p-1 rounded mb-2 w-40 bg-blue-700"></div>
                            <div className="p-1 rounded mb-2 w-8 bg-gray-300"></div>
                            <div className="p-1 rounded mb-2 w-40 bg-blue-700"></div>
                        </div>
                        <div className="red bg-red-400 w-48 mt-12 relative rounded-2xl mr-2/5">
                            <p className="text-white ml-8 py-8 font-medium text-2xl">2M+ <br /> <span className="text-lg">Trusted Users</span></p>
                            <p className="text-white ml-8 py-8 font-medium text-2xl">95% <br /> <span className="text-lg">Return Customers</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stage2 mt-24 mb-16">
                <div className="text-center">
                    <p className="text-blue-700 font-medium text-2xl">OUR SERVICES</p>
                    <p className="my-4 text-blue-900 font-bold text-5xl AG">We're digital marketing pro</p>
                    <p className="text-gray-700 font-medium text-xl">No matter what you're looking for,we can create a <br /> custom solution for your business.</p>
                </div>
                <div className="gride mt-16 justify-center">
                    <div className="social media bg-white px-4 py-8 rounded-2xl A">
                        <p className="text-white text-3xl rounded-2xl p-4 bg-blue-600 w-16"><BsMegaphoneFill/></p>
                        <p className="text-blue-800 font-bold text-xl my-4">Social Media</p>
                        <p className="text-blue-600">Build brand awareness on the <br /> top social media networks.</p>
                    </div>
                    <div className="Email marketing bg-white px-4 py-8 rounded-2xl A">
                        <p className="text-white text-3xl rounded-2xl p-4 bg-red-400 w-16"><IoIosMail/></p>
                        <p className="text-blue-800 font-bold text-xl my-4">Email Marketing</p>
                        <p className="text-blue-600">Nurture valuable leads into <br />customers, and turn one-time.</p>
                    </div>
                    <div className="Content Marketing bg-white px-4 py-8 rounded-2xl A">
                        <p className="text-white text-3xl rounded-2xl p-4 bg-yellow-400 w-16"><RiContactsBookFill/></p>
                        <p className="text-blue-800 font-bold text-xl my-4">Content Marketing</p>
                        <p className="text-blue-600">Get Professionally-written <br /> content that attracts qualification</p>
                    </div>
                </div>
            </div>
            <div className="stage3 mb-16">
                <div className="grid">
                    <div className="one ">
                        <img src={Img2} alt="loading" className='one absolute w-1/4 h-64 rounded-3xl'/>
                        <div className="set text-center relative bg-white w-32 rounded-lg">
                            <p className="text-blue-500 ml-14 pt-3"><FaGlobe/></p>
                            <p className="text-blue-900 font-bold text-xl">23.8k</p>
                            <p className="text-blue-500 text-xs">Reach</p>
                            <p className="text-blue-900 font-bold text-sm">^ 11.5%</p>
                        </div>
                    </div>
                    <div className="sec">
                        <p className="text-blue-600 mb-2 text-sm font-bold">ABOUT US</p>
                        <p className="text-blue-900 font-bold text-3xl mb-4">We start with discovery <br />call to understand</p>
                        <p className="text-blue-900 font-medium text-sm mb-4">we present you a proposal and discuss nitty-gritty like <br />workflows, communication protocols apart from <br /> engagement models,pricing,billing and invoicing.</p>
                        <p className="text-blue-900 font-medium text-sm">Backed by an experience of nearly two <br /> decades in digital marketing</p>
                        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-sm mt-8 block mx-auto">Learn more</button>
                    </div>
                </div>
                <div className="stage4 my-16">
                    <div className="grid">
                        <div className="one ml-16">
                            <p className="text-blue-600 mb-2 text-sm font-bold">OUR SOLUTION</p>
                            <p className="text-blue-900 font-bold text-3xl mb-3">Launch and scale your <br />marketing campaigns</p>
                            <p className="text-blue-900 font-medium text-sm mb-4">we start with a kick-off call with the respective project <br />owner, onboard the teams on the project management <br /> platforms and, take off!</p>
                            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-sm mt-8">Learn more</button>
                        </div>
                        <div className="sec">
                            <img src={Img3} alt="loading" className=' one absolute ml-16 mt-16 w-1/4 h-64 rounded-3xl'/>
                            <div className="sets relative bg-white w-32 rounded-lg">
                                <p className="ml-4 text-blue-800 pt-3 text-xl mb-2"><ImGoogle/></p>
                                <p className="ml-4 text-blue-900 font-bold text-sm">Google<br />ads</p>
                                <p className="ml-4 text-blue-500 text-xs flex my-1 "><span className="text-yellow-500"><AiFillStar/></span>4.9</p>
                                <p className="ml-4 text-blue-600 font-bold text-sm">11.5%</p>
                                <p className="ml-4 text-blue-900 font-bold text-sm pb-4">247 reviews</p>
                            </div>
                            <div className="seg relative bg-white w-32 rounded-lg">
                                <p className="ml-4 text-blue-800 pt-3 text-xl mb-2"><FaTwitter/></p>
                                <p className="ml-4 text-blue-900 font-bold text-sm">Twitter<br />ads</p>
                                <p className="ml-4 text-blue-500 text-xs flex my-1 "><span className="text-yellow-500"><AiFillStar/></span>3.9</p>
                                <p className="ml-4 text-blue-600 font-bold text-sm">15%</p>
                                <p className="ml-4 text-blue-900 font-bold text-sm pb-4">345 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stage5 grided py-8">
                    <div className="bg-blue-700 p-8 rounded-2xl A">
                        <p className="text-white text-5xl font-bold text-center mb-4">96%</p>
                        <p className="text-white text-center">Client retetion <br /> By Dalibor and Marino <br />in Hong Kong</p>
                    </div>
                    <div className="bg-red-500 p-8 rounded-2xl A">
                        <p className="text-white text-5xl font-bold text-center mb-4">10+</p>
                        <p className="text-white text-center">Year of service <br /> By Dalibor and Marino <br />in Hong Kong</p>
                    </div>
                    <div className="bg-yellow-600 p-8 rounded-2xl A">
                        <p className="text-white text-5xl font-bold text-center mb-4">70+</p>
                        <p className="text-white text-center">Professionals <br /> By Dalibor and Marino <br />in Hong Kong</p>
                    </div>
                    <div className="bg-indigo-900 p-8 rounded-2xl A">
                        <p className="text-white text-5xl font-bold text-center mb-4">$40M</p>
                        <p className="text-white text-center">In funding <br /> By Dalibor and Marino <br />in Hong Kong</p>
                    </div>
                </div>
                <div className="stage6 py-8">
                    <div className="text-center">
                        <p className="my-4 text-blue-900 font-bold text-5xl">Pricing Plan</p>
                        <p className="text-blue-600 font-medium text-sm">Stop wasting time and money designing and managing a website <br /> that doesn't get results. Happiness guaranteed!</p>
                    </div>
                    <div className="grider">
                        <div className="bg-white p-8 rounded-2xl">
                            <div className="flex">
                                <p className="text-blue-900 text-3xl p-4 bg-blue-100 rounded-2xl font-bold mb-4"><FaUserAlt/></p>
                                <p className="text-blue-900 text-2xl ml-3 font-bold">Private <br /> 2 License</p>
                            </div>
                            <br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">Carefully Crafted Com</span></p><br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">Amazing page examples</span></p><br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">2 license code</span></p><br />
                            <hr />
                            <p className="text-center font-bold my-8 text-3xl text-blue-900">$49</p>
                            <button className="text-blue-900 rounded-2xl block mx-auto py-4 px-16 border-2 border-blue-600">Purchase</button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl">
                            <div className="flex">
                                <p className="text-blue-900 text-3xl p-4 bg-blue-100 rounded-2xl font-bold mb-4"><FaUserFriends/></p>
                                <p className="text-blue-900 text-2xl ml-3 font-bold">Business <br /> 5 License</p>
                            </div>
                            <br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">5 amalytics campaings</span></p><br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">300 Keyword</span></p><br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">15 social pages</span></p><br />
                            <hr />
                            <p className="text-center font-bold my-8 text-3xl text-blue-900">$129</p>
                            <button className="bg-blue-900 text-white rounded-2xl block mx-auto py-4 px-16 border-2 border-blue-600">Purchase</button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl">
                            <div className="flex">
                                <p className="text-blue-900 text-3xl p-4 bg-blue-100 rounded-2xl font-bold mb-4"><HiUserGroup/></p>
                                <p className="text-blue-900 text-2xl ml-3 font-bold">Corporate <br /> 20 License</p>
                            </div>
                            <br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">100 analytics campaings</span></p><br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">7500 Keywords</span></p><br />
                            <p className="text-xl text-blue-300 flex SM"><BsCheckCircle/><span className="text-blue-500 text-sm SM ml-4">150 social accounts</span></p><br />
                            <hr />
                            <p className="text-center font-bold my-8 text-3xl text-blue-900">$189</p>
                            <button className="text-blue-900 rounded-2xl block mx-auto py-4 px-16 border-2 border-blue-600">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="stage7">
                    <div className="text-center">
                        <p className="my-4 text-blue-900 font-bold text-5xl">From our Blog</p>
                        <p className="text-blue-700 font-medium text-sm">93% of traffic begins with a search query.Even with a high <br /> number of searches begin performed.</p>
                    </div>
                    <div className="grider">
                        <div className="">
                            <div className="bg-blue-200 px-3 pt-3 rounded-t-xl">
                                <img src={Img4} alt="loading..." className=" rounded-t-xl" />
                            </div>
                            <p className="text-blue-900 text-xl font-bold mt-3">How to Merge Instagram <br /> Account</p>
                            <br />
                            <p className="text-blue-800 text-sm font-medium">So, you need to merge instagram <br />accounts but you're noot sure what to <br />do? No worries. I'll walk you through.</p>
                        </div>
                        <div className="">
                            <div className="bg-blue-200 px-3 pt-3 rounded-t-xl">
                                <img src={Img5} alt="loading..." className=" rounded-t-xl" />
                            </div>
                            <p className="text-blue-900 text-xl font-bold mt-3">Advanced SEO Tactics for <br />Become an SEO Expert</p>
                            <br />
                            <p className="text-blue-800 text-sm font-medium">Even with a high number of searches<br />being performed, the large majority of <br /> users don't ever scroll past the.</p>
                        </div>
                        <div className="">
                            <div className="bg-blue-200 px-3 pt-3 rounded-t-xl">
                                <img src={Img6} alt="loading..." className=" rounded-t-xl"/>
                            </div>
                            <p className="text-blue-900 text-xl font-bold mt-3">How to Optimize your <br />Digital Marketing Strategy</p>
                            <br />
                            <p className="text-blue-800 text-sm font-medium">When it comes to your digital<br />marketing strategy. It's not enough to <br /> have an eye-catching</p>
                        </div>
                    </div>
                    <button className="bg-blue-900 text-white rounded-2xl block mx-auto py-4 px-16">Learn more</button>
                </div>
                <div className="stage8">
                    <div className="text-center pt-8">
                        <p className="my-8 text-blue-900 font-bold text-5xl">Happy clients about us</p>
                        <div className="grider">
                            <div className=" bg-white p-8 rounded-2xl mb-4">
                                <div className="flex">
                                    <img src={Img7} alt="loading..." className="IMG w-1/4"/>
                                    <p className="text-blue-900 text-2xl ml-3 font-bold">Hope Vicky<br /><span className="text-sm font-medium"> CEO & Founder</span></p>
                                </div>
                                <p className="text-sm font-medium text-blue-900">"Besnik helps produce templates <br />for writing heading,transactional <br />email copy,Facebook ads and so <br /> much more."</p>
                            </div>
                            <div className=" bg-white p-8 rounded-2xl mb-4">
                                <div className="flex">
                                    <img src={Img8} alt="loading..." className="IMG w-1/4"/>
                                    <p className="text-blue-900 text-2xl ml-3 font-bold">Mark Hollis<br /><span className="text-sm font-medium"> Lead at Uniting Vic</span></p>
                                </div>
                                <p className="text-sm font-medium text-blue-900">"Besnik helps produce templates <br />for writing heading,transactional <br />email copy,Facebook ads and so <br /> much more."</p>
                            </div>
                            <div className=" bg-white p-8 rounded-2xl mb-4">
                                <div className="flex">
                                    <img src={Img9} alt="loading..." className="IMG w-1/4"/>
                                    <p className="text-blue-900 text-2xl ml-3 font-bold">Seth Wilson <br /><span className="text-sm font-medium">VP of Product Design</span></p>
                                </div>
                                <br />
                                <p className="text-sm font-medium text-blue-900">"Besnik helps produce templates <br />for writing heading,transactional <br />email copy,Facebook ads and so <br /> much more."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stage9 py-8 bg-blue-300 mx-8 rounded-2xl">
                    <p className="text-center my-8 text-blue-900 font-bold text-5xl KS ">Sign up for new Besnik content, <br />update,surveys & offers.</p>
                    <form className="flex">
                        <input type="text" placeholder="Enter Your Email Here" className="border-none w-2/5 p-4 content-center rounded-tl-2xl rounded-bl-2xl"/>
                        <button className="bg-blue-700 block w-34 rounded-tr-2xl rounded-br-2xl">Subscribe</button>
                    </form>
                </div>
                <div className="footer">
                    <div className="">
                        <div className=" pt-12 bg pb-4" id="flex">
                            <div className="first ml-8 sec">
                                <h1 className="text-blue-900 text-5xl font-bold mb-8">Besnik.</h1>
                                <p className="ml-4 font-medium text-blue-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Assumenda harum quis recusandae saepe,<br /> quas placeat blanditiis sit expedita tenetur nulla?Lorem ipsum <br /> dolor sit amet consectetur, adipisicing elit. Molestiae, excepturi.</p>
                            </div>
                            <div className="sec">
                                <h1 className="text-blue-900 text-5xl font-bold">Solutions</h1>
                                <p className="ml-4 text-blue-700 mt-4 font-medium"><a href="/">SEO Services</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Social Media</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Pay-per-click</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Web Analytics</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Web Development</a></p>
                            </div>
                            <div className="sec">
                                <h1 className="text-blue-900 text-5xl font-bold">Industries</h1>
                                <p className="ml-4 text-blue-700 mt-4 font-medium"><a href="/">Virtual Marketing</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Email Marketing</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Keyword Analytics</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Career</a></p>
                            </div>
                            <div className="sec">
                                <h1 className="text-blue-900 text-5xl font-bold">Company</h1>
                                <p className="ml-4 text-blue-700 mt-4 font-medium"><a href="/">Consumer</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Leadership</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Content Management</a></p>
                                <p className="ml-4 text-blue-700 font-medium"><a href="/">Login</a></p>
                            </div>
                        </div>
                        <div className="icons text-4xl pb-4 ">
                            <div className="ml-40 AS">
                                    <h3>Social Media</h3>
                                <div className="flex">
                                    <p className="ml-4 text-blue-700"><BsFacebook/></p>
                                    <p className="ml-4 text-blue-700"><AiFillTwitterCircle/></p>
                                    <p className="ml-4 text-green-900"><BsWhatsapp/></p>
                                    <p className="ml-4 text-blue-700"><BsLinkedin/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;