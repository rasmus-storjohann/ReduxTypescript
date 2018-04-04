import 'react-native';
import { Text } from 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import { Output } from '../components';
import TestRenderer from 'react-test-renderer';

it('output renders correctly', () => {
    const tree = renderer.create(
        <Output value={9} />
    );
    expect(tree).toBeDefined();
});

it('matches the snapshot', () => {
    const tree = TestRenderer.create(
        <Text>boa</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
