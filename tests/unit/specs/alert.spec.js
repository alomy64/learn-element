import Alert from '@element/alert';
import { shallowMount } from '@vue/test-utils';

describe('Alert', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Alert);
  });

  it('create', () => {
    expect(wrapper.classes('el-alert')).toBe(true);
  });
});
