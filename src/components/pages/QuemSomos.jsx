import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"


const QuemSomos = () => {
  return (
    <>
      <Header />
      <div id="main">
        <Sidebar />
        <div>Quem somos</div>
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default QuemSomos