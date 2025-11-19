import { AppDataSource } from './data-source';

export const connectToDatabase = async () => {
  try {
    await AppDataSource.initialize();
    // eslint-disable-next-line no-console
    console.info('Database connection established successfully 🚀');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize AppDataSource:', error);
  }
};
