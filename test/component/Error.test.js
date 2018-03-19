/**
 * @jest-environment node
 */
import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../src/component/Error';
import {Message} from 'semantic-ui-react';

it('Error renders without crashing', () => {
  const component = shallow(<Error msg="Testing"/>);
  expect(component.exists()).toEqual(true);
});

it('Output correct error code', () => {
  const comp = shallow(<Error error_code="404" msg="Testing"/>);
  expect(comp.containsMatchingElement(<Message.Header>404</Message.Header>)).toBe(true);
});

it('Output correct msg code', () => {
  const comp = shallow(<Error msg="Testing"/>);
  expect(comp.containsMatchingElement(<p>Testing</p>)).toBe(true);
});

it('Recognized if the output is wrong', () => {
  const comp = shallow(<Error msg="No purpose"/>);
  expect(comp.containsMatchingElement(<p>Testinge</p>)).toBe(false);
});