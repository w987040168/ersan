/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


    var arr = [
            {index : 1,neirong:'吃饭',isxz:0,},
            {index : 2,neirong:'睡觉',isxz:0,},
            {index : 3,neirong:'打豆豆',isxz:0,},
        ]
    
    var _arr = [
        {index:1,neirong:'喝酒',isxz:1,},
        {index:2,neirong:'蹦迪',isxz:1,}
    ]
    bindHtnl()
    function bindHtnl() {
        const isxzAll = arr.filter(item => item.isxz == 1).length
        
        let str = ``
            
                
                str  += `
                <h2>正在进行 <span id="todocount">${isxzAll}</span></h2>
            <ol id="todolist" class="demo-box">
            `
            arr.forEach(item => {
            str +=
            `
                <li>
                    <input type="checkbox" data-id="${item.index}" class="checkbox" ${item.isxz == 0 ? '' : 'checked'}/>
                    <p onclick="edit(${item.index})" class="xiugai">${item.neirong}</p>
                    <p class="yc" ><input value="${item.neirong}" data-id="${item.index}"></p>
                    <a href="javascript:remove(1)" class="sc" data-id="${item.index}" >-</a>
                </li>
            
            `
            })
            str +=
            `</ol>
            `
            const sisxzAll = _arr.filter(item => item.isxz == 1).length
            str+=
            `
            <h2>已经完成 <span id="donecount">${sisxzAll}</span></h2>
            <ul id="donelist">
            `
            _arr.forEach(item => {
              str +=  
                `
                <li>
                    <input type="checkbox" data-id="${item.index}" class="scheckbox" ${item.isxz == 0 ? '' : 'checked'} />
                    <p onclick="edit(${item.index})">${item.neirong}</p>
                    <a href="javascript:remove(4)" class="ssc" data-id="${item.index}">-</a>
                </li>
                
                `

            })
            
            
            str +=
                `
            </ul>
                `
            
            $('.secc').html(str)
        
    }
    

    $('.add').on('keydown',function (e) {
       
        e = e || window.event
        let code = e.keyCode || e.which
        
        const inp = this.value.trim()
        if (!inp) return
        console.log(code);
        console.log(inp);
        // e.preventDefault()
        if (code == 13) {
            var add = {
                index : arr.length + 1,
                neirong : inp,
                isxz:0,
            }
            arr.push(add)
            console.log(arr);
            bindHtnl()
    }
    
})

    $('.secc').on('click','.sc',function () {
        const id = $(this).data('id') - 1
        arr.splice(id,1)
        
        bindHtnl()
    })
    $('.secc').on('click','.checkbox',function () {
        const id = $(this).data('id') - 1
        console.log(arr);
        if (arr[id].isxz == 1) {
            arr[id].isxz = 0
        } else {
            arr[id].isxz = 1
        }
        
        console.log(arr[id].isxz);
        bindHtnl()
    })
    $('.secc').on('click','.ssc',function () {
        const id = $(this).data('id') - 1
        _arr.splice(id,1)
        
        bindHtnl()
    })
    $('.secc').on('click','.scheckbox',function () {
        const id = $(this).data('id') - 1
        if (_arr[id].isxz == 1) {
            _arr[id].isxz = 0
        } else {
            _arr[id].isxz = 1
        }
        
        console.log(_arr[id].isxz);
        bindHtnl()
    })

    $('.secc').on('click','.xiugai',function () {

        $(this).css({
            display : 'none'
        }).siblings('p').css({
            display :'block',
        })

    })
    $('.secc').on('keydown','.yc input',function (e) {
        const inp = this.value.trim()
        const id = $(this).data('id') - 1
        arr[id].neirong = inp
        e = e || window.event
        let code = e.keyCode || e.which
        if (code == 13) {
            bindHtnl()
        }
    })
    