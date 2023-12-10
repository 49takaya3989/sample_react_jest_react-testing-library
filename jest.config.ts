import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // デフォルトで"node"が指定されているので"jest-environment-jsdom"に変更
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // jestとreact-testing-libraryを連携するための設定を記述しているファイル
};

export default config;