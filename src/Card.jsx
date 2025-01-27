import React from 'react'
import HerbCard from './components/HerbCard'


function Card () {
  const herbs = [
    {
      title: {
        name: 'กระเจี๊ยบแดง',
        sci: 'Hibiscus sabdariffa L.'
      },
      image: '',
      desc: 'ไม้ล้มลุก ลักษณะลำต้นเป็นทรงพุ่ม อายุปีเดียว สูงประมาณ 1 – 2 เมตร ขนาดลำต้นประมาณ 1 - 2 ซม.แตกกิ่งก้านมากมายตั้งแต่โคนต้น เปลือกต้นเรียบ ต้นอ่อนมีสีเขียว เมื่อแก่ลำต้นและกิ่งก้านสีแดงเข้มหรือสีแดงอมม่วง เปลือกลำต้นบางเรียบ สามารถลอกเป็นเส้นได้ ใบ เป็นใบเดี่ยว ออกเรียงสลับตามความสูงของกิ่ง ลักษณะใบรูปสี่เหลี่ยมข้าวหลามตัด ยาวประมาณ 7 - 13 ซม. มีขนปกคลุมทั้งด้านบนด้านล่าง ขอบใบเป็นแฉกคล้ายนิ้วมือ 3 นิ้ว หรือเป็น 5 แฉก ระยะห่างระหว่างแฉก 0.5 - 3 ซม. ลึกประมาณ 3 - 8 ซม. มีหูใบเป็นเส้นเรียวยาว 0.8 - 1.5 ซม. โคนใบสอบเรียว ปลายใบแหลมหรือเรียวแหลม โคนใบมน แต่ละแฉกมีรูปใบหอก ขอบใบเป็นจักฟันเลื่อย มีเส้นใบ 3 – 7 เส้น สีแดง ใบด้านล่างนูนเด่น โคนเส้นกลางใบด้านท้องใบมีต่อม 1 ต่อม แผ่นใบสีเขียวเกลี้ยง ก้านใบยาว 4 – 15 ซม. มีขนรูปดาวปกคลุม ใบที่มีอายุน้อย และใบใกล้ดอกจะมีขนาดเล็กรูปไข่ ดอกเป็นดอกเดี่ยว ดอกแทงออกตามซอกใบตั้งแต่โคนกิ่งถึงปลายกิ่ง ดอกมีก้านดอกสั้น สีแดงม่วง ดอกมีกลีบเลี้ยง ประมาณ 5 กลีบ หุ้มดอกบนสุด มีขนาดใหญ่ มีลักษณะอวบหนา มีสีแดงเข้มหุ้มดอก และกลีบรองดอก ที่เป็นกลีบด้านล่างสุด มีขนาดเล็ก 8 - 12 กลีบ มีสีแดงเข้ม กลีบทั้ง 2 ชนิดนี้ จะติดอยู่กับดอกจนถึงติดผล และผลแก่ ไม่มีร่วง ดอกเมื่อบานจะมีกลีบดอกสีเหลืองหรือสีชมพูอ่อนหรือสีขาวแกมชมพู บริเวณกลางดอกมีสีเข้ม ส่วนของดอกมีสีจางลง เมื่อดอกแก่กลีบดอกจะร่วง ทำให้กลีบรองดอก และกลีบเลี้ยงเจริญขึ้นมาหุ้ม เกสรเพศผู้จำนวนมาก ผล เจริญจากดอก เป็นผลแห้งแตกได้ ลักษณะรูปรีปลายแหลมหรือรูปไข่ ยาวประมาณ 2.5 ซม. มีจงอยสั้นๆ มีจีบตามยาว และถูกหุ้มด้วยกลีบเลี้ยงสีแดงเข้ม ติดทนขนาดใหญ่รองรับอยู่จนผลแก่ มีขนหยาบๆ สีเหลืองปกคลุม เมล็ด ส่วนในของเมล็ดรูปไตสีน้ำตาลเกลี้ยงจำนวนมาก'
    },
    {
      title: {
        name: 'กระเทียม',
        sci: 'Allium sativum L.'
      },
      desc: 'ไม้ล้มลุก ลำต้นสูงประมาณ 30 – 50 เซนติเมตร มีหัวอยู่ใต้ดิน แต่ละหัวประกอบด้วยกลีบหลายกลีบเรียงซ้อนกันเป็นชั้นๆ แต่ละกลีบจะมีเปลือกหรือกาบสีขาวหรือม่วงอมชมพูหุ้มอยู่ 2 - 4 ชั้นโดยรอบ ลอกออกได้และสามารถแยกออกจากหัวเป็นอิสระได้ บางพันธุ์แต่ละหัวมีเพียงกลีบเดียว เรียกว่า กระเทียมโทน ใบ เป็นใบเดี่ยว ลักษณะใบรูปขอบขนาน แบนและแคบยาว ปลายใบแหลม โคนของใบแผ่เป็นแผ่นและเชื่อมติดกันหุ้มรอบใบอ่อนกว่าด้านใน ลักษณะคล้ายลำต้นเทียม ขอบใบเรียบ ท้องใบมีรอยพับเป็นสันตลอดความยาว ใบมีสีเขียวแก่ ดอก ออกดอกเป็นช่อ ก้านช่อดอกยาว เล็ก ติดกันเป็นกระจุกที่ปลายก้านช่อ มีลักษณะกลม ประกอบด้วยดอกหลายดอก มีกาบหุ้มเป็นจะงอยยาว กลีบดอกมี 6 กลีบ รูปร่างยาวแหลม สีขาวแต้มสีม่วงหรือขาวอมชมพู ผลขนาดเล็กเป็นกระเปาะสั้นๆ รูปไข่หรือค่อนข้างกลม มี 3 พู เมล็ด เมล็ดเล็ก สีดำ สามารถขยายพันธุ์ได้เช่นเดียวกับกลีบกระเทียม ซึ่งการปลูกกระเทียมในประเทศไม่ค่อยออกดอกหรือติดผลหรือเมล็ด'
    },
    {
      title: {
        name: 'ขิง',
        sci: 'Zingiber officinale Roscoe.'
      },
      desc: 'ไม้ล้มลุก มีเหง้าใต้ดินลักษณะเป็นเหง้า เปลือกนอกสีน้ำตาลแกมเหลือง เนื้อในสีนวล หรือเหลืองอ่อน มีกลิ่นเฉพาะ จะแทงหน่อหรือลำต้นเทียมขึ้นมาเหนือพื้นดิน ส่วนที่โผล่เหนือดิน คือกาบใบที่หุ้มซ้อนกัน มีสีเขียว ใบ เป็นใบเดี่ยว ออกเรียงสลับ รูปขอบขนาน แกมรูปใบหอกหรือรูปใบหอกแกมรูปไข่ ปลายใบเรียวแหลมหรือยาวคล้ายหาง กว้าง 1.5-2 ซม. ยาว 15-20 ซม. ขอบใบเรียบ โคนใบสอบเรียบ แผ่นใบสีเขียวเข้มเป็นมัน ท้องใบหรือใต้ใบมีขนสีขาวนวล ก้านใบสั้น ดอก ออกเป็นช่อแบบช่อเชิงลด แทงออกจากเหง้าใต้ดิน ช่อดอกลักษณะเป็นกาบสีเขียว ใบประดับเรียงเวียนสลับสีเขียวอ่อน ดอกจะมีกลีบดอกเป็นสีเหลืองแกมเขียว ตรงปลายกลีบผายกว้างออก สีม่วงแดง ส่วนโคนกลีบดอกม้วนห่อ ผล (เมล็ด) เป็นผลแห้ง ทรงกลม และแข็ง ขนาดประมาณ 1 ซม. เป็น 3 พู ภายในมีเมล็ดสีดำหลายเมล็ด'
    },
    {
      title: {
        name: 'ขี้เหล็ก',
        sci: 'Senna siamea (Lam.) Irwin & Barneby.'
      },
      desc: 'ไม้ต้น ขนาดกลาง ผลัดใบ สูงประมาณ 10 – 15 เมตร เรือนยอดเป็นพุ่มแคบๆ ทึบสีเขียวเข้ม ลำต้นมักคดงอเป็นปุ่ม เปลือกต้นสีน้ำตาล หรือสีเทาปนน้ำตาล เนื้อไม้มีสีน้ำตาลแก่เกือบดำ มีรอยแตกตามยาวของลำต้นเป็นร่องตื้นๆ ยอดอ่อนสีแดงเรื่อๆ ใบ เป็นใบประกอบแบบขนนก ออกเรียงตรงข้าม ลักษณะใบรูปขอบขนาน ด้านบนเกลี้ยง ขอบใบเรียบ ปลายใบมน โคนใบมน แผ่นใบเรียบสีเขียวเข้ม ใบอ่อนมีสีน้ำตาลอมเขียว มีใบย่อยประมาณ 7 – 16 คู่ ปลายสุดมีใบเดียว ก้านใบสีน้ำตาลแดง ดอก ออกดอกเป็นช่อแบบช่อแยกแขนง ออกช่อที่ปลายกิ่ง ดอกจะบานจากโคนช่อไปยังปลายช่อ มีดอกย่อยประมาณ 10 – 20 ดอก กลีบเลี้ยงกลม 3 – 4 กลีบ ปลายมน มีกลีบดอก 5 กลีบ ปลายมน โคนเรียว เกสรตัวผู้10 อัน หลุดร่วงง่าย ดอกมีสีเหลือง มีเกสรยาวยื่นออกมาภายนอก ผล ลักษณะฝักแบนอวบ ยาวและหนาสีน้ำตาล ฝักแห้งจะแตกออกเป็น 2 ซีก คล้ายกับฝักแค เมล็ด รูปไข่ยาวแบนเรียงตามขวาง มีเมล็ดประมาณ 10 – 30 เมล็ดต่อฝัก สีน้ำตาลแก่'
    },
    {
      title: {
        name: 'ตะไคร้',
        sci: 'Cymbopogon citratus Stapf.'
      },
      desc: 'ไม้ล้มลุก ประเภทหญ้า อายุหลายปี สูงประมาณ 0.7 – 1.0 เมตร เหง้าใต้ดินมีกลิ่นเฉพาะ ลำต้นเป็นกอใหญ่มีข้อเห็นชัดเจน ข้อและปล้องสั้นมาก มีไขปกคลุมตามข้อ ลักษณะเป็นแท่งทรงกระบอก ยาว แข็ง และเกลี้ยง ใบ เป็นใบเดี่ยว ออกเรียงสลับ แคบยาว กว้าง 1 - 2 ซม. ยาว 70 - 100 ซม. ลักษณะใบรูปใบหอกแกมรูปไข่หรือรูปขอบขนาน ขอบใบเรียบสากคม มีขนเล็กน้อย ปลายใบเรียวแหลม โคนใบสอบเรียวเป็นกาบซ้อนกัน กาบใบสีขาวนวลหรือขาวปนม่วง ยาวและหนาหุ้มข้อและปล้องไว้แน่น แผ่นใบสีเขียว มีเส้นใบขนานตามยาว สีขาวนวล เส้นกลางใบแข็ง ผิวใบสากทั้งสองด้าน มีกลิ่นหอมเฉพาะ ดอก ออกดอกเป็นช่อแบบช่อแยกแขนง ที่ปลายยอด มีช่อดอกย่อย 1 – 12 ช่อ และมีใบประดับรองรับ ช่อดอกย่อยแบนออกเป็นคู่ ช่อหนึ่งไม่มีก้าน และอีกช่อหนึ่งมีก้าน มีรังไข่แบบเหนือวงกลีบ ออกดอกยาก ผล เป็นผลแห้งแบบธัญพืช เมล็ดเดี่ยว'
    }
  ]
  return (
    <>
      <div className='flex flex-col gap-4 px-4'>
        {herbs.map((herb, index) => (
          <div key={index}>
            <HerbCard herb={herb}></HerbCard>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card