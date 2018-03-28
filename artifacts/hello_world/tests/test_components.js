import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Output } from '../components';
it('output renders correctly', () => {
    const tree = renderer.create(React.createElement(Output, { value: 9 }));
    expect(tree).toBeDefined();
});
//# sourceMappingURL=test_components.js.map