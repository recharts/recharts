#!/usr/bin/env node

import { pickTarget } from '../../shared/suppression-targets/pick-target.mjs';
import { config } from './config.mjs';

pickTarget(config);
