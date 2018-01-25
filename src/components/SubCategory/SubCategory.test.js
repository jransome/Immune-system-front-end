import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SubCategory from './SubCategory';
import Criteria from '../Criteria/Criteria';


describe('SubCategory component', () => {
    let component;
    const criteriaDescriptions = ["hello", 'hi', 'blah'];

    beforeEach(() => {
        component = shallow(<SubCategory criteriaDescriptions={criteriaDescriptions} />);
    })

    xit('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    })

    // it('can render a criteria', () => {
    //     expect(component.renderCritera("hello")).toEqual(<Criteria description={"hello"} />);
    // })
});


