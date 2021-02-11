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

const FiltersCard = (props) => {
    const { viewport, hideFiltersCard } = props;
    return (
        <>
            <div xl={6} className={"filters-card text-left " + (viewport === 't' ? 'm-3 ' : '') + (viewport === 'm' ? 'filters-card-mobile m-0' : '') } style={{ height: '-webkit-calc(100vh - 80px)' }}>
                Filters
            </div>
        </>
    )
};

export default FiltersCard;