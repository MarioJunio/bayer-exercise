const farmerRepository = require('../api/repository/farmer')();

beforeAll(async () => {
    console.log('Initializing farmers repository tests!');
});

afterAll(() => {
    console.log('Farmers repository tests done!');
});

describe('Tests init', () => {

    test('Test search 1 farmer', () => {
        expect(farmerRepository.searchByNameOrDocumentNumber('Mar').length).toBe(1);
    });

    test('Test search without match', () => {
        expect(farmerRepository.searchByNameOrDocumentNumber('Bryan').length).toBe(0);
    });

});