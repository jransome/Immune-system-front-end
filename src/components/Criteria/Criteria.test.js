import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Criteria from './Criteria';

describe('Criteria component', () => {
    it('renders without crashing', () => {
        const component = shallow(<Criteria />);
        expect(component.exists()).toEqual(true);
    })
});