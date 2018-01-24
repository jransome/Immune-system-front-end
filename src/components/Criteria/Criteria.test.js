import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Criteria from './Criteria';

describe('Criteria component', () => {
    let component;
    const criteriaDescription = "This is a criteria."

    beforeEach(() => {
        component = shallow(<Criteria description={criteriaDescription} />);
    })

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    })

    it('should have a description', () => {
        expect(component.props().children).toEqual(criteriaDescription);
    })
});


