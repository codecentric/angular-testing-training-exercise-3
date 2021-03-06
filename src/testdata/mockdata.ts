export const mockResult: Page<Character[]> = {
  info: { count: 1, pages: 1, next: null, prev: null },
  results: [
    {
      id: 540,
      name: 'Running Bird',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/540.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/33'],
      url: 'https://rickandmortyapi.com/api/character/540',
      created: '2020-05-02T13:56:45.926Z',
    },
  ],
};
