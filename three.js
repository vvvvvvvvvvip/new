/**
 * Created by cy183 on 2018/7/5.
 */
var data = {'����': ['32GB', '64GB'],
    '�ڴ�': ['2GB', '4GB'],
    '��Ļ': ['5Ӣ��', '4Ӣ��']}

//console.log('������:', handleAll(data))

// --- Object.create() ���� (3)

// appData.data = data
// console.log(appData.data)

// --- ������������ (2)

// var phones = new Phones(data)
// console.log(phones.format())

// --- ԭ�������� (1)

// console.log(data.format())

// --- �������� (0)

function handleAll (data) {
    var ccLen = data.����.length;
    var ncLen = data.�ڴ�.length;
    var pmLen = data.��Ļ.length;
    var arr= [];
    for(var n = 0;n<ccLen;n++ ){
        for(var i=0;i<ncLen;i++){
            for(var j=0;j<pmLen;j++){
                var pushArr =  "���棺" + data.����[n] + "���ڴ棺"+ data.�ڴ�[i] + "����Ļ��" + data.��Ļ[j];
                arr.push(pushArr)
            }
        }
    }
    console.log('�ƻ����:', arr);
}

handleAll(data)


console.log('�ƻ����:', '["����: 32GB, �ڴ�: 2GB, ��Ļ: 5Ӣ��", "����: 64GB, �ڴ�: 2GB, ��Ļ: 5Ӣ��", "����: 32GB, �ڴ�: 4GB, ��Ļ: 5Ӣ��", "����: 64GB, �ڴ�: 4GB, ��Ļ: 5Ӣ��", "����: 32GB, �ڴ�: 2GB, ��Ļ: 4Ӣ��", "����: 64GB, �ڴ�: 2GB, ��Ļ: 4Ӣ��", "����: 32GB, �ڴ�: 4GB, ��Ļ: 4Ӣ��", "����: 64GB, �ڴ�: 4GB, ��Ļ: 4Ӣ��"]')