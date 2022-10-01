function minshot(n,k,height)
{
        var t,n,k,count=0;
            for(var r=0;r<n;r++){
                if(height[r]>k)
                    count++;
            }
    return count;
}
var n=4;
var k=10;
const height=[2,13,4,16];
console.log(minshot(n,k,height));