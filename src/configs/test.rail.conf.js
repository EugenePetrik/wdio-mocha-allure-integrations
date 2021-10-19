import axios from 'axios';
import dayjs from 'dayjs';
import { env } from '.';

export async function createTestRun() {
  try {
    await axios.post(`${env.TEST_RAIL_URL}index.php?/api/v2/add_run/${env.TEST_RAIL_PROJECT_ID}`,
      {
        suite_id: env.TEST_RAIL_SUITE_ID,
        name: `Test Run ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
        include_all: true,
      },
      {
        auth: {
          username: env.TEST_RAIL_USERNAME,
          password: env.TEST_RAIL_PASSWORD,
        },
      });
  } catch (e) {
    return e.response;
  }
}
