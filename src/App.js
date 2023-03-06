import { Home,Createpost } from './pages';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import { Formfiled } from './component';
function App() {
  return (
   <>
   <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 px-4 ' >

      <Link to='' className="w-28 object-contain">
      <img src="download.png" className="font-extrabold text-[#222328] text-[32px] w-20"></img> 
        </Link>
        <Link to='/creatpost' className="font-inter font-medium   bg-[#6469ff] text-white px-4 py-2 rounded-md">
      Creat post
        </Link>


    </header>


    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/creatpost' element={<Createpost/>}></Route>

          </Routes>
          </main>
   </BrowserRouter>
   </>
  );
}

export default App;
