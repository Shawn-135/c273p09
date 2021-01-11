$(document).ready(function () {

    $("#idCountry").change(function() {
       
        var id = $(this).val();
        $.ajax({
            type: "GET",
            url: "getCountryDetails.php",
            data: "id=" + id,
            dataType: "JSON",
            
            success: function(response) {
                var msg = "<tbody><tr><td>" + response.population + "</td><td>" + response.obese + "</td></tr></tbody>";
                
                $("#obeseTable").html(msg);
                
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
    
});
