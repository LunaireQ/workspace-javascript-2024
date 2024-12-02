var test ={
    fname: "Lunaire",
    lname: "Sol",
    age: 6500000000,
    display: function(){
        console.log("in function");
        return this.fname + " " +this.lname;
    }
};
console.log(test.display());

var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest = {
        name: $('#name').val(),
        checkin: $('#checkin').val(),
    };
    alert(guest.name + " Reserve a Room");
    guestsgroup.push(guest);
    console.log(guestgroup);
}