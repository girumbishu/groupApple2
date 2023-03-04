import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import "./Components/Header/header.css";
import AlertSection from "./Components/Alert/AlertSection";
import "./Components/Alert/alertSection.css";
import FirstHighlight from "./Components/FirstHighlightWrapper/FirstHighlight";
import "./Components/FirstHighlightWrapper/firstHighlight.css";
import SecondHighlight from "./Components/SecondHighlightWrapper/SecondHighlight";
import "./Components/SecondHighlightWrapper/secondHighlight.css";
import ThirdHighlight from "./Components/ThirdHighlightWrapper/ThirdHighlight";
import "./Components/ThirdHighlightWrapper/thirdHighlight.css";
import FourthHighlight from "./Components/FourthHighlightWrapper/FourthHighlight";
import "./Components/FourthHighlightWrapper/fourthHighlight.css";
import FifthHighlight from "./Components/FifthHighlightWrapper/FifthHighlight";
import "./Components/FifthHighlightWrapper/fifthHighlight.css";
import SixthHighlight from "./Components/SixthHighlightWrapper/SixthHighlight";
import "./Components/SixthHighlightWrapper/sixthHighlight.css";
import Footer from "./Components/Footer/Footer";
import "./Components/Footer/footer.css";

function App() {
    return (
        <div>
            <Header />
            <AlertSection />
            <FirstHighlight />
            <SecondHighlight />
            <ThirdHighlight />
            <FourthHighlight />
            <FifthHighlight />
            <SixthHighlight />
            <Footer />
        </div>
    );
}

export default App;
