import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import isIcon from '../assets/img/is.png';
import lsIcon from '../assets/img/ls.png';
import googleIcon from '../assets/img/google.png';
import alconIcon from '../assets/img/alcon.png';
import star from '../assets/logo/star.svg';
import disabledStar from '../assets/logo/disabled-star.svg';
import location from '../assets/logo/location.svg';
import salary from '../assets/logo/salary.svg';
import duration from '../assets/logo/duration.svg';
import postedOn from '../assets/logo/posted-on.svg';
import Button from 'react-bootstrap/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const icons = {
    is: isIcon,
    ls: lsIcon,
    google: googleIcon,
    alcon: alconIcon
};

const DetailsCard = (props) => {
    const { job, viewport, hideDetailsCard } = props;
    return (
        <>
            <div key={job.id} className={"details-card text-left " + (viewport === 't' ? 'm-3 ' : '') + (viewport === 'm' ? 'details-card-mobile m-0' : '') } style={{ height: '-webkit-calc(100% - 190px)' }}>
                <div className="details-card-div">
                    {viewport === 'm' && <div className="pt-2 pl-3">
                        <KeyboardBackspaceIcon onClick={hideDetailsCard} />
                    </div>}
                    <div className={"details-box px-4 pt-4 " + (viewport === 'm' ? 'm-auto' : '')} style={{width: viewport === 'm' ? '360px' : '100%'}}>
                        <Row>
                            <Col>
                                <p className="job-role">{job.role}</p>
                                <p className="job-company">{job.company}</p>
                                {job.rating.map((r, i) =>
                                    r ? <Image key={i} src={star} className="rating-star" />
                                        : <Image key={i} src={disabledStar} className="rating-star" />)}
                            </Col>
                            <Col className="pt-1">
                                <div className="image-span ml-auto">
                                    <Image src={icons[job.companyIcon]} roundedCircle />
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-1 job-card-data-row">
                            <Col className="d-flex">
                                <Image src={location} className="rating-star mt-1 mr-1" />
                                <p className="job-location">{job.location}</p>
                            </Col>
                        </Row>
                        <Row className="job-card-data-row">
                            <Col xl={5} lg={4} sm={6} xs={6} className={"d-flex " + (viewport !== 'm' ? 'pr-0' : '')}>
                                <Image src={salary} className="rating-star mt-1 mr-1" />
                                <p className="job-salary">{job.salary}</p>
                            </Col>
                            <Col xl={3} lg={3} sm={4} xs={4} className={"d-flex " + (viewport !== 'm' ? 'px-0' : '')}>
                                <Image src={duration} className="rating-star mt-1 mr-1" />
                                <p className="job-period">{job.period}</p>
                            </Col>
                            <Col xl={4} lg={4} className={"d-flex " + (viewport !== 'm' ? 'px-0' : '')}>
                                <Image src={postedOn} className="rating-star mt-1 mr-1" />
                                <p className="job-posted">{job.postedOn}</p>
                            </Col>
                        </Row>
                        <div className="divider px-4 mt-3"></div>
                        <Row className="my-3">
                            <Col xl={12} lg={12}>
                                <p className="job-role my-1">About the company</p>
                                <p className="job-company">{job.aboutCompany}</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xl={12} lg={12}>
                                <p className="job-role my-1">About the internship</p>
                                {job.aboutInternship.map((x, i) => <p key={i} className="job-company mb-1">{x}</p>)}

                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xl={12} lg={12}>
                                <p className="job-role my-1">Skills required</p>
                                {job.skills.map((x, i) => <Button key={i} className="job-skills-btn mr-2 mb-2">{x}</Button>)}
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-1">
                            <Col xl={12} lg={12}>
                                <p className="job-role my-1">Who can apply</p>
                                {job.whoCanApply.map((x, i) => <p key={i} className="job-company mb-1">{x}</p>)}
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-btn text-center">
                        <Button className="mr-2 mb-2 mt-4">Apply</Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DetailsCard;