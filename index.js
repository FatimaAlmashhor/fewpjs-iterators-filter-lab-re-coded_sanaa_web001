// Code your solution here
function findMatching(arr  , name){
   return arr.filter(e =>{ return (e.toLowerCase() === name.toLowerCase())})
}
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

    findMatching(drivers, 'Bobby');
    findMatching(drivers, 'Sammy');


   findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'], 'Bobby')

    findMatching(drivers, 'Susan')
    // -----------------------------------------

    function fuzzyMatch(arr  , name){
      return arr.filter(e => {
        if(e[0].toLowerCase() === name[0].toLowerCase()) return e ;
      })
    }

    fuzzyMatch(drivers, 'Sa');
    fuzzyMatch(drivers, 'y');
    fuzzyMatch(drivers, 'mm')

function matchName(arr , obj){
  return   arr.filter(e =>{
    return (e.name === obj)
  })
}


matchName( [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ]
, 'Bobby')


  //   it('returns a driver if beginning provided letters match', function () {
  //     expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
  //   });

  //   it('does not return drivers if only middle or ending letters match', function () {
  //     expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
  //   });

  //   it('does not return drivers if only middle or ending letters match', function () {
  //     expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
  //   });
  // });

  // describe('matchName()', function () {
  //   it('accesses the data structure to check if name matches', function () {
  //     const drivers = [
  //       {
  //         name: 'Bobby',
  //         hometown: 'Pittsburgh' },
  //       {
  //         name: 'Sammy',
  //         hometown: 'New York' } ,
  //       {
  //         name: 'Sally',
  //         hometown: 'Cleveland' },
  //       {
  //         name: 'Annette',
  //         hometown: 'Los Angeles' },
  //       {
  //         name: 'Bobby',
  //         hometown: 'Tampa Bay' }
  //     ];

  //     expect(matchName(drivers, 'Bobby')).to.eql([
  //       {
  //         name: 'Bobby',
  //         hometown: 'Pittsburgh'
  //       },
  //       {
  //         name: 'Bobby',
  //         hometown: 'Tampa Bay'
  //       }
  //     ]);
  //   });
  // });
