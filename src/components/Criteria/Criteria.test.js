import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Criteria from './Criteria';

describe('Criteria component', () => {

    let component;
    const text = "This is a criteria."

    beforeEach(() => {
        component = shallow(<Criteria description={text} />);
    })
    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    })

    it('should have a description', () => {
        console.log(component.props())
        expect(component.props().children).toEqual(text);
    })
});
