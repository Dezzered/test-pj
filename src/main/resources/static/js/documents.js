$(function () {
    // var $tableRow = $('#tableRow');
    // $.ajax({
    //     type: 'GET',
    //     url: 'http://localhost:8080/test',
    //     success: function (data) {
    //         $.each(data, function (i, item) {
    //             $tableRow.append('<div class="col-1"></div>\n' +
    //                 '        <div class="col-12 col-md-12" style="background-color: lightgrey">' + item + '</div>\n' +
    //                 '        <div class="col-1"></div>')
    //         })
    //     }
    // });


    // $.ajax({
    //         type: 'GET',
    //         url: 'http://localhost:8080/userInfo',
    //         success: function (data) {
    //             $.each(data, function (i, item) {
    //                 userTable.append('<tr>\n' +
    //                     '            <th scope="row">3</th>\n' +
    //                     '            <td>' + item.name + '</td>\n' +
    //                     '            <td>' + item.secondName + '</td>\n' +
    //                     '        </tr>')
    //             })
    //         }
    //     }
    // );

    var userTable = $('#userTable > tbody:last-child');

    var checkError = $('#checkError');
    checkError.click(function () {

        $('#userTable tr').remove();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/userInfo',
            data: {
                testParam: $('#errorInputField').val()
            },
            success: function (data) {
                $.each(data, function (i, item) {
                    userTable.append('<tr>\n' +
                        '            <th scope="row">' + i + '</th>\n' +
                        '            <td>' + item.name + '</td>\n' +
                        '            <td>' + item.secondName + '</td>\n' +
                        '        </tr>')
                })
            }
        })
    })
});