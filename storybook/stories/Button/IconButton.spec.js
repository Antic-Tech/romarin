import React from 'react';
import IconButton from './IconButton';
const icon = {uri: "./resources/free-breakfast@2x.png"};

import { verifySnapshot } from '../../utils/testUtils';

describe('IconButton', () => {
	describe('Snapshots', () => {
		it('renders default correctly', () => {
			verifySnapshot(<IconButton />);
		});
		it('renders xsmall correctly', () => {
			  verifySnapshot(
            <IconButton
              source={icon}
              size = "xsmall"/>
        );
    });
    it('renders small correctly', () => {
        verifySnapshot(
            <IconButton
              source={icon}
            size = "small"/>
        );
    });
    it('renders medium correctly', () => {
        verifySnapshot(
            <IconButton
              source={icon}
            size = "medium"/>
        );
    });
    it('renders large correctly', () => {
        verifySnapshot(
            <IconButton
              source={icon}
            size = "large"/>
        );
    });
    it('renders xlarge correctly', () => {
        verifySnapshot(
            <IconButton
              source={icon}
            size = "xlarge"/>
        );
    });
    it('renders color change correctly', () => {
        verifySnapshot(
            <IconButton
              source={icon}
            backgroundColor = "colorYellow"
            size = "xlarge"/>
        );
    });
	});
});
