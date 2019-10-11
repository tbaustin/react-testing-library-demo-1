module.exports = {
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	transformIgnorePatterns: ['/node_modules/'],
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
	], // setupFiles before the tests are ran
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
		".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
	},
}