import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';
import configureStore from 'redux-mock-store';

// Need to work out testing with mock store

describe('Tab container', () => {
    const initialState = {
        activeTab: {
            activeCategoryID: 1
        }
    }
    const mockStore = configureStore()

    let store, component;
    const mockName = "Governance";
    const mockOnClickFunction = jest.fn();

    beforeEach(() => {
        store = mockStore(initialState);
        component = shallow(<Tab
                                store={store}
                                onClickFunction={mockOnClickFunction}
                                name={mockName}
                                tabID={1}
                                isCategoryTab={true}
                            />);
    });

    xit('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
    });

    xit('should call the onClick() prop when clicked', () => {
        component.find('.tab-item').simulate('click', { preventDefault() {} });
        expect(mockOnClickFunction.mock.calls.length).toBe(1);
    });

    xit('should render the name of the tab', () => {
        expect(component.contains(mockName)).toEqual(true);
    });

    xit("should add the '.active-tab' class if this tab is active", () => {
        expect(component.find('.tab-item').hasClass('active-tab')).toBe(true);
    });
})

