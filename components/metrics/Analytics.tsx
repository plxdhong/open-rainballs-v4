import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function AnalyticsCard() {
  const { data } = useSWR<Views>('/api/views', fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://www.rainballs.com';

  return (
    <MetricCard
      header="总浏览量"
      link={link}
      metric={pageViews}
      isCurrency={false}
    />
  );
}
