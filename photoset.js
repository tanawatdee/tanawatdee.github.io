a=[],t='',p=100;
$('.progress-bar').each(function(i, e){a.push($(e).attr('aria-valuenow'))});
m=Math.min.apply(Math, a);
for(i=2;!a.every((x)=>Math.abs(x%m)<m/p||Math.abs(m-x%m)<m/p);i++)m=m/i;
b=a.map((x)=>Math.round(x/m));
s=b.reduce((a, b) => a + b, 0);
for(i=0;i<a.length;i++){t+='<tr><td>'+a[i]+'</td><td>'+b[i]+'</td></tr>'}
$('body').html('<table class="table table-striped"><tr><th>Percent</th><th>Possible sets</th></tr>'+t+'<tr><td colspan="2"><h3>total <b>i x '+s+' sets</b>, i is an integer.</h3></td></tr></table>');