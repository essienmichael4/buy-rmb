import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
         {/* <Route element={< />}> */}
        //     <Route path=''>
        //       {/* <Route path="dashboard" element={<Dashboard/>} /> */}
        //     </Route>
         {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
