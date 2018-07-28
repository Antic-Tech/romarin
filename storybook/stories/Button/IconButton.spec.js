import React from 'react';
import IconButton from './IconButton';

import { verifySnapshot } from '../../utils/testUtils';

jest.mock('react-native-vector-icons', () => ({ MaterialIcons: () => null }));

describe('IconButton', () => {
	describe('Snapshots', () => {
		it('renders default correctly', () => {
			verifySnapshot(<IconButton />);
		});
		it('renders xsmall correctly', () => {
			  verifySnapshot(
            <IconButton
              size = "xsmall"/>
        );
    });
    it('renders small correctly', () => {
        verifySnapshot(
            <IconButton
            size = "small"/>
        );
    });
    it('renders medium correctly', () => {
        verifySnapshot(
            <IconButton
            size = "medium"/>
        );
    });
    it('renders large correctly', () => {
        verifySnapshot(
            <IconButton
            size = "large"/>
        );
    });
    it('renders xlarge correctly', () => {
        verifySnapshot(
            <IconButton
            size = "xlarge"/>
        );
    });
    it('renders color change correctly', () => {
        verifySnapshot(
            <IconButton
            iconColor = "colorBlue"
            backgroundColor = "colorWhite"
            size = "xlarge"/>
        );
    });
    it('renders unique icon correctly', () => {
        verifySnapshot(
            <IconButton
            name="hot-tub"
            size = "xlarge"/>
        );
    });
	});
});
