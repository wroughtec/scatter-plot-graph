/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'isomorphic-unfetch';

configure({ adapter: new Adapter() });
