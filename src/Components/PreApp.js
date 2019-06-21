import React,{ Component, Suspense} from 'react'
import Preloader from './Preloader/Preloader'
import App from './App/App'
//const App = React.lazy(() => import('./App/App'))



class PreApp extends Component{
    constructor(props){
        super(props)
        this.state={
            notReady:true
        }
    }
    componentDidMount(){
        setInterval(this.loadPage, 10000)
      }
      loadPage = e => {
        this.setState({
          notReady:false
        })
        
      }
    render(){
      
        return(
          //<Suspense fallback={Preloader}>
            //<App />
          //</Suspense>
        this.state.notReady ? <Preloader /> : <App />
        )
    }
}
export default PreApp