import React from 'react';
import "../styles/Blog.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SponsorsSlider from '../components/SponsorsSlider';

export default function Blog() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className='topimgBox'>
        <div className='Btopimg'></div>
        <h4 data-aos="zoom-in"className='Bh1text'>Blog</h4>
        <div data-aos="fade-left" className='Bline'></div>
      </div>
      <div data-aos="fade-left"className='BlogBox'>
        {/* <h3>BLOG</h3> */}
        <div className='BsectBigBox'>
          <section data-aos="zoom-in" className='BsectBox1'>
          <p>
          5jhdsifuk jshiolkgytiuy hjhuritoyhkuo9t ougfosdghofgufn odghmfihofdxhiiog jhkdfghjhg ghkjdmnsvygmdgjbvs dsdsbivahbigu ahvlghlki oj ugibl fyha8 ubs sifosabhboslgyohfjd;b fdihb;zgchxlk fhvkbiu ifhjvkbiy dutgcjhvk hhlk,vhf yfolkyutghbnm vggk b ioj; jiovcftgykl v vkiol vkego jporhur ekhkheghl fdfhifbdf,hdbhkjbbbuh hduyhfdbnfd,hoiff fddf fhf hdlgs shdx ;hxliugu yvzbh jvbvkz vdsdvuzd vzvhvijckbvkcjbv hxvbvbcvikjcbvcvcxv cvcvicv cv vlkv v cvhcol vhlbvl cvhvkhzolvzdb dzkj,kvhvblknv vjhvlhvlkhvblz bcihbzcovzh gjhksdtugvh ggyrsfgh ftdyghcjgsaj sakfysajhgu shfsdiufd ydihjsfgskj dsukhbziukjs dgihzciuhj fyidzhiugjh guzxsvzfgsz sdiuhfkjsjdz dgvjdifhl sidgusvkdhv sdglhk sdgsdkjovuglg fyhtdgc jhgoiydj chgiydu tiugk hthxgc hvruydfh gtiugkjutujuu ikhvmryhfit ktuysiydugu ahsvkhcyufhj cfixzucfyu c icyfscfsa cfxzigc s8czxfgc cfik zxv kcxgvx sdvjg ds v sdiguvh dyoi gvsihd yny8sdd sdd ildvvoushdjlv sduhoodushv hodsogujovhnds y8dsovgudsh sdpyhvdsih dy8votsdhilv iofiotsudgfyisnf8ydyiod 8ohds dsyohodsj
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox2'>
          <p>
          5jhdsifuk jshiolkgytiuy hjhuritoyhkuo9t ougfosdghofgufn odghmfihofdxhiiog jhkdfghjhg ghkjdmnsvygmdgjbvs dsdsbivahbigu ahvlghlki oj ugibl fyha8 ubs sifosabhboslgyohfjd;b fdihb;zgchxlk fhvkbiu ifhjvkbiy dutgcjhvk hhlk,vhf yfolkyutghbnm vggk b ioj; jiovcftgykl v vkiol vkego jporhur ekhkheghl fdfhifbdf,hdbhkjbbbuh hduyhfdbnfd,hoiff fddf fhf hdlgs shdx ;hxliugu yvzbh jvbvkz vdsdvuzd vzvhvijckbvkcjbv hxvbvbcvikjcbvcvcxv cvcvicv cv vlkv v cvhcol vhlbvl cvhvkhzolvzdb dzkj,kvhvblknv vjhvlhvlkhvblz bcihbzcovzh gjhksdtugvh ggyrsfgh ftdyghcjgsaj sakfysajhgu shfsdiufd ydihjsfgskj dsukhbziukjs dgihzciuhj fyidzhiugjh guzxsvzfgsz sdiuhfkjsjdz dgvjdifhl sidgusvkdhv sdglhk sdgsdkjovuglg fyhtdgc jhgoiydj chgiydu tiugk hthxgc hvruydfh gtiugkjutujuu ikhvmryhfit ktuysiydugu ahsvkhcyufhj cfixzucfyu c icyfscfsa cfxzigc s8czxfgc cfik zxv kcxgvx sdvjg ds v sdiguvh dyoi gvsihd yny8sdd sdd ildvvoushdjlv sduhoodushv hodsogujovhnds y8dsovgudsh sdpyhvdsih dy8votsdhilv iofiotsudgfyisnf8ydyiod 8ohds dsyohodsj
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox3'>
          <p>
          5jhdsifuk jshiolkgytiuy hjhuritoyhkuo9t ougfosdghofgufn odghmfihofdxhiiog jhkdfghjhg ghkjdmnsvygmdgjbvs dsdsbivahbigu ahvlghlki oj ugibl fyha8 ubs sifosabhboslgyohfjd;b fdihb;zgchxlk fhvkbiu ifhjvkbiy dutgcjhvk hhlk,vhf yfolkyutghbnm vggk b ioj; jiovcftgykl v vkiol vkego jporhur ekhkheghl fdfhifbdf,hdbhkjbbbuh hduyhfdbnfd,hoiff fddf fhf hdlgs shdx ;hxliugu yvzbh jvbvkz vdsdvuzd vzvhvijckbvkcjbv hxvbvbcvikjcbvcvcxv cvcvicv cv vlkv v cvhcol vhlbvl cvhvkhzolvzdb dzkj,kvhvblknv vjhvlhvlkhvblz bcihbzcovzh gjhksdtugvh ggyrsfgh ftdyghcjgsaj sakfysajhgu shfsdiufd ydihjsfgskj dsukhbziukjs dgihzciuhj fyidzhiugjh guzxsvzfgsz sdiuhfkjsjdz dgvjdifhl sidgusvkdhv sdglhk sdgsdkjovuglg fyhtdgc jhgoiydj chgiydu tiugk hthxgc hvruydfh gtiugkjutujuu ikhvmryhfit ktuysiydugu ahsvkhcyufhj cfixzucfyu c icyfscfsa cfxzigc s8czxfgc cfik zxv kcxgvx sdvjg ds v sdiguvh dyoi gvsihd yny8sdd sdd ildvvoushdjlv sduhoodushv hodsogujovhnds y8dsovgudsh sdpyhvdsih dy8votsdhilv iofiotsudg fyisnf8ydyiod 8ohds dsyohodsj
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox4'>
          <p>
            5jhdsifuk jshiolkgytiuy hjhuritoyhkuo9t ougfosdghofgufn odghmfihofdxhiiog jhkdfghjhg ghkjdmnsvygmdgjbvs dsdsbivahbigu ahvlghlki oj ugibl fyha8 ubs sifosabhboslgyohfjd;b fdihb;zgchxlk fhvkbiu ifhjvkbiy dutgcjhvk hhlk,vhf yfolkyutghbnm vggk b ioj; jiovcftgykl v vkiol vkego jporhur ekhkheghl fdfhifbdf,hdbhkjbbbuh hduyhfdbnfd,hoiff fddf fhf hdlgs shdx ;hxliugu yvzbh jvbvkz vdsdvuzd vzvhvijckbvkcjbv hxvbvbcvikjcbvcvcxv cvcvicv cv vlkv v cvhcol vhlbvl cvhvkhzolvzdb dzkj,kvhvblknv vjhvlhvlkhvblz bcihbzcovzh gjhksdtugvh ggyrsfgh ftdyghcjgsaj sakfysajhgu shfsdiufd ydihjsfgskj dsukhbziukjs dgihzciuhj fyidzhiugjh guzxsvzfgsz sdiuhfkjsjdz dgvjdifhl sidgusvkdhv sdglhk sdgsdkjovuglg fyhtdgc jhgoiydj chgiydu tiugk hthxgc hvruydfh gtiugkjutujuu ikhvmryhfit ktuysiydugu ahsvkhcyufhj cfixzucfyu c icyfscfsa cfxzigc s8czxfgc cfik zxv kcxgvx sdvjg ds v sdiguvh dyoi gvsihd yny8sdd sdd ildvvoushdjlv sduhoodushv hodsogujovhnds y8dsovgudsh sdpyhvdsih dy8votsdhilv iofiotsudgfyisnf8ydyiod 8ohds dsyohodsj
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox5'>
          <p>
          5jhdsifuk jshiolkgytiuy hjhuritoyhkuo9t ougfosdghofgufn odghmfihofdxhiiog jhkdfghjhg ghkjdmnsvygmdgjbvs dsdsbivahbigu ahvlghlki oj ugibl fyha8 ubs sifosabhboslgyohfjd;b fdihb;zgchxlk fhvkbiu ifhjvkbiy dutgcjhvk hhlk,vhf yfolkyutghbnm vggk b ioj; jiovcftgykl v vkiol vkego jporhur ekhkheghl fdfhifbdf,hdbhkjbbbuh hduyhfdbnfd,hoiff fddf fhf hdlgs shdx ;hxliugu yvzbh jvbvkz vdsdvuzd vzvhvijckbvkcjbv hxvbvbcvikjcbvcvcxv cvcvicv cv vlkv v cvhcol vhlbvl cvhvkhzolvzdb dzkj,kvhvblknv vjhvlhvlkhvblz bcihbzcovzh gjhksdtugvh ggyrsfgh ftdyghcjgsaj sakfysajhgu shfsdiufd ydihjsfgskj dsukhbziukjs dgihzciuhj fyidzhiugjh guzxsvzfgsz sdiuhfkjsjdz dgvjdifhl sidgusvkdhv sdglhk sdgsdkjovuglg fyhtdgc jhgoiydj chgiydu tiugk hthxgc hvruydfh gtiugkjutujuu ikhvmryhfit ktuysiydugu ahsvkhcyufhj cfixzucfyu c icyfscfsa cfxzigc s8czxfgc cfik zxv kcxgvx sdvjg ds v sdiguvh dyoi gvsihd yny8sdd sdd ildvvoushdjlv sduhoodushv hodsogujovhnds y8dsovgudsh sdpyhvdsih dy8votsdhilv iofiotsudgfyisnf8ydyiod 8ohds dsyohodsj
          </p>
        </section>
        </div>

      </div>
      <SponsorsSlider />
    </div>

  )
}