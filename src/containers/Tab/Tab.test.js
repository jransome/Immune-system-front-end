import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';

describe('Tab container', () => {
    let component;
    const mockName = "Governance";
    const mockOnClickFunction = jest.fn();


    beforeEach(() => {
        component = shallow(<Tab
                                onClickFunction={mockOnClickFunction}
                                name={mockName}
                            />);
    });

    it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    it('should call the onClick() prop when clicked', () => {
        component.find('.tab-item').simulate('click', { preventDefault() {} });
        expect(mockOnClickFunction.mock.calls.length).toBe(1);
    });

    it('should render the name of the tab', () => {
        expect(component.contains(mockName)).toEqual(true);
    });

})

