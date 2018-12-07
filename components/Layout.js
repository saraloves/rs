import Header from './Header'
import Chart from './Chart'
import Chat from './Chat'

const layoutStyle = {
  margin: 20,
  padding: 20

}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header/>
      <Chart/>
      <Chat/>
      {props.children}

  </div>
)

export default Layout