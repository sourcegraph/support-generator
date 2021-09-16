import {
    atom
} from 'recoil';

const modeState = atom({
    key: 'modeState',
    default: 'light',
});

export default modeState;