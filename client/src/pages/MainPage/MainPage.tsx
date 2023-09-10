import Main from "./main/Main"
import SideBar from "./sidebar/SideBar"

const MainPage = (  ) => {
  return (
    <div className="flex w-full">

      <SideBar/>
      <Main/>

    </div>
  )
}

export default MainPage