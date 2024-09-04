import { ISharedData } from '../types';

const sharedData: ISharedData = {
  channels: [
    { id: '1', name: 'general' },
    { id: '2', name: 'common' },
    { id: '3', name: 'random' },
  ],
};

export default () => ({
  shared: JSON.stringify(sharedData),
});
