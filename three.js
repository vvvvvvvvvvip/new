/**
 * Created by cy183 on 2018/7/5.
 */
var data = {'´¢´æ': ['32GB', '64GB'],
    'ÄÚ´æ': ['2GB', '4GB'],
    'ÆÁÄ»': ['5Ó¢´ç', '4Ó¢´ç']}

//console.log('´¦Àí½á¹û:', handleAll(data))

// --- Object.create() ·½·¨ (3)

// appData.data = data
// console.log(appData.data)

// --- ¹¹½¨º¯Êý·½·¨ (2)

// var phones = new Phones(data)
// console.log(phones.format())

// --- Ô­ÐÍÁ´·½·¨ (1)

// console.log(data.format())

// --- »ù´¡·½·¨ (0)

function handleAll (data) {
    var ccLen = data.´¢´æ.length;
    var ncLen = data.ÄÚ´æ.length;
    var pmLen = data.ÆÁÄ».length;
    var arr= [];
    for(var n = 0;n<ccLen;n++ ){
        for(var i=0;i<ncLen;i++){
            for(var j=0;j<pmLen;j++){
                var pushArr =  "´¢´æ£º" + data.´¢´æ[n] + "£¬ÄÚ´æ£º"+ data.ÄÚ´æ[i] + "£¬ÆÁÄ»£º" + data.ÆÁÄ»[j];
                arr.push(pushArr)
            }
        }
    }
    console.log('¼Æ»®Êä³ö:', arr);
}

handleAll(data)


console.log('¼Æ»®Êä³ö:', '["´¢´æ: 32GB, ÄÚ´æ: 2GB, ÆÁÄ»: 5Ó¢´ç", "´¢´æ: 64GB, ÄÚ´æ: 2GB, ÆÁÄ»: 5Ó¢´ç", "´¢´æ: 32GB, ÄÚ´æ: 4GB, ÆÁÄ»: 5Ó¢´ç", "´¢´æ: 64GB, ÄÚ´æ: 4GB, ÆÁÄ»: 5Ó¢´ç", "´¢´æ: 32GB, ÄÚ´æ: 2GB, ÆÁÄ»: 4Ó¢´ç", "´¢´æ: 64GB, ÄÚ´æ: 2GB, ÆÁÄ»: 4Ó¢´ç", "´¢´æ: 32GB, ÄÚ´æ: 4GB, ÆÁÄ»: 4Ó¢´ç", "´¢´æ: 64GB, ÄÚ´æ: 4GB, ÆÁÄ»: 4Ó¢´ç"]')