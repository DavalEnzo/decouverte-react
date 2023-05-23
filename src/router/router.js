import {BrowserRouter, Route, Routes} from "react-router-dom";
import Competences from "../components/competences";
import ErrorPage from "../router/error-page";
import Home from "../pages/Home";
import Experiences from "../components/experiences";
import Layout from "../components/layout/layout";

const Routeur = () => {
    return (
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="competences" element={<Competences />}>
                            <Route>
                                <Route path=":id" element={<Competences />} />
                            </Route>
                        </Route>
                        <Route path="experiences" element={<Experiences />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
    )
}

export default Routeur;
