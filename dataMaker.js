// 製作 平假名、片假名 用的檔案
const fs = require('fs')

const hiraganaString =
  'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
const katakanaString =
  'アイウエオカキクケコサシスセソタシツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
const soundString =
  'a e u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo n'
const hiraganaArray = hiraganaString.split('')
const katakanaArray = katakanaString.split('')
const soundArray = soundString.split(' ')

const writeFile = (wordArray, SoundArray, file) => {
  const sourceArr = wordArray.reduce((arr, v, i) => {
    return [
      ...arr,
      {
        word: v,
        sound: SoundArray[i]
      }
    ]
  }, [])

  const data = JSON.stringify({ data: sourceArr })

  fs.writeFile(file, data, err => {
    if (err) console.log(err)
    return console.log('平假名建置完成')
  })
}

writeFile(hiraganaArray, soundArray, 'Hiragana.json')
writeFile(katakanaArray, soundArray, 'Katakana.json')
