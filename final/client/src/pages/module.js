import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, ModuleDetail, QueryResult } from '../components';

/**
 * MODULE gql query to retrieve a specific module and its parent track,
 * both needed for the ModuleDetail component
 */
export const MODULE = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

/**
 * Module page fetches both parent track and module's data from the gql query MODULE
 * and feeds them to the Module detail component
 */
const Module = ({ moduleId, trackId }) => {
  const { loading, error, data } = useQuery(MODULE, {
    variables: { moduleId, trackId },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
