import { useQuery } from '@tanstack/react-query';

import api from 'helpers/api';

export default function useAppAuth(appKey) {
  const query = useQuery({
    queryKey: ['appAuth', appKey],
    queryFn: async ({ payload, signal }) => {
      const { data } = await api.get(`/v1/apps/${appKey}/auth`, {
        signal,
      });

      return data;
    },
    enabled: !!appKey,
  });

  return query;
}
