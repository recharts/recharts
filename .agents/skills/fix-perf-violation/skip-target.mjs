#!/usr/bin/env node

import { skipTarget } from '../../shared/suppression-targets/skip-target.mjs';
import { config } from './config.mjs';

skipTarget(config);
