#!/usr/bin/env node

var exec = require('child_process').exec;

var winLockCommand = 'rundll32.exe user32.dll, LockWorkStation';
exec(winLockCommand);