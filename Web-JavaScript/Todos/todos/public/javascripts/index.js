$(()=> {
    // 새 항목 등록
    $('#save').on('click', ()=>{
        const job=$('#job').val();
        if(job.length==0) return;
        $.ajax({
            url:'/api/todos',
            type:'post',
            data:{job:job}
        })
        .done((data)=>{
            alert(data.result);
            // location.reload() 하거나
            // '/api/todos' 를 get으로 요청해 새 리스트를 받아와도 된다.
            location.reload();
        })
        .fail((xhr, status, error)=>{});
    });

    // 삭제
    $('.delete-button').on('click', (event)=>{
        const target=$(event.target);
        const id=target.attr('id');
        $.ajax({
            url:`/api/todos/${id}`,
            type:'delete'
        })
        .done((data)=>{
            alert(data.result);
            location.reload();
        })
        .fail((xhr, status, error)=>{});
    });
});