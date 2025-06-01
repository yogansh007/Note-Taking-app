var btn = document.getElementById("add-btn");
var angle = 0;
var input_field = document.getElementById("type-bar")
btn.addEventListener('click', function () {
    angle += 90;
    this.style.transform = `rotate(${angle}deg)`
    if (input_field.style.display == "") {
        input_field.style.display = "block";
    }
    else if (input_field.style.display == "block") {
        input_field.style.display = ""
    }
})



var array = [];

var data = this.localStorage.getItem("notes");
if (data) {
    array = JSON.parse(data);
    for (i = 0; i < array.length; i++) {
        let got_data = array[i] + "<br>";
        let parent_container = document.getElementById("note-holder");
        parent_container.insertAdjacentHTML('afterbegin', got_data);
        let remove_btn = document.getElementById("rem-btn");
        remove_btn.addEventListener('click', function () {
            this.parentElement.parentElement.remove();
            let out_html = this.parentElement.parentElement.outerHTML;
            array.forEach(function (elem, ind) {
                if (out_html == elem) {
                    array.splice(ind, 1);
                    localStorage.setItem("notes", JSON.stringify(array))

                }
            })
        })
    }
}

// to make note //
var parent_container = document.getElementById("note-holder");
let target_btn = document.getElementById("submit-btn");
target_btn.addEventListener('click', function () {
    var title_val = document.getElementById("title").value;
    var content_val = document.getElementById("content").value;
    if (title_val == "" && content_val == "") {
        alert("write something")
    }

    else {
        // get title //


        var created_divv = document.createElement("div");
        created_divv.classList.add("note");
        created_divv.setAttribute("contenteditable", "true")
        created_divv.setAttribute("spellcheck", "false")
        parent_container.appendChild(created_divv);

        var note_heading = document.createElement("h3");
        var note_heading_text = document.createTextNode(title_val);
        note_heading.appendChild(note_heading_text);
        created_divv.appendChild(note_heading);
        // get subtitle 
        var note_p = document.createElement("p");
        note_p.classList.add("note_p")
        var note_p_data = document.createTextNode(content_val);
        note_p.appendChild(note_p_data);
        created_divv.appendChild(note_p);
        var color_arr = [
            "lightblue",
            "lightcoral",
            "lightgoldenrodyellow",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightsteelblue",
            "wheat",
            "moccasin",
            "powderblue",
            "palegoldenrod",
            "mediumaquamarine",
            "thistle",
            "rosybrown"
        ];
        var decl_color = color_arr[Math.floor(Math.random() * color_arr.length)];
        created_divv.style.backgroundColor = decl_color;
        var d = new Date;
        var month = d.getMonth();
        var date = d.getDate();
        var year = d.getFullYear();
        var alphabetical_mnth = ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"];

        var alphabetical_monnth = alphabetical_mnth[month];
        var date_layout = (`${date} ${alphabetical_monnth} ${year}`);
        var date_wrapper = document.createElement("div");
        date_wrapper.classList.add("date-wrapper")
        date_wrapper.setAttribute("contenteditable", "false")
        created_divv.appendChild(date_wrapper);
        var date_holder = document.createElement("h6");
        date_holder.classList.add("note_h6")
        var date_data = document.createTextNode(date_layout);
        date_holder.appendChild(date_data);
        date_wrapper.appendChild(date_holder);
        var remove_btn = document.createElement("span");
        remove_btn.innerHTML = "remove";
        remove_btn.classList.add("rem-btn")
        remove_btn.id = "rem-btn"
        date_wrapper.appendChild(remove_btn);


        var sent_info = created_divv.outerHTML;
        array.push(sent_info);
        localStorage.setItem("notes", JSON.stringify(array));


        remove_btn.addEventListener('click', function () {
            this.parentElement.parentElement.remove();
            let out_html=this.parentElement.parentElement.outerHTML;
            
            array.forEach(function (elem, ind) {
               if(elem==out_html){
                array.splice(ind,1);
                localStorage.setItem("notes",JSON.stringify(array));
               }
            })
        })



    }


});

// code to add 


