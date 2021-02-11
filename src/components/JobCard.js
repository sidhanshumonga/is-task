/* eslint-disable jsx-a11y/anchor-is-valid */
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
import save from '../assets/logo/Save.svg';
import share from '../assets/logo/Share.svg';
import chevronRight from '../assets/logo/chevron-right.svg';

const icons = {
    is: isIcon,
    ls: lsIcon,
    google: googleIcon,
    alcon: alconIcon
};

const JobCard = (props) => {
    const { job, updateSelectedJob, margin, borderRadius } = props;

    const updateJob = (row) => {
        updateSelectedJob(job, !job.selected);
    }

    return (
        <div key={job.id} className={"job-card text-left p-2 " + (job.selected ? "selected" : "") + (margin ? ' mb-2' : '')} style={{ borderRadius: borderRadius }}
            onClick={() => updateJob(job)}>
            <Row>
                <Col lg={9} xl={8} sm={9} md={9} xs={9}>
                    <p className="job-role">{job.role}</p>
                    <p className="job-company">{job.company}</p>
                    {job && job.rating.map((r, i) =>
                        r ? <Image key={i} src={star} className="rating-star" />
                            : <Image key={i} src={disabledStar} className="rating-star" />)}
                </Col>
                <Col lg={3} xl={4} sm={3} md={3} xs={3} className="pt-1">
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
                <Col xl={7} lg={7} sm={6} xs={6} className="d-flex">
                    <Image src={salary} className="rating-star mt-1 mr-1" />
                    <p className="job-salary">{job.salary}</p>
                </Col>
                <Col xl={5} lg={5} sm={5} xs={6} className="d-flex">
                    <Image src={duration} className="rating-star mt-1 mr-1" />
                    <p className="job-period">{job.period}</p>
                </Col>
            </Row>
            <Row className="job-card-data-row">
                <Col className="d-flex">
                    <Image src={postedOn} className="rating-star mt-1 mr-1" />
                    <p className="job-posted">{job.postedOn}</p>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xl={5} lg={5} sm={5} xs={5} className="d-flex">
                    <Image src={save} className="job-card-footer-icons mt-1 mr-3" />
                    <Image src={share} className="job-card-footer-icons mt-1" />
                </Col>
                <Col xl={7} lg={7} sm={7} xs={7} className="d-flex justify-content-end">
                    <a className="job-details text-right" onClick={() => updateJob(job)}>View details</a>
                    <Image src={chevronRight} className="job-card-footer-icons" />
                </Col>
            </Row>
        </div>
    )
};

export default JobCard;