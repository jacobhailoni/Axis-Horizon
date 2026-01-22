import React from 'react';
import { useRouter } from 'next/router';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ServiceDetails from "../components/sections/ServiceDetails";
import { serviceDetails } from "../data/services";

function ServiceDetailsPage() {
    const router = useRouter();
    const serviceSlug = Array.isArray(router.query.service)
        ? router.query.service[0]
        : router.query.service;
    const service = serviceDetails.find((item) => item.slug === serviceSlug) ?? serviceDetails[0];

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Service Details" />
                <ServiceDetails service={service} services={serviceDetails} />
            </Layout>
        </>
    )
}
export default ServiceDetailsPage
