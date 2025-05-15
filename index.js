import core from './configs/core/lib';
import typescript from './configs/typescript/lib';
import react from './configs/react/lib';

const configs = {
  flat: {
    core,
    jest,
    react,
    typescript,
  },
};

const plugin = {
  configs,
};

export default plugin;
