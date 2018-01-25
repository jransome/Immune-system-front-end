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
        expect(component.props().children[0]).toEqual(criteriaDescription);
    })

    describe('Dropdown input', () => {
        it('should exist', () => {
            expect(component.find('select').length).toEqual(1);
        })
        
        xit('changes the status of the criteria when a dropdown option is selected', () => {
            let eventObject = { target: { value: 2 } };
            expect(component.state().status).toEqual(0);
            component.find('select').simulate('change', eventObject);
            expect(component.state().status).toEqual(2);
        })
    })
});


