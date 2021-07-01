/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const itActsAsFavoriteCaffeModel = (favoriteCaffe) => {
  it('should return the caffe that has been added', async () => {
    favoriteCaffe.putCaffe({ id: 1 });
    favoriteCaffe.putCaffe({ id: 2 });

    expect(await favoriteCaffe.getCaffe(1)).toEqual({ id: 1 });
    expect(await favoriteCaffe.getCaffe(2)).toEqual({ id: 2 });
    expect(await favoriteCaffe.getCaffe(3)).toEqual(undefined);
  });

  it('should refuse a caffe from being added if it does not have the correct property', async () => {
    favoriteCaffe.putCaffe({ aProperty: 'property' });

    expect(await favoriteCaffe.getAllCaffe()).toEqual([]);
  });

  it('can return all of the caffe that have been added', async () => {
    favoriteCaffe.putCaffe({ id: 1 });
    favoriteCaffe.putCaffe({ id: 2 });

    expect(await favoriteCaffe.getAllCaffe())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite caffe', async () => {
    favoriteCaffe.putCaffe({ id: 1 });
    favoriteCaffe.putCaffe({ id: 2 });
    favoriteCaffe.putCaffe({ id: 3 });

    await favoriteCaffe.deleteCaffe(1);

    expect(await favoriteCaffe.getAllCaffe())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a caffe even though the caffe has not been added', async () => {
    favoriteCaffe.putCaffe({ id: 1 });
    favoriteCaffe.putCaffe({ id: 2 });
    favoriteCaffe.putCaffe({ id: 3 });

    await favoriteCaffe.deleteCaffe(4);

    expect(await favoriteCaffe.getAllCaffe())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteCaffeModel };
