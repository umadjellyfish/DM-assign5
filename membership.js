var set = require('./sets.js');



var myset = set.newSet([1,2,3,5]);
console.log(myset);
myset.membership(5, function(ans){
    console.log(ans);
});

myset.intersect([-1,-2,0,1,2,4], function(ans){
    console.log(ans);
});

myset.difference([-1,-2,0,1,2,4], function(ans){
    console.log(ans);
});
myset.union([-1,-2,0,1,2,4], function(ans){
    console.log(ans);
});
myset.complement([-1,-2,0,1,2,4], function(ans){
    console.log(ans);
});
myset.complement("Z", function(ans){
    console.log(ans);
});
myset.subset([-2,-1,0,1,2,3,4,5], function(ans){
    console.log(ans);
});
myset.subset([1,2,3], function(ans){
    console.log(ans);
});
myset.subset([1,2,3,4,5], function(ans){
    console.log(ans);
});
myset.subset([1,2,3,4], function(ans){
    console.log(ans);
});
myset.subset([1,2,3,5], function(ans){
    console.log(ans);
});
myset.func([0,1,2,3], function(ans){
    //console.log(ans);
});
