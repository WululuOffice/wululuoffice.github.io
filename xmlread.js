window.onload = function() {
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "zb.xml?ver=231005&0X18A", true);//注意更新版本号
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
            // 解析 XML 文件
                var xmlDoc = xhr.responseXML;
                var zbs = xmlDoc.getElementsByTagName("zb");

            // 填充表格内容
                var tableBody = document.querySelector("#myTable tbody");
                for (var i = 0; i < zbs.length; i++) {
                    var Equip = zbs[i];
                    var name = Equip.getElementsByTagName("name")[0].textContent;
                    var location = Equip.getElementsByTagName("location")[0].textContent;
                    var level = Equip.getElementsByTagName("level")[0].textContent;
                    var introduce = Equip.getElementsByTagName("introduce")[0].textContent;
                

                    var row = tableBody.insertRow();
                
                   
                    row.insertCell().textContent = name;
                    row.insertCell().textContent = location;
                    row.insertCell().textContent = level;
                    row.insertCell().textContent = introduce;
            }
        }
    };
    xhr.send();
}