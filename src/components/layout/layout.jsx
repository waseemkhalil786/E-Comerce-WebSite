import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";

function LayOut({children}) {
    return(
        <div>
        <NavBar/>
        <div className="main-content min-h-screen ">
            {children}
        </div>
        <Footer/>
        </div>
    )
}
export default LayOut;