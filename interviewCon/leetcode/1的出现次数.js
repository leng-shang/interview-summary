//应该是说1-n的时候中间出现1的次数，比如1到11的时候 1、10、11这种 其实就算4次了，因为11中有两个1

function findOne(n){
	let count = 0;
	for(let i=0;i<=n;i++){
		count+=String(i).split('').filter(item=>item==='1').length
	}
	return count;
}