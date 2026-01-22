import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ServiceDetails from "../components/sections/ServiceDetails";
import PolicyDetails from "../components/sections/PolicyDetails";
import { serviceDetails, ServiceDetailData } from "../data/services";
import { policies, PolicyDetailData } from "../data/policies";

type PageType =
  | { pageType: "service"; service: ServiceDetailData }
  | { pageType: "policy"; policy: PolicyDetailData };

function ServiceDetailBySlugPage(props: PageType) {
  if (props.pageType === "policy") {
    return (
      <>
        <Layout HeaderStyle="two">
          <PageTitle pageName={props.policy.title} />
          <PolicyDetails policy={props.policy} />
        </Layout>
      </>
    );
  }

  const { service } = props;

  return (
    <>
      <Layout HeaderStyle="two">
        <PageTitle pageName={service.title} />
        <ServiceDetails service={service} services={serviceDetails} />
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const policyPaths = policies.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths: [
      ...serviceDetails.map((item) => ({
        params: { slug: item.slug },
      })),
      ...policyPaths,
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageType> = async (context) => {
  const slug = context.params?.slug;
  const service = serviceDetails.find((item) => item.slug === slug);
  const policy = policies.find((item) => item.slug === slug);

  if (service) {
    return {
      props: {
        pageType: "service",
        service,
      },
    };
  }

  if (policy) {
    return {
      props: {
        pageType: "policy",
        policy,
      },
    };
  }

  if (!service && !policy) {
    return { notFound: true };
  }

  return { notFound: true };
};

export default ServiceDetailBySlugPage;
