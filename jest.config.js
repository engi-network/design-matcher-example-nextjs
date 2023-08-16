module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
