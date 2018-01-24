import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CategoryArea from './CategoryArea';
import Criteria from '../Criteria/Criteria';


describe('CategoryArea component', () => {
    let component;
    const criteriaDescriptions = ["hello", 'hi', 'blah'];

    beforeEach(() => {
        component = shallow(<CategoryArea criteriaDescriptions={criteriaDescriptions} />);
    })

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    })

    // it('can render a criteria', () => {
    //     expect(component.renderCritera("hello")).toEqual(<Criteria description={"hello"} />);
    // })
});


