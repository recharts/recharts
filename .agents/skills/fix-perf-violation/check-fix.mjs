#!/usr/bin/env node

import { checkFix } from '../../shared/suppression-targets/check-fix.mjs';
import { config } from './config.mjs';

checkFix(config);
