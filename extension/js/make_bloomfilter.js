for(var bf=require("./bloomfilter"),fs=require("fs"),assert=require("assert"),lines=fs.readFileSync("/dev/stdin").toString().split("\n"),bloom=new bf.BloomFilter(2097152,16),i=0;i<lines.length;++i)4<=lines[i].length&&(lines[i]=lines[i].replace(/\W/g,""),bloom.add(lines[i]),console.log("adding ",JSON.stringify(lines[i])));var k=bloom.test("HelloThereWhatIsYourName");console.log(bloom.test("HelloThereWhatIsYourNamjjjjjje"));console.log(k);assert(!k);var array=[].slice.call(bloom.buckets);console.log(array);
for(var bloom2=new bf.BloomFilter(array,5),i=0;i<lines.length;++i)4<=lines[i]&&(console.log(lines[i]),assert(bloom.test(lines[i])),assert(bloom2.test(lines[i])));assert(bloom2.test("password"));fs.writeFileSync("./bad_password_bloom_data.js","badPasswordBloomArray = "+JSON.stringify(array)+";");