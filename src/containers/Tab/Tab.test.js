import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';

describe('Tab container', () => {
    let component;
    const mockOnClickFunction = jest.fn();

    beforeEach(() => {
        component = shallow(<Tab
                                onClickFunction={mockOnClickFunction} 
                            />);
    });

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('should call the onClick() prop when clicked', () => {
        component.find('.tab-item').simulate('click', { preventDefault() {} });
        expect(mockOnClickFunction.mock.calls.length).toBe(1);
    });
})

