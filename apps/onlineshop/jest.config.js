module.exports = {
  name: 'onlineshop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/onlineshop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
