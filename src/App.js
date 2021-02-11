import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './App.css';
import SubHeader from './components/SubHeader';
import JobCard from './components/JobCard';
import DetailsCard from './components/DetailsCard';
import FiltersCard from './components/FiltersCard';
import { jobs } from './CONSTANTS';
import BottomSheet from './components/BottomSheet';

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;


const App = () => {
  const [viewport, setViewport] = React.useState('d');
  const [list, setList] = React.useState(jobs);
  const [selectedJob, setSelectedJob] = React.useState(jobs[0]);
  const [showDetails, setShowDetails] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  React.useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      // console.log(getWidth())
      if (getWidth() <= 1920 && getWidth() >= 1200) {
        setViewport('d')
      } else if (getWidth() <= 1199 && getWidth() >= 992) {
        setViewport('t')
      } else if (getWidth() <= 991 && getWidth() >= 360) {
        setViewport('m')
      }
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  const updateSelectedJob = (job, select) => {
    setList(list.map(x => ({ ...x, selected: x.id === job.id ? select : false })));
    setShowDetails(select)
    setSelectedJob(select ? job : {});
  };

  const hideDetailsCard = () => {
    setShowDetails(false);
  }

  const hideShowFiltersCard = (flag) => {
    setShowFilters(flag);
  }

  return (
    <>
      <div className="container-fluid layout-container">
        <Row className="header-container" >
          <Col></Col>
        </Row>
        <div className="body-container">
          {viewport !== 'm' && <SubHeader hideShowFiltersCard={hideShowFiltersCard} viewport={viewport} />}
          <Row className="justify-content-center main-container" style={{ height: '100%', paddingTop: viewport !== 'm' ? '177px' : '0px' }}>
            <Col xs={12} md={12} lg={5} xl={3} className={"list-container " + (viewport === 'm' ? 'p-0' : 'pt-2')} style={{ height: viewport === 'm' ? '0px' : '85vh' }} >
              {viewport !== 'm' && list.map((x, i) => (
                <JobCard job={x} updateSelectedJob={updateSelectedJob} margin borderRadius="8px" />
              ))}
            </Col>
            <Col xs={12} md={12} lg={7} xl={5} className={'map-main-container ' + (viewport === 'd' ? 'py-2 px-0' : 'p-0')} >
              <Row className='map-container m-0' style={{ height: '100vh' }}>
                {viewport === 'm' && <Col>
                  <SubHeader hideShowFiltersCard={hideShowFiltersCard} transparent viewport={viewport} />
                </Col>}
                {/* <BottomSheet>
                  <JobCard job={list[0]} updateSelectedJob={updateSelectedJob} borderRadius="16px 16px 0px 0px" />
                </BottomSheet> */}
                {showDetails && <DetailsCard job={selectedJob} viewport={viewport} hideDetailsCard={hideDetailsCard} />}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      {showFilters && <FiltersCard viewport={viewport} />}
    </>
  );
}

export default App;
