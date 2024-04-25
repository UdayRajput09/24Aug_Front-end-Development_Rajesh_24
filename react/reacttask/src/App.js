import Css1 from "./CSS/Css1"
import Css2 from "./CSS/Css2"
import Class_component from "./Component/Class_component"
import Func_component from "./Component/Func_component"
import Header from "./Header"
import Jsx from "./JSX/Jsx"
import Main_blog from "./Layout/Main_blog"
import Main_contact from "./Layout/Main_contact"
import Main_home from "./Layout/Main_home"
import Module_css from "./Module_css/Module_css"
import AMG from "./Props/Class/AMG"
import BMS from "./Props/Function/BMS"


function App() {
  return (
    <div>
        {
            //<Header/>

            //component
            //<Func_component/>
            //<Class_component/>
            //<Jsx/>  
            
            // css
            //<Css1/>
            //<Css2/>
            //<Module_css/>

            // LAYOUT
            //<Main_home/>
            //<Main_contact/>
            //<Main_blog/>

            // Props
            //<BMS/>
            <AMG/>
        }
        
    
    </div>
  )
}

export default App