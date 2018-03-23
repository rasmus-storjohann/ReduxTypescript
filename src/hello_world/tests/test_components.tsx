import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Output } from '../components';

it('output renders correctly', () => {
    const tree = renderer.create(
        <Output value={9} />
    );
    expect(tree).toBeDefined();
});
