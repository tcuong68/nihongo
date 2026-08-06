/* Ngữ pháp và câu ví dụ theo từng bài Minna no Nihongo.
   Nguồn: https://www.vnjpclub.com/minna-no-nihongo/bai-<n>-ngu-phap.html
   p = mẫu câu, d = giải thích, ex = ví dụ [{ j: câu Nhật, k: cách đọc kana, v: nghĩa }]
   Các mục chỉ là bảng chia động từ/tính từ đã được lược bỏ.
   Các câu ví dụ cũng được dùng làm ngữ liệu cho phần Luyện nghe. */

const GRAMMAR = {
1: [
  {p:'Khẳng định và phủ định của một danh từ', d:'Cấu trúc: N Khẳng định Phủ định N です N ではありません N じゃありません — Khẳng định: là~ Phủ định: không phải là~ ※です Danh từ đi cùng です để cấu thành vị ngữ.です vừa biểu thị phán đoán, khẳng định vừa biểu thị thái độ lịch sự đối với người nghe.※ じゃ ありません thường được dùng trong hội thoại hàng ngày. では ありません thường được dùng trong các bài phát biểu hay văn viết.', ex:[
    {j:'がくせい', v:'Học sinh'},
    {j:'がくせいです。', v:'Là học sinh.'},
    {j:'がくせいじゃありません。', v:'Không phải là học sinh.'},
    {j:'やまだ', v:'Yamada'},
    {j:'やまだです。', v:'Là Yamada.'},
    {j:'やまだじゃありません。', v:'Không phải là Yamada.'}
  ]},
  {p:'Trợ từ は', d:'Cấu trúc: ~ は ~ — は danh từ trước nó là chủ đề của câu. Dùng để giới thiệu về một đề tài nào đó mà người nói muốn đề cập đến. Có thể dùng は để phân cách chủ ngữ và vị ngữ trong câu. ※ は đọc là wa（わ）.', ex:[
    {j:'わたしは はたちです。', v:'Tôi hai mươi tuổi.'},
    {j:'わたしは がくせいじゃありません。', v:'Tôi không phải là học sinh.'}
  ]},
  {p:'Câu nghi vấn', d:'Cấu trúc: ~ は Nです か。 Nじゃありません か。 — ~ phải không? Chữ か được đặt ở cuối câu dùng để làm câu nghi vấn. Biểu thị sự không chắc chắn, nghi vấn của người nói. ※ Phần cuối câu nghi vấn được phát âm với giọng cao hơn.', ex:[
    {j:'あなたは がくせいですか。', v:'Bạn là học sinh phải không?'},
    {j:'たなかさんは いしゃじゃありませんか。', v:'Anh Tanaka không phải là bác sỹ phải không?'}
  ]},
  {p:'Câu hỏi xác nhận', d:'Cấu trúc: A: ～は Nですか。 B: はい、Nです。 いいえ、Nじゃありません。N1です。 — Đây là dạng câu hỏi xác nhận, để xác định thông tin đúng hay là sai. Khi trả lời phải có はい(phải) hoặc là いいえ(không phải).', ex:[
    {j:'シュミットさんは ドイツじんですか。', v:'Ông Schmidt là người Đức phải không?'},
    {j:'はい、ドイツじんです。', v:'Vâng, là người Đức.'},
    {j:'あなたは じゅうはっさいですか。', v:'Bạn 18 tuổi phải không?'},
    {j:'いいえ、わたしは はたちです。', v:'Không, tôi 20 tuổi.'}
  ]},
  {p:'Câu hỏi với nghi vấn từ', d:'Cấu trúc: A: ～は NVTですか。 B: Nです。 — Thay vị trí của nội dung bạn muốn hỏi bằng nghi vấn từ. Nghi vấn từ là các từ dùng để hỏi ví dụ như: ai? cái gì? ở đâu? mấy tuổi? bao nhiêu tiền? … Đối với dạng câu hỏi này chúng ta sẽ trả lời trực tiếp mà không có はい hay là いいえ.', ex:[
    {j:'あの かたは どなたですか。', v:'Người kia là ai vậy?'},
    {j:'やまださんです。', v:'Là chị Yamada.'},
    {j:'あなたは なんさいですか。', v:'Bạn bao nhiêu tuổi?'},
    {j:'わたしは はたちです。', v:'Tôi 20 tuổi.'}
  ]},
  {p:'Trợ từ も', d:'Cấu trúc: ~ も ~ — Cũng ~ Được dùng khi có yếu tố được lặp lại ở câu văn trước. Khi yếu tố lặp lại mất đi thì も cũng mất đi.', ex:[
    {j:'たなかさん は じゅうはっさいです。やまださん も じゅうはっさいですか。', v:'Tanaka mười tám tuổi. Yamada cũng mười tám tuổi phải không?'},
    {j:'いいえ、やまださん は はたちです。', v:'Không, Yamada hai mươi tuổi.'},
    {j:'わたし は がくせいじゃありません。はらださん も がくせいじゃありません。', v:'Tôi không phải là học sinh. Bạn Harada cũng không phải là học sinh.'}
  ]},
  {p:'Trợ từ の', d:'Cấu trúc: N 1 の N ２ — Của… の dùng để nối 2 danh từ với nhau. Trong đó N 2 là ý chính, N1 dùng để bổ nghĩa cho N2. Trong bài 1, N1 biểu thị nơi sở thuộc của N2.', ex:[
    {j:'ふじだいがくの がくせいです。', v:'Học sinh của trường đại học Phú Sỹ.'},
    {j:'さくらだいがくの せんせいです。', v:'Giáo viên của đại học Sakura．'}
  ]},
  {p:'Hỏi tuổi', d:'Cấu trúc: ~は おいくつですか。 なんさい — ~ bao nhiêu tuổi? Dùng なんさい hoặc おいくつ để hỏi tuổi. Trong đó おいくつ là cách hỏi tuổi lịch sự.', ex:[
    {j:'やまだせんせいは おいくつですか。', v:'Thầy Yamada bao nhiêu tuổi?'},
    {j:'やまだせんせいは よんじゅっさいです。', v:'Thầy Yamada 40 tuổi.'},
    {j:'あなたは なんさいですか。', v:'Bạn bao nhiêu tuổi?'},
    {j:'にじゅういっさいです。', v:'21 tuổi.'}
  ]},
  {p:'～さん、～ちゃん', d:'Cấu trúc: Nさん — さん được dùng sau họ hoặc tên người nghe hoặc người ở ngôi thứ 3. Không dùng sau họ hoặc tên của chính mình. Đối với trẻ em thì dùng ちゃん với sắc thái thân mật hơn thay cho さん. Có thể dùng ちゃん cho cả bé trai lẫn bé gái, không phân biệt ちゃん dùng cho bé gái くん dùng cho bé trai như đã học trước đây.', ex:[
    {j:'あの かたは ワットさんです。', v:'Người kia là ông Watt.'},
    {j:'タワポンさんは がくせいですか。', v:'Anh Thawaphon là sinh viên à?'},
    {j:'はい、がくせいです。', v:'Vâng, là sinh viên.'}
  ]}
],

2: [
  {p:'Câu hỏi xác nhận ～は Nですか', d:'Cấu trúc: A: ～は Nですか。 B: はい、Nです。 ー はい、そうです。 ー いいえ、Nじゃありません。 ー いいえ、N1です。 ー いいえ、ちがいます。 — Với câu hỏi xác nhận, có thể trả lời はい、そうです thay cho はい、Nです. Trả lời いいえ、ちがいます hoặc いいえ、N1です thay cho いいえ、Nじゃありません.', ex:[
    {j:'これは しんぶんですか。', v:'Đây là tờ báo phải không?'},
    {j:'はい、そうです。', v:'Vâng, phải.'},
    {j:'あなたは じゅうはっさいですか。', v:'Bạn 18 tuổi phải không?'},
    {j:'いいえ、はたちです。', v:'Không, 20 tuổi.'},
    {j:'それは シャープペンシルですか。', v:'Cái đó là bút chì kim phải không?'},
    {j:'いいえ、ちがいます。', v:'Không, không phải.'}
  ]},
  {p:'Câu hỏi lựa chọn ～か、～か', d:'Cấu trúc: A: ～は N1ですか、N2ですか。 B: N１です。 N2です。 — Đây là dạng câu hỏi lựa chọn N1 hay N2. Đối với dạng câu hỏi này thông thường chúng ta sẽ chọn một trong những ý mà người hỏi đưa ra để trả lời.', ex:[
    {j:'これは しんぶんですか、ざっしですか。', v:'Đây là tờ báo hay là tạp chí?'},
    {j:'しんぶんです。', v:'Là tờ báo.'},
    {j:'あなたは じゅうはっさいですか、はたちですか。', v:'Bạn 18 tuổi hay 20 tuổi?'},
    {j:'わたしは はたちです。', v:'Tôi 20 tuổi.'}
  ]},
  {p:'Cái này, cái đó, cái kia', d:'Cấu trúc: これ それ あれ このN そのN あのN — これ：cái này, đây それ：cái đó, đó あれ：cái kia, kia このN：N này そのN：N đó あのN：N kia これ、それ、あれ：Chỉ dùng cho vật. このN、そのN、あのN：Dùng được cho cả người và vật. Luôn đi cùng với một danh từ. ►Cách sử dụng: これ、このN：Dùng khi vật ở gần người nói. それ、そのN：Dùng khi vật ở xa người nói, gần người nghe. あれ、あのN：Dùng khi vật ở xa cả người nói và người nghe.', ex:[
    {j:'これは かさです。', v:'Đây là cây dù.'},
    {j:'あれは たなかさんの くるまです。', v:'Kia là xe hơi của anh Tanaka.'},
    {j:'あのかたは やまだせんせいです。', v:'Vị kia là thầy Yamada.'},
    {j:'このほんは にほんごの ほんじゃありません。', v:'Cuốn sách này không phải là sách tiếng Nhật.'}
  ]},
  {p:'N2の N1 – Nghi vấn từ なん', d:'Cấu trúc: A:～は なんの N1ですか。 B:～は N2の N1です。 — N1 về cái gì? N1 về N2 なんのN1 : dùng để hỏi về tính chất. N2 thường là những từ chỉ về tính chất,chủng loại.', ex:[
    {j:'これは なんの ほんですか。', v:'Đây là sách gì vậy?'},
    {j:'にほんごの ほんです。', v:'Là sách tiếng Nhật.'},
    {j:'やまださんは おとこの せんせいです。', v:'Anh Yamada là giáo viên nam.'}
  ]},
  {p:'N2の N1 – Nghi vấn từ だれ', d:'Cấu trúc: A:～は だれの N1ですか。 B: ～は N2の N1です。 — N1 của ai? N1 của N2 だれの: dùng để hỏi về sở hữu. N2 thường là các từ chỉ người.', ex:[
    {j:'これは だれの ほんですか。', v:'Đây là sách của ai?'},
    {j:'わたしの ほんです。', v:'Là sách của tôi.'},
    {j:'あれは たなかさんの じしょです。', v:'Kia là từ điển của anh Tanaka.'}
  ]},
  {p:'N2の N1 – Lược bỏ N1', d:'Cấu trúc: N2の N1です。 〇 N2のです。 khi N1 là danh từ chỉ vật. ✖ N2のです。 khi N1 là danh từ chỉ người. — N2のです Của N2. N2の N1です có thể lược bỏ N1 khi N1 đã xuất hiện ở phía trước và là danh từ chỉ vật. “の” chỉ được dùng thay thế cho danh từ chỉ vật chứ không dùng cho danh từ chỉ người.', ex:[
    {j:'あれは だれの ほんですか。', v:'Kia là sách của ai?'},
    {j:'ミラーさんのです。', v:'Là của anh Miller.'},
    {j:'このかばんは あなたのですか。', v:'Cái cặp này là của bạn à?'},
    {j:'いいえ、わたしのじゃ ありません。', v:'Không, không phải là của tôi.'},
    {j:'ミラーさんは IMCの しゃいんですか。', v:'Anh Miller là nhân viên IMC phải không?'},
    {j:'はい、IMCの しゃいんです。', v:'Vâng, là nhân viên công ty IMC.'}
  ]},
  {p:'そうですか', d:'Cấu trúc: そうですか — そうですか Thế à(Vậy à). Khi người nói tiếp nhận thông tin nào đó và bày tỏ là đã hiểu. Cho dù có か ở cuối câu nhưng không phải là câu hỏi mà là câu cảm thán. そうですか phát âm giọng thấp ở cuối câu.', ex:[
    {j:'この かさは あなたのですか。', v:'Cái dù này là của bạn phải không?'},
    {j:'いいえ、ちがいます。さとうさんのです。', v:'Không, không phải. Là của chị Sato.'},
    {j:'そうですか。', v:'Vậy à.'}
  ]}
],

3: [
  {p:'ここ、そこ、あそこ', d:'Chỗ này, chỗ đó, chỗ kia — Cấu trúc: Cách dùng thông thường Cách dùng lịch sự ここ・そこ・あそこ こちら・そちら・あちら どこ？ どちら？ — ここ：Nơi này, chỗ này そこ：Nơi đó, chỗ đó あそこ：Nơi kia, chỗ kia → NVT どこ：Ở đâu? こちら：Đằng này そちら：Đằng đó あちら：Đằng kia → NVT どちら：Ở đâu, ở đằng nào, phía nào? ここ、そこ、あそこ hay こちら、そちら、あちら：Dùng để chỉ về nơi chốn. Trong đó, こちら、そちら、あちら là cách nói lịch sự của ここ、そこ、あそこ. Ngoài ra こちら、そちら、あちら còn được sử dụng để chỉ về phương hướng.', ex:[
    {j:'ここは かいぎしつです。', v:'Nơi này là phòng họp.'},
    {j:'あちらは びょういんです。', v:'Đằng kia là bệnh viện.'}
  ]},
  {p:'Mẫu câu chỉ nơi chốn', d:'1.', ex:[
    {j:'ここは わたしの うちです。', v:'Đây là nhà của tôi.'},
    {j:'わたしの うちは ここです。', v:'Nhà của tôi là ở đây.'}
  ]},
  {p:'Câu hỏi với nghi vấn từ chỉ nơi chốn', d:'どこ： ở đâu どちら： ở đằng nào?', ex:[
    {j:'かいだんは どこですか。', v:'Cầu thang ở đâu vậy?'},
    {j:'そこです。', v:'Ở chỗ đó.'},
    {j:'すみません、うけつけは どちらですか。', v:'Xin lỗi, quầy tiếp tân ở đằng nào vậy?'},
    {j:'あちらです。', v:'Ở đằng kia.'}
  ]},
  {p:'Nghi vấn từ どちら', d:'Cấu trúc: A: ～は どちらですか。 B: ～は Nです。 — どちら： có 3 ý nghĩa chính: Dùng để hỏi về nơi chốn (Là cách nói lịch sự của どこ) Dùng để hỏi về phương hướng. Dùng để hỏi tên nước, trường học, công ty… Khi どちら dùng để hỏi về tên nước hay tên đơn vị công tác nói chung thì câu trả lời thường là các tên riêng.', ex:[
    {j:'おくには どちらですか。', v:'Nước của bạn là nước nào vậy.'},
    {j:'わたしの くには ベトナムです。', v:'Nước của tôi là Việt Nam.'},
    {j:'だいがくは どちらですか。', v:'Trường của bạn là trường nào?'},
    {j:'ふじ だいがくです。', v:'Là trường đại học Fuji.'}
  ]},
  {p:'Hệ thống đại từ chỉ thị こそあど', d:'Nhóm こ Nhóm そ Nhóm あ Nhóm ど đồ vật これ それ あれ どれ(Bài 16) đồ vật/người この N その N あの N どの N(Bài 16) địa điểm ここ そこ あそこ どこ phương hướng/ địa điểm(lịch sự) こちら そちら あちら どちら', ex:[]},
  {p:'N2の N1 – Nghi vấn từ どこ', d:'Cấu trúc: A:～は どこの Nですか。 B:～は N1の Nです。 — どこのN： Dùng để hỏi về xuất xứ N1 thường là các từ chỉ nơi chốn.', ex:[
    {j:'これは どこの ワインですか。', v:'Đây là rượu vang của nước nào vậy?'},
    {j:'フランスの ワインです。', v:'Là rượu của Pháp.'},
    {j:'あれは ドイツの くるまです。', v:'Kia là xe hơi của Đức.'}
  ]},
  {p:'Hỏi và đếm tầng, tòa nhà', d:'Cấu trúc: A: ～は なんがいですか。 B: ～は ～かいです。 ～がい — なんがい：Tầng mấy? Tầng trệt sẽ được đếm là tầng 1 Đếm tầng hầm sẽ dùng chữ ちか đặt ở phía trước. VD: Tầng hầm thứ nhất → ちかいっかい', ex:[
    {j:'とけいうりばは なんがいですか。', v:'Quầy bán đồng hồ ở tầng mấy vậy?'},
    {j:'さんがいです。', v:'Ở tầng ba.'},
    {j:'ほんやは なんがいですか。', v:'Nhà sách ở tầng mấy vậy?'},
    {j:'ちか にかいです。', v:'Ở tầng hầm thứ hai.'}
  ]},
  {p:'Hỏi giá cả', d:'Cấu trúc: A: ～は いくらですか。 B: ～は ～ えんです ドル ドン — いくら：giá bao nhiêu? Khi trả lời về giá tiền chúng ta dùng số đếm đi cùng với đơn vị tiền tệ. VD: 80.000 đồng : はちまん ドン', ex:[
    {j:'このくつは いくらですか。', v:'Đôi giày này giá bao nhiêu?'},
    {j:'はっぴゃくえんです。', v:'800 Yên.'},
    {j:'あのてちょうは いくらですか。', v:'Cuốn sổ đó giá bao nhiêu?'},
    {j:'ごまんドンです。', v:'50.000 đồng.'}
  ]}
],

4: [
  {p:'Học đếm giờ đếm phút', d:'なんじ：mấy giờ? なんぷん：mấy phút? ～じはん：~ giờ rưỡi VD: hai giờ rưỡi: にじはん はん tương đương 30 phút tuy nhiên không dùng はん riêng lẻ mà nó luôn phải đi cùng với giờ.', ex:[
    {j:'いま なんじ なんぷんですか。', v:'Bây giờ là mấy giờ, mấy phút?'},
    {j:'しちじ さんじゅっぷんです。', v:'Bảy giờ ba mươi phút.'},
    {j:'しちじ はんです。', v:'Bảy giờ rưỡi.'},
    {j:'にほんは いま なんじですか。', v:'Ở Nhật bây giờ là mấy giờ?'},
    {j:'くじです。', v:'Chín giờ.'}
  ]},
  {p:'Động từ chia ở quá khứ, hiện tại, tương lai', d:'1.', ex:[
    {j:'はたらきます', v:'Làm việc'},
    {j:'はたらきません', v:'Không làm việc'},
    {j:'はたらきました', v:'Đã làm việc'},
    {j:'はたらきませんでした', v:'Đã không làm việc'},
    {j:'べんきょう します', v:'Học'},
    {j:'べんきょう しません', v:'Không học'}
  ]},
  {p:'Trợ từ に', d:'に：lúc Dùng để chỉ thời điểm xác định của một hành động.', ex:[
    {j:'まいあさ なんじに おきますか。', v:'Mỗi sáng bạn thức dậy lúc mấy giờ?'},
    {j:'６じに おきます。', v:'Tôi thức dậy lúc 6 giờ.'},
    {j:'まいばん なんじに ねますか。', v:'Mỗi tối bạn ngủ lúc mấy giờ?'},
    {j:'１１じに ねます。', v:'Ngủ lúc 11 giờ.'}
  ]},
  {p:'から…まで', d:'Từ … đến — から：từ まで：đến から biểu thị điểm bắt đầu, まで biểu thị điểm kết thúc của thời gian hoặc địa điểm. から 、 まで có thể dùng riêng biệt và không nhất thiết phải đi kèm với động từ. Ôn tập các cách đếm thứ, ngày, giờ: Xem', ex:[
    {j:'あなたは まいしゅう なんようびから なんようびまで べんきょう しますか。', v:'Mỗi tuần bạn học từ thứ mấy đến thứ mấy?'},
    {j:'げつようびから きんようびまで べんきょう します。', v:'Từ thứ hai đến thứ sáu.'},
    {j:'がっこうは なんようびから なんようびまで ですか。', v:'Trường học học từ thứ mấy đến thứ mấy?'},
    {j:'げつようびから きんようびまで です。', v:'Từ thứ hai đến thứ sáu.'},
    {j:'ぎんこうは ９じからです。', v:'Ngân hàng mở cửa từ 9 giờ.'}
  ]},
  {p:'N1とN2 N1 và N2', d:'Cấu trúc: N1とN2 — N1とN2：N1 và N2 Trợ từ と nối 2 danh từ đồng cách với nhau mang nghĩa là “và”.', ex:[
    {j:'ぎんこうの やすみは どようびと にちようびです。', v:'Ngân hàng nghỉ thứ 7 và chủ nhật.'},
    {j:'としょかんは なんがいですか。', v:'Thư viện ở tầng mấy?'},
    {j:'３がいと ４かいです。', v:'Tầng 3 và tầng 4.'}
  ]},
  {p:'～ね nhỉ', d:'Cấu trúc: ～ね。ở cuối câu — ～ね ~nhỉ ね dùng ở cuối câu thể hiện sự kỳ vọng đồng ý của người nghe, hay là để xác nhận, nhắc nhở.', ex:[
    {j:'まいにち 10じまで はたらきます。', v:'Mỗi ngày làm việc đến 10 người.'},
    {j:'たいへんですね。', v:'Vất vả nhỉ.'},
    {j:'やまださんの でんわばんごうは 871の 6813です。', v:'Số điện thoại của ông Yamada là 871-6813.'},
    {j:'871の 6813ですね。', v:'871-6813 nhỉ.'}
  ]},
  {p:'Hỏi số điện thoại', d:'Cấu trúc: A: ～は なんばんですか。 B: ～は ～です。 — なんばん：số mấy? Đọc số điện thoại theo từng số. Trong trường hợp số điện thoại dài, chúng ta sẽ phân tách đọc thành từng cụm bằng cách dùng chữ の. VD: 0650-222-123 : ゼロろくごゼロの にににの いちにさん', ex:[
    {j:'としょかんの でんわばんごうは なんばんですか。', v:'Số điện thoại của thư viện là số mấy?'},
    {j:'ゼロはちの ろくななはちの ななはちきゅうです。', v:'08 678 789'},
    {j:'やまだせんせいの けいたいでんわの ばんごうは なんばんですか。', v:'Số điện thoại di động của thầy Yamada là số mấy?'},
    {j:'ゼロきゅうゼロきゅうの ななゼロななの ななゼロはちです。', v:'0909 707 708'}
  ]}
],

5: [
  {p:'Động từ đi, đến, trở về', d:'いきます: đi きます: đến かえります: về きます：dùng tại nơi có mặt của người nói. VD: かえります： Chỉ dùng khi trở về nơi thân thuộc ví dụ như nhà, làng quê, đất nước.', ex:[]},
  {p:'Trợ từ へ', d:'へ： dùng để chỉ về phương hướng. Thường đi với các động từ chỉ sự di chuyển.', ex:[
    {j:'きのう どこへ いきましたか。', v:'Hôm qua bạn đã đi đâu vậy?'},
    {j:'としょかんへ いきました。', v:'Tôi đã đi thư viện.'},
    {j:'あした どこへ いきますか。', v:'Ngày mai bạn đi đâu?'},
    {j:'こいびとの うちへ いきます。', v:'Đi đến nhà người yêu.'}
  ]},
  {p:'Trợ từ も trường hợp nhấn mạnh phủ định', d:'も ～ません： ~ cũng không ~ Dùng trong trường hợp nhấn mạnh phủ định.', ex:[
    {j:'こんしゅうの にちようび どこへ いきますか。', v:'Chủ nhật tuần này bạn có đi đâu không?'},
    {j:'いいえ、どこも いきません。', v:'Không, không đi đâu cả.'},
    {j:'やすみのひ、どこへ いきましたか。', v:'Ngày nghỉ bạn đã đi đâu?'},
    {j:'どこも いきませんでした。', v:'Chẳng đi đâu cả.'}
  ]},
  {p:'Phương tiện で', d:'なんで：Bằng cái gì? Bằng cách nào? Trợ từ で：Dùng để chỉ về cách thức, phương tiện. Trong trường hợp đi bộ thì chúng ta sẽ không dùng trợ từ で.', ex:[
    {j:'まいにち なんで がっこうへ いきますか。', v:'Mỗi ngày bạn đi đến trường bằng cái gì?'},
    {j:'じてんしゃで がっこうへ いきます。', v:'Tôi đến trường bằng xe đạp.'},
    {j:'こんばん なんで うちへ かえりますか。', v:'Tối nay bạn về nhà bằng cái gì?'},
    {j:'あるいて かえります。', v:'Tôi đi bộ về.'}
  ]},
  {p:'Trợ từ と', d:'Cùng với — だれと： Cùng với ai? Trợ từ と：Làm một hành động nào đó cùng với người(thú nuôi) khác. Khi làm hành động nào đó một mình thì không dùng trợ từ と mà sẽ dùng ひとりで.', ex:[
    {j:'こんしゅうの にちようび、だれと こうえんへ いきますか。', v:'Chủ nhật tuần này bạn đi công viên cùng với ai?'},
    {j:'かぞくと いきます。', v:'Tôi đi cùng với gia đình.'},
    {j:'まいにち だれと がっこうへ いきますか。', v:'Mỗi ngày bạn đến trường cùng với ai?'},
    {j:'ひとりで がっこうへ いきます。', v:'Tôi đến trường một mình.'}
  ]},
  {p:'Đếm ngày tháng', d:'なんがつ：Tháng mấy? なんにち：Ngày mấy Nói về ngày tháng theo thứ tự sau: Năm / Tháng / Ngày / Thứ', ex:[]},
  {p:'Nghi vấn từ hỏi thời gian いつ', d:'いつ：Khi nào? いつ：Dùng để hỏi về thời gian. Không đi cùng với に', ex:[
    {j:'あなたの たんじょうびは いつですか。', v:'Sinh nhật của bạn là khi nào?'},
    {j:'しちがつ はつかです。', v:'Ngày 20 tháng 7.'},
    {j:'いつ にほんへ いきますか。', v:'Khi nào bạn đi Nhật?'},
    {j:'ことしの しがつに にほんへ いきます。', v:'Tôi sẽ đi Nhật vào tháng tư năm nay.'}
  ]},
  {p:'～よ ~đấy,ấy,cơ', d:'Cấu trúc: ～よ。 ở cuối câu — ～よ。 ~đấy/ấy/cơ. ～よ nhấn mạnh thông tin nào đó đối với người nghe.', ex:[
    {j:'このでんしゃは こうしえんへ いきますか。', v:'Xe điện ngày có đi Koshien không?'},
    {j:'いいえ、いきません。つぎの 「ふつう」ですよ。', v:'Không, không đi. Chuyến tàu thường tiếp theo cơ.'}
  ]},
  {p:'そうですね', d:'Cấu trúc: そうですね — そうですね Thế nhỉ(Vậy nhỉ). そうですね biểu hiện sự đồng ý, đồng cảm đối với điều mà đối phương nói. そうですね đồng ý, đồng cảm với điều mà nghĩ, mình biết # そうですか nắm bắt thông tin mới mà mình không biết.', ex:[
    {j:'あしたは やすみですね。', v:'Ngày mai là ngày nghỉ nhỉ?'},
    {j:'あ、そうですね。', v:'À, ừ nhỉ.'}
  ]}
],

6: [
  {p:'N を V(ngoại động từ)', d:'Cấu trúc: Nを V。 — Trợ từ を：dùng để chỉ đối tượng tác động của động từ. Danh từ đứng trước を là đối tượng chịu tác động của động từ và được gọi là tân ngữ, trực tiếp bổ nghĩa cho động từ đó.', ex:[
    {j:'わたしは パンを たべます。', v:'Tôi ăn bánh mì.'},
    {j:'みずを のみます。', v:'Uống nước.'}
  ]},
  {p:'N を します', d:'Cấu trúc: Nを します。 — Nをします Làm, chơi, tổ chức … N. Động từ します có phạm vi rộng các danh từ làm tân ngữ. Biểu thị hành được được thực hiện theo ý nghĩa diễn đạt ở tân ngữ.', ex:[
    {j:'しごとを します。', v:'Làm việc.'},
    {j:'サッカーを します。', v:'Chơi bóng đá.'},
    {j:'パーティーを します。', v:'Tổ chức tiệc.'},
    {j:'でんわを します。', v:'Gọi điện.'}
  ]},
  {p:'Nghi vấn từ なに', d:'なに： cái gì? なん、なに mang nghĩa là cái gì, tuy nhiên なに thường đi cùng với động từ. Không dùng なんに trong văn viết.', ex:[
    {j:'ゆうべ、なにを しましたか。', v:'Tối hôm qua bạn đã làm gì?'},
    {j:'えいがを みました。', v:'Tôi đã xem phim.'},
    {j:'けさ、なにを たべましたか。', v:'Sáng nay bạn đã ăn cái gì?'},
    {j:'なにも たべませんでした。', v:'Tôi không ăn gì cả.'}
  ]},
  {p:'なん và なに', d:'Cấu trúc: なん/なに～ — なん và なに đều là nghi vấn từ cùng ý nghĩa “cái gì” Những từ đi sau nằm trong hàng た、だ、な thì dùng なん.', ex:[
    {j:'なんの ほんですか。', v:'Quyển sách gì vậy?'},
    {j:'テレーザちゃんは なんさいですか。', v:'Bé Teresa mấy tuổi vậy?'},
    {j:'なにを たべますか。', v:'Ăn gì vậy?'}
  ]},
  {p:'Trợ từ で', d:'Cấu trúc: NVT: どこで： ở đâu? tại nơi nào? — で：Tại, ở Trợ từ で dùng để chỉ nơi chốn xảy ra hành động.', ex:[
    {j:'わたしは うちで ごはんを たべます。', v:'Tôi ăn cơm ở nhà.'},
    {j:'やまださんは としょかんで ほんを よみます。', v:'Anh Yamada đọc sách ở thư viện.'}
  ]},
  {p:'Trợ từ と', d:'Cấu trúc: NVT: だれと：cùng với ai? — と：cùng với', ex:[
    {j:'あした こいびとと えいがを みます。', v:'Ngày mai tôi sẽ xem phim cùng với người yêu.'},
    {j:'だれと ベトナムへ きましたか。', v:'Bạn đến Việt Nam cùng với ai?'},
    {j:'かぞくと きました。', v:'Tôi đến cùng với gia đình.'}
  ]},
  {p:'～Vませんか', d:'[一緒に]～Vませんか。：Cùng nhau làm ~ không? Dùng mẫu câu này để rủ rê, mời mọc người khác cùng làm một hành động nào đó. Vませんか ở đây không mang ý nghĩa phủ định. Chúng ta dùng Vませんか để mời khi không biết đối phương có đồng ý hay không. Trong trường hợp tích cực hưởng ứng lời mời thì chúng ta sẽ trả lời bằng Vましょう。', ex:[
    {j:'こんしゅうのにちようび、 いっしょに はなみを しませんか。', v:'Chủ Nhật tuần này cùng đi ngắm hoa nhé?'},
    {j:'いいですね。いきましょう。', v:'Hay quá, cùng đi thôi.'},
    {j:'あした いっしょに いなかへ かえりませんか。', v:'Ngày mai cùng tôi đi về quê nha?'},
    {j:'すみません、ちょっと。。。', v:'Xin lỗi nhưng mà…'}
  ]},
  {p:'～Vましょう', d:'Cấu trúc: Vましょう — Vましょう：Cùng V nhé? Tích cực đề xuất mời người nghe làm việc gì đó. Tích cực đáp ứng đề xuất, lời mời của người khác. ましょう và ませんか đều dùng để mời, nhưng ませんか thì tôn trọng hơn, còn ましょう dùng thân thiết hơn.', ex:[
    {j:'ちょっと 休みましょう。', k:'ちょっと やすみましょう。', v:'Chúng ta cùng nghỉ một lát đi.'},
    {j:'いっしょに ばんごはんを たべませんか。', v:'Cùng ăn tối với tôi không?'},
    {j:'ええ、たべましょう。', v:'Vâng, chúng ta cùng ăn nhé.'}
  ]},
  {p:'～か', d:'Cấu trúc: か。ở cuối câu — ～か。 ~à. Khi phát âm hạ xuống ở cuối câu, thì không phải là câu hỏi mà là dùng để biểu thị đã nắm bắt được thông tin mới từ người nói. Giống với trường hợp そうですか.', ex:[
    {j:'日曜日 京都へ 行きました。', k:'にちようび きょうとへ いきました。', v:'Tôi đã đi Kyoto vào chủ nhật?'},
    {j:'京都ですか。いいですね。', k:'きょうとですか。いいですね。', v:'Kyoto à. Hay quá nhỉ.'}
  ]}
],

7: [
  {p:'N (công cụ/phương tiện) で V', d:'Cấu trúc: ～は N１で N2を V NTV： なんで — で：bằng, bằng cách. Dùng để chỉ cách thức, phương tiện.', ex:[
    {j:'ベトナム人は はしで ごはんを たべます。', k:'ベトナムじんは はしで ごはんを たべます。', v:'Người Việt Nam ăn cơm bằng đũa.'},
    {j:'なんで レポートを おくりましたか。', v:'Bạn đã gửi báo cáo bằng cái gì?'},
    {j:'Eメールで おくりました。', v:'Tôi đã gửi bằng Email'}
  ]},
  {p:'“Từ/câu” は ～語で 何ですか', d:'Cấu trúc: “Từ/câu” は ～語で 何ですか — Dùng để hỏi ý nghĩa của một từ, một câu được nói như thế nào bằng ngôn ngữ khác.', ex:[
    {j:'これは 日本語で 何ですか。', k:'これは にほんごで なんですか。', v:'Cái này trong tiếng Nhật nói thể nào?'},
    {j:'「パソコン」です。', v:'Là “pasokon”.'},
    {j:'「ありがとう」は 英語で 何ですか。', k:'「ありがとう」は えいごで なんですか。', v:'“Arigatou trong tiếng Anh nói thể nào?'},
    {j:'「Thank you」です。', v:'Là “Thank you”.'}
  ]},
  {p:'N１に N2を V', d:'Cấu trúc: ～は N１に N2を V — に：Đối tượng chịu sự tác động của hành động xuất phát một chiều.', ex:[
    {j:'わたしは かみに なまえを かきます。', v:'Tôi viết tên lên tờ giấy.'},
    {j:'こんばん ははに でんわを かけます。', v:'Tối nay tôi sẽ gọi điện cho mẹ.'}
  ]},
  {p:'あげます', d:'あげます：Tặng. Ai đó tặng gì đó cho người nào đó. Không dùng khi người khác tặng cho mình.', ex:[
    {j:'わたしは ともだちに えんぴつを あげました。', v:'Tôi đã tặng cho bạn cây bút chì.'},
    {j:'まつもとさんは はらだせんせいに フランスのワインを あげました。', v:'Chị Matsumoto đã tặng cho thầy Harada chai rượu Vang của Pháp.'}
  ]},
  {p:'くれます', d:'くれます：cho (tôi/người thân tôi) Chỉ dùng くれます khi người khác tặng cho mình(hoặc người thân mình ちち、はは、あね、あに、おとうと、いもうと…) Có thể lược bỏ わたしに theo cách sau: N1が Nを くれました', ex:[
    {j:'せんせいは わたしに ほんを くれました。', v:'Cô giáo cho tôi quyển sách.'},
    {j:'ちちは わたしに とけいを くれました。', v:'Cha cho tôi chiếc đồng hồ.'}
  ]},
  {p:'もらいます', d:'もらいます：nhận Ai đó đã nhận gì đó từ người nào đó. Không dùng もらいます để nói người khác đã nhận từ mình một vật gì đó.', ex:[
    {j:'わたしは ちちに とけいを もらいました。', v:'Tôi đã nhận từ cha chiếc đồng hồ.'},
    {j:'ナムさんは せんせいに じしょを もらいました。', v:'Nam đã nhận từ thầy giáo quyển từ điển.'}
  ]},
  {p:'もう～Vました / まだ～Vません', d:'～もう ～Vました：~ đã ~ rồi. ～まだ ～Vません：~ Vẫn chưa ~. Nếu dùng Vません thì có nghĩa chúng ta sẽ dứt khoát không làm hành động đó nhưng nếu thêm まだ vào trước thì có nghĩa là hiện tại chúng ta chưa làm hành động này nhưng tương lai có thể sẽ làm.', ex:[
    {j:'もう ひるごはんを たべましたか。', v:'Bạn đã ăn trưa chưa?'},
    {j:'はい、もう たべました。', v:'Tôi đã ăn rồi.'},
    {j:'テレーザちゃんは もう ねましたか。', v:'Bé Teresa đã ngủ chưa?'},
    {j:'いいえ、まだです。', v:'Chưa, vẫn chưa.'}
  ]}
],

8: [
  {p:'Tính từ い (Aイ)', d:'', ex:[
    {j:'VD: きのうは とても いそがしかったです。', v:'Hôm qua đã rất bận rộn.'}
  ]},
  {p:'Tính từ な (Aナ)', d:'', ex:[
    {j:'VD: しんかんせんは とても べんりです。', v:'Tàu cao tốc rất là tiện lợi.'}
  ]},
  {p:'～は どうですか', d:'Cấu trúc: A: ～は どうですか。 B: ～は Aです。 — どう： như thế nào? どう： dùng để hỏi về ấn tượng, ý kiến, cảm tưởng, tính chất của sự vật, sự việc nào đó.', ex:[
    {j:'このしゅくだいは どうですか。', v:'Bài tập này như thế nào?'},
    {j:'とても むずかしいです。', v:'Rất là khó.'},
    {j:'このまちは どうですか。', v:'Khu phố này như thế nào?'},
    {j:'しずかです。', v:'Yên tĩnh.'}
  ]},
  {p:'Aい/Aな N', d:'Aい/Aな N：N + A どんな N：như thế nào? Khi bổ nghĩa cho danh từ thì tính từ đặt trước danh từ, giữ nguyên い/な. どんな đứng trước danh từ nó để hỏi tính chất, trạng thái của danh từ đó. Cụm từ A + N sẽ mang tính chất của một danh từ.', ex:[
    {j:'田中さんの カメラは どんな カメラですか。', k:'たなかさんの カメラは どんな カメラですか。', v:'Máy chụp hình của anh Tanaka là máy như thế nào?'},
    {j:'たかい カメラです。', v:'Là máy đắt tiền.'},
    {j:'ふじさんは どんな やまですか。', v:'Núi Phú Sĩ là núi như thế nào?'},
    {j:'ゆうめいな やまです。', v:'Là núi nổi tiếng.'}
  ]},
  {p:'とても/あまり～ない', d:'Cấu trúc: ～とても～ ～あまり～ない(Phủ định) — ～とても～： rất ~ ～あまり～ない： không ~ lắm. とても nhấn mạnh hơn nữa tính chất của tính từ あまり đi cùng với đuôi phủ định mang ý nghĩa giảm nhẹ', ex:[
    {j:'ペキンは とても さむいです。', v:'Bắc Kinh rất lạnh.'},
    {j:'しょくどうの ごはんは あまり おいしくないです。', v:'Cơm của nhà ăn không ngon lắm.'},
    {j:'さくら大学は 有名な 大学ですか。', k:'さくらだいがくは ゆうめいな だいがくですか。', v:'Đại học Sakura là đại học nổi tiếng phải không?'},
    {j:'いいえ、あまり 有名な 大学じゃありません。', k:'いいえ、あまり ゆうめいな だいがくじゃありません。', v:'Không, không phải là trường nổi tiếng lắm.'}
  ]},
  {p:'そして', d:'そして：Và, vừa ~ vừa, rồi thì そして dùng để nối 2 hoặc nhiều tính từ tương đồng với nhau về mặt ý nghĩa.', ex:[
    {j:'このケーキは おいしいです。そして、やすいです。', v:'Cái bánh này vừa ngon vừa rẻ.'},
    {j:'ふじさんは きれいです。そして、ゆうめいです。', v:'Núi Phú Sĩ đẹp và nổi tiếng.'}
  ]},
  {p:'～が、～', d:'Cấu trúc: Mệnh đề 1 が、Mệnh đề 2 — が：nhưng が：dùng để nối 2 mệnh đề không tương đồng về mặt ý nghĩa.', ex:[
    {j:'バスは やすいですが、べんりじゃありません。', v:'Xe buýt thì rẻ nhưng không tiện lợi.'},
    {j:'この おちゃは たかいですが、おいしいです。', v:'Trà này đắt nhưng mà ngon.'}
  ]}
],

9: [
  {p:'N が A cảm xúc, mức độ', d:'Cấu trúc: NVT：なに — が： đi với các tính từ chỉ cảm xúc, mức độ.', ex:[
    {j:'わたしは かんじが へたです。', v:'Tôi dở Hán tự.'},
    {j:'あなたは なにが きらいですか。', v:'Bạn ghét cái gì?'},
    {j:'わたしは たばこが きらいです。', v:'Tôi ghét thuốc lá.'}
  ]},
  {p:'～Nが あります', d:'Cấu trúc: ～は Nが あります。 NVT なに — が あります： có Dùng để chỉ về sở hữu.', ex:[
    {j:'わたしは おかねが ありません。', v:'Tôi không có tiền.'},
    {j:'やまださんは たかいくるまが あります。', v:'Anh Yamada có xe hơi đắt tiền.'}
  ]},
  {p:'～Nが 分かります', d:'Cấu trúc: ～は Nが わかります。 NTV: なに — が わかります：hiểu/biết ~.', ex:[
    {j:'はらださんは えいごが わかります。', v:'Harada biết tiếng Anh.'},
    {j:'わたしは なにも わかりません。', v:'Tôi chẳng hiểu gì cả.'}
  ]},
  {p:'Phó từ', d:'Cấu trúc: Phó từ + V/A — Là những từ đặt trước động từ(hoặc tính từ) để bổ nghĩa. Chỉ mức độ Chỉ số lượng Khẳng định よく わかります だいたい わかります すこし わかります たくさん あります すこし あります Phủ định あまり わかりません ぜんぜん わかりません あまり ありません ぜんぜん ありません', ex:[
    {j:'英語が よく わかります。', k:'えいごが よく わかります。', v:'Hiểu rõ tiếng Anh.'},
    {j:'英語が 少し わかります。', k:'えいごが すこし わかります。', v:'Hiểu một chút tiếng Anh.'},
    {j:'英語が あまり わかりません。', k:'えいごが あまり わかりません。', v:'Không hiểu tiếng Anh lắm.'},
    {j:'お金が たくさん あります。', k:'おかねが たくさん あります。', v:'Có nhiều tiền.'},
    {j:'お金が 全然 ありません。', k:'おかねが ぜんぜん ありません。', v:'Không có đồng nào cả.'},
    {j:'ここは 寒いです。', k:'ここは さむいです。', v:'Ở đây hơi lạnh.'}
  ]},
  {p:'どうして～か tại sao? ～から tại vì', d:'どうして：Tại sao ~ から：Tại vì ~. ～から、～：Vì ~ nên ~ どうして nghi vấn từ hỏi lý do. Thay vì nhắc lại câu nói người khác thì có thể dùng “どうしてですか” – “Vì sao vậy?” から dùng để giải thích lý do vì ~ nên ~. Hoặc trả lời cho câu hỏi có “どうして” – “tại sao”.', ex:[
    {j:'どうして きのう はやく かえりましたか。', v:'Tại sao hôm qua về sớm vậy?'},
    {j:'ようじが ありましたから。', v:'Là vì có việc riêng.'},
    {j:'どうして たべませんか。', v:'Tại sao không ăn.'},
    {j:'けさ もう あさごはんを たべましたから。', v:'Vì sáng nay đã ăn sáng rồi.'},
    {j:'時間が ありませんから、新聞を 読みません。', k:'じかんが ありませんから、しんぶんを よみません。', v:'Vì không có thời gian nên tôi không đọc báo.'}
  ]},
  {p:'どんな A – thể loại A nào?', d:'Cấu trúc: どんな A — どんな A : thể loại A nào? どんな N : Ngoài việc hỏi tính chất, trạng thái của N như đã học ở bài 8 thì cấu trúc này cũng có nghĩa là hỏi về thể loại sở thuộc danh từ đó. Khi trả lời thì nêu lên tên gọi cụ thể.', ex:[
    {j:'どんな スポーツが すきですか。', v:'Bạn thích thể thao nào?'},
    {j:'サッカーが すきです。', v:'Thích bóng đá.'}
  ]}
],

10: [
  {p:'～にNがいます/あります Có N ở ~', d:'Cấu trúc: NVT: なに・だれ — あります：Có (Chỉ dùng cho đồ vật) います ：Có (Dùng cho người và động vật) あります・います： thể hiện sự hiện hữu của người hay vật ở một vị trí nào đó. Trước に là các từ vựng chỉ nơi chốn, vị trí. Dùng trợ từ が ở sau danh từ chỉ người hoặc vật. Lưu ý: Sau nghi vấn từ không dùng trợ từ は: ✖なには、✖だれは', ex:[
    {j:'つくえの うえに ほんが あります。', v:'Trên bàn có quyển sách.'},
    {j:'はこの なかに ねこが います。', v:'Trong hộp có con mèo.'},
    {j:'受付に だれが いますか。', k:'うけつけに だれが いますか。', v:'Ở quầy tiếp tân có ai?'},
    {j:'木村が います。', k:'きむらが います。', v:'Có chị Kimuara.'}
  ]},
  {p:'Nは～にいます/あります N có ở ~', d:'Cấu trúc: NVT: どこ — Dùng để nhấn mạnh về vị trí của đồ vật mà cả người nói và người nghe đều biết đến.', ex:[
    {j:'にほんごの ほんは どこに ありますか。', v:'Sách tiếng Nhật ở đâu?'},
    {j:'つくえの うえに あります。', v:'Ở trên bàn.'},
    {j:'ねこは どこに いますか。', v:'Con mèo đang ở đâu?'},
    {j:'はこの なかに います。', v:'Ở trong hộp.'}
  ]},
  {p:'N1(người/vật/địa điểm) の N2 vị trí', d:'うえ：Trên した：Dưới まえ：Phía trước うしろ：Phía sau みぎ：Bên phải ひだり： Bên trái なか：Trong そと：Ngoài そば：Bên cạnh となり：Bên cạnh ( Thẳng hàng) ちかく： Gần あいだ： Ở giữa', ex:[
    {j:'わたしの うちは こうえんの ちかくに あります。', v:'Nhà tôi ở gần công viên.'},
    {j:'ミラーさんは かいぎしつに います。', v:'Anh Miller ở trong phòng hợp.'}
  ]},
  {p:'～N１とN2の あいだ～', d:'あいだ: Ở giữa ~', ex:[
    {j:'わたしのうちは ほんやと こうえんの あいだに あります。', v:'Nhà tôi ở giữa nhà sách và công viên.'},
    {j:'ミラーさんと はらださんの あいだに たなかさんが います。', v:'Giữa anh Miller và anh Harada là anh Tanaka.'}
  ]},
  {p:'N1や N2…（など）', d:'N1や N2…（など）： Nào là ~ nào là~ Dùng để liệt kê các danh từ. Đối với N cuối cùng chúng ta không dùng や mà dùng などđể kết thúc. など đứng trước các trợ từ thích hợp, tương ứng với các động từ ở cuối câu.', ex:[
    {j:'へやの なかに テレビや れいぞうこなどが あります。', v:'Trong phòng nào là có ti vi, tủ lạnh…'},
    {j:'スーパーで にくや たまごなどを かいました。', v:'Ở siêu thị đã mua nào là thịt nào là trứng…'}
  ]}
],

11: [
  {p:'Lượng từ', d:'Đếm đồ vật nói chung～つ 1 cái ひとつ 2 cái ふたつ 3 cái みっつ 4 cái よっつ 5 cái いつつ 6 cái むっつ 7 cái ななつ 8 cái やっつ 9 cái ここのつ 10 cái とお Mấy cái いくつ Đếm người～人 1 người ひとり 2 người ふたり 3 người さんにん 4 người よにん 5 người ごにん 6 người ろくにん 7 người ななにん、しちにん 8 người はちにん 9 người きゅうにん 10 người じゅうにん Mấy người なんにん Đếm vật mỏng～枚 1 cái/tờ いちまい 2 cái/tờ にまい 3 cái/tờ さんまい 4 cái/tờ よんまい 5 cái/tờ ごまい 6 cái/tờ ろくまい 7 cái/tờ ななまい 8 cái/tờ はちまい 9 cái/tờ きゅうまい 10 cái/tờ じゅうまい Mấy cái/tờ なんまい Đếm xe, máy móc～台 1 chiếc/cái いちだい 2 chiếc/cái にだい 3 chiếc/cái さんだい 4 chiếc/cái よんだい 5 chiếc/cái ごだい 6 chiếc/cái ろくだい 7 chiếc/cái ななだい 8 chiếc/cái はちだい 9 chiếc/cái きゅうだい 10 chiếc/cái じゅうだい Mấy chiếc/cái なんだい Đếm số lần ～回 1 lần いっかい 2 lần にかい 3 lần さんかい 4 lần よんかい 5 lần ごかい 6 lần ろっかい 7 lần ななかい 8 lần はっかい 9 lần きゅうかい 10 lần じゅっかい、じっかい Mấy lần なんかい', ex:[]},
  {p:'Cách dùng số lượng, lượng từ', d:'Số lượng, lượng từ luôn luôn đứng sau trợ từ.', ex:[
    {j:'つくえの うえに ビールが なんぼん ありますか。', v:'Trên bàn có mấy chai bia?'},
    {j:'ろっぽん あります。', v:'Có 6 chai.'},
    {j:'かいぎしつに なんにん いますか。', v:'Trong phòng họp có bao nhiêu người?'},
    {j:'よにん います。', v:'Có 4 người.'}
  ]},
  {p:'Cách sử dụng số lần', d:'～かい：Dùng để nói về số lần làm một việc gì đó. NVT：なんかい：Mấy lần?', ex:[
    {j:'私は 一週間に 二回 映画を 見ます。', k:'わたしは いっしゅうかんに にかい えいがを みます。', v:'Tôi xem phim 2 lần trong một tuần.'},
    {j:'ナムさんは 一か月に 一回 田舎へ帰ります。', k:'ナムさんは いっかげつに いっかい いなかへかえります。', v:'Nam về quê một tháng một lần.'}
  ]},
  {p:'Nối nhiều loại có số lượng khác nhau', d:'Trợ từ tùy thuộc vào động từ ở cuối câu.', ex:[
    {j:'りんごを ふたつと バナナを さんぼん ください。', v:'Lấy cho tôi hai quả táo và 3 quả chuối.'},
    {j:'はい、わかりました。', v:'Vâng ạ.'},
    {j:'机の上に 卵が にこと パンが ひとつと コーヒーが 一杯 あります。', k:'つくえのうえに たまごが にこと パンが ひとつと コーヒーが いっぱい あります。', v:'Trên bàn có hai quả trứng, một lát bánh mì và một tách cà phê.'}
  ]},
  {p:'~ ぐらい', d:'khoảng~ — ぐらい：Khoảng Luôn đứng sau số lượng, lượng từ.', ex:[
    {j:'教室に がくせいが ２０人ぐらい います。', k:'きょうしつに がくせいが ２０にんぐらい います。', v:'Trong lớp có khoảng hai mươi học sinh.'},
    {j:'ゆうべ ビールを ５本ぐらい 飲みました。', k:'ゆうべ ビールを ５ほんぐらい のみました。', v:'Tối qua tôi uống khoảng 5 chai bia.'}
  ]},
  {p:'どのくらい', d:'Bao lâu? — Cấu trúc: Khi trả lời có thể dùng ぐらい hoặc không dùng. — どのくらい： bao lâu? bao nhiêu? Dùng để hỏi về thời lượng, số lượng. Có thể dùng どのくらい hoặc どのぐらい để hỏi.', ex:[
    {j:'どのくらい 日本へ行きますか。', k:'どのくらい にほんへいきますか。', v:'Bạn đi Nhật bao lâu?'},
    {j:'三か月ぐらい 行きます。', k:'さんかげつぐらい いきます。', v:'Tôi đi khoảng 3 tháng.'},
    {j:'大阪から 東京まで 新幹線で どのくらい かかりますか。', k:'おおさかから とうきょうまで しんかんせんで どのくらい かかりますか。', v:'Từ Osaka đến Tokyo đi bằng tàu Shinkansen mất bao lâu?'},
    {j:'２時間半 かかります。', k:'２じかんはん かかります。', v:'Mất hai tiếng rưỡi.'}
  ]},
  {p:'だけ', d:'chỉ — だけ：chỉ だけ thay thế cho các trợ từ を、が。', ex:[
    {j:'私は 肉などを 食べません。やさいだけ たべます。', k:'わたしは にくなどを たべません。やさいだけ たべます。', v:'Tôi không ăn thịt… tôi chỉ ăn rau củ.'},
    {j:'家の ワンちゃんは 牛乳だけ 好きです。', k:'いえの ワンちゃんは ぎゅうにゅうだけ すきです。', v:'Con chó nhà tôi chỉ thích sữa thôi.'}
  ]}
],

12: [
  {p:'So sánh hơn', d:'Cấu trúc: N1は N2より A～。 — より： hơn N1 mang tính chất A hơn N2', ex:[
    {j:'Bさんの へやは どうですか。', v:'Phòng của B như thế nào?'},
    {j:'Bさんの へやは Aさんの へやより ひろいです。', v:'Phòng của B rộng hơn phòng của A.'},
    {j:'りんごは バナナより たかいです。', v:'Táo đắt tiền hơn chuối.'}
  ]},
  {p:'So sánh kém', d:'Cấu trúc: N1は N2ほど ～Aない。 — ほど～ない：~ không bằng ~ ほど đi với đuôi phủ định mang ý nghĩa N1 mang tính chất A không bằng N2.', ex:[
    {j:'Aさんの へやは どうですか。', v:'Phòng của A như thế nào?'},
    {j:'Aさんの へやは Bさんのへやほど ひろくないです。', v:'Phòng của A không rộng bằng phòng của B.'},
    {j:'バナナは りんごほど たかくないです。', v:'Chuối không đắt bằng táo.'}
  ]},
  {p:'So sánh bằng', d:'Cấu trúc: ～N1は N2と おなじぐらい ～。 — おなじ： bằng, giống nhau. N1 và N2 như nhau (về tính chất, đặc điểm gì đó)', ex:[
    {j:'Aさんは Bさんと おなじぐらい せが たかいです。', v:'A cao bằng B.'},
    {j:'Aさんは Bさんと おなじとしです。', v:'A cùng tuổi với B.'}
  ]},
  {p:'So sánh nhất', d:'いちばん： Nhấｔ Trợ từ で： trong toàn bộ một tập hợp, một phạm vi nào đó. N1 là phạm vi cần hỏi. NVT sẽ tương ứng với loại từ của N1 NVTは：は không đứng sau NVT.', ex:[
    {j:'日本料理で 何が 一番 好きですか。', k:'にほんりょうりで なにが いちばん すきですか。', v:'Trong các món ăn Nhật bạn thích món nào nhất?'},
    {j:'すしが 一番 好きです。', k:'すしが いちばん すきです。', v:'Thích nhất là món Sushi.'},
    {j:'世界で どこが 一番 きれいですか。', k:'せかいで どこが いちばん きれいですか。', v:'Trên thế giới bạn thấy nơi nào là đẹp nhất?'},
    {j:'ベトナムが 一番 きれいです。', k:'ベトナムが いちばん きれいです。', v:'Việt Nam là đẹp nhất.'}
  ]},
  {p:'Câu hỏi so sánh', d:'どちら：đằng nào? về phía nào? ほう： về phía. 両方：cả 2 phía Cùng một ý nhưng chúng ta sẽ có nhiều cách diễn đạt khác nhau để trả lời câu hỏi.', ex:[
    {j:'いぬと ねこと どちらが 好きですか。', k:'いぬと ねこと どちらが すきですか。', v:'Chó và mèo bạn thích đằng nào hơn?'},
    {j:'どちらも 好きです。', k:'どちらも すきです。', v:'Đằng nào cũng thích.'}
  ]},
  {p:'Aの', d:'cái A — Cấu trúc: Aい/Aな ＋ の — の～：cái ~ Thay thế danh từ xuất hiện ở trước đó.', ex:[
    {j:'カリナさんの かばんは どれですか。', v:'Cái cặp của chị Karina là cái nào?'},
    {j:'あの赤くて、大きいのです。', k:'あのあかくて、おおきいのです。', v:'Là cái màu đỏ và lớn kia.'}
  ]}
],

13: [
  {p:'～が 欲しい', d:'Muốn có ～ — ほしい：Muốn có ほしい là tính từ い.', ex:[
    {j:'今 なにが ほしいですか。', k:'いま なにが ほしいですか。', v:'Bây giờ bạn muốn có thứ gì?'},
    {j:'カメラが ほしいです。', v:'Tôi muốn có máy chụp ảnh.'},
    {j:'今 お金や車などがほしいですが、恋人がほしくないです。', k:'いま おかねやくるまなどがほしいですが、こいびとがほしくないです。', v:'Bây giờ tôi muốn có tiền bạc, xe cộ… nhưng tôi không muốn có người yêu.'}
  ]},
  {p:'V たい', d:'Vたい：Muốn làm ~. Vたい：mang tính chất của tính từ い.', ex:[]},
  {p:'～は Nを Vたいです。', d:'Vたい： Muốn làm ~ Vたい mang tính chất của tính từ い. Trong thể たい, trợ từ が có thể dùng để thay thế cho を. Không chia thể たい cho động từ ある.', ex:[
    {j:'今 なにを したいですか。', k:'いま なにを したいですか。', v:'Bây giờ bạn muốn làm gì?'},
    {j:'みずを 飲みたいです。', k:'みずを のみたいです。', v:'Muốn uống nước.'},
    {j:'どう しますか。', v:'Làm sao vậy?'},
    {j:'勉強 したくないですよ。', k:'べんきょう したくないですよ。', v:'Chẳng muốn học hành gì cả.'}
  ]},
  {p:'Trợ từ に', d:'mục đích của hành động — V2 để làm V1. V2 thường là những động từ chỉ sự di chuyển như いきます đi きます đến かえります trở về もどります quay lại… に：Chỉ mục đích của hành động.', ex:[]},
  {p:'～へ Nを Vに V di chuyển', d:'Đi ~ để ~.', ex:[
    {j:'どこへ 行きますか。', k:'どこへ いきますか。', v:'Anh đi đâu vậy?'},
    {j:'外へ タバコを 吸いに 行きます。', k:'そとへ タバコを すいに いきます。', v:'Anh đi ra ngoài để hút thuốc.'},
    {j:'アメリカへ 英語を 勉強しに 来ました。', k:'アメリカへ えいごを べんきょうしに きました。', v:'Tôi đã đến Mỹ để học tiếng Anh.'}
  ]},
  {p:'～NVTか～', d:'Cấu trúc: ～NVTか～ — なにか： cái gì đó, con gì đó どこか：đâu đó だれか：người nào đó. … Thêm か vào sau NVT ta được từ có nghĩa “NVT đó” như なに là “cái gì” thì なにか là “cái gì đó”. Có thể lược bỏ trợ từ へ,を sau NVTか.', ex:[
    {j:'きのう どこか いきましたか。', v:'Hôm qua bạn đã đi đâu phải không?'},
    {j:'はい、としょかんへ いきました。', v:'Vâng, tôi đã đi thư viện.'},
    {j:'のどが かわきましたから、なにか「を」 のみたいです。', v:'Vì đã khát rồi nên muốn uống cái gì đó.'}
  ]}
],

14: [
  {p:'～Vてください', d:'ください： Hãy cho tôi ~ (dùng cho N) Vてください：Xin hãy làm ~ :(dùng cho V) ください：Yêu cầu người khác thực hiện một việc gì đó. Thường đi cùng với cụm từ すみませんが để yêu cầu một cách lịch sự. が trong trường hợp này có tác dụng nối câu. Trong giao tiếp thông thường chúng ta sẽ nghe phát âm すみません thành すいません', ex:[
    {j:'すみません、でんきを つけてください。', v:'Xin lỗi, xin hãy bật đèn dùm.'},
    {j:'はい。', v:'Vâng.'},
    {j:'みなさん、ここに なまえを かいてください。', v:'Các bạn hãy viết tên vào chỗ này.'}
  ]},
  {p:'～Vかた', d:'cách V~ — [Nの] Vかた：cách V [N]', ex:[
    {j:'山田さんの 家で 何をしましたか。', k:'やまださんの いえで なにをしましたか。', v:'Bạn đã làm gì ở nhà chị Yamada vậy?'},
    {j:'私は 山田さんに 日本料理の 作り方 を習いました。', k:'わたしは やまださんに にほんりょうりの つくりかた をならいました。', v:'Tôi học cách nấu món ăn Nhật từ chị Yamada.'},
    {j:'ナムさんは 名前の つけ方の 本を 読みます。', k:'ナムさんは なまえの つけかたの ほんを よみます。', v:'Anh Nam đọc sách về cách đặt tên.'}
  ]},
  {p:'～Vましょうか', d:'tôi V ~ nhé — ～Vましょうか：để tôi làm ~ けっこう： được rồi, đủ rồi. Đưa ra đề nghị mình sẽ thực hiện một hành động gì đó cho đối phương. Ôn cách chia Vましょう: Vます → Vましょう', ex:[
    {j:'写真を とりましょうか。', k:'しゃしんを とりましょうか。', v:'Để tôi chụp hình cho nha.'},
    {j:'ええ、お願いします。', k:'ええ、おねがいします。', v:'Vâng, nhờ bạn nhé.'},
    {j:'ジュースを 買いましょうね。', k:'ジュースを かいましょうね。', v:'Để chị mua nước ép cho nha.'},
    {j:'ええ、いいですよ。ありがとう。', v:'Vâng, được đó. Cám ơn chị.'}
  ]},
  {p:'～Vています', d:'đang ~ — Cấu trúc: ～は Nを Vています。 — ～Vています：đang ~ Diễn tả hành động đang xảy ra ở thời điểm nói. Thường đi với từ 今 mang nghĩa “ bây giờ”', ex:[
    {j:'何を していますか。', k:'なにを していますか。', v:'Đang làm gì vậy?'},
    {j:'新聞を 読んでいます。', k:'しんぶんを よんでいます。', v:'Đang đọc báo.'},
    {j:'ナムさん、今 どこですか', k:'ナムさん、いま どこですか', v:'Nam ơi, đang ở đâu vậy?'},
    {j:'駅の前で まっていますよ。', k:'えきのまえで まっていますよ。', v:'Đang đợi ở trước nhà ga nè.'}
  ]},
  {p:'Nが V', d:'miêu tả hiện tượng tự nhiên — Cấu trúc: Nが V。 — khi muốn miêu tả hiện tượng tự nhiên được cảm nhận bằng giác quan. Truyền đạt khách quan một sự việc.', ex:[
    {j:'あめが ふっています。', v:'Trời đang mưa.'},
    {j:'ミラーさんが いませんね。', v:'Không có anh Miller nhỉ.'}
  ]}
],

15: [
  {p:'～Vてもいいです', d:'Vても いいです：làm ~ cũng được. Vても かまいません：làm ~ cũng không sao. Xin phép hoặc cho phép làm một hành động gì đó. Trường hợp không cho phép thì trả lời tế nhị すみません、ちょっと… hoặc trả lời theo cách cấm đoán với cấu trúc いけません ở ngữ pháp tiếp theo.', ex:[
    {j:'すみませんが、タバコを すってもいいですか。', v:'Xin lỗi, hút thuốc cũng được chứ?'},
    {j:'はい、どうぞ。', v:'Vâng, xin mời.'},
    {j:'すみません、ギターを ひいてもいいですか。', v:'Xin lỗi, tôi đàn ghita cũng được chứ?'},
    {j:'ええ、いいですよ。', v:'Ừ, được chứ.'}
  ]},
  {p:'～Vてはいけません', d:'Vてはいけません：Không được phép ~, cấm không được ~ Vては だめです：không được ~ Cấm, không cho phép làm một hành động gì đó.', ex:[
    {j:'ここで 電話を 使ってはいけませんよ。', k:'ここで でんわを つかってはいけませんよ。', v:'Không được phép sử dụng điện thoại ở đây.'},
    {j:'はい。どうも すみません。', v:'Vâng, tôi xin lỗi.'},
    {j:'外に ごみを すてては いけません。', k:'そとに ごみを すてては いけません。', v:'Cấm không được vứt rác ra ngoài.'}
  ]},
  {p:'Xin phép làm ~', d:'Xin, cho phép hoặc không cho phép làm ～', ex:[
    {j:'先生、今晩 おふろに はいってもいいですか。', k:'せんせい、こんばん おふろに はいってもいいですか。', v:'Bác sĩ ơi, tối nay tôi tắm bồn cũng được chứ.'},
    {j:'はい、はいっても かまいません。', v:'Ừ, tắm bồn cũng không sao.'},
    {j:'これ、さわっても いいですか。', v:'Cái này, chạm vào cũng được chứ?'},
    {j:'いいえ、さわっては いけませんよ。', v:'Không, không được chạm vào.'}
  ]},
  {p:'～Vています', d:'Cấu trúc: ～Vています。 — ～Vています：trạng thái ~/hành động lặp đi lặp lại Ngoài ý nghĩa là một hành động đang diễn ra như đã học ở bài 14 thì còn có 2 nghĩa sau: ① Trạng thái: biết, có vợ-chồng, sinh sống… ② Hành động lặp đi lặp lại trong thời gian dài: nghề nghiệp, sản xuất, buôn bán… Lưu ý: 結婚しません Không kết hôn – 結婚していません Chưa kết hôn 知っています Biết – 知りません Không biết (Không dùng しっていません）', ex:[
    {j:'わたしは 結婚しています。', k:'わたしは けっこんしています。', v:'Tôi có gia đình(vợ/chồng).'},
    {j:'わたしは 田中さんを 知っています。', k:'わたしは たなかさんを しっています。', v:'Tôi biết chị Tanaka.'},
    {j:'ミラーさんは 大阪に 住んでいます。', k:'ミラーさんは おおさかに すんでいます。', v:'Anh Miller sống ở Osaka.'},
    {j:'お母さんは A病院で 働いています。', k:'おかあさんは Aびょういんで はたらいています。', v:'Mẹ tôi đang làm việc ở bệnh viện A.'},
    {j:'スーパーで ナンプラーが 売っています。', k:'スーパーで ナンプラーが うっています。', v:'Ở siêu thị có bán nước mắm Thái.'}
  ]},
  {p:'Nに V', d:'Cấu trúc: N(địa điểm)に V。 — Trợ từ に biểu thị địa điểm của chủ ngữ có mặt sau khi thực hiện hành động V. Những động từ được dùng: Nに～ はいります vào trong N すわります ngồi lên N のります lên N(xe tàu) のぼります leo N(núi) つきます đến N', ex:[
    {j:'ここに 入っては いけません。', k:'ここに はいっては いけません。', v:'Không được vào chổ này.'},
    {j:'このいすに 座っても いいですか。', k:'このいすに すわっても いいですか。', v:'Tôi ngồi ở cái ghế này có được không?'}
  ]},
  {p:'N1に N2を V', d:'Cấu trúc: N1に N2を V — Trợ từ に biểu thị địa điểm N1 có mặt của N2 sau khi thực hiện hành động V.', ex:[
    {j:'ここに 車を 止めて ください。', k:'ここに くるまを とめて ください。', v:'Hãy đổ xe ở chổ này.'},
    {j:'ここに 住所を 書いて ください。', k:'ここに じゅうしょを かいて ください。', v:'Hãy ghi địa chỉ vào đây.'}
  ]}
],

16: [
  {p:'Dùng trợ từ đối với phương tiện giao thông', d:'～に 乗ります：Lên xe(tàu) ~ ～を 降ります：Xuống xe(tàu) ~ ～から～に 乗り換えます：Đổi xe(tàu) từ ~ sang ~ ～を rời khỏi, ra khỏi ~ ～に vào trong, lên trên ~', ex:[
    {j:'でんしゃに のります。', v:'Lên xe điện.'},
    {j:'でんしゃを おります。', v:'Xuống xe điện.'},
    {j:'でんしゃから バスに のりかえます。', v:'Đổi từ xe điện sang xe buýt.'}
  ]},
  {p:'Nối câu đơn thành câu ghép', d:'Dùng để tạo một câu ghép. Đối với V: Dùng Vてđể liệt kê thứ tự các hành động. Đối với N: Không chỉ dùng đối với câu có cùng một chủ đề mà còn có thể dùng để nối các câu chứa những chủ đề khác nhau. Đối với A: Chỉ dùng nối các tính từ tương đồng về mặt ngữ nghĩa.', ex:[
    {j:'→毎日 ６じに おきて、朝ご飯をたべて、それから がっこうへ 行きます。', k:'→まいにち ６じに おきて、あさごはんをたべて、それから がっこうへ いきます。', v:'Mỗi sáng tôi thức dậy lúc 6 giờ, ăn sáng rồi đi đến trường.'},
    {j:'→私は 会社員で、田中さんは医者です。', k:'→わたしは かいしゃいんで、たなかさんはいしゃです。', v:'Tôi là nhân viên công ty còn anh Tanaka là bác sỹ.'},
    {j:'→私は フンで、がくせいです。', k:'→わたしは フンで、がくせいです。', v:'Tôi là Hương, là học sinh.'},
    {j:'→この木は ながくて、おもいです。', k:'→このきは ながくて、おもいです。', v:'Cây này vừa dài vừa nặng.'},
    {j:'→この所は きれいで、しずかです。', k:'→このところは きれいで、しずかです。', v:'Nơi này đẹp và yên tĩnh.'}
  ]},
  {p:'～Vてから', d:'Cấu trúc: ~ は V1てから、V2. — Sau khi V1 thì V2. Nhấn mạnh về thứ tự của các hành động. Chia thì tương lai, hiện tại, quá khứ … ở động từ cuối (V2). Chủ ngữ của mệnh đề chính dùng は, chủ ngữ của mệnh đề phụ dùng trợ từ が.', ex:[
    {j:'ごはんを たべてから、はを みがきます。', v:'Sau khi ăn cơm xong thì đánh răng.'},
    {j:'きのう、なにを しましたか。', v:'Hôm qua bạn làm gì?'},
    {j:'新聞を よんでから、でかけました。', k:'しんぶんを よんでから、でかけました。', v:'Sau khi đọc báo xong tôi đi ra ngoài.'}
  ]},
  {p:'N1は N2が～', d:'chi tiết của tổng thể — Cấu trúc: Tổng thể は chi tiết が ～ — 1.', ex:[
    {j:'北海道は 雪が 多いです。', k:'ほっかいどうは ゆきが おおいです。', v:'Hokkaido tuyết nhiều.'},
    {j:'マリアさんは どうですか。', v:'Maria như thế nào?'},
    {j:'めが おおきくて、はだが しろいです。', v:'Mắt to, da trắng.'},
    {j:'ゆみこさんは どのひとですか。', v:'Yumiko là người nào?'},
    {j:'かみが くろくて、ながいひとですよ。', v:'Là người tóc đen và dài.'}
  ]},
  {p:'どうやって', d:'bằng cách nào? — Cấu trúc: ～は どうやって ～か。 — どうやって：Bằng cách nào? Hỏi về trình tự, cách thức để làm một việc gì đó.', ex:[
    {j:'大学まで どうやって 行きますか。', k:'だいがくまで どうやって いきますか。', v:'Đến trường đại học bằng cách nào vậy?'},
    {j:'京都駅から １６番の バスに 乗って、大学前で 降ります。', k:'きょうとえきから １６ばんの バスに のって、だいがくまえで おります。', v:'Từ nhà ga Kyoto lên xe buýt số 16 sau đó xuống ở trước trường.'},
    {j:'どうやって おかねを だしますか。', v:'Rút tiền bằng cách nào vậy?'},
    {j:'まず ここに カードを 入れて、それから、あんしょうばんごうと きんがくを 押してください。', k:'まず ここに カードを いれて、それから、あんしょうばんごうと きんがくを おしてください。', v:'Trước tiên, hãy bỏ thẻ vào chỗ này sau đó hãy nhấn mật khẩu và số tiền.'}
  ]},
  {p:'どれ/どのＮ', d:'Cấu trúc: A: ～は どれですか。 どのN B: ～は Nです。 — どれ : cái nào どのN : N nào Xác định đối tượng nào đó trong nhóm gồm 3 đối tượng trở lên.', ex:[
    {j:'あなたの かさは どれですか。', v:'Cây dù của bạn là cái nào?'},
    {j:'あかい かさです。', v:'Là cái màu đỏ.'},
    {j:'カリナさんは どのひとですか。', v:'Chị Karina là người nào?'},
    {j:'あの 背が 高くて、髪が 黒い 人です 。', k:'あの せが たかくて、かみが くろい ひとです 。', v:'Là người cao, tóc đen.'}
  ]}
],

17: [
  {p:'～Vないでください', d:'Xin đừng ~ — Cấu trúc: ～は Nを Vないでください。 — Vないでください：xin đừng ~ Yêu cầu người khác đừng thực hiện một việc gì đó. ～Vないでください là cách yêu cầu nhẹ nhàng hơn Vては いけません。', ex:[
    {j:'これから ビールを のまないでください。', v:'Từ giờ trở đi xin đừng uống bia nữa nhé.'},
    {j:'はい。わかりました。', v:'Vâng, tôi biết rồi.'},
    {j:'さとうを いれましょうか。', v:'Để tôi bỏ đường cho nhé?'},
    {j:'いいえ、入れないでください。', k:'いいえ、いれないでください。', v:'Không, xin đừng bỏ.'}
  ]},
  {p:'Vなくてもいいです', d:'Không ~ cũng được — Vなくてもいいです：Không ~ cũng được', ex:[
    {j:'時間がありますから、いそがなくてもいいです。', k:'じかんがありますから、いそがなくてもいいです。', v:'Vì có thời gian nên không cần vội vã cũng được.'},
    {j:'８月は 涼しいですから、エアコンをつけなくてもいいです。', k:'８がつは すずしいですから、エアコンをつけなくてもいいです。', v:'Tháng 8 mát mẻ nên không cần bật điều hòa cũng được.'}
  ]},
  {p:'Vなければなりません', d:'phải ~', ex:[
    {j:'あした テストがありますから、こんばん、勉強しなければなりません。', k:'あした テストがありますから、こんばん、べんきょうしなければなりません。', v:'Ngày mai có bài kiểm tra nên tối nay phải học bài.'},
    {j:'病気ですから、くすりを のまなければなりません。', k:'びょうきですから、くすりを のまなければなりません。', v:'Vì bị bệnh nên phải uống thuốc.'}
  ]},
  {p:'までに', d:'Trước khi ~ — までに：Trước khi ~. までに： hạn định để làm một việc gì đó.', ex:[
    {j:'レポートは いつまでに ださなければなりませんか。', v:'Phải nộp báo cáo trước khi nào?'},
    {j:'きんようびまでに だしてください。', v:'Xin hãy nộp trước thứ 6.'},
    {j:'何時までに 寮へ かえらなければなりませんか。', k:'なんじまでに りょうへ かえらなければなりませんか。', v:'Phải về ký túc xá trước mấy giờ?'},
    {j:'１０じまでに かえらなければなりません。', v:'Phải về trước 10 giờ.'}
  ]},
  {p:'Tân ngữ hóa chủ đề', d:'Cấu trúc: Nを V → Nは V — Khi muốn đưa tân ngữ trực tiếp trong câu “NをV” ra làm chủ đề trình bày thì chúng ta thay trợ từ を thay bằng は và đưa Nは ra đầu câu.', ex:[]}
],

18: [
  {p:'~ ことができます', d:'có thể ~ — ~ ことができます：có thể ~ Biểu thị năng lực, khả năng về một cái gì đó.', ex:[
    {j:'カリナちゃんは 漢字が できますか。', k:'カリナちゃんは かんじが できますか。', v:'Bé Karina có biết Hán tự không?'},
    {j:'はい、漢字をよむことが できます。書くことも できますよ。', k:'はい、かんじをよむことが できます。かくことも できますよ。', v:'Biết, Karina có thể đọc được Hán Tự. Cũng có thể viết Hán Tự nữa.'},
    {j:'カードで はらうことが できますか。', v:'Tôi có thể trả bằng thẻ được không?'},
    {j:'はい、できますよ。', v:'Vâng, được chứ.'}
  ]},
  {p:'~ しゅみ', d:'sở thích ~ — ~ しゅみ：sở thích ~', ex:[
    {j:'あなたの趣味は なんですか。', k:'あなたのしゅみは なんですか。', v:'Sở thích của bạn là gì vậy?'},
    {j:'スポーツです。', v:'Là thể thao.'},
    {j:'カリナちゃんの趣味は なんですか。', k:'カリナちゃんのしゅみは なんですか。', v:'Sở thích của Karina là gì vậy?'},
    {j:'ピアノを 弾くことです。', k:'ピアノを ひくことです。', v:'Là chơi đàn piano.'}
  ]},
  {p:'～まえに', d:'Trước khi — ～まえに： Trước khi Thời lượng sẽ đi trực tiếp với まえに thường mang ý nghĩa là : cách đây ~. Nhấn mạnh về thứ tự của các hành động. Chia thì tương lai, hiện tại, quá khứ … ở động từ sau. (V2) Chủ ngữ của mệnh đề chính dùng は, chủ ngữ của mệnh đề phụ dùng trợ từ が.', ex:[
    {j:'ねるまえに はを みがきました。', v:'Đánh răng trước khi đi ngủ.'},
    {j:'しょくじの まえに てを あらいました。', v:'Rửa tay trước khi dùng bữa.'},
    {j:'山田さんは 一時間まえに でかけました。', k:'やまださんは いちじかんまえに でかけました。', v:'Chị Yamada đã ra ngoài cách đây một tiếng.'},
    {j:'でかけるまえに、新聞をよみました。', k:'でかけるまえに、しんぶんをよみました。', v:'Trước khi ra ngoài chị đã đọc báo.'}
  ]},
  {p:'～なかなか～ない', d:'mãi mà ~ cũng không ~ — Cấu trúc: ～は なかなか ～ ない。 — ～なかなか～ない：mãi mà cũng không ~ Luôn luôn chia ở thể phủ định.', ex:[
    {j:'私は 何回も 着物の着方 を習いましたが、なかなか きることができません。', k:'わたしは なんかいも きもののきかた をならいましたが、なかなか きることができません。', v:'Tôi đã học cách mặc Kimono không biết bao nhiêu lần rồi nhưng mãi mà cũng không thể mặc được.'},
    {j:'仕事が たくさん ありますから、なかなか 家へかえることが できません。', k:'しごとが たくさん ありますから、なかなか いえへかえることが できません。', v:'Vì nhiều việc quá nên mãi mà cũng không về nhà được.'}
  ]},
  {p:'Đổi từ N1sang N2', d:'Cấu trúc: ～は N１を N2に かえます。 — Đổi từ N1 sang N2.', ex:[
    {j:'ドルを えんに かえます。', v:'Đổi tiền đô sang thành tiền yên.'}
  ]}
],

19: [
  {p:'～ ことが あります', d:'Đã từng ~ — ～ ことが あります： Đã từng ~ Nói về một kinh nghiệm đã trải qua. Không chia thì quá khứ ở động từ あります.', ex:[
    {j:'ナムさんは 富士山に 登ったこと が ありますか。', k:'ナムさんは ふじさんに のぼったこと が ありますか。', v:'Nam đã từng leo núi Phú Sỹ chưa?'},
    {j:'はい、一度 あります。', k:'はい、いちど あります。', v:'Rồi, đã từng leo một lần.'},
    {j:'私は 何度も 大阪城へ 行ったことがあります。', k:'わたしは なんども おおさかじょうへ いったことがあります。', v:'Tôi đã từng đến thành Osaka rất nhiều lần.'}
  ]},
  {p:'V1たり、V2たり、～ する', d:'Nào là, nào là ~ — Cấu trúc: ～は V1たり、V2たり、。。。する。 — V1たり、V2たり、～ する : Nào là V1, nào là V2 ~ Động từ chia ở thể た+ り. Dùng liệt kê các hành động không theo trình tự. Dùng cho một hoặc nhiều chủ thể. Thì của câu được chia ở động từ する.', ex:[
    {j:'日曜日は なにを しますか。', k:'にちようびは なにを しますか。', v:'Ngày chủ nhật bạn làm gì?'},
    {j:'へやを そうじ したり、せんたく したり します。', v:'Tôi nào là dọn dẹp phòng nào là giặt giũ…'},
    {j:'パーティーは どうでしたか。', v:'Buổi tiệc thế nào?'},
    {j:'楽しかったです。皆 お酒をだり、話を したり しました。', k:'たのしかったです。みんな おさけをだり、はなしを したり しました。', v:'Rất vui. Mọi người nào là uống rượu nào là trò chuyện…'}
  ]},
  {p:'なる', d:'Trở nên ~ — なる：Trở nên ~. Diễn tả trạng thái thay đổi.Thường để chỉ về trạng thái đã thay đổi nên hay dùng ở thì quá khứ. Tính từ い bỏ い.', ex:[
    {j:'子供のとき いしゃに なりたかったです。', k:'こどものとき いしゃに なりたかったです。', v:'Khi còn nhỏ tôi đã muốn trở thành bác sỹ.'},
    {j:'今 医者に なりました。', k:'いま いしゃに なりました。', v:'Bây giờ tôi đã trở thành bác sỹ.'},
    {j:'てを あらってから、てが きれいになります。', v:'Sau khi rửa tay, tay đã trở nên sạch sẽ.'},
    {j:'このズボンは ちょっと ながかったです。', v:'Cái quần này hơi dài.'},
    {j:'切ってから、みじかくなりました。', k:'きってから、みじかくなりました。', v:'Sau khi cắt xong nó đã trở nên ngắn.'}
  ]}
],

20: [
  {p:'Cách dùng Thể lịch sự và Thể thông thường', d:'丁寧形 Thể lịch sự普通形 Thể thông thường Dạng câu có ます,ですN,V,A được chia ở thể thông thường Người lần đầu gặp, người lớn tuổi hơn, người không thân lắm.Dùng với gia đình, bạn thân, đồng nghiệp. Thư từ…Sách, luận văn, báo cáo, nhật ký…', ex:[]},
  {p:'Hội thoại dùng Thể Thông thường', d:'1）Câu nghi vấn: Lược bỏ か、だ và phát âm cao giọng ở cuối câu.', ex:[
    {j:'① お茶を飲む？', k:'① おちゃをのむ？', v:'Uống trà không?'},
    {j:'…うん、飲む。', k:'…うん、のむ。', v:'Ừ, uống.'},
    {j:'② 日本語の勉強は大変？', k:'② にほんごのべんきょうはたいへん？', v:'Việc học tiếng Nhật vất vả?'},
    {j:'…ううん、大変じゃない。', k:'…ううん、たいへんじゃない。', v:'Không, không vất vả.'},
    {j:'① テレビ［を］見る？', k:'① テレビ［を］みる？', v:'Có xem tivi không?'},
    {j:'② 一緒に日本［へ］行かない？', k:'② いっしょににほん［へ］いかない？', v:'Cùng đi đến Nhật không?'}
  ]}
],

21: [
  {p:'～と思います', d:'tôi nghĩ là ~ — ～と思います：tôi nghĩ là ~ Nについて：về N ~ Dùng để hỏi hoặc trình bày ý kiến, phán đoán cá nhân về một vấn đề nào đó. Thường dùng: Nについて どう思いますか。Bạn nghĩ như thế nào về N?', ex:[
    {j:'箱の中 に何 が いますか。', k:'はこのなか になに が いますか。', v:'Trong hộp có con gì vậy?'},
    {j:'ねずみが いると思います。あけましょうね。', k:'ねずみが いるとおもいます。あけましょうね。', v:'Tôi nghĩ là có con chuột. Để tôi mở ra nha.'},
    {j:'ナムさんについて どう 思いますか。', k:'ナムさんについて どう おもいますか。', v:'Bạn nghĩ như thế nào về Nam?'},
    {j:'ナムさんはハンサムで、親切だと思います。', k:'ナムさんはハンサムで、しんせつだとおもいます。', v:'Tôi nghĩ là Nam vừa đẹp trai vừa tử tế.'}
  ]},
  {p:'～と言います', d:'Nói là ~. — ～と言います：Nói là ~ Dùng để tường thuật một nội dung nào đó. Thường dùng tường thuật lại nên hay sử dụng ở thì quá khứ: 言いました。', ex:[
    {j:'田中さん：今晩 私は 出かけます。', k:'たなかさん：こんばん わたしは でかけます。', v:'Tanaka: Tối nay tôi sẽ đi ra ngoài.'},
    {j:'→ 田中さんは 今晩 出かけるいました。', k:'→ たなかさんは こんばん でかけるいました。', v:'Anh Tanaka đã nói là tối nay sẽ đi ra ngoài (Tường thuật gián tiếp).'},
    {j:'→ 田中さんは「今晩 私は 出かけます」と言いました。', k:'→ たなかさんは「こんばん わたしは でかけます」といいました。', v:'Anh Tanaka đã nói là: “ Tối nay tôi sẽ đi ra ngoài ” (Tường thuật trực tiếp).'},
    {j:'ミラー：今日、私は 早く 帰らなければなりません。', k:'ミラー：きょう、わたしは はやく かえらなければなりません。', v:'Miller: Hôm nay con phải về nhà sớm.'},
    {j:'→ ミラーさんは 彼は 今日、早く 家へ 帰らなければならないと言いました。', k:'→ ミラーさんは かれは きょう、はやく いえへ かえらなければならないといいました。', v:'Miller đã nói là hôm nay anh ấy phải về sớm. (Tường thuật gián tiếp).'},
    {j:'→ ミラーさんは「今日、私は 早く 家へ 帰らなければなりません」と言いました。', k:'→ ミラーさんは「きょう、わたしは はやく いえへ かえらなければなりません」といいました。', v:'Miller đã nói là “Hôm nay tôi phải về sớm” (Tường thuật trực tiếp).'}
  ]},
  {p:'～でしょう？Đúng không?', d:'～でしょう？:Đúng không? Dùng xác nhận lại vấn đề mình đã nghĩ, hỏi lại cho chắc những điều mình biết, kiếm sự đồng tình của đối phương. Thường lên giọng ở cuối câu.', ex:[
    {j:'このりんご、おいしいでしょう？', v:'Trái táo này ngon đúng không?'},
    {j:'あした パーティーがあるでしょう？', v:'Ngày mai có buổi tiệc đúng không?'}
  ]},
  {p:'～で Nが あります', d:'Tại ~ có N — ～で: Tại • N là các từ chỉ các sự việc, sự kiện, biến cố bao gồm bên trong có nhiều hành động ví dụ như buổi tiệc, hội nghị, vụ án, thiên tai… • ”あります” được dùng với nghĩa “được tổ chức”, “diễn ra/xảy ra”, địa điểm biểu thị nơi có sự việc đó được biểu thị bằng で.', ex:[
    {j:'運動場で サッカーの 試合が あります。', k:'うんどうじょうで サッカーの しあいが あります。', v:'Có trận đấu bóng đá ở sân vận động.'}
  ]},
  {p:'～でも', d:'chẳng hạn như — Cấu trúc: ～は Nでも ～。 — ～でも: chẳng hạn như Đưa ra đề nghị, ví dụ điển hình cho một nhóm từ nào đó. Dùng khi muốn đề nghị, đề xuất cái gì đó hoặc bày tỏ nguyện vọng với người khác.', ex:[
    {j:'ちょっと ビールでも 飲みませんか。', k:'ちょっと ビールでも のみませんか。', v:'Cùng uống chút gì đó chẳng hạn như bia được không?'}
  ]}
],

22: [
  {p:'Mệnh đề bổ nghĩa cho Danh từ', d:'わたしが 買った ほん Sách mà tôi đã mua. わたしが 本屋で 買った ほん Sách mà tôi đã mua ở nhà sách. わたしが 友達と 本屋で 買った ほん Sách mà tôi đã mua ở nhà sách cùng với bạn. わたしが きのう 友達と 本屋で 買った ほん Sách mà tôi đã mua ở nhà sách cùng với bạn vào ngày hôm qua.', ex:[]},
  {p:'Câu có Mệnh đề bổ nghĩa làm chủ ngữ', d:'', ex:[
    {j:'わたしが きのう 友達と 本屋で 買った ほんは にほんごの ほんです。', k:'わたしが きのう ともだちと ほんやで かった ほんは にほんごの ほんです。', v:'Sách mà tôi đã mua ở nhà sách cùng với bạn vào ngày hôm qua là sách tiếng Nhật.'}
  ]},
  {p:'Câu có Mệnh đề bổ nghĩa làm vị ngữ', d:'', ex:[
    {j:'これは 私が きのう 友達と 本屋で 買った 本です。', k:'これは わたしが きのう ともだちと ほんやで かった ほんです。', v:'Đây là sách mà tôi đã mua ở nhà sách cùng với bạn vào ngày hôm qua.'},
    {j:'母は 私が きのう 友達と 本屋で 買った ほんが とても 好きです。', k:'ははは わたしが きのう ともだちと ほんやで かった ほんが とても すきです。', v:'Mẹ tôi rất thích cuốn sách mà tôi đã mua ở nhà sách cùng với bạn vào ngày hôm qua.'},
    {j:'母は 私が きのう 友達と 本屋で 買った ほんを よんでいます。', k:'ははは わたしが きのう ともだちと ほんやで かった ほんを よんでいます。', v:'Mẹ tôi đang đọc cuốn sách mà tôi đã mua ở nhà sách cùng với bạn vào ngày hôm qua.'}
  ]},
  {p:'Câu có Mệnh đề bổ nghĩa làm chủ ngữ và vị ngữ', d:'', ex:[
    {j:'母が よんでいる本は 私が きのう 友達と 本屋で 買った本です。', k:'ははが よんでいるほんは わたしが きのう ともだちと ほんやで かったほんです。', v:'Cuốn sách mẹ tôi đang đọc là cuốn sách mà tôi đã mua ở nhà sách cùng với bạn vào ngày hôm qua.'}
  ]},
  {p:'Vましょうか chúng ta hãy V', d:'Cấu trúc: Vます ましょうか — Vましょうか chúng ta hãy V ~ ・Người nói đề nghị làm việc gì đó cho người nghe. ・Đề nghị cả người nói và người nghe cùng làm một việc gì đó.', ex:[
    {j:'この 部屋、きょう 見る ことだ できますか。', k:'この へや、きょう みる ことだ できますか。', v:'Tôi có thể xem căn phòng này hôm nay được không?'},
    {j:'…ええ。今から 行きましょうか。', k:'…ええ。いまから いきましょうか。', v:'Vâng. Chúng ta đi ngay bây giờ nhé?'}
  ]}
],

23: [
  {p:'～とき', d:'Khi, lúc ~ — ～とき：Khi, lúc ~ Nhấn mạnh về thời điểm xảy ra sự việc, thực hiện hành động. Đặc biệt đối với động từ : Khi dùng とき chúng ta sẽ xét thứ tự hành động để chia V1 ở thể thích hợp. V1た : Sau khi V1 thì V2 （V1 xảy ra trước） V1る : Trước khi V1 thì V2 （V1 xảy ra sau） れい１： 部屋を 出たとき、ドアを 閉めます。 (Sau) Khi ra khỏi phòng thì đóng cửa. Động từ đi kèm với とき chia ở thể た (出た) nên được hiểu 部屋を 出た xảy ra trước, ドアを 閉めます xảy ra sau. れい２： きのう、家へ帰るとき、パンを 買いました。 Hôm qua (trước) khi về nhà tôi đã mua bánh. Động từ đi kèm với とき chia ở thể る (帰る) nên được hiểu パンを 買いました xảy ra trước, 家へ帰る xảy ra sau.', ex:[
    {j:'コーヒーを 飲むとき、さとうを いれます。', k:'コーヒーを のむとき、さとうを いれます。', v:'Tôi bỏ đường khi uống cà phê.'},
    {j:'おばあさん、どうしましたか。', v:'Bà ơi, bà bị làm sao vậy?'},
    {j:'アイスクリームを食べたとき、歯が いたくなりました。', k:'アイスクリームをたべたとき、はが いたくなりました。', v:'Bà bị đau răng khi ăn kem.'},
    {j:'病気のとき、くすりを のまなければなりません。', k:'びょうきのとき、くすりを のまなければなりません。', v:'Khi bị bệnh thì phải uống thuốc.'}
  ]},
  {p:'～と', d:'Khi ~ — ～と：Khi ~ Sau と là một điều hiển nhiên, sự việc tất yếu xảy ra. Mệnh đề sau と không được biểu hiện ý chí, ý muốn, yêu cầu, nguyện vọng hoặc lời mời, lời kêu gọi.', ex:[
    {j:'お酒をと、頭が いたく なります。', k:'おさけをと、あたまが いたく なります。', v:'Khi uống rượu thì bị đau đầu.'},
    {j:'すみません、音が ちょっと ちいさいですが、', k:'すみません、おとが ちょっと ちいさいですが、', v:'Xin lỗi, âm thanh hơi nhỏ.'},
    {j:'このつまみを 右へ回すと、音が 大きく なりますよ。', k:'このつまみを みぎへまわすと、おとが おおきく なりますよ。', v:'Khi mà xoay nút này về phía tay phải thì âm thanh sẽ lớn lên đó.'},
    {j:'すみません、花やは どこですか。', k:'すみません、はなやは どこですか。', v:'Xin lỗi, tiệm bán hoa ở đâu vậy?'},
    {j:'このみちを まっすぐ行って、あの角を 左へ曲がると、花屋は 右にありますよ。', k:'このみちを まっすぐおこなって、あのかくを ひだりへまがると、はなやは みぎにありますよ。', v:'Đi thẳng con đường này rồi rẽ trái ở cái góc kia thì tiệm bán hoa nằm bên tay phải đó.'}
  ]},
  {p:'～を', d:'qua ~ — ～を：phạm vi không gian mà người hay vật đi qua. V là các động từ chỉ sự chuyển động, phương hướng như đi, chạy, bay…', ex:[
    {j:'公園を 散歩します。', k:'こうえんを さんぽします。', v:'Đi dạo trong công viên.'},
    {j:'道を 渡ります。', k:'みちを わたります。', v:'Băng qua đường.'}
  ]}
],

24: [
  {p:'～Vてあげます', d:'～Vてあげます： 1 làm(giúp) V cho 2 Ai đó làm việc gì đó cho người nào đó. Không dùng khi người khác làm gì đó cho mình.', ex:[
    {j:'カリナさんは おばあさんに 荷物を 運んであげます。', k:'カリナさんは おばあさんに にもつを はこんであげます。', v:'Karina mang hành lí giúp cho bà lão.'},
    {j:'日曜日、私は 母に 料理を 手伝ってあげます。', k:'にちようび、わたしは ははに りょうりを てつだってあげます。', v:'Chủ Nhật tôi giúp mẹ nấu ăn.'}
  ]},
  {p:'～Vてもらいます', d:'～Vてもらいます：1 được 2 V giúp Ai đó đã nhận hành động giúp đỡ từ người nào đó. Không dùng Vてもらいます để nói người khác đã nhận hành động từ mình.', ex:[
    {j:'私は カリナさんに スキーの やり方を 教えてもらいました。', k:'わたしは カリナさんに スキーの やりかたを おしえてもらいました。', v:'Tôi được Karina dạy cho cách trượt tuyết.'},
    {j:'私達は 店の人に 写真を とってもらいました。', k:'わたしたちは みせのひとに しゃしんを とってもらいました。', v:'Chúng tôi được người trong tiệm chụp hình.'}
  ]},
  {p:'～Vてくれます', d:'～Vてくれます： ~ 1 V cho tôi. Chỉ dùng cho bản thân và người thân như bố,mẹ,anh,chị…（ちち、はは、あね、あに、おとうと、いもうと…) Có thể lược bỏ 私に khi đó chủ ngữ sẽ đi cùng với trợ từ が.', ex:[
    {j:'犬が かわいいですね。', k:'いぬが かわいいですね。', v:'Con chó dễ thương quá ha.'},
    {j:'ええ、姉が この犬 を 買ってくれましたよ。', k:'ええ、あねが このいぬ を かってくれましたよ。', v:'uh, chị đã mua cho mình đó.'},
    {j:'すてきな セーターですね。', v:'Cái áo len đẹp quá.'},
    {j:'ありがとう ございます。ママが 送ってくれましたよ。', k:'ありがとう ございます。ママが おくってくれましたよ。', v:'Cám ơn. Mẹ đã gửi cho mình đó.'}
  ]},
  {p:'Cách dùng ～Vてもらいます và ～Vてくれます', d:'～Vてもらいます và ～Vてくれます đều được dùng khi được người khác làm cho một việc gì đó. Tuy nhiên chúng có sự khác nhau về chủ ngữ. Ngoài ra: • ～Vてくれます chỉ dùng cho bản thân và người thân. • ～Vてもらいます biểu hiện sự hàm ơn cao hơn. れい', ex:[
    {j:'母は 私に 料理を 作ってくれます。', k:'ははは わたしに りょうりを つくってくれます。', v:'Mẹ nấu ăn cho tôi.'},
    {j:'私は 母に 料理を 作ってもらいます。', k:'わたしは ははに りょうりを つくってもらいます。', v:'Tôi được mẹ nấu ăn cho.'}
  ]}
],

25: [
  {p:'～たら', d:'nếu ~ — ～たら：nếu ~ Điều kiện giả định. Thường hay đi cùng với もし. Chia tất cả về quá khứ + ら', ex:[
    {j:'もし お金が あったら、何を したいですか。', k:'もし おかねが あったら、なにを したいですか。', v:'Nếu có tiền bạn muốn làm gì?'},
    {j:'もし お金が あったら、新しい車を 買いたいです。', k:'もし おかねが あったら、あたらしいくるまを かいたいです。', v:'Nếu có tiền tôi muốn mua xe mới.'},
    {j:'もし 暇だったら、うみへ 釣りを しに 行きたいです。', k:'もし ひまだったら、うみへ つりを しに いきたいです。', v:'Nếu rảnh tôi muốn đi biển câu cá.'}
  ]},
  {p:'～Vたら', d:'Khi, sau khi ~ — Cấu trúc: Vた＋ら、～ — ～たら：Khi, sau khi ~ V1たら、V2 : Nhấn mạnh khi V1 hình thành thì V2 chắc chắn sẽ xảy ra.', ex:[
    {j:'12時に なったら、昼ごはんを 食べます。', k:'12じに なったら、ひるごはんを たべます。', v:'Đến 12 giờ tôi sẽ ăn cơm.'},
    {j:'卒業したら、何をしますか。', k:'そつぎょうしたら、なにをしますか。', v:'Sau tốt nghiệp bạn sẽ làm gì?'},
    {j:'卒業したら、結婚したいと思います。', k:'そつぎょうしたら、けっこんしたいとおもいます。', v:'Sau tốt nghiệp tôi muốn kết hôn.'}
  ]},
  {p:'～ても', d:'Cho dù ~ — ～ても：Cho dù ~ Chia tất cả về thể て + も Thường hay đi cùng với いくら mang ý nhấn mạnh “Cho dù có ~ bao nhiêu đi chăng nữa ~”', ex:[
    {j:'いくら 痛くても、歯医者の所へ 行きたくないです。', k:'いくら いたくても、はいしゃのところへ いきたくないです。', v:'Dẫu cho có đau bao nhiêu đi chăng nữa tôi cũng không muốn đi đến chỗ nha sỹ đâu.'},
    {j:'毎朝、雨が 降っても、ハイキングを しています。', k:'まいあさ、あめが ふっても、ハイキングを しています。', v:'Mỗi sáng, dẫu có mưa tôi vẫn chạy bộ.'}
  ]},
  {p:'Chủ ngữ của mệnh đề phụ', d:'Trong các mệnh đề phụ với ~てから,～とき,～と,～まえに,～たら,～ても… thì chủ ngữ được biểu thị bởi trợ từ が.', ex:[
    {j:'友達が 来る まえに、部屋を 掃除します。', k:'ともだちが くる まえに、へやを そうじします。', v:'Trước khi bạn đến chơi, tôi dọn phòng.'},
    {j:'妻が 病気の とき、会社を 休みます。', k:'つまが びょうきの とき、かいしゃを やすみます。', v:'Khi vợ ốm thì tôi nghỉ làm.'},
    {j:'友達が 約束の 時間に 来なかったら、どうしますか。', k:'ともだちが やくそくの じかんに こなかったら、どうしますか。', v:'Nếu bạn không đến đúng giờ thì anh/chị sẽ làm gì?'}
  ]}
],

26: [
  {p:'～んです', d:'Cấu trúc: (ký hiệu trên nghĩa là thể 普通形 nhưng trường hợp N và tính từ Na, bỏ だ thay vào là な) — ～んですか。 1. Phỏng đoán, xác nhận thông tin dựa vào những gì mình nghe hoặc nhìn thấy.', ex:[
    {j:'Bさんは 時々 大阪弁を 使いますね。大阪に 住んでいたんですか。', k:'Bさんは ときどき おおさかべんを つかいますね。おおさかに すんでいたんですか。', v:'B thỉnh thoảng sử dụng tiếng Osaka ha. Đã từng sống ở Osaka hả?'},
    {j:'ええ、１５さいまで 大阪に 住んでいました。', k:'ええ、１５さいまで おおさかに すんでいました。', v:'Ừ, Tôi đã sống ở Osaka đến năm 15 tuổi.'},
    {j:'おもしろい デザインの 靴ですね。どこで 買ったんですか。', k:'おもしろい デザインの くつですね。どこで かったんですか。', v:'Đôi giày có thiết kế thú vị nhỉ. Bạn mua ở đâu vậy?'},
    {j:'どうして 遅れたんですか。', k:'どうして おくれたんですか。', v:'Tại sao đến trễ vậy?'},
    {j:'どう したんですか。', v:'Bạn bị sao vậy?'},
    {j:'おなかが いたいんです。', v:'Tôi bị đau bụng.'}
  ]},
  {p:'～Vていただけませんか', d:'Có thể V ~ giúp tôi không? — ～Vていただけませんか： Có thể V ~ giúp tôi không? Yêu cầu người khác làm một việc gì đó cho mình một cách lịch sự. Dùng cho cấp trên, người lạ. Là cách nói lịch sự hơn 「Vてください」.', ex:[
    {j:'明日 家で パーティーをするんですが、手伝いに来ていただけませんか。', k:'あした いえで パーティーをするんですが、てつだいにきていただけませんか。', v:'Ngày mai nhà tôi tổ chức tiệc, bạn có thể nào đến giúp tôi có được không?'},
    {j:'ええ、いいですよ。', v:'Ừ, được chứ.'},
    {j:'生け花を 習いたいんですが、先生を 紹介していただけませんか。', k:'いけばなを ならいたいんですが、せんせいを しょうかいしていただけませんか。', v:'Tôi muốn học cắm hoa, có thể nào giới thiệu cho tôi giáo viên dạy cắm hoa không?'},
    {j:'ええ、近所にいい先生が いますから、紹介しましょう。', k:'ええ、きんじょにいいせんせいが いますから、しょうかいしましょう。', v:'Ừ, gần nhà tôi có giáo viên giỏi, để tôi giới thiệu cho nha.'}
  ]},
  {p:'～たら いいです', d:'Nên V ~ — ～たら いいです： Nên ~ Dùng để xin hoặc cho lời khuyên', ex:[
    {j:'ごみを 捨てたいんですが、どこに だしたら いいですか。', k:'ごみを すてたいんですが、どこに だしたら いいですか。', v:'Tôi muốn đổ rác, tôi phải đổ ở đâu?'},
    {j:'ごみ置き場は 駐車場のよこですよ。', k:'ごみおきばは ちゅうしゃじょうのよこですよ。', v:'Chỗ đổ rác ở bên cạnh bãi đậu xe đó.'},
    {j:'新聞社を 見学したいんですが、どう したら いいですか。', k:'しんぶんしゃを けんがくしたいんですが、どう したら いいですか。', v:'Tôi muốn tham qua tòa soạn, tôi phải làm thế nào?'},
    {j:'先生に 申し込んだら いいと思います。', k:'せんせいに もうしこんだら いいとおもいます。', v:'Tôi nghĩ là đăng ký với giáo viên thì được ấy.'}
  ]}
],

27: [
  {p:'Động từ có chủ ý và không có chủ ý', d:'子供を作ります Thực hiện quá trình tạo ra đời sau. ドアを閉めます Đóng cửa. 親に借金をする Mượn tiền từ bố mẹ. 音楽を聞きます Nghe nhạc. 映画を見ます Xem phim. 子供ができます Có thai. ドアが閉まります Cửa đóng. 親に借金がある Nợ tiền bố mẹ. 車の音が聞こえます Nghe thấy tiếng ô tô. 山が見えます Nhìn thấy núi. Chú ý Những động từ sau có thể dùng trong cả 2 trường hợp tùy vào ngữ nghĩa 先生になる Trở thành giáo viên. (vai trò, tính chất của con người) ベッドに倒れる Ngã lên giường. 爆弾を落とす Thả bom đạn. 雨になる Trờ trở mưa. (sự việc của tự nhiên) 木が倒れた Cây đổ. 財布を落とす Làm rơi ví.', ex:[]},
  {p:'~ V可能形', d:'có thể ~ — ~ V可能形: có thể ~ • Trình bày một khả năng, năng lực của một đối tượng nào đó. • Nói về một điều kiện, một việc gì đó được phép thực hiện. Chú ý: Khi chia về Thể Khả năng tất cả các động từ đều trở thành động từ nhóm 2. Chỉ trợ từ を được thay thế bằng trợ từ が. Các trợ từ khác vẫn được giữ nguyên. 私は ビールを のみません。 Tôi không uống bia. 私は ビールを のむことが できません。 私は ビールが のめません。 Tôi không thể uống bia. 忙しいですから、いなかへ 帰れません。 Vì bận nên tôi không thể về quê.', ex:[
    {j:'カリナちゃんは 漢字が よめますか。', k:'カリナちゃんは かんじが よめますか。', v:'Bé Karina có thể đọc Hán tự được không?'},
    {j:'はい、漢字が よめます。', k:'はい、かんじが よめます。', v:'Vâng, có thể đọc được.'},
    {j:'すみません、ここでは カードが つかえますか。', v:'Xin lỗi, ở đây có thể sử dụng thẻ được không?'},
    {j:'はい、できますよ。', v:'Vâng, được chứ.'}
  ]},
  {p:'～が みえます・きこえます', d:'nhìn thấy, nghe thấy ~ — ～が みえます: nhìn thấy ～が きこえます: nghe thấy ~ Phân biệt 見えます・聞こえます và 見られます・聞けます みられます・きけます みえます・きこえます Chủ thể thực hiện một hành động nghe, nhìn một cách có chủ ý. Đối tượng được nằm trong phạm vi quan sát, cảm nhận mà không phụ thuộc vào chủ ý của chủ thể. Nói về một đối tượng nào đó được phép, có thể nghe, nhìn. Không dùng cho khả năng, được phép thực hiện một việc gì đó. Nói về một khả năng đặc biệt của một chủ thể nào đó. Không dùng để nói về năng lực. 新宿で ベトナムの映画が 見られます。 新幹線から 富士山が 見えます。 電話で ラジオが きけます。 ここから ラジオの 音が 聞こえます。', ex:[
    {j:'なにが みえますか。', v:'Nhìn thấy gì vậy?'},
    {j:'ここから うみが みえますよ。', v:'Từ đây thấy được biển đó.'},
    {j:'へやから なにが きこえますか。', v:'Từ phòng bạn nghe được gì?'},
    {j:'へやから とりの こえが きこえます。', v:'Từ phòng nghe được tiếng chim hót.'}
  ]},
  {p:'～が できます', d:'~ hoàn thành — Cấu trúc: ～は Nが できます。 — ～が できます：~ hoàn thành/hoàn thiện/được làm ra/phát sinh ra Nói về một đối tượng nào đó đã được hoàn thành(hoàn thiện/được làm ra/phát sinh ra).', ex:[
    {j:'晩ご飯が もう できました。', k:'ばんごはんが もう できました。', v:'Cơm tối đã hoàn thành xong.'},
    {j:'駅の前に 大きいスーパーが できました。', k:'えきのまえに おおきいスーパーが できました。', v:'Có một siêu thị lớn đã được xây lên ở trước nhà ga.'}
  ]},
  {p:'～は～が、～は～ đối sánh', d:'Nhấn mạnh sự so sánh, đối chiếu, ý chí, quan điểm của người nói.', ex:[
    {j:'肉は 食べますが、魚は 食べません。', k:'にくは たべますが、さかなは たべません。', v:'Thịt thì tôi ăn còn cá thì tôi không ăn.'},
    {j:'中国へは行きませんが、にほんへは 行きます。', k:'ちゅうごくへはいきませんが、にほんへは いきます。', v:'Trung Quốc thì tôi không đi nhưng mà Nhật thì tôi đi.'}
  ]},
  {p:'～しか～ない', d:'chỉ, chỉ có ~ — ～しか～ない：chỉ, chỉ có, chỉ còn ~ Biểu thị sự ít ỏi, luyến tiếc của người nói. Luôn luôn đi với đuôi phủ định. しか thay thế trực tiếp cho các trợ từ を、が.', ex:[
    {j:'冷蔵庫に りんごしか ありません。', k:'れいぞうこに りんごしか ありません。', v:'Trong tủ lạnh chỉ có táo thôi.'},
    {j:'どんな本が 好きですか。', k:'どんなほんが すきですか。', v:'Bạn thích loại sách nào?'},
    {j:'ぼくは 漫画しか すきじゃありません。', k:'ぼくは まんがしか すきじゃありません。', v:'Tôi chỉ thích truyện tranh thôi.'}
  ]}
],

28: [
  {p:'~Vながら', d:'vừa ~ vừa~ — ~Vながら: vừa ~ vừa~ Chia các thì, các mẫu văn phạm ở động từ V2. V1 ở thể ます bỏ ます', ex:[
    {j:'私は 部屋を そうじしながら、音楽を 聞きます。', k:'わたしは へやを そうじしながら、おんがくを ききます。', v:'Tôi vừa dọn dẹp phòng vừa nghe nhạc.'},
    {j:'パンを たべながら、新聞を 読まないでください。', k:'パンを たべながら、しんぶんを よまないでください。', v:'Xin đừng vừa ăn bánh mì vừa đọc báo.'}
  ]},
  {p:'～Vている', d:'diễn tả thói quen — Cấu trúc: ～は Nを V ています。 — ～Vている：Thường ~ Thói quen trong quá khứ: ～Vていました。', ex:[
    {j:'毎晩、何を していますか。', k:'まいばん、なにを していますか。', v:'Mỗi tối bạn thường làm gì?'},
    {j:'おふろに はいりながら、本をよんでいます。', k:'おふろに はいりながら、ほんをよんでいます。', v:'Tôi thường vừa ngâm bồn vừa đọc sách.'},
    {j:'毎週の土曜日に 何を していますか。', k:'まいしゅうのどようびに なにを していますか。', v:'Thứ bảy mỗi tuần bạn thường làm gì?'},
    {j:'家を 掃除しています。', k:'いえを そうじしています。', v:'Tôi thường dọn dẹp nhà cửa.'}
  ]},
  {p:'～も～し、～も～し～', d:'Không những ~mà còn~ — ～も～し、～も～し～、それに～：Không những ~ mà còn~ Ngoài ra ~ ～も～し、～も～し～それで、～：Không chỉ ~ mà còn ~ vì vậy ~ • Nối các mệnh đề có ý nghĩa tương đồng nhau. • Trợ từ も được dùng theo quy tắc nhấn mạnh (Tham khảo trong bài 27). • Dùng cho ý tăng dần:それに (Ngoài ra) • Liệt kê lí do, nguyên nhân dẫn đến kết quả:それで ( Vì vậy)', ex:[
    {j:'ワット先生について どう思いますか。', k:'ワットせんせいについて どうおもいますか。', v:'Bạn nghĩ như thế nào về thầy Watt?'},
    {j:'ワット先生は 熱心だし、真面目だし、それに 経験もあると思います。', k:'ワットせんせいは ねっしんだし、まじめだし、それに けいけんもあるとおもいます。', v:'Tôi nghĩ là thầy không những nhiệt tình, đứng đắn mà còn có nhiều kinh nghiệm nữa.'},
    {j:'ねつも あるし、あたまも いたいし、きょうは 会社を 休みました。', k:'ねつも あるし、あたまも いたいし、きょうは かいしゃを やすみました。', v:'Không những bị sốt mà còn nhức đầu nữa nên hôm nay tôi đã nghỉ làm.'}
  ]},
  {p:'それで Vì thế ~', d:'「それで」là liên từ được dùng để trình bày kết quả do nguyên nhân hoặc lý do đã được trình bày ở trước đó.', ex:[
    {j:'将来 小説家に なりたいです。それで 今は アルバイトを しながら 小説を 書いています。', k:'しょうらい しょうせつかに なりたいです。それで いまは アルバイトを しながら しょうせつを かいています。', v:'Sau này tôi muốn trở thành tiểu thuyết gia. Vì thế, bây giờ tôi vừa viết tiểu thuyết vừa đi làm thêm.'},
    {j:'ここは コーヒーも おいしいし、食事も できるし･･･。', k:'ここは コーヒーも おいしいし、しょくじも できるし･･･。', v:'Ở đây cà phê ngon, lại còn bán cả đồ ăn nữa…'},
    {j:'それで 人気が あるんですね。', k:'それで にんきが あるんですね。', v:'Vì thế nên được ưa chuộng nhỉ.'}
  ]}
],

29: [
  {p:'Phân biệt Tha động từ và Tự động từ', d:'Tha động từTự động từ ドアを あけます Mở cửa. 電気をつけます Bật đèn. いすを こわします Làm hư ghế. かみを やぶります Xé giấy. ドアが あいています Cửa đang mở. 電気が ついています Đèn đang bật. いすが こわれています Ghế hỏng. かみが やぶれています Giấy rách. Chú ý Cho dù tha động từ đi kèm sự tác động, nhưng không phải tấc cả là động từ có chủ ý.', ex:[]},
  {p:'V自ている', d:'Tự động từ — Diễn tả trạng thái của một vật, một hiện tượng gì đó. Trường hợp miêu tả trạng thái thì luôn chia ở thể Vている. Trong trường hợp muốn nhấn mạnh về sự vật cần đề cập ta có thể thay が bằng は.', ex:[
    {j:'まどが 割れています。', k:'まどが われています。', v:'Cửa sổ bị vỡ.'},
    {j:'私の 部屋の まどは 割れています。', k:'わたしの へやの まどは われています。', v:'Cửa sổ phòng tôi bị vỡ.'}
  ]},
  {p:'～Vてしまう', d:'Có 3 ý nghĩa: 1. Diễn tả một việc gì đó đang làm và định sẽ thực hiện cho xong.', ex:[
    {j:'昼ごはんを 食べに行きませんか。', k:'ひるごはんを たべにいきませんか。', v:'Cùng đi ăn trưa không?'},
    {j:'すみません。今 これを コピーしてしまいますから。', k:'すみません。いま これを コピーしてしまいますから。', v:'Xin lỗi vì bây giờ tôi đang photo cái này cho xong.'},
    {j:'先週 貸した本は もう 読みましたか。', k:'せんしゅう かしたほんは もう よみましたか。', v:'Cuốn sách tôi cho mượn hồi tuần trước bạn đã đọc xong chưa?'},
    {j:'はい、全部 読んで しまいました。', k:'はい、ぜんぶ よんで しまいました。', v:'Rồi, tôi đã đọc xong toàn bộ rồi.'},
    {j:'どう したんですか。', v:'Bị sao vậy?'},
    {j:'指を 切って しまったんです。', k:'ゆびを きって しまったんです。', v:'Tôi lỡ cắt trúng ngón tay rồi.'}
  ]},
  {p:'～Nに V di chuyển', d:'Cấu trúc: ☞ Nđịa điểmに いきます/きます/かえります/しゅっちょうします — 1.', ex:[
    {j:'どこかで 財布を 落として しまったんです。', k:'どこかで さいふを おとして しまったんです。', v:'Tôi đã làm rơi ví ở đâu đó mất tiêu rồi.'},
    {j:'それは 大変ですね。すぐ 交番に 行かないと。', k:'それは たいへんですね。すぐ こうばんに いかないと。', v:'Thế thì gay nhỉ. Phải đến đồn cảnh sát ngay thôi.'}
  ]},
  {p:'それ/その/そう', d:'それ/その/そう chỉ những sự vật xuất hiện ở trong câu chuyện của đối phương, trong văn chương. Giải thích 1. Trường hợp trong hội thoại Chỉ thị nội dung vừa trình bày ngay trước đó của đối phương. VD1', ex:[
    {j:'どこかで 財布を 落として しまったんです。', k:'どこかで さいふを おとして しまったんです。', v:'Tôi đã làm rơi ví ở đâu đó mất tiêu rồi.'},
    {j:'それは 大変ですね。すぐ 交番に 行かないと。', k:'それは たいへんですね。すぐ こうばんに いかないと。', v:'Thế thì gay nhỉ. Phải đến đồn cảnh sát ngay thôi.'},
    {j:'来月から 大阪の 本社に 転勤なんです。', k:'らいげつから おおさかの ほんしゃに てんきんなんです。', v:'Từ tháng sau, tôi sẽ chuyển việc về công ty mẹ ở Osaka.'},
    {j:'それは おめでとうございます。', v:'Xin chúc mừng anh/chị về điều đó.'},
    {j:'あのう、途中で やめたい 場合は？', k:'あのう、とちゅうで やめたい ばあいは？', v:'Xin lỗi, trường hợp tôi muốn nghỉ giữa chừng thì phải làm sao?'},
    {j:'その 場合は、近くの 係員に 名前を 言って、帰って ください。', k:'その ばあいは、ちかくの かかりいんに なまえを いって、かえって ください。', v:'Trường hợp đó anh/chị hãy nói tên của mình cho người quản lý rồi ra về.'}
  ]}
],

30: [
  {p:'V他てある', d:'Có ~ — Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý.', ex:[
    {j:'ふうとうに 切手が はってあります。', k:'ふうとうに きってが はってあります。', v:'Trên phong bì có dán tem.'}
  ]},
  {p:'Phân biệt V他てある và V自ている', d:'Cấu trúc: ～ Nが V他てある ～ Nが V自ている — Cả hai đều dùng tả tình trạng, hiện tượng nhưng V他てある là kết quả của một hành động có chủ ý. れい： ドアを あけます ドアが あけてあります。(V他) ドアが あいています。 (V自) Mở cửa Cửa được mở (Vì một mục đích gì đó mà có người đã mở cửa sẵn) Cửa được mở (Tình trạng cửa hiện giờ đang mở)', ex:[
    {j:'お皿に 魚が きってありますから、これから さしみを 作りましょう。', k:'おさらに さかなが きってありますから、これから さしみを つくりましょう。', v:'Vì trên dĩa có cá đã cắt nên bây giờ chúng ta hãy cùng nhau làm món sashimi.'},
    {j:'ケーキは どこですか。', v:'Bánh kem đâu?'},
    {j:'ケーキは もう テープルに おいてありますよ。', v:'Bánh kem để ở trên bàn đó.'}
  ]},
  {p:'～Vておく', d:'Chuẩn bị sẵn 1.', ex:[
    {j:'会議の前に なにを しておきますか。', k:'かいぎのまえに なにを しておきますか。', v:'Trước khi họp phải chuẩn bị sẵn cái gì?'},
    {j:'資料を コピーしておきます。', k:'しりょうを コピーしておきます。', v:'Photo sẵn các tài liệu.'},
    {j:'旅行に 行く前に 何を しておいたら いいですか。', k:'りょこうに いくまえに なにを しておいたら いいですか。', v:'Trước khi đi du lịch thì nên chuẩn bị sẵn cái gì thì được?'},
    {j:'ホテルを 予約しておいたら いいですよ。', k:'ホテルを よやくしておいたら いいですよ。', v:'Nên đặt phòng trước đó.'},
    {j:'この本は どう しましょうか。', k:'このほんは どう しましょうか。', v:'Cuốn sách này phải làm sao?'},
    {j:'読んだら、本棚に 戻しておいてください。', k:'よんだら、ほんだなに もどしておいてください。', v:'Sau khi đọc xong xin hãy trả về kệ sách.'}
  ]},
  {p:'まだ～Vている', d:'vẫn còn ~ — Diễn tả một trạng thái, một hành động vẫn còn đang tiếp diễn.', ex:[
    {j:'あめは もうやみましたか。', v:'Mưa đã tạnh chưa?'},
    {j:'いいえ、まだ ふっていますよ。', v:'Chưa, vẫn đang mưa đó.'},
    {j:'このはさみを しまいましょうか。', v:'Để tôi cất cây kéo này nha?'},
    {j:'いいえ、まだ 使っていますから そのままにして おいてください。', k:'いいえ、まだ つかっていますから そのままにして おいてください。', v:'Khoan đã, vì tôi vẫn đang sử dụng nên xin hãy để nguyên đó.'}
  ]}
],

31: [
  {p:'V意向形', d:'cùng nhau ~ — Là cách nói ngắn của Vましょう Thể lịch sự: A: 疲れましたね。ちょっと 休みませんか。 B: はい、そう しましょう。 Thể thông thường: A: 疲れたね。ちょっと 休まない？ B: うん、そう しよう。', ex:[
    {j:'バス、 なかなか 来ないね。', k:'バス、 なかなか こないね。', v:'Xe buýt mãi mà cũng không đến ha.'},
    {j:'じゃ、タクシーで 行こう。', k:'じゃ、タクシーで いこう。', v:'Vậy thôi mình đi taxi nào.'},
    {j:'ねえ、一緒に 歌おう。', k:'ねえ、いっしょに うたおう。', v:'Nè, mình cùng hát nha.'},
    {j:'うん、そう しよう。', v:'Ừ làm vậy đi.'}
  ]},
  {p:'V意向形と 思っています', d:'định ~ — Bày tỏ ý định của người nói. • Lưu ý: ~ 思います：Ý định tại thời điểm hiện tại. ~ 思っています: Trước đến giờ tôi luôn định như vậy.', ex:[
    {j:'今週の 週末に 何を しますか。', k:'こんしゅうの しゅうまつに なにを しますか。', v:'Cuối tuần này bạn sẽ làm gì?'},
    {j:'友達と テニスを しようと 思っています。', k:'ともだちと テニスを しようと おもっています。', v:'Tôi định chơi tenis cùng với bạn.'},
    {j:'夏休みに うみへ行こうと。一緒に行きませんか。', k:'なつやすみに うみへいこうと。いっしょにいきませんか。', v:'Tôi định đi biển vào kỳ nghỉ hè. Bạn cũng cùng đi nhé?'},
    {j:'すみませんが、私は 家族と 山に のぼろうと 思っています。', k:'すみませんが、わたしは かぞくと やまに のぼろうと おもっています。', v:'Xin lỗi nhưng mà tôi đã định leo núi cùng với gia đình.'}
  ]},
  {p:'～つもり', d:'dự định — Mang ý định dứt khoát hơn V意向形と 思っています', ex:[
    {j:'今晩 どこへ 行きますか。', k:'こんばん どこへ いきますか。', v:'Tối nay mình đi đâu?'},
    {j:'コンサートへ 行く つもりです。', k:'コンサートへ いく つもりです。', v:'Anh định là sẽ đi xem hòa nhạc.'},
    {j:'今日から タバコを すわないつもりです。', k:'きょうから タバコを すわないつもりです。', v:'Tôi định là từ hôm nay trở đi sẽ không hút thuốc nữa.'}
  ]},
  {p:'～予定', d:'kế hoạch, dự định — ～予定：kế hoạch, dự định Là dự định đã lên thành kế hoạch nên mang tính chắc chắn hơn V意向形と 思っています, つもり.', ex:[
    {j:'明日から 日本へ出張します。', k:'あしたから にほんへしゅっちょうします。', v:'Từ ngày mai tôi sẽ đi công tác bên Nhật.'},
    {j:'そうですか。いつ帰りますか。', k:'そうですか。いつかえりますか。', v:'Vậy à. Khi nào về?'},
    {j:'来週の金曜日に帰る予定です。', k:'らいしゅうのきんようびにかえるよていです。', v:'Kế hoạch là sẽ về vào thứ sáu tuần sau.'},
    {j:'高校を 卒業したら どうしますか。', k:'こうこうを そつぎょうしたら どうしますか。', v:'Sau khi tốt nghiệp cấp ba dự định sẽ làm gì?'},
    {j:'ぼくは 大学に 入る予定です。', k:'ぼくは だいがくに はいるよていです。', v:'Tôi định sẽ vào đại học.'}
  ]},
  {p:'Vます → N', d:'Cấu trúc: Động từ thể ます khi bỏ ます đi còn được dùng như một danh từ. — 帰ります trở về → 帰り đường về, chiều về 遊びます vui chơi → 遊び việc vui chơi 答えます trả lời → 答え câu trả lời 申し込みます đăng ký → 申し込み việc đăng ký 楽しみます tận hưởng → 楽しみ niềm vui', ex:[]}
],

32: [
  {p:'～ほうが いいです', d:'Nên/Không nên ~ — Cấu trúc: ～は Nを (Vた/Vない) ほうが いいです。 Nên/ Không nên — Đưa ra lời khuyên nên hoặc không nên làm một điều gì đó. Vì mẫu câu này có thể mang hàm ý áp đặt cho nên ta nên hạn chế dùng với người thuộc cấp trên. Nếu muốn đưa ra lời khuyên mang tính giới thiệu, khuyến khích thì ta thường dùng mẫu：~Vたら、いいです。', ex:[
    {j:'せきが でますね。病院へ行ったほうが いいですよ。', k:'せきが でますね。びょういんへいったほうが いいですよ。', v:'Bị ho rồi, nên đi bệnh viện đi.'},
    {j:'はい、午後 行こうと。', k:'はい、ごご いこうと。', v:'Ừ. Tôi định chiều nay sẽ đi.'},
    {j:'これから タバコを 吸わないほうが いいです。', k:'これから タバコを すわないほうが いいです。', v:'Từ bây giờ không nên hút thuốc lá nữa.'},
    {j:'はい、分かりました。', k:'はい、わかりました。', v:'Vâng, tôi biết rồi.'}
  ]},
  {p:'～でしょう', d:'Có lẽ ~ / Chắc là ~ — Trình bày phán đoán của người nói.', ex:[
    {j:'きょう ナムさんは やすみましたね。', v:'Hôm nay Nam nghỉ học nhỉ?'},
    {j:'ええ、多分 びょうきになったでしょう。', k:'ええ、たぶん びょうきになったでしょう。', v:'Ừ, chắc là bị bệnh rồi.'},
    {j:'空が 曇っています。多分もうすぐ 雨が降るでしょう。', k:'そらが くもっています。たぶんもうすぐ あめがふるでしょう。', v:'Bầu trời u ám. Chắc là sắp mưa.'}
  ]},
  {p:'～かもしれません', d:'Không chừng ~ — Trình bày phán đoán của người nói về một tình huống nào đó có thể sẽ xảy ra. Mức độ chắc chắn thấp hơn ～でしょう.', ex:[
    {j:'ママ、私の魚が なくなったよ。', k:'ママ、わたしのさかなが なくなったよ。', v:'Mẹ ơi, con cá của con mất tiêu rồi.'},
    {j:'そうか。もしかしたら 猫は たべてしまったかもしれない。', k:'そうか。もしかしたら ねこは たべてしまったかもしれない。', v:'Vậy hả. Không chừng là con mèo nó ăn mất đó.'},
    {j:'バス、なかなか 来ないね。', k:'バス、なかなか こないね。', v:'Xe buýt mãi mà cũng không đến nhỉ.'},
    {j:'そうね、授業に 間に合わないかもしれない。', k:'そうね、じゅぎょうに まにあわないかもしれない。', v:'Ừ ha. Không chừng là không kịp giờ học.'}
  ]},
  {p:'Lượng từ + で', d:'Tầm, trong vòng ~ — Khi dùng Lượng từ + で：biểu thị kỳ hạn, giới hạn mang nghĩa “Trong vòng, tầm …”', ex:[
    {j:'３年間で 日本語を 勉強しました。', k:'３ねんかんで にほんごを べんきょうしました。', v:'Tôi đã học tiếng Nhật trong vòng 3 năm.'},
    {j:'この料理は １０分で 作りました。', k:'このりょうりは １０ぷんで つくりました。', v:'Món này tôi đã làm trong vòng 10 phút.'}
  ]}
],

33: [
  {p:'Cách dùng thể Mệnh Lệnh và Thể Cấm Chỉ', d:'1.', ex:[
    {j:'非常口、急げ！', k:'ひじょうぐち、いそげ！', v:'Lối thoát hiểm, nhanh lên!'},
    {j:'だめだ。もう 走れない。', k:'だめだ。もう はしれない。', v:'Không được rồi. Hết chạy nổi rồi.'},
    {j:'がんばれ！あと １０００メートルだ。', v:'Cố lên! còn 1000 mét nữa thôi.'},
    {j:'車を とめるな。', k:'くるまを とめるな。', v:'Cấm đậu xe.'},
    {j:'写真を とるな。', k:'しゃしんを とるな。', v:'Cấm chụp hình.'}
  ]},
  {p:'～Vなさい', d:'Đưa ra mệnh lệnh, yêu cầu nhưng cấp độ nhẹ nhàng hơn Thể Mệnh Lệnh. Giới nữ thường hay dùng mẫu này. Thường dùng khi cha mẹ nói với con cái, giáo viên nói với học sinh… và không được dùng với người cấp trên.', ex:[]},
  {p:'～と 読みます', d:'đọc là ~ ・ ～と 書いてあります : Có viết là ~ — ～と 読みます: đọc là ~ ～と 書いてあります： Có viết là ~', ex:[
    {j:'あそこに 何と書いてあるんですか。', k:'あそこに なんとかいてあるんですか。', v:'Ở đằng kia có viết gì vậy?'},
    {j:'「使用禁止」と書いてあります。', k:'「しようきんし」とかいてあります。', v:'Có viết là “Cấm sử dụng”'},
    {j:'あの漢字は 何と 読むんですか。', k:'あのかんじは なんと よむんですか。', v:'Chữ Hán Tự này đọc là gì vậy?'},
    {j:'「えいぎょうちゅう」と 読みます。', k:'「えいぎょうちゅう」と よみます。', v:'Đọc là “Eigyouchu”'}
  ]},
  {p:'～という意味です', d:'Nghĩa là ~ — ～という意味です：Nghĩa là ~ Dùng để giải thích ý nghĩa của từ hay câu văn.', ex:[
    {j:'この漢字は どう いう 意味ですか。', k:'このかんじは どう いう いみですか。', v:'Chữ Hán Tự này có nghĩa gì vậy?'},
    {j:'使うなと いう意味です。', k:'つかうなと いういみです。', v:'Có nghĩa là Cấm sử dụng.'},
    {j:'このマークは どういう 意味ですか。', k:'このマークは どういう いみですか。', v:'Ký hiệu này có nghĩa gì vậy?'},
    {j:'洗濯機で洗えると いう 意味です。', k:'せんたくきであらえると いう いみです。', v:'Có nghĩa là có thể giặt bằng máy giặt.'}
  ]},
  {p:'～と言っていました', d:'~ nói rằng ~ — ～と言っていました： ~ đã nói là ~ Dùng truyền đạt lại lời của một người thứ ba. • ～と 言いました: dùng trích dẫn lại. • ～と 言っていました: nhắn lời lại', ex:[
    {j:'田中： お弁当を行きますよ。', k:'たなか： おべんとうをいきますよ。', v:'Tanaka: Tôi đi mua cơm đó nha.'},
    {j:'田中さんは なんと 言っていましたか。', k:'たなかさんは なんと いっていましたか。', v:'Anh Tanaka nói gì vậy?'},
    {j:'お弁当を 買いに行くと 言っていました。', k:'おべんとうを かいにいくと いっていました。', v:'Ảnh nói là đi mua cơm.'},
    {j:'山田さんは いますか。', k:'やまださんは いますか。', v:'Anh Yamada có ở đây không?'},
    {j:'今 出かけています。３０分ぐらいで 戻ると 言っていました。', k:'いま でかけています。３０ぷんぐらいで もどると いっていました。', v:'Bây giờ ảnh đi ra ngoài rồi. Ảnh có nói là sẽ về trong vòng khoảng 30 phút nữa.'}
  ]},
  {p:'～と 伝えて いただけませんか', d:'Nhắn lại dùm tôi rằng ~ có được không? — ～と 伝えて いただけませんか： Nhắn lại rằng ~ có được không? Xin phép được gửi lời nhắn lại cho ai đó một cách lịch sự.', ex:[
    {j:'すみませんが、渡辺さんに あしたのパーティーは ６時からだと 伝えて いただけませんか。', k:'すみませんが、わたなべさんに あしたのパーティーは ６じからだと つたえて いただけませんか。', v:'Xin lỗi, bạn nhắn lại với Watanabe là buổi tiệc ngày mai bắt đầu từ 6 giờ có được không?'},
    {j:'分かりました。 ６時からですね。', k:'わかりました。 ６じからですね。', v:'Tôi biết rồi. Bắt đầu từ 6 giờ ha.'},
    {j:'すみませんが、先生に きょうは 柔道の練習に行けないと 伝えて いただけませんか。', k:'すみませんが、せんせいに きょうは じゅうどうのれんしゅうにいけないと つたえて いただけませんか。', v:'Xin lỗi, bạn nhắn lại với giáo viên là hôm nay tôi không thể đi tập Judo có được không?'},
    {j:'はい、分かりました。', k:'はい、わかりました。', v:'Ừ biết rồi.'}
  ]}
],

34: [
  {p:'～とおりに～', d:'làm theo như ~ — ～とおりに～： làm theo như ~ V1とおりに、V2 Thực hiện V2 đúng như trạng thái hoặc phương cách V1. Nのとおりに、V Thực hiện động từ V theo đúng chuẩn đã được biểu thị bởi danh từ N. Có thể dùng đại từ chỉ thị この/その/あの…とおりに', ex:[
    {j:'わたしが やった とおりに、やって ください。', v:'Hãy làm theo đúng như tôi đã làm.'},
    {j:'見た とおりに 話して ください。', k:'みた とおりに はなして ください。', v:'Hãy nói lại đúng như anh/chị đã thấy.'},
    {j:'線のとおりに 紙を 折りました。', k:'せんのとおりに かみを おりました。', v:'Tôi đã xếp giấy theo đường kẻ.'}
  ]},
  {p:'～Vたあとで、', d:'Sau khi ~ — Nhấn mạnh về trình tự thời gian của V2. V2 chỉ xảy ra sau khi V1 xảy ra. Chia thì tương lai, hiện tại, quá khứ … ở động từ sau. (V2)', ex:[
    {j:'昨日、友達が 帰ったあとで、１２時まで 片付けました。', k:'きのう、ともだちが かえったあとで、１２じまで かたづけました。', v:'Hôm qua, sau khi bạn bè về xong tôi dọn dẹp đến tận 12 giờ.'},
    {j:'食事のあとで、何を しますか。', k:'しょくじのあとで、なにを しますか。', v:'Sau khi dùng bữa xong mình làm gì?'},
    {j:'カラオケに 行きましょう。', k:'カラオケに いきましょう。', v:'Cùng đi hát Karaoke nha.'}
  ]},
  {p:'～Vて', d:'chỉ cách thức — ～Vて：chỉ cách thức', ex:[
    {j:'刺身を食べるとき、いつも しょうゆを つけて 食べます。', k:'さしみをたべるとき、いつも しょうゆを つけて たべます。', v:'Khi ăn Sashimi tôi thường chấm nước tương rồi ăn.'},
    {j:'そうですか、私は しょうゆを つけないで 食べますよ。', k:'そうですか、わたしは しょうゆを つけないで たべますよ。', v:'Vậy à. Tôi thì ăn mà không chấm nước tương.'},
    {j:'毎朝 ネクタイを しめて 会社へ 行きます。', k:'まいあさ ネクタイを しめて かいしゃへ いきます。', v:'Mỗi sáng tôi thắt cà vạt rồi đi làm.'}
  ]},
  {p:'～V1ないで、V2', d:'Không làm V1 mà làm V2 — Do không thể thực hiện được cả 2 việc cùng lúc nên phải đưa ra chủ ý làm cái này mà không làm cái khác.', ex:[
    {j:'日曜日は どこも 行かないで、うちで ゆっくり 休みます。', k:'にちようびは どこも いかないで、うちで ゆっくり やすみます。', v:'Chủ nhật tôi không đi đâu cả mà ở nhà nghỉ ngơi.'},
    {j:'ゆうべ 寝ないで 勉強しました。', k:'ゆうべ ねないで べんきょうしました。', v:'Tối hôm qua tôi đã học mà không ngủ.'}
  ]}
],

35: [
  {p:'Thể điều kiện', d:'～条件形: Nếu ~ Biểu thị điều kiện cần thiết để một việc gì đó có thể xảy ra. Biểu thị phán đoán của người nói trọng tình huống nhất định khi người nghe nói điều gì đó. Thể điều kiện được dùng cho cả động từ, tính từ và danh từ.', ex:[
    {j:'秋になれば、木の葉の色が 変わります。', k:'あきになれば、きのはのいろが かわります。', v:'Nếu vào thu thì màu của lá cây sẽ thay đổi.'},
    {j:'お湯がでないんですが。', k:'おゆがでないんですが。', v:'Nước nóng không chảy ra.'},
    {j:'このボタンを 押せば、お湯が 出ますよ。', k:'このボタンを おせば、おゆが でますよ。', v:'Nếu mà nhấn nút này thì nước nóng sẽ chảy ra đó.'},
    {j:'ボールペンが ないんですが。', v:'Tôi không có bút bi.'},
    {j:'ボールペンが なければ、鉛筆で 書いて ください。', k:'ボールペンが なければ、えんぴつで かいて ください。', v:'Nếu không có bút bi thì hãy viết bằng bút chì.'}
  ]},
  {p:'～Nなら', d:'nếu mà N thì ~ — ～Nなら: nếu mà N thì ~. Dùng để nối tiếp thông tin, chủ đề mà đối phương đã nêu ra trước đó.', ex:[
    {j:'電話を買いたいんですが。', k:'でんわをかいたいんですが。', v:'Tôi muốn mua điện thoại nhưng mà…'},
    {j:'電話なら、ドコモのが いいですよ。', k:'でんわなら、ドコモのが いいですよ。', v:'Nếu là điện thoại thì của Docomo là được đó.'},
    {j:'海へ 行きたいんですが、どこがいいですか。', k:'うみへ いきたいんですが、どこがいいですか。', v:'Tôi muốn đi biển không biết chỗ nào thì được?'},
    {j:'海なら ニャチャン（Nha Trang）がいいと 思いますよ。きれいだし、ここから 近いんです。', k:'うみなら ニャチャン（Nha Trang）がいいと おもいますよ。きれいだし、ここから ちかいんです。', v:'Nếu là biển thì tôi nghĩ Nha Trang là được đó. Không những đẹp mà còn gần nữa.'}
  ]},
  {p:'～Vば いいです', d:'Nên V ~ — ～Vば いいです： Nên V ~ Dùng để xin hoặc cho lời khuyên. Cách sử dụng giống NVTたら いいです。', ex:[
    {j:'本を 借りたいんですが、どう すれば いいですか。', k:'ほんを かりたいんですが、どう すれば いいですか。', v:'Tôi muốn mượn sách, làm như thế nào thì được?'},
    {j:'受付で カードを 作って もらって ください。', k:'うけつけで カードを つくって もらって ください。', v:'Xin hãy làm thẻ ở quầy tiếp tân.'},
    {j:'友達が 結婚します。どんな物を あげれば いいですか。', k:'ともだちが けっこんします。どんなものを あげれば いいですか。', v:'Bạn tôi sắp kết hôn. Không biết nên tặng cái gì thì được ?'},
    {j:'ワインを あげれば いいですよ。', v:'Tặng rượu vang là được đó.'}
  ]}
],

36: [
  {p:'～ように～', d:'để sao cho ~ — ～ように～： để sao cho ~ Biểu thị mục tiêu cần phấn đấu, đạt được. Trước ように là những động từ không thể hiện chủ ý chẳng hạn như なる、わかる、きこえる、みえる… Động từ Vる trước ようにthường được chia ở Thể Khả năng.', ex:[
    {j:'今晩、遊びに 行かない？', k:'こんばん、あそびに いかない？', v:'Tối nay đi chơi không?'},
    {j:'すみません、大学院に入れるように、毎晩勉強してるんです。', k:'すみません、だいがくいんにいれるように、まいばんべんきょうしてるんです。', v:'Xin lỗi, để có thể vào đại học mỗi tối tôi đều học cả.'},
    {j:'ボーナスは 貯金しますか。', k:'ボーナスは ちょきんしますか。', v:'Tiền thưởng thì để dành hả?'},
    {j:'ええ、年を とったら、困らないように、貯金します。', k:'ええ、としを とったら、こまらないように、ちょきんします。', v:'Ừ. Tôi để dành tiền để không gặp khó khăn khi về già.'}
  ]},
  {p:'～ようにする', d:'cố gắng sao cho ~ — Cấu trúc: Ý nghỉa ～ようにする： cố gắng sao cho ~ — Nói về sự nỗ lực liên tục để làm hoặc không làm một việc gì đó. ～ように しています：Duy trì một thói quen nào đó.', ex:[
    {j:'前 野菜が 嫌いでしたから、あまり食べませんでしたが、野菜は 体に良いですから、食べるようにします。', k:'まえ やさいが きらいでしたから、あまりたべませんでしたが、やさいは からだによいですから、たべるようにします。', v:'Trước đây vì ghét rau nên tôi không thường ăn lắm nhưng vì rau rất tốt cho cơ thể nên tôi cố gắng ăn.'},
    {j:'前 よく タバコを 吸いましたが、最近 吸わないようにしています。', k:'まえ よく タバコを すいましたが、さいきん すわないようにしています。', v:'Trước đây tôi thường hay hút thuốc nhưng dạo gần đây tôi cố gắng không hút thuốc nữa.'}
  ]},
  {p:'～ようにしてください', d:'Xin hãy cố gắng sao cho ~ — ～ようにしてください： Xin hãy cố gắng sao cho ~ Hướng dẩn & giải thích Yêu cầu người khác làm hoặc không làm việc gì đó một cách lịch sự. Mang mức độ nhẹ nhàng hơn ～Vてください hay ～Vないで ください。', ex:[
    {j:'毎日 運動するように してください。', k:'まいにち うんどうするように してください。', v:'Xin hãy cố gắng tập thể dục mỗi ngày.'},
    {j:'あした 絶対 時間に 遅れないように してください。', k:'あした ぜったい じかんに おくれないように してください。', v:'Ngày mai xin cố gắng tuyệt đối đừng đến trễ.'}
  ]},
  {p:'～ようになりました', d:'đã trở nên ~ — ～ようになりました： đã trở nên ~ Nói về những thay đổi mới, thói quen mới. Vるように なりました: trước đây không làm việc này nhưng bây giờ làm Vないように なりました: trước đây làm việc này nhưng bây giờ không làm nữa.', ex:[
    {j:'前 野菜が 嫌いですから、あまり 食べませんでしたが、野菜は 体に良いですから、毎日 少しずつ 食べるようにしています。今 食べるようになりました。', k:'まえ やさいが きらいですから、あまり たべませんでしたが、やさいは からだによいですから、まいにち すこしずつ たべるようにしています。いま たべるようになりました。', v:'Trước đây vì ghét rau nên tôi không thường ăn lắm nhưng vì rau rất tốt cho cơ thể nên mỗi ngày tôi cố gắng ăn một ít. Bây giờ tôi đã bắt đầu có thói quen ăn rau.'},
    {j:'前 よく タバコを 吸いましたが、最近 吸わないようになりました。', k:'まえ よく タバコを すいましたが、さいきん すわないようになりました。', v:'Trước đây tôi thường hay hút thuốc nhưng dạo gần đây tôi không còn hút thuốc nữa.'}
  ]},
  {p:'～V可能形るようになりました', d:'đã có thể ~ — ～V可能形るようになりました： đã trở nên có thể ~ Nói về những khả năng đã đạt được sau một quá trình phấn đấu, tập luyện.', ex:[
    {j:'もう 日本語の新聞を 読めるように なりましたか。', k:'もう にほんごのしんぶんを よめるように なりましたか。', v:'Đã có thể đọc được báo tiếng Nhật chưa?'},
    {j:'はい、読めるように なりました。', k:'はい、よめるように なりました。', v:'Rồi, đã trở nên có thể đọc được.'},
    {j:'もう ピアノを 弾けるように なりましたか。', k:'もう ピアノを ひけるように なりましたか。', v:'Đã có thể đàn Piano được chưa?'},
    {j:'いいえ、まだ 弾けません。早く 弾けるように なりたいです。', k:'いいえ、まだ ひけません。はやく ひけるように なりたいです。', v:'Chưa, vẫn chưa đàn được. Tôi muốn nhanh chóng trở nên có thể đàn được.'}
  ]},
  {p:'～V可能形なくなりました', d:'đã không thể ~ — ～V可能形なくなりました： đã trở nên không thể ~ Nói về những việc trước đây làm được nhưng bây giờ đã không thể làm được nữa. ～V可能形ない → V可能形ないくなる', ex:[
    {j:'明日のパーティ、この服を 着ますか。', k:'あしたのパーティ、このふくを きますか。', v:'Buổi tiệc ngày mai mặc đồ này hả?'},
    {j:'いいえ、太りましたから、その服が 着られなくなりました。', k:'いいえ、ふとりましたから、そのふくが きられなくなりました。', v:'Không, vì mập lên nên không còn mặc đồ đó được nữa.'},
    {j:'夏休みはどうでしたか。', k:'なつやすみはどうでしたか。', v:'Kỳ nghỉ hè thế nào?'},
    {j:'子供が病気になりましたから、海に行けなくなりました。', k:'こどもがびょうきになりましたから、うみにいけなくなりました。', v:'Vì con bệnh nên đã không thể đi biển được.'}
  ]},
  {p:'Tính từ → Trạng từ', d:'Cấu trúc: Aい → Aいく Aな → Aなに — Khi một tính từ bổ nghĩa cho động từ thì ta chuyển tính từ sang trạng từ theo cách trên. 早い → 早く 上手な → 上手に', ex:[
    {j:'早く 上手に お茶が たてられるように なりたいです。', k:'はやく じょうずに おちゃが たてられるように なりたいです。', v:'Tôi muốn mình sớm giỏi đánh trà (đánh trà lên đều bọt trong trà đạo).'}
  ]}
],

37: [
  {p:'N1 người は N2 người に Động từ bị động', d:'Cấu trúc: N1 người は N2 người に Động từ bị động — N1 bị/được N2 V N1 là chủ để của câu, N2 là chủ đề của hành vi được biểu thị bằng trợ từ に. Chủ thể của hành vi (N2 có thể là vật chuyển động như động vật, ô tô …)', ex:[
    {j:'先生は わたしを ほめました。', k:'せんせいは わたしを ほめました。', v:'Cô giáo khen tôi.'},
    {j:'→ 私は 先生に ほめられました。', k:'→ わたしは せんせいに ほめられました。', v:'→ Tôi được cô giáo khen.'},
    {j:'母は わたしに 買い物を 頼みました。', k:'ははは わたしに かいものを たのみました。', v:'Mẹ nhờ tôi mua đồ.'},
    {j:'→ わたしは 母に 買い物を 頼まれました 。', k:'→ わたしは ははに かいものを たのまれました 。', v:'→ Tôi được mẹ nhờ đi mua đồ.'},
    {j:'わたしは 犬に かまれました。', k:'わたしは いぬに かまれました。', v:'Tôi bị chó cắn.'}
  ]},
  {p:'N1 người は N2 người に N3 を Động từ bị động', d:'Cấu trúc: N1 người は N2 người に N3 を Động từ bị động — N1 bị/được N2 V N2 thực hiện hành vi nào đó đối với vật N3 mà N1 sở hữu. Thường biểu thị hành vi gây phiền toái đối với chủ ngữ của câu. Không dùng thể này để bày tỏ sự cảm kích, biết ơn. Tôi được bạn sửa máy tính cho. 私は 友達に パソコンを 修理されました。 X 私は 友達に パソコンを 修理してもらいました。 O', ex:[
    {j:'弟が わたしの パソコンを 壊しました。', k:'おとうとが わたしの パソコンを こわしました。', v:'Em trai phá máy tính xách tay của tôi.'},
    {j:'→ わたしは 弟に パソコンを 壊されました。', k:'→ わたしは おとうとに パソコンを こわされました。', v:'→ Tôi bị em trai phá máy tính xách tay.'},
    {j:'わたしは 犬に 手を かまれました。', k:'わたしは いぬに てを かまれました。', v:'Tôi bị cho cắn ở tay.'}
  ]},
  {p:'N は/が Động từ bị động', d:'Nói về sự vật, sự việc, hiện tượng gì đó được biết đến rộng rãi.', ex:[
    {j:'フランスで 昔の日本の絵が 発見されました。', k:'フランスで むかしのにほんのえが はっけんされました。', v:'Bức tranh cổ của Nhật đã được phát hiện ra ở Pháp.'},
    {j:'日本の電子製品は どこへ 輸出 されていますか。', k:'にほんのでんしせいひんは どこへ ゆしゅつ されていますか。', v:'Sản phẩm điện tử của Nhật được xuất khẩu đi đâu?'},
    {j:'世界中へ 輸出されています。', k:'せかいじゅうへ ゆしゅつされています。', v:'Được xuất khẩu đi khắp thế giới.'}
  ]},
  {p:'～から・で', d:'bằng, từ ~ — ～から・で： bằng, từ ~ から：sản phẩm làm ra đã làm thay đổi tính chất, kết cấu của nguyên liệu ban đầu. Khi nhìn vào sản phẩm ta không biết được nguyên vật liệu ban đầu. で：nhìn vào sản phẩm biết ngay được nguyên vật liệu ban đầu.', ex:[
    {j:'紙は 木から つくられます。', k:'かみは きから つくられます。', v:'Giấy được làm ra từ gỗ.'},
    {j:'この机は 木で つくられます。', k:'このつくえは きで つくられます。', v:'Cái bàn này được làm từ gỗ.'},
    {j:'ビールの原料は なんですか。', k:'ビールのげんりょうは なんですか。', v:'Nguyên liệu của bia là gì vậy?'},
    {j:'ビールは むぎから つくられます。', v:'Bia được làm ra từ lúa mạch.'}
  ]},
  {p:'N1のN2', d:'Cấu trúc: N1のN2 — N1 và N2 đồng cách. Mang nghĩa chung là “N2 là N1”.', ex:[
    {j:'ビールは むぎから つくられます。これが 原料の 麦です。', k:'ビールは むぎから つくられます。これが げんりょうの むぎです。', v:'Bia được làm ra từ lúa mạch. Đây là lúa mạch nguyên liệu.'}
  ]}
],

38: [
  {p:'の：Danh từ hóa', d:'Dùng để danh từ hóa nhiều biểu hiện khác nhau. Danh từ, động từ, tính từ đi cùng の được chia ở thể thông thường. Trợ từ sau の phụ thuộc vào loại từ của vế sau.', ex:[]},
  {p:'Vるのは Aです', d:'Cấu trúc: Vるのは Aです — Vるのは Aです : Việc V thì A. Đưa động từ nguyên dạng Vる ＋ の lên làm chủ ngữ của câu. Các tính từ thường được dùng trong mẫu câu này: むずかしい、やさしい、おもしろい、たのしい、きけんな、たいへんな…', ex:[
    {j:'テニスを 見るのは おもしろいです。', k:'テニスを みるのは おもしろいです。', v:'Việc xem Tenis thì thú vị..'},
    {j:'漢字を 覚えるのは 大変です。', k:'かんじを おぼえるのは たいへんです。', v:'Nhớ Hán tự thật là vất vả.'}
  ]},
  {p:'Vるのが Aです', d:'Cấu trúc: Vるのが Aです — Vるのが Aです : Vるの trở thành đối tượng miêu tả tính từ A. Mẫu câu này thì các tính từ chỉ yêu, ghét, năng lực như すきな、きらいな、じょうずな、へたな、はやい、おそい… được dùng.', ex:[
    {j:'私は 海岸を 散歩するのが 好きです。', k:'わたしは かいがんを さんぽするのが すきです。', v:'Tôi thích đi bộ trên bãi biển.'},
    {j:'彼は うそをいうのが 上手です。', k:'かれは うそをいうのが じょうずです。', v:'Anh ấy giỏi nói dối.'}
  ]},
  {p:'Vるのを 忘れました Đã quên V', d:'Cấu trúc: Vるのが Aです — Vì 忘れました là đã quên rồi, nghĩa là đối tượng quên chưa xảy ra nên luôn dùng Vる', ex:[
    {j:'買い物に 行きましたが、卵を 買うのを 忘れました。', k:'かいものに いきましたが、たまごを かうのを わすれました。', v:'Tôi đã đi mua sắm nhưng đã quên mua trứng rồi.'},
    {j:'車の 窓を 閉めるのを 忘れました。', k:'くるまの まどを しめるのを わすれました。', v:'Tôi đã quên đóng cửa xe hơi.'}
  ]},
  {p:'V thông thường のを 知っていますか Có biết V không?', d:'Cấu trúc: Vるのを 知っていますか — Dùng để hỏi người nghe có biết về một nội dung cụ thể nào đó không. Nhờ câu hỏi mà biết thêm thông tin thì trả lời 知りませんでした (Trước khi hỏi thì chưa biết sau khi hỏi thì biết). Ngay cả khi được hỏi cũng không biết thêm thông tin gì thì trả lời 知りません.', ex:[
    {j:'田中さんが 会社を やめたのを 知っていますか。', k:'たなかさんが かいしゃを やめたのを しっていますか。', v:'Bạn có biết chuyện anh Tanaka đã nghỉ làm không?'},
    {j:'いいえ、知りませんでした。', k:'いいえ、しりませんでした。', v:'Không, tôi đã không biết.'},
    {j:'ミラーさんの 住所を 知っていますか。', k:'ミラーさんの じゅうしょを しっていますか。', v:'Có biết địa chỉ anh Miller không?'},
    {j:'いいえ、知りません。', k:'いいえ、しりません。', v:'Không, tôi không biết.'}
  ]}
],

39: [
  {p:'～て', d:'chỉ nguyên nhân — ～て： chỉ nguyên nhân. Mệnh đề sau là kết quả phát sinh do bởi nguyên nhân đó. V/Aて: Mệnh đề sau là những từ không thể hiện chủ ý mà là các từ chỉ cảm giác, tâm trạng như an tâm, giật mình, buồn, vui… hoặc cũng có thể là những từ chỉ khả năng, trạng thái. Nで: Danh từ trong trường hợp này là danh từ chỉ hiện tượng tự nhiên, biến cố, sự kiện như じこ、じしん、かじ…', ex:[
    {j:'旅行は どうでしたか。', k:'りょこうは どうでしたか。', v:'Chuyến du lịch thế nào?'},
    {j:'旅行中に 財布を とられて、困りました。', k:'りょこうちゅうに さいふを とられて、こまりました。', v:'Vì bị lấy mất ví trong lúc du lịch nên đã rất là khốn đốn.'},
    {j:'地震で ビルが 倒れました。', k:'じしんで ビルが たおれました。', v:'Tòa nhà đã đổ do bởi động đất.'}
  ]},
  {p:'～ので', d:'vì ~ — Đưa ra lí do, trình bày nguyên nhân một cách nhẹ nhàng nên thường dùng để xin phép, đưa ra ý kiến hay phân trần một việc gì đó. Sau ので không dùng mệnh lệnh, cấm chỉ. Có thể dùng 丁寧形ので để tăng phần trang trọng, lịch sự.', ex:[
    {j:'気分が 悪いので、 早退しても いいですか。', k:'きぶんが わるいので、 そうたいしても いいですか。', v:'Vì tôi không được khỏe nên có thể cho phép tôi về sớm được không ạ?'},
    {j:'ええ、お大事に。', k:'ええ、おだいじに。', v:'Ừ, giữ gìn sức khỏe nhé.'},
    {j:'どうして 引越し したんですか。', k:'どうして ひっこし したんですか。', v:'Tại sao lại chuyển nhà vậy?'},
    {j:'鳥の声を 聞くのが 好きなので、田舎に 引越し しました。', k:'とりのこえを きくのが すきなので、いなかに ひっこし しました。', v:'Vì tôi thích nghe tiếng chim hót nên tôi đã dọn về quê.'}
  ]},
  {p:'～途中で', d:'trên đường, giữa lúc ~ — ～途中で：trên đường, giữa lúc ~', ex:[
    {j:'ミラーさんは 会社に行く とちゅうで 事故に あいました。', k:'ミラーさんは かいしゃにいく とちゅうで じこに あいました。', v:'Anh Miller đã gặp tai nạn trên đường đi làm.'},
    {j:'アジア旅行の とちゅうで ベトナムに 寄りました。', k:'アジアりょこうの とちゅうで ベトナムに よりました。', v:'Trên đường du lịch các nước Châu Á tôi đã ghé thăm Việt Nam.'}
  ]}
],

40: [
  {p:'～か、～', d:'Lồng một câu dùng nghi vấn từ vào trong câu văn khác.', ex:[
    {j:'ビールは 何本 ありますか。数えてください。', k:'ビールは なんぼん ありますか。かぞえてください。', v:'Bia có mấy chai. Xin hãy đếm.'},
    {j:'→ ビールは 何本あるか、数えてください。', k:'→ ビールは なんぼんあるか、かぞえてください。', v:'→ Xin hãy đếm xem bia có mấy chai.'},
    {j:'二次会は どこへ 行きましたか。', k:'にじかいは どこへ いきましたか。', v:'Tiệc tăng hai đã đi đâu vậy?'},
    {j:'酔っていたので、どこへ 行ったか、全然 覚えていないんです。', k:'よっていたので、どこへ いったか、ぜんぜん おぼえていないんです。', v:'Vì say rồi nên đi đâu tôi cũng không nhớ nữa.'}
  ]},
  {p:'～か どうか ～', d:'～か、どうか ～ : có ~ hay không Lồng một câu không có nghi vấn từ vào trong câu văn khác. Cần thiết phải thêm 「どうか」 vào sao 「thể thông thương か」.', ex:[
    {j:'今度の マラソン大会に 参加しますか。', k:'こんどの マラソンたいかいに さんかしますか。', v:'Có tham gia đại hội chạy việt dã lần này không?'},
    {j:'参加するか、どうか、まだ 決めていません。', k:'さんかするか、どうか、まだ きめていません。', v:'Tôi vẫn chưa quyết định xem có tham gia hay không nữa.'},
    {j:'あの店は おいしいですか。', k:'あのみせは おいしいですか。', v:'Quán đó có ngon không?'},
    {j:'おいしいか おいしくないか 分かりません。入ったことが ありませんから。', k:'おいしいか おいしくないか わかりません。はいったことが ありませんから。', v:'Ngon hay không cũng không biết nữa. Vì tôi chưa từng vào quán đó.'}
  ]},
  {p:'～Vてみます', d:'thử làm ~ — ～Vてみます: thử làm ~ Có thể chia động từ みる sang thành các mẫu ngữ pháp thích hợp.', ex:[
    {j:'このくつは 合うか どうか、 はいてみてもいいですか。', k:'このくつは あうか どうか、 はいてみてもいいですか。', v:'Tôi mang thử xem đôi giày này có vừa hay không được chứ?'},
    {j:'はい、どうぞ。', v:'Vâng, xin mời.'},
    {j:'今日、ぼくは ケーキを 作ってみますよ。', k:'きょう、ぼくは ケーキを つくってみますよ。', v:'Hôm nay tôi sẽ thử làm món bánh kem.'}
  ]},
  {p:'Aい → Aいさ', d:'Khi bỏ い của tính từ い rồi thêm vào さ, ta có danh từ mang nghĩa “độ ~”. おもい → おもさ độ nặng おおきい → おおきさ độ lớn ちいさい → ちいささ độ nhỏ ながい → ながさ độ dài たかい → たかさ độ cao', ex:[
    {j:'このはこの 長さは どのくらいか、はかってみます。', k:'このはこの ながさは どのくらいか、はかってみます。', v:'Tôi sẽ đo thử xem chiều dài của cái hộp này là bao nhiêu.'},
    {j:'この荷物の 重さは ５キロ以下かどうか、はかってみてください。', k:'このにもつの おもさは ５キロいかかどうか、はかってみてください。', v:'Xin hãy cân thử xem độ nặng của hành lý này có dưới 5 ký hay không.'}
  ]}
],

41: [
  {p:'Tặng', d:'さしあげます：Biếu あげます：Tặng やります：Cho Có thể dùng kết hợp với một động từ khác chia ở thể て để diễn tả sự cho nhận hành vi. Khuyến khích dùng あげます hơn từ やります vì đây là từ lịch sự hơn.', ex:[
    {j:'私は 部長に コーヒーを さしあげました。', k:'わたしは ぶちょうに コーヒーを さしあげました。', v:'Tôi biếu cà phê cho ông trưởng phòng.'},
    {j:'私は 犬に えさを やりました。', k:'わたしは いぬに えさを やりました。', v:'Tôi đã cho chó ăn đồ ăn.'},
    {j:'私は 会社の 人に ネクタイを 買ってあげました。', k:'わたしは かいしゃの ひとに ネクタイを かってあげました。', v:'Tôi mua cà vạt tặng cho người trong công ty.'},
    {j:'私は いもうとに 本を 読んでやりました。', k:'わたしは いもうとに ほんを よんでやりました。', v:'Tôi đọc sách cho em gái nghe.'}
  ]},
  {p:'Cho tôi', d:'Khi cấp trên cho hoặc tặng gì đó cho mình (người thân mình) thì dùng くださいます. Dùng kết hợp với một động từ chia ở thể て để nói về ai đó làm gì đó cho mình. Có thể dùng くださいます cho người thân trong gia đình của người nói.', ex:[
    {j:'卒業のとき、先生は 私に ペンを くださいました。', k:'そつぎょうのとき、せんせいは わたしに ペンを くださいました。', v:'Khi tốt nghiệp thầy giáo đã cho tôi cây viết.'},
    {j:'誕生日に 会社の人は 私に 花を くれました。', k:'たんじょうびに かいしゃのひとは わたしに はなを くれました。', v:'Người trong công ty đã tặng hoa cho tôi nhân dịp sinh nhật.'},
    {j:'クリスマスに 妹は 私に コップを くれました。', k:'クリスマスに いもうとは わたしに コップを くれました。', v:'Vào lễ giáng sinh, em gái đã cho tôi chiếc cốc.'},
    {j:'部長が 駅まで 送って くださいました。', k:'ぶちょうが えきまで おくって くださいました。', v:'Trưởng phòng tiễn tôi ra tận sân ga.'},
    {j:'部長の 奥さんが お茶を 教えて くださいました。', k:'ぶちょうの おくさんが おちゃを おしえて くださいました。', v:'Vợ trưởng phòng dạy trà đạo cho tôi.'}
  ]},
  {p:'Nhận', d:'Cấu trúc: Hướng dẫn & — 1.', ex:[
    {j:'私は 社長に お土産を いただきました。', k:'わたしは しゃちょうに おみやげを いただきました。', v:'Tôi đã đượcá giám đốc tặng quà.'},
    {j:'私は 部長に ワインを 買っていただきました。', k:'わたしは ぶちょうに ワインを かっていただきました。', v:'Tôi đã được ông trưởng phòng mua tặng chai rượu vang.'},
    {j:'私は 友達に ケーキを 作ってもらいました。', k:'わたしは ともだちに ケーキを つくってもらいました。', v:'Tôi đã được bạn làm cho cái bánh kem.'},
    {j:'誕生日に 私は 子供に ピアノを 弾いてもらいました。', k:'たんじょうびに わたしは こどもに ピアノを ひいてもらいました。', v:'Trong ngày sinh nhật tôi đã được con đàn piano cho.'}
  ]},
  {p:'～Vてくださいませんか', d:'Có thể làm ~ dùm tôi được không? — ～Vてくださいませんか : Có thể làm ~ dùm tôi được không? Yêu cầu người khác làm giúp mình một việc gì đó một cách lịch sự. ～ Vていただけませんか có mức độ lịch sự cao hơn.', ex:[
    {j:'すみません。セーターの サイズを まちがえたんですが、とりかえてくれませんか。', v:'Xin lỗi. Tôi đã nhầm lẫn kích cỡ của cái áo len này. Có thể nào đổi lại dùm tôi được không?'},
    {j:'はい、少々 お待ちください。', k:'はい、すくな々 おまちください。', v:'Vâng, xin vui lòng chờ một chút.'},
    {j:'駅へ 行きたいんですが、道を 教えて くださいませんか。', k:'えきへ いきたいんですが、みちを おしえて くださいませんか。', v:'Tôi muốn đi đến nhà ga, có thể nào vui lòng chỉ đường dùm tôi không?'},
    {j:'ええ、いいですよ。', v:'Vâng được chứ.'}
  ]},
  {p:'に：để, để làm', d:'に：để, để làm. Chỉ mục đích của hành động.', ex:[
    {j:'記念に 写真を 撮りました。', k:'きねんに しゃしんを とりました。', v:'Chụp hình để làm kỷ niệm.'},
    {j:'卒業の お祝いに 先生がペンを くださいました。', k:'そつぎょうの おいわいに せんせいがペンを くださいました。', v:'Thầy giáo đã cho tôi cây viết để chúc mừng tốt nghiệp.'}
  ]}
],

42: [
  {p:'～ために', d:'Để, vì , nhằm mục đích ~ — Dùng để chỉ mục đích. Trường hợp Nのために còn dùng với ý nghĩa “vì/cho lợi ích của N”.', ex:[
    {j:'なんの ために 貯金していますか。', k:'なんの ために ちょきんしていますか。', v:'Bạn để dành tiền để làm gì vậy?'},
    {j:'将来 自分の店を 持つために、貯金しています。', k:'しょうらい じぶんのみせを もつために、ちょきんしています。', v:'Tôi để dành tiền để tương lai có được một cửa tiệm cho riêng mình.'},
    {j:'健康の ために、 何か していますか。', k:'けんこうの ために、 なにか していますか。', v:'Bạn có làm gì đó cho sức khỏe không?'},
    {j:'いいえ。でも、来週から 毎朝 走ろうと。', k:'いいえ。でも、らいしゅうから まいあさ はしろうと。', v:'Không. Nhưng mà tôi định từ tuần sau, mỗi sáng tôi sẽ chạy bộ.'},
    {j:'家族の ために、うちを 建てます。', k:'かぞくの ために、うちを たてます。', v:'Tôi xây nhà cho gia đình.'}
  ]},
  {p:'のに', d:'để ~ — Thường được dùng để nói về cách sử dụng, công dụng, mục đích sử dụng.', ex:[
    {j:'これは なんに 使うんですか。', k:'これは なんに つかうんですか。', v:'Cái này sử dụng để làm gì?'},
    {j:'お湯を 沸かすのに 使います。', k:'おゆを わかすのに つかいます。', v:'Sử dụng để đun nước sôi.'},
    {j:'かわいい 人形ですね。', k:'かわいい にんぎょうですね。', v:'Con búp bê dễ thương quá.'},
    {j:'ええ、お土産に ちょうど いいと思いますよ。', k:'ええ、おみやげに ちょうど いいとおもいますよ。', v:'Ừ, tôi nghĩ là nó vừa hợp để làm quà lưu niệm đó.'}
  ]},
  {p:'は・も', d:'nhấn mạnh số lượng — • は：Biểu thị mức độ tối thiểu mà người nói ước lượng được. • も：Dùng khi người nói cảm nhận con số đó là quá nhiều.', ex:[
    {j:'この車を 修理するのに、２週間は かかります。', k:'このくるまを しゅうりするのに、２しゅうかんは かかります。', v:'Mất 2 tuần để sửa chiếc xe này.'},
    {j:'２週間も かかるんですか。', k:'２しゅうかんも かかるんですか。', v:'Mất đến 2 tuần cơ à!'},
    {j:'にほんでは 結婚式を するのに どのくらい お金が 必要ですか。', k:'にほんでは けっこんしきを するのに どのくらい おかねが ひつようですか。', v:'Ở Nhật, cần khoảng bao nhiêu tiền để tổ chức lễ cưới?'},
    {j:'２００万円は 要ると 思います。', k:'２００まんえんは いると おもいます。', v:'Tôi nghĩ là cần 2 triệu yên.'},
    {j:'えっ、２００万円も 要るんですか。', k:'えっ、２００まんえんも いるんですか。', v:'Hả, cần tới 2 triệu yên cơ à?'}
  ]},
  {p:'～によって', d:'do bởi ~ — ～によって： ~do bởi ~ Dùng cho câu bị động biểu đạt các sáng tạo, phát minh.', ex:[]}
],

43: [
  {p:'～そうです', d:'có vẻ, sắp sửa ~ — 1.', ex:[
    {j:'空が 曇っています。今にも あめが ふりそうです。', k:'そらが くもっています。いまにも あめが ふりそうです。', v:'Bầu trời đầy mây. Có vẻ như trời sắp mưa đến nơi rồi.'},
    {j:'もうすぐ 桜が 咲きそうです。', k:'もうすぐ さくらが さきそうです。', v:'Hoa anh đào có vẻ sắp nở.'},
    {j:'この 料理は 辛そうです。', k:'この りょうりは からそうです。', v:'Món ăn này có vẻ cay.'},
    {j:'父は まだ 帰っていませんので、母は しんぱいそうです。', k:'ちちは まだ かえっていませんので、ははは しんぱいそうです。', v:'Cha vẫn chưa về nên mẹ có vẻ lo lắng.'}
  ]},
  {p:'～Vて来ます', d:'đi ~ rồi quay lại — Cấu trúc: ～Vてきます。 — ～Vて来ます：đi ~ rồi quay lại', ex:[
    {j:'ちょっと でんわを かけて来ますから、ここで まっていてください。', k:'ちょっと でんわを かけてきますから、ここで まっていてください。', v:'Tôi đi gọi điện một chút rồi sẽ quay lại nên xin hãy chờ ở đây.'},
    {j:'はい。', v:'Vâng'},
    {j:'どうしたんですか。', v:'Bị sao vậy?'},
    {j:'教室に 時計を 忘れたので、ちょっと とって来ます。', k:'きょうしつに とけいを わすれたので、ちょっと とってきます。', v:'Tôi để quên đồng hồ trong lớp nên sẽ đi lấy một tí rồi quay lại ngay.'}
  ]},
  {p:'～Vて くれませんか', d:'Làm ơn ~ — Cấu trúc: ～Vて くれませんか。 — ～Vて くれませんか：là cách nói lịch sự hơn ～Vて ください nhưng không lịch sự bằng ～Vて いただけませんか/～Vて くださいませんか. Thích hợp dùng cho đối tượng là người ngang hàng hoặc người dưới mình.', ex:[
    {j:'コンビニへ 行って 来ます。', k:'コンビニへ いって きます。', v:'Tôi đi cửa hàng tiện lợi rồi quay lại.'},
    {j:'じゃ、お弁当を 買って 来て くれませんか。', k:'じゃ、おべんとうを かって きて くれませんか。', v:'Thế thì, mua giúp tôi cơm hộp được không?'}
  ]}
],

44: [
  {p:'～すぎます', d:'quá ~ — Biểu thị sự quá mức độ cần thiết của hành động hay trạng thái. Thường dùng với ý không mong muốn hành động, trạng thái đó quá mức đó xảy ra.', ex:[
    {j:'さっき ズンさんは 食べすぎましたから、今 お腹が 痛くなりました。', k:'さっき ズンさんは たべすぎましたから、いま おなかが いたくなりました。', v:'Vì lúc nãy Dương ăn quá nhiều nên bây giờ bị đau bụng.'},
    {j:'この自転車は 高すぎますから、買えません。', k:'このじてんしゃは たかすぎますから、かえません。', v:'Vì chiếc xe đạp này quá mắc nên không thể mua nổi.'}
  ]},
  {p:'～Vやすいです・～Vにくいです', d:'Dễ V・Khó V — ～Vやすいです： dễ ~ ～Vにくいです： Khó ~ Xem cụm từ ～Vやすい, ～Vにくい như một tính từ い.', ex:[
    {j:'雪の日は 道が 滑りやすいです。', k:'ゆきのひは みちが すべりやすいです。', v:'Vào ngày tuyết rơi thì đường rất dễ bị trơn trượt.'},
    {j:'この鉛筆は みじかくて、かきにくいです。', k:'このえんぴつは みじかくて、かきにくいです。', v:'Cây bút chì này quá ngắn nên khó viết.'}
  ]},
  {p:'～します', d:'làm cho ~ — Chủ thể tác động trực tiếp làm biến đổi một đối tượng nào đó.', ex:[
    {j:'このいすは ちょっと たかいですから、ひくくします。', v:'Vì ghế này hơi cao một chút nên tôi sẽ làm cho nó thấp xuống.'},
    {j:'娘が帰る前に、この部屋を きれいに しておきます。', k:'むすめがかえるまえに、このへやを きれいに しておきます。', v:'Trước khi con gái về tôi sẽ dọn phòng này cho sạch sẽ.'}
  ]},
  {p:'～Nに します', d:'quyết định/chọn ~ — Đưa ra sự lựa chọn, quyết định.', ex:[
    {j:'食事は 和食と 洋食と どちらに しますか。', k:'しょくじは わしょくと ようしょくと どちらに しますか。', v:'Bữa ăn thì quý khách chọn ăn kiểu Nhật hay ăn kiểu Châu Âu?'},
    {j:'和食に します。', k:'わしょくに します。', v:'Tôi chọn ăn kiểu Nhật.'},
    {j:'飲み物は？', k:'のみものは？', v:'Thức uống thì sao ạ?'},
    {j:'コーヒーに します。', v:'Tôi chọn cà phê.'}
  ]}
],

45: [
  {p:'～場合', d:'Khi/trường hợp ~ — Giả định một tình huống nào đó, phần đi sau là cách xử lý hay kết quả xảy ra. Vì 場合 là danh từ nên cách kết hợp tương tự bổ nghĩa cho danh từ.', ex:[
    {j:'交通事故にあった場合は どうしますか。', k:'こうつうじこにあったばあいは どうしますか。', v:'Trong trường hợp gặp tai nạn giao thông thì phải làm sao?'},
    {j:'すぐ 警察に 連絡してください。', k:'すぐ けいさつに れんらくしてください。', v:'Xin hãy liên lạc với cảnh sát ngay lập tức.'},
    {j:'ねえ、領収書を もらいたい場合は どうしたら いいですか。', k:'ねえ、りょうしゅうしょを もらいたいばあいは どうしたら いいですか。', v:'Nè, trong trường hợp muốn nhận hóa đơn phải làm sao thì được?'},
    {j:'必要な場合は 店の人に言ってください。', k:'ひつようなばあいは みせのひとにいってください。', v:'Trong trường hợp cần thiết thì xin hãy nói với người trong cửa tiệm.'},
    {j:'火事や 地震の 場合は、エレベーターを 使わないで ください。', k:'かじや じしんの ばあいは、エレベーターを つかわないで ください。', v:'Khi có hỏa hoạn hoặc động đất thì không dùng thang máy.'}
  ]},
  {p:'～のに', d:'thế mà, vậy mà ~ — Bày tỏ sự bất mãn với kết quả ngoài sự mong muốn hoặc sự việc trái với kết quả được dự đoán. Thường thể hiện tâm trạng bất ngờ, hay tâm trạng không bằng lòng của người nói.', ex:[
    {j:'スピーチは うまく いきましたか。', v:'Bài phát biểu trôi chảy chứ?'},
    {j:'いいえ、一生懸命 練習して 覚えたのに、緊張しすぎて、途中で忘れてしまいました。', k:'いいえ、いっしょうけんめい れんしゅうして おぼえたのに、きんちょうしすぎて、とちゅうでわすれてしまいました。', v:'Không. Đã cố gắng hết sức để tập luyện rồi học thuộc thế mà vì quá hồi hộp nên giữa chừng đã quên mất tiêu.'},
    {j:'猫なのに ねずみが 怖いです。', k:'ねこなのに ねずみが こわいです。', v:'Là mèo thế mà lại sợ chuột.'}
  ]}
],

46: [
  {p:'～ところ', d:'lúc~ — Nhấn mạnh thời điểm diễn ra của một hành động nào đó. ところ được xem như là một danh từ.', ex:[]},
  {p:'～Vるところ', d:'Sắp sửa ~ — Biểu thị thời điểm của một hành động sắp sửa bắt đầu. Thường được dùng với các phó từ これから、いまから…', ex:[
    {j:'今から かみを 切るところです。', k:'いまから かみを きるところです。', v:'Bây giờ sắp sửa cắt tóc.'},
    {j:'昼ごはんは もう 食べましたか。', k:'ひるごはんは もう たべましたか。', v:'Đã ăn cơm trưa chưa?'},
    {j:'いいえ、これから 食べるところです。', k:'いいえ、これから たべるところです。', v:'Chưa, từ bây giờ sắp sửa ăn.'}
  ]},
  {p:'～Vているところ', d:'Đang ~ — Cấu trúc: Hướng dẩn & — 1.', ex:[
    {j:'今 かみを 切っているところです。', k:'いま かみを きっているところです。', v:'Bây giờ đang trong lúc cắt tóc.'},
    {j:'ナムさん、今 暇？', k:'ナムさん、いま ひま？', v:'Nam ơi, bây giờ rảnh không?'},
    {j:'すみません。 今 子供と 昼ごはんを たべているところなんです。', k:'すみません。 いま こどもと ひるごはんを たべているところなんです。', v:'Xin lỗi. Bây giờ đang trong lúc ăn cơm trưa với con.'}
  ]},
  {p:'～Vたところ', d:'Vừa mới ~ — Biểu thị một việc gì đó vừa mới kết thúc. Thường dùng kèm với phó từ たったいま.', ex:[
    {j:'たった今 かみを 切ったところです。', k:'たったいま かみを きったところです。', v:'Vừa mới cắt tóc xong.'},
    {j:'ナムさん、一緒に 昼ごはんを行きませんか。', k:'ナムさん、いっしょに ひるごはんをいきませんか。', v:'Nam ơi, cùng đi ăn cơm trưa không?'},
    {j:'すみません、さっき 食べたところなので、また今度ね。', k:'すみません、さっき たべたところなので、またこんどね。', v:'Xin lỗi, vì mới vừa ăn xong nên hẹn lần sau nhé.'}
  ]},
  {p:'～Vたばかり', d:'Vừa mới ~ — ～Vたばかり： Vừa mới ~ Biểu thị một hành động, một việc gì đó xảy ra chưa lâu theo cảm nhận của người nói. Vたところ：Sự việc thực sự vừa mới xảy ra. Vたばかり：Người nói cảm giác sự việc vừa mới xảy ra, không liên quan tới thời gian thực tế xảy ra của sự việc. Thường được dùng kết hợp với cấu trúc: Vたばかりなのに、～ Cho dù vừa mới V nhưng mà ~ Vたばかりなので、～ Vì vừa mới V nên ~', ex:[
    {j:'田中さんは 結婚していますか。', k:'たなかさんは けっこんしていますか。', v:'Tanaka đã kết hôn chưa?'},
    {j:'ええ、去年 結婚したばかりです。', k:'ええ、きょねん けっこんしたばかりです。', v:'Rồi, vừa mới kết hôn hồi năm ngoái.'},
    {j:'田中さんは 離婚したのを 知っていますか。', k:'たなかさんは りこんしたのを しっていますか。', v:'Có biết chuyện Tanaka đã li hôn không?'},
    {j:'いいえ、知りませんでした。結婚したばかりなのに、。。。', k:'いいえ、しりませんでした。けっこんしたばかりなのに、。。。', v:'Không, không biết gì cả. Mới vừa kết hôn thế mà…'}
  ]},
  {p:'～はず', d:'Chắc chắn là ~ — ～はず：Chắc chắn là ~ Phán đoán chắc chắn một việc gì đó xảy ra dựa trên căn cứ nào đó.', ex:[
    {j:'カリナさんは 絵が 上手ですか。', k:'カリナさんは えが じょうずですか。', v:'Karina giỏi vẽ tranh không?'},
    {j:'美術を 勉強していますから 上手なはずです。', k:'びじゅつを べんきょうしていますから じょうずなはずです。', v:'Vì cô ấy đang học mỹ thuật nên chắc chắn là giỏi rồi.'},
    {j:'書類は 速達で だしましたから、あした 着くはずです。', k:'しょるいは そくたつで だしましたから、あした つくはずです。', v:'Vì đã gửi hồ sơ bằng chuyển phát nhanh nên chắc chắn là ngày mai sẽ đến.'}
  ]}
],

47: [
  {p:'～そうです', d:'Nghe nói ~ — Truyền lại thông tin mà người nói biết mà không thêm ý kiến cá nhân vào. Khi muốn nói rõ nguồn thông tin thì thêm ～によると、ở đầu câu. Nによると： Theo như ~ ～そうです： Nghe nói ~', ex:[
    {j:'天気予報によると あしたは あめが 降るそうです。', k:'てんきよほうによると あしたは あめが ふるそうです。', v:'Theo như dự báo thời tiết thì nghe nói là ngày mai trời sẽ mưa.'},
    {j:'どうして あの二人は 別れたんですか。', k:'どうして あのふたりは わかれたんですか。', v:'Tại sao hai người đó chia tay vậy?'},
    {j:'考え方が 違ったそうですから。', k:'かんがえかたが ちがったそうですから。', v:'Nghe nói là vì cách suy nghĩ của họ khác nhau.'}
  ]},
  {p:'～ようです', d:'Dường như ~ — Trình bày suy đoán của người nói về thực tế tình huống đó. Thường dùng kèm với どうも (có vẻ như).', ex:[
    {j:'人が 集まっていますね。', k:'ひとが あつまっていますね。', v:'Nhiều người tụ tập quá ha.'},
    {j:'ええ。事故のようです。', k:'ええ。じこのようです。', v:'Ừ, hình như là có tai nạn.'},
    {j:'なかなか 返事が ないんです。だれも いないようです。', k:'なかなか へんじが ないんです。だれも いないようです。', v:'Mãi mà cũng không có tiếng trả lời. Hình như là không có ai cả.'}
  ]},
  {p:'～Nがする', d:'Có ~ — ～Nがする : Có (mùi, vị, âm thanh, tiếng nói …)', ex:[
    {j:'変な音が しますね。どこか 壊れたようです。', k:'へんなおとが しますね。どこか こわれたようです。', v:'Có tiếng động kỳ nhỉ. Hình như là bị hư ở đâu đó rồi.'},
    {j:'変な味が します。このミルクは 古いようです。', k:'へんなあじが します。このミルクは ふるいようです。', v:'Có vị rất kỳ. Hình như sữa này cũ quá rồi.'}
  ]}
],

48: [
  {p:'V使役形', d:'Sai / bắt / phân công / để / cho ~', ex:[
    {j:'お母さんは 娘さんを 寝かせます', k:'おかあさんは むすめさんを ねかせます', v:'Mẹ bắt con gái đi ngủ.'},
    {j:'私は 妹を 笑わせました。', k:'わたしは いもうとを わらわせました。', v:'Tôi khiến cho em gái cười.'},
    {j:'父は 私に 魚を 食べさせます。', k:'ちちは わたしに さかなを たべさせます。', v:'Cha bắt tôi ăn cá.'},
    {j:'私は 子供に 部屋を 掃除させます。', k:'わたしは こどもに へやを そうじさせます。', v:'Tôi bắt con dọn dẹp phòng.'}
  ]},
  {p:'～V使役形て いただけませんか', d:'Làm ơn cho phép tôi ~ — Xin phép được làm một việc gì đó một cách lịch sự. Mẫu câu trong khung được xếp theo mức độ lịch sự tăng dần.', ex:[
    {j:'部長、来週 友達が 結婚するんですが、二日間、休ませて いただけませんか。', k:'ぶちょう、らいしゅう ともだちが けっこんするんですが、ふつかかん、やすませて いただけませんか。', v:'Trưởng phòng ơi, tuần sau bạn của tôi kết hôn, có thể nào cho phép tôi nghỉ 2 ngày có được không?'},
    {j:'そうですか。いいですよ。', v:'Vậy à. Được rồi.'},
    {j:'すみません。しばらく ここに 車を 止めさせていただけませんか。荷物を 降ろしますので。', k:'すみません。しばらく ここに くるまを とめさせていただけませんか。にもつを おろしますので。', v:'Xin lỗi, Có thể cho phép tôi dừng xe ở đây một chút có được không? Là vì tôi bốc dỡ hành lí xuống.'},
    {j:'いいですよ。', v:'Được chứ.'}
  ]}
],

49: [
  {p:'Tôn Kính ngữ (尊敬語）', d:'Cấu trúc: Tôn Kính ngữ (尊敬語）： có 3 cách sử dụng: Cách 1: Chia Động từ sang Thể Bị Động: — ＊Tôn kính ngữ (尊敬語）： Cách 3 mang ý lịch sự hơn cách 2, cách 2 mang ý lịch sự hơn cách 1. Vì vậy cách 3 thường được ưu tiên sử dụng, đối với các động từ không chia được theo cách 3 thì chúng ta sẽ chia sang cách 2 rồi đến cách 1. Khi dùng “Tôn kính ngữ” chúng ta chú ý là động từ là hành động hoặc trạng thái của người mình cần tôn kính, không phải là hành động của bản thân mình. Ngoài động từ thì một số danh từ, tính từ, phó từ cũng có thể trở thành “Tôn kính ngữ” theo cách sau: お thường dùng dùng với các từ thuần Nhật ご thường dùng với các từ có nguồn gốc từ Trung Quốc', ex:[
    {j:'社長、この本は 読まれましたか。', k:'しゃちょう、このほんは よまれましたか。', v:'Giám đốc đã đọc cuốn sách này chưa?'},
    {j:'ええ、もう 読みました。', k:'ええ、もう よみました。', v:'Rồi, đã đọc rồi.'},
    {j:'きのうの会議に 出られましたか。', k:'きのうのかいぎに でられましたか。', v:'Ông có dự buổi họp ngày hôm qua không?'},
    {j:'はい、出ました。', k:'はい、でました。', v:'Có, tôi có dự.'},
    {j:'先生、いつ 新しいパソコンを お買いになりましたか。', k:'せんせい、いつ あたらしいパソコンを おかいになりましたか。', v:'Thầy mua máy tính mới khi nào vậy?'},
    {j:'先週 買いました。', k:'せんしゅう かいました。', v:'Mua hồi tuần trước.'}
  ]},
  {p:'Tôn kính ngữ của Vてください', d:'Là tôn kính ngữ của Vてください', ex:[
    {j:'係りの者にて来ますので、ちょっと お待ちください。', k:'かかりのものにてきますので、ちょっと おまちください。', v:'Tôi sẽ đi hỏi quản lí rồi quay lại nên xin hãy chờ ở đây một chút nhé.'},
    {j:'この ボールペンを お使いください。', k:'この ボールペンを おつかいください。', v:'Xin hãy sử dụng bút này.'}
  ]},
  {p:'～ます trong cách nói lịch sự', d:'Cấu trúc: ～まして、～ ～ますので、～ ～ますのに、～ — Trong văn nói, đôi khi dùng động từ theo kiểu: Vますまして、Vますので、Vますのに… để thể hiện sự trang trọng, lịch sự hơn trong lời nói.', ex:[
    {j:'ハンスが ゆうべ 熱を 出しまして、けさも まだ 下がらないんです。', k:'ハンスが ゆうべ ねつを だしまして、けさも まだ さがらないんです。', v:'Tối qua Hans bị sốt, đến sáng nay nhiệt độ vẫn chưa giảm.'},
    {j:'きょうは 学校を 休ませますので、先生に よろしく お伝えください。', k:'きょうは がっこうを やすませますので、せんせいに よろしく おつたえください。', v:'Hôm nay tôi cho cháu nghỉ học, nhờ anh/chị hãy nói lại với giáo viên giúp.'}
  ]}
],

50: [
  {p:'Khiêm nhường ngữ (謙譲語）', d:'Khiêm nhường ngữ (謙譲語）： Cách 2 mang ý lịch sự hơn cách 1 vì vậy cách 2 thường được ưu tiên sử dụng, đối với các động từ không chia được theo cách 2 thì chúng ta sẽ chia sang cách 1. Khi dùng “Khiêm nhường ngữ” chúng ta chú ý động từ là hành động hoặc trạng thái của bản thân mình, không phải là hành động của đối phương.', ex:[
    {j:'重そうですね。お持ちしましょうか。', k:'おもそうですね。おもちしましょうか。', v:'Có vẻ nặng nhỉ. Để tôi cầm giúp cho nhé.'},
    {j:'すみません。お願いします。', k:'すみません。おねがいします。', v:'Xin lỗi, phiền anh giúp.'},
    {j:'私が 今日の予定を ごせつめいします。', k:'わたしが きょうのよていを ごせつめいします。', v:'Tôi sẽ trình bày kế hoạch của ngày hôm nay.'},
    {j:'会社の中を ご 案内 いたします。', k:'かいしゃのなかを ご あんない いたします。', v:'Tôi sẽ hướng dẫn trong công ty.'},
    {j:'① ちょっと 切符を はいけんします。', k:'① ちょっと きっぷを はいけんします。', v:'Tôi sẽ xem vé một chút.'},
    {j:'ご家族は どちらに いらっしゃいますか。', k:'ごかぞくは どちらに いらっしゃいますか。', v:'Gia đình ông sống ở đâu?'}
  ]},
  {p:'Lịch sự ngữ (丁寧語）', d:'1.', ex:[
    {j:'電話は 階段の 横に ございます。', k:'でんわは かいだんの よこに ございます。', v:'Điện thoại ở bên cạnh cầu thang.'},
    {j:'このパンフレットを いただいても よろしいでしょうか。', v:'Tôi nhận tờ rơi này có được không?'}
  ]}
]
};
