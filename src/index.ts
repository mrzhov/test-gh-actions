import fs = require("fs-extra");
import path = require("path");

const ROOT_DIR = path.resolve(__dirname, '..');

export const DIST_PATH = `${ROOT_DIR}/dist`;
export const rmDist = (): void => {
    if (fs.existsSync(DIST_PATH)) {
        fs.rmdirSync(DIST_PATH, {recursive: true});
    }
}

rmDist();

fs.mkdirSync(DIST_PATH);

const testJsonObject = require(`${ROOT_DIR}/src/test.json`);
fs.writeFileSync(
    `${DIST_PATH}/test.json`,
    JSON.stringify(testJsonObject, null, '  '),
    'utf-8',
);