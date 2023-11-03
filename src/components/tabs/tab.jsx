import Loader from '../loader/loader';
import React, { Suspense, lazy, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabContext } from '../../context/tabContext';
import NotFound from '../notFound/not-found';


const Tab = () => {
  const tabs = useContext(TabContext);
  const { tabId } = useParams();
  let selectedTab;
  if (tabId !== undefined) selectedTab = tabs.find((tab) => tab.id === tabId);
  else selectedTab = tabs.find((tab) => tab.order === 0);
  if (!selectedTab) {
    return <NotFound/>;
  }
  const LazyTab = lazy(() => import(`../${selectedTab.path}`));

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <LazyTab />
      </Suspense>
    </div>
  );
};

export default Tab;
