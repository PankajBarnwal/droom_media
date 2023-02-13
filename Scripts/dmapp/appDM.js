//$(document).ready(function () {

    //$('#mySidebar').mouseenter(function () {
    //    if ($('.sidebar-mini').hasClass('sidebar-collapse')) {
    //        $('.sidebar-mini').removeClass('sidebar-collapse');
    //        $('.sidebar-mini').addClass('sidebar-expanded-on-hover');
    //    }
    //    else {
    //        $('.sidebar-mini').addClass('sidebar-collapse');
    //        $('.sidebar-mini').removeClass('sidebar-expanded-on-hover');
    //    }
    //});

    //$('.treeview').click(function () {
    //    $(this).siblings('.treeview-menu').toggleClass('treeview-menu-open');        
    //});

    function showAppLoader() {
        $('#loadermessage').show();
        $('#LoaderModal').modal("show")
    }

    function hideAppLoader() {
        $('#loadermessage').hide();
        $('#LoaderModal').modal("hide")
    }
//});