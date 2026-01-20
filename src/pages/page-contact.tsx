import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from '../components/sections/PageTitle';
import Contact from '../components/sections/ContactUs/Contact';

function ContactPage() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle='three'>
                <PageTitle pageName="Kontact" />   
                <Contact />
            </Layout>
        </>
    )
}
export default ContactPage