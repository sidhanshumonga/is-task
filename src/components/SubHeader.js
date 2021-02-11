import React from 'react';
import { Col, InputGroup, Row, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import SearchIcon from '@material-ui/icons/Search';
import { Typeahead } from 'react-bootstrap-typeahead';
import filter from '../assets/logo/filter.svg';

const cities = [
    'Mumbai', 'New Delhi', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Pune', 'Surat', 'Jaipur'
];

const SubHeader = (props) => {
    const { transparent, viewport, hideShowFiltersCard } = props;
    const [selectedCity, setSelectedCity] = React.useState('');

    const setSelected = (val) => {
        setSelectedCity(val);
    }
    return (
        <Row className="justify-content-center align-items-center subheader-container" style={{ background: transparent ? 'transparent' : 'white' }}>
            <Col xs={7} md={7} lg={5} xl={3}>
                <InputGroup>
                    <Typeahead
                        onChange={setSelected}
                        options={cities}
                        id="form-input"
                        placeholder="Type location"
                        selected={selectedCity}
                    />
                    <InputGroup.Append>
                        <Button variant="secondary" className="search-btn">
                            <SearchIcon />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
            <Col xs={5} md={5} lg={7} xl={5} className={"text-right " + (viewport !== 'd' ? '' : 'p-0')} >
                <Button variant="primary" className="filter-open-btn" onClick={() => hideShowFiltersCard(true)}>
                    <Image src={filter} className="mx-1" />
      Filters</Button>
            </Col>
        </Row>
    )
};

export default SubHeader;