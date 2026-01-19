import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import Service2 from "../components/sections/Home3/Service2";

function ServicesGridPage() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Dienstleistungen" />
                <Service2 />
            </Layout>
        </>
    )
}
export default ServicesGridPage