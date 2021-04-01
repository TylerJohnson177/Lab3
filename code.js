$(document).ready(function ()
{
    $("button").on("click",calculations);
})



function calculations()
{
    //Gather information from the user//

    //prompt user to input the number of books that are late//
    //prompt user to input the number of DVDs that are late//

    let numBooks = parseInt( $("#numBooks").val() );
    let numDVDs = parseInt( $("#lateDVDs").val() );

    //prompt user to input the number of days late the items are//

    let numDays = parseInt( $("#daysLate").val() );

    //Do some math//

    //Multiply the number of books that are late 0.25//
    //Multiply that value by the number of days late the book is//

    let costBooks = numBooks * numDays * 0.25;

    //Multiply the number of DVDS that are late by 0.50//
    //Multiply that value by the number of days late the DVD is//

    let costDVDs = numDVDs * numDays * 0.50;

    //add the 2 values together//

    let totalCost = costBooks + costDVDs;

    //round the outputs to 2 decimal places//

    $("span#totalFee").text(totalCost.toFixed(2));

   //alert the total late fee//


}