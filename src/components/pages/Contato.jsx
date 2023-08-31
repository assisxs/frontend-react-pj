import Header from "../layout/Header"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import Sidebar from "../layout/Sidebar"

const Contato = () => {
  return (
    <>
      <Header />
      <div id="main">
        <Sidebar />
        <Content>
          <h1>Página de Contato</h1>
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default Contato