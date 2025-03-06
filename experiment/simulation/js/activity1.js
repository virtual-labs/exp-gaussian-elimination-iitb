let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">System of Linear Equations: Gaussian Elimination</h4>

        <div class="fs-16px">
        <h5>Pivoting</h5>
        <p>Learning Objective: To learn how to perform pivoting in the matrices</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
// let mat1 = get_matrix_html(3, 1, [[1], [2], [3]], 'inline-block');
// console.log(mat1);
//html for matrix inputs
let matrix_a_inputs = get_matrix_html(3, 3, [
    [
        `<input id='a1-mata-11' class='form-control' />`,
        `<input id='a1-mata-12' class='form-control' />`,
        `<input id='a1-mata-13' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-21' class='form-control' />`,
        `<input id='a1-mata-22' class='form-control' />`,
        `<input id='a1-mata-23' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-31' class='form-control' />`,
        `<input id='a1-mata-32' class='form-control' />`,
        `<input id='a1-mata-33' class='form-control' />`,
    ],
], 'inline-block', '60%');
let matrix_c_inputs = get_matrix_html(3, 1, [
    [`<input id='a1-matc-11' class='form-control' />`],
    [`<input id='a1-matc-21' class='form-control' />`],
    [`<input id='a1-matc-31' class='form-control' />`],
], 'inline-block', '25%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>${get_matrix_html(3, 3, mat_a, 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', '15%')}</div>
        <br>

        <h5>Perform pivoting and enter the final elements of the matrix and vetor</h5>

        <div id='piv-inp-div' style='text-align: center;'>${matrix_a_inputs} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${matrix_c_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_a_c();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    pivot_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function verify_matrix_a_c() {
    let btn = (document.getElementById('temp-btn-12'));
    let inp_a;
    let inp_c;
    console.log(`matrix a =>`, mat_a);
    console.log(`matrix c =>`, mat_c);
    //for a
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-mata-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_a.value), mat_a[i][j])) {
                alert(`incorrect value in 3 x 3 matrix for a[${i + 1}][${j + 1}]`);
                return;
            }
        }
    }
    //for c
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-matc-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_c[i][0])) {
            alert(`incorrect value in 3 x 1 matrix for b[${i + 1}]`);
            return;
        }
    }
    btn.remove();
    render_pivoted_a_c();
    activity2();
}
function pivot_a_c() {
    let c = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    pivoting(mat_a, c);
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
}
function render_pivoted_a_c() {
    let div = (document.getElementById('piv-inp-div'));
    div.innerHTML = `${get_matrix_html(3, 3, mat_a, 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', '15%')}`;
}
activity1();
//# sourceMappingURL=activity1.js.map