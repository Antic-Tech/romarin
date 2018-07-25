import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest-extended');

global.fetch = jest.fn();

Enzyme.configure({ adapter: new Adapter() });
