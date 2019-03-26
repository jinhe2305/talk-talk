import 'react-native';
import * as React from 'react';
import TextInput from '../TextInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';

describe('rendering test', () => {
  const wrapper = shallow(
    <TextInput />,
  );

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
    // wrapper.setProps({ filled: false });
    // expect(wrapper).toMatchSnapshot();
  });

  // it('simulate onPress', () => {
  //   let cnt = 1;
  //   const onPress = () => {
  //     cnt++;
  //   };

  //   wrapper.setProps({ onPress: () => onPress()});
  //   expect(wrapper).toMatchSnapshot();

  //   wrapper.first().props().onPress();
  //   expect(cnt).toBe(2);
  // });
});
