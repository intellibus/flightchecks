import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Flight Checks Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'flightchecks');
});

export const { run } = test;
