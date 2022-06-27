#!/usr/bin/env node
import shell from 'shelljs';
import path from 'path';
console.log('PCI work on: v1.0.0');
const root = path.resolve('', './');
shell.exec('node ' + root);
