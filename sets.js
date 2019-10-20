var algebra = require('algebra.js');
var Solver = require('js-solver')
var exports = module.exports = {};

this.set = [];

module.exports = {
    newSet: function (set) {
        this.set = set;
        return this;
    },
    membership: function (member, callback) {
        if (Array.isArray(this.set)) {
            var ans = this.set.includes(member);
        }
        if (this.set == "R") {
            if (typeof member === 'number') {
                ans = true;
            } else {
                ans = false;
            }
        }
        if (this.set == "Z") {
            if (Number.isInteger(member)) {
                ans = true;
            } else {
                ans = false;
            }
        }
        if (this.set == "N") {
            if (Number.isInteger(member) && member > 0) {
                ans = true;
            } else {
                ans = false;
            }
        }

        callback(ans);
    },
    intersect: function (otherSet, callback) {
        
        var ans = [];
        var loopSet = this.set
        var checkSet = otherSet;
        if (otherSet.length <= this.set.length) {
            loopSet = otherSet;
            checkSet = this.set;
        }

        loopSet.forEach(function (element) {
            if (checkSet.includes(element)) {
                ans.push(element);
            }
        });
        callback(ans);
    },
    difference: function (otherSet, callback) {
        var ans = [];
        var set = this.set;
        ans = set.filter(function (element) {
            return otherSet.indexOf(element) == -1;
        }).concat(otherSet.filter(function (element) {
            return set.indexOf(element) == -1;
        }));
        callback(ans);
    },
    union: function (otherSet, callback) {
        var set = this.set;
        var ans = otherSet.filter(function (element) {
            return set.indexOf(element) == -1;
        }).concat(set.filter(function (element) {
            return otherSet.indexOf(element) == -1;
        }));


        set.forEach(function (elem) {
            if (!ans.includes(elem)) {
                ans.push(elem);
            }
        })


        callback(ans);
    },
    complement: function (otherSet, callback) {
        if (Array.isArray(otherSet)) {
            this.difference(otherSet, callback);
        } else {
            callback("{ x ∈ " + otherSet + "| x ≠ [" + this.set + "]}")
        }

    },
    subset:function (otherSet, callback) {
        var set = this

        if(otherSet == "Z"){
            this.intersect(otherSet, function(ans){
                if(ans == set){
                    callback(1);
                } else {
                    callback(-2);
                }
            })
        }
        var interSet;
        this.intersect(otherSet,function(res){
            interSet = res;
        });
        if(otherSet.length == interSet.length && this.set.length == interSet.length){
            callback(0);
        }
        else if(otherSet.length == interSet.length){
            callback(1);
        }
        else if(this.set.length == interSet.length){
            callback(-1);
        }
        else{
            callback(-2);
        }
    },
    func: function(otherSet,callback){
        /*//var exp = new algebra.parse("x^2+20<100");
        //var eq = algebra.parse("x^2 + 4 * x + 4 < 0");
        //console.log(eq.toString());
        var mySolver = new Solver({
            y: 'x^2+20',
            x: 'x'
          })
          
          var ex = mySolver.solve({
            y: 84
          })

          callback(ex);*/
    }
};