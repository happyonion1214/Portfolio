import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-co md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow  mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl t font-medium mb-4'>NisshoCode<br />
              My Portfolio WebSite</h1>
            <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML,CSS,JavaScript,TypeScript,PHP,SQL,ReactなおWeb全般とPythonです。自身が作ったものを公開しておりますので、是非見ていてください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            {/* <img src="./img/myPicture.png" alt="" /> */}
            <img src="./img/myPicture-removebg-preview.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl  font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行ったいました。

            </p>
            <p>
              以下に個人として成果物を公開しています。
            </p>
          </div>
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex item-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>
                <div>
                  <p>ReactとJavaScript!で投稿機能付きのChatアプリ、使用はReact,JavaScript,</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex item-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 5H19V19H16L16 8H5V5Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19ZM10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14C8 15.1046 8.89543 16 10 16Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>AI finance</h2>
                </div>
                <div>
                  <p>AIを使った株やビットコインのデータの取得</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex item-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Site Dev</h2>
                </div>
                <div>
                  <p>中小企業のWebサイト構築</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 max-auto flex flex-wrap'>
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="" />
          </div>
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skill</h1>
            <div>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{ width: "75%" }}>75%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "60%" }}>60%</div>
              </div>
              <h2>Python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{ width: "80%" }}>80%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
