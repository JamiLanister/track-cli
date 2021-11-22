#!/usr/bin/env node

const CreateUtil = require('track-test-lib');

const util = new CreateUtil();

const firstCommand = process.argv[2];

util.init(firstCommand)