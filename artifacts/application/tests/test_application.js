import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Application } from '..';
it('renders correctly', () => {
    const tree = renderer.create(React.createElement(Application, null));
    expect(tree).toBeDefined();
});
//# sourceMappingURL=test_application.js.map