const {Artwork} = require('./mybbs_ndboard');
const sequelize = require('sequelize');
const fs = require('fs');
const Op = require('sequelize').Op;

const allrmfile = () => {
// usingArtworkFiles 현재 사용중인 모든 작품 파일 가져오기
const getUsingArtworkFiles = async() => {
    try {
        let resources = await Artwork.findAll({
            attribute: ['img'],
            where: {
                img: {
                    [Op.not]: null
                }
            }
        });
        // sequlize는 object형식으로 리턴하기 때문에 배열로 다시 넣어줌
        let result = [];
        resources.forEach( resource => {
            result.push(resource.img)
        })
        console.log('------> usingArtworkFiles', result);
        return result;
    }   
    catch(error) {
        console.error(error);
        return next(error);
    }
}

/* 꼭 비동기로 디스크에 있는 파일 리스트를 읽어와야한다. 안그러면 파일 리스트를 읽어오는게 오래 걸리기 
때문에  빈 배열이 리턴된다.  fs.readdirSync('upload/img') 꼭 비동기로 읽어오기! */
const getDiskArtworkFile = async() => {
    let filelist = fs.readdirSync('upload/img')
    console.log('------> getDiskArtworkFile', filelist);
    return filelist;
}

const startCleanUp = async() => {
    // diskArtworkFiles 파일 리스트 가져오기
    let UsingArtworkFiles = await getUsingArtworkFiles();
    let DiskArtworkFile = await getDiskArtworkFile();

    //차집합 구하기 차집합에 든 파일 disk에서 삭제하기
    let difference = DiskArtworkFile.filter(filename => !UsingArtworkFiles.includes(filename));

    difference.forEach(filename => {
        fs.unlink(`upload/img/${filename}`, (err) => {
            if(err === undefined || err === null) {
                console.log(`delete >>>>>>>>>>>> upload/img/${filename}`);
            } else {
                console.log(err);
            }
        })
    })
}

startCleanUp()
// getDiskArtworkFile()
// getUsingArtworkFiles()

const schedule = require('node-schedule');

const job = schedule.scheduleJob('42 * * * *',  function(){
    console.log('42초가 되었습니다.') 
});

}

module.exports = allrmfile;