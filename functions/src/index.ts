import { initializeApp } from 'firebase-admin/app';
import { log } from 'firebase-functions/logger';
import { pubsub } from 'firebase-functions/v1';
import { onSchedule } from 'firebase-functions/v2/scheduler';

initializeApp();

export const scheduleTestV2 = onSchedule('every 1 minutes', () => {
  log(`scheduleTestV2 called at ${new Date().toISOString()}`);
});

exports.scheduleTestV1 = pubsub.schedule('every 1 minutes').onRun((context) => {
  log(`scheduleTestV1 called at ${new Date().toISOString()}`);
  return null;
});
