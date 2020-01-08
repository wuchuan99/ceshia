layui.use(['table', 'layer', 'laypage', 'form','jquery'], function(){
    let table = layui.table;
    window.$ = layui.jquery;
    let form = layui.form;
    let laypage = layui.laypage;
    let layer = layui.layer;
    //第一个实例
    let tableIns = table.render({
      elem: '#demo'
      ,height: 550
      ,cols: [[ //表头
        {checkbox: true},
        {field: 'merchantName', title: '商户名'}
        ,{field: 'shopName', title: '店铺名'}
        ,{field: 'phone', title: '电话'}
      ]]
    });

    let tableIns2 = table.render({
        elem: '#demo2'
        ,height: 600
        ,cols: [[ //表头
          {field: 'merchantName', title: '商户名'}
          ,{field: 'shopName', title: '店铺名'}
          ,{field: 'phone', title: '电话'}
        ]]
      });



    tableIns.reload({
        data: [
            {
                id: 1,
                merchantName: '光谷苹果果酒店公寓1',
                shopName: '小姐姐主题酒店1',
                phone: '15933887766',
            },
            {
                id: 2,
                merchantName: '光谷苹果果酒店公寓2',
                shopName: '小姐姐主题酒店2',
                phone: '15933887766',
            },
            {
                id: 3,
                merchantName: '光谷苹果果酒店公寓3',
                shopName: '小姐姐主题酒店3',
                phone: '15933887766',
            },
            {
                id: 4,
                merchantName: '光谷苹果果酒店公寓4',
                shopName: '小姐姐主题酒店4',
                phone: '15933887766',
            },
            {
                id: 5,
                merchantName: '光谷苹果果酒店公寓5',
                shopName: '小姐姐主题酒店5',
                phone: '15933887766',
            }
        ]
    })
   
    table.on('checkbox(test)', function(obj){
        var checkStatus = table.checkStatus('demo')
        if(checkStatus.isAll){
            $('#checkboxAll').prop('checked', true)
            form.render('checkbox')
        } else {
            $('#checkboxAll').prop('checked', false)
            form.render('checkbox')
        }
    });

    form.on('checkbox(checkboxAll)', function(data){
        $('.layui-unselect').click()
        
    }); 

    var list = [];
    $('#shopBtn').click(function(){
        var checkStatus = table.checkStatus('demo')
        if(list.length > 0){
            checkStatus.data.forEach(function(value, j){
                var flag = true
                list.forEach(function(item, i){
                    if(value.id == item.id){
                        flag = false
                    }
                })
                if(flag){
                    list.push(value)
                }
            })
        } else {
            list =  checkStatus.data
        }
        tableIns2.reload({
            data: list
        })
        $('.num').text(list.length)
    })
    
});