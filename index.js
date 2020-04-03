module.exports = {
    floor: function(epoch, seconds){
        return Math.floor(epoch / seconds) * seconds;
    },
    ceil: function(epoch, seconds){
        return Math.ceil(epoch / seconds) * seconds;
    },
    round: function(epoch, seconds){
        return Math.round(epoch / seconds) * seconds;
    },
    trunc: function(epoch, seconds){
        return Math.trunc(epoch / seconds) * seconds;
    }
}