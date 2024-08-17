import Navar from "../components/comman/Navbar/Navbar";
import Header from "../components/Home_components/Header/Header";
import About from "../components/Home_components/About/About";
import Services from "../components/Home_components/Services/Services";
import Contact from "../components/Home_components/Contact/Contact";
import Footer from "../components/comman/Footer/Footer";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Home = ({ isAuthenticated }) => {
    return(
        <div>
            <Navar isAuthenticated={isAuthenticated}/>
            <Header/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    );
}

Home.propTypes = {
    //user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    //user: state.auth.user,
});

export default connect(mapStateToProps)(Home);