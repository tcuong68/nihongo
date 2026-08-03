/* Ngữ pháp và câu ví dụ theo từng bài Minna no Nihongo.
   p = mẫu câu, d = giải thích, ex = ví dụ [{ j: câu Nhật, k: cách đọc kana, v: nghĩa }]
   Các câu ví dụ cũng được dùng làm ngữ liệu cho phần Luyện nghe. */

const GRAMMAR = {
1: [
  {p:'Nは Nです', d:'Khẳng định "A là B". は đọc là "wa".', ex:[
    {j:'わたしは マイク・ミラーです。', v:'Tôi là Mike Miller.'},
    {j:'サントスさんは 学生では ありません。', k:'サントスさんは がくせいでは ありません。', v:'Anh Santos không phải là sinh viên.'}]},
  {p:'Nは Nですか', d:'Câu hỏi, thêm か ở cuối câu.', ex:[
    {j:'ミラーさんは 会社員ですか。', k:'ミラーさんは かいしゃいんですか。', v:'Anh Miller là nhân viên công ty phải không?'}]},
  {p:'Nも', d:'"cũng" — dùng thay cho は khi trùng thông tin.', ex:[
    {j:'わたしも 日本人です。', k:'わたしも にほんじんです。', v:'Tôi cũng là người Nhật.'}]}
],
2: [
  {p:'これ／それ／あれは Nです', d:'Chỉ đồ vật theo khoảng cách với người nói và người nghe.', ex:[
    {j:'これは 辞書です。', k:'これは じしょです。', v:'Đây là quyển từ điển.'},
    {j:'それは 何ですか。', k:'それは なんですか。', v:'Cái đó là cái gì?'}]},
  {p:'この／その／あの N', d:'Đứng trước danh từ để chỉ định.', ex:[
    {j:'この 本は わたしのです。', k:'この ほんは わたしのです。', v:'Quyển sách này là của tôi.'}]},
  {p:'Nの N', d:'の nối hai danh từ, chỉ sở hữu hoặc thuộc tính.', ex:[
    {j:'これは 日本語の 本です。', k:'これは にほんごの ほんです。', v:'Đây là sách tiếng Nhật.'}]}
],
3: [
  {p:'ここ／そこ／あそこは Nです', d:'Chỉ địa điểm.', ex:[
    {j:'ここは 食堂です。', k:'ここは しょくどうです。', v:'Đây là nhà ăn.'},
    {j:'トイレは どこですか。', v:'Nhà vệ sinh ở đâu?'}]},
  {p:'Nは Nです（vị trí）', d:'Nói vị trí của người/vật.', ex:[
    {j:'山田さんは 事務所です。', k:'やまださんは じむしょです。', v:'Anh Yamada đang ở văn phòng.'}]},
  {p:'いくらですか', d:'Hỏi giá tiền.', ex:[
    {j:'この 時計は いくらですか。', k:'この とけいは いくらですか。', v:'Cái đồng hồ này bao nhiêu tiền?'}]}
],
4: [
  {p:'今 ～時 ～分です', d:'Nói giờ.', ex:[
    {j:'今 7時 10分です。', k:'いま しちじ じゅっぷんです。', v:'Bây giờ là 7 giờ 10 phút.'}]},
  {p:'Vます／Vません／Vました／Vませんでした', d:'Chia thì hiện tại và quá khứ của động từ.', ex:[
    {j:'毎朝 6時に 起きます。', k:'まいあさ ろくじに おきます。', v:'Tôi thức dậy lúc 6 giờ mỗi sáng.'},
    {j:'きのう 働きませんでした。', k:'きのう はたらきませんでした。', v:'Hôm qua tôi đã không làm việc.'}]},
  {p:'～から ～まで', d:'Từ ~ đến ~ (thời gian, địa điểm).', ex:[
    {j:'銀行は 9時から 3時までです。', k:'ぎんこうは くじから さんじまでです。', v:'Ngân hàng mở từ 9 giờ đến 3 giờ.'}]}
],
5: [
  {p:'Nへ 行きます／来ます／帰ります', d:'へ (đọc là "e") chỉ hướng di chuyển.', ex:[
    {j:'あした 京都へ 行きます。', k:'あした きょうとへ いきます。', v:'Ngày mai tôi sẽ đi Kyoto.'}]},
  {p:'Nで 行きます', d:'で chỉ phương tiện.', ex:[
    {j:'電車で 会社へ 行きます。', k:'でんしゃで かいしゃへ いきます。', v:'Tôi đi làm bằng tàu điện.'}]},
  {p:'Nと Vます', d:'と chỉ người cùng thực hiện hành động.', ex:[
    {j:'友達と 日本へ 来ました。', k:'ともだちと にほんへ きました。', v:'Tôi đã đến Nhật cùng bạn.'}]}
],
6: [
  {p:'Nを Vます', d:'を đánh dấu tân ngữ trực tiếp.', ex:[
    {j:'毎朝 パンを 食べます。', k:'まいあさ パンを たべます。', v:'Mỗi sáng tôi ăn bánh mì.'}]},
  {p:'Nで Vます（nơi chốn）', d:'で chỉ nơi diễn ra hành động.', ex:[
    {j:'食堂で 昼ご飯を 食べます。', k:'しょくどうで ひるごはんを たべます。', v:'Tôi ăn trưa ở nhà ăn.'}]},
  {p:'いっしょに ～ませんか', d:'Rủ rê, mời mọc.', ex:[
    {j:'いっしょに ビールを 飲みませんか。', k:'いっしょに ビールを のみませんか。', v:'Cùng uống bia nhé?'}]}
],
7: [
  {p:'Nで Vます（công cụ）', d:'で chỉ phương tiện, dụng cụ.', ex:[
    {j:'はしで ご飯を 食べます。', k:'はしで ごはんを たべます。', v:'Tôi ăn cơm bằng đũa.'}]},
  {p:'Nに Nを あげます／もらいます', d:'Cho và nhận đồ vật.', ex:[
    {j:'わたしは 山田さんに 花を あげました。', k:'わたしは やまださんに はなを あげました。', v:'Tôi đã tặng hoa cho chị Yamada.'},
    {j:'友達に 本を もらいました。', k:'ともだちに ほんを もらいました。', v:'Tôi đã nhận sách từ bạn.'}]},
  {p:'もう Vましたか', d:'Hỏi đã làm xong việc gì chưa.', ex:[
    {j:'もう 昼ご飯を 食べましたか。', k:'もう ひるごはんを たべましたか。', v:'Bạn đã ăn trưa chưa?'}]}
],
8: [
  {p:'Nは いA です', d:'Tính từ đuôi い làm vị ngữ. Phủ định: ～くないです.', ex:[
    {j:'この 本は おもしろいです。', k:'この ほんは おもしろいです。', v:'Quyển sách này thú vị.'},
    {j:'きょうは 暑くないです。', k:'きょうは あつくないです。', v:'Hôm nay không nóng.'}]},
  {p:'Nは なA です', d:'Tính từ đuôi な. Phủ định: ～じゃ ありません.', ex:[
    {j:'この 町は 静かです。', k:'この まちは しずかです。', v:'Thị trấn này yên tĩnh.'}]},
  {p:'いA い＋N ／ なA な＋N', d:'Tính từ bổ nghĩa cho danh từ.', ex:[
    {j:'桜は きれいな 花です。', k:'さくらは きれいな はなです。', v:'Hoa anh đào là loài hoa đẹp.'}]}
],
9: [
  {p:'Nが 好きです／上手です', d:'Diễn tả sở thích, khả năng — đối tượng dùng が.', ex:[
    {j:'わたしは 日本の 音楽が 好きです。', k:'わたしは にほんの おんがくが すきです。', v:'Tôi thích nhạc Nhật.'}]},
  {p:'Nが あります／わかります', d:'Có, hiểu — dùng が.', ex:[
    {j:'きょうは 時間が ありません。', k:'きょうは じかんが ありません。', v:'Hôm nay tôi không có thời gian.'}]},
  {p:'～から、～', d:'Nêu lý do.', ex:[
    {j:'時間が ありませんから、行きません。', k:'じかんが ありませんから、いきません。', v:'Vì không có thời gian nên tôi không đi.'}]}
],
10: [
  {p:'Nが あります／います', d:'あります cho đồ vật, います cho người và động vật.', ex:[
    {j:'あそこに コンビニが あります。', v:'Ở đằng kia có cửa hàng tiện lợi.'},
    {j:'部屋に 猫が います。', k:'へやに ねこが います。', v:'Trong phòng có con mèo.'}]},
  {p:'Nは Nの 上／下／中に あります', d:'Nói vị trí cụ thể.', ex:[
    {j:'本は 机の 上に あります。', k:'ほんは つくえの うえに あります。', v:'Quyển sách ở trên bàn.'}]}
],
11: [
  {p:'Nを ～つ／～個 買います', d:'Số đếm đứng sau tân ngữ, trước động từ.', ex:[
    {j:'りんごを 三つ 買いました。', k:'りんごを みっつ かいました。', v:'Tôi đã mua ba quả táo.'}]},
  {p:'～に ～回 Vます', d:'Tần suất.', ex:[
    {j:'1週間に 2回 テニスを します。', k:'いっしゅうかんに にかい テニスを します。', v:'Tôi chơi quần vợt 2 lần một tuần.'}]},
  {p:'どのくらい かかりますか', d:'Hỏi mất bao lâu.', ex:[
    {j:'駅まで どのくらい かかりますか。', k:'えきまで どのくらい かかりますか。', v:'Đến ga mất khoảng bao lâu?'}]}
],
12: [
  {p:'Nでした／いA かったです', d:'Thì quá khứ của tính từ và danh từ.', ex:[
    {j:'きのうは 雨でした。', k:'きのうは あめでした。', v:'Hôm qua trời mưa.'},
    {j:'旅行は 楽しかったです。', k:'りょこうは たのしかったです。', v:'Chuyến du lịch đã rất vui.'}]},
  {p:'Nより Nの ほうが ～です', d:'So sánh hơn giữa hai đối tượng.', ex:[
    {j:'東京は 大阪より 大きいです。', k:'とうきょうは おおさかより おおきいです。', v:'Tokyo lớn hơn Osaka.'}]},
  {p:'Nの 中で Nが いちばん ～です', d:'So sánh nhất.', ex:[
    {j:'果物の 中で みかんが いちばん 好きです。', k:'くだものの なかで みかんが いちばん すきです。', v:'Trong các loại trái cây tôi thích quýt nhất.'}]}
],
13: [
  {p:'Nが ほしいです', d:'Muốn có cái gì đó.', ex:[
    {j:'新しい パソコンが ほしいです。', k:'あたらしい パソコンが ほしいです。', v:'Tôi muốn có máy tính mới.'}]},
  {p:'Vたいです', d:'Muốn làm gì đó. Bỏ ます thêm たい.', ex:[
    {j:'日本へ 行きたいです。', k:'にほんへ いきたいです。', v:'Tôi muốn đi Nhật.'}]},
  {p:'Nへ Vに 行きます', d:'Đi đâu để làm gì.', ex:[
    {j:'デパートへ 買い物に 行きます。', k:'デパートへ かいものに いきます。', v:'Tôi đi đến trung tâm mua sắm để mua đồ.'}]}
],
14: [
  {p:'Vて ください', d:'Yêu cầu, nhờ vả lịch sự.', ex:[
    {j:'ちょっと 待って ください。', k:'ちょっと まって ください。', v:'Xin hãy đợi một chút.'},
    {j:'ゆっくり 話して ください。', k:'ゆっくり はなして ください。', v:'Xin hãy nói chậm lại.'}]},
  {p:'Vて います（đang）', d:'Hành động đang tiếp diễn.', ex:[
    {j:'今 雨が 降って います。', k:'いま あめが ふって います。', v:'Bây giờ trời đang mưa.'}]},
  {p:'Vましょうか', d:'Đề nghị giúp đỡ.', ex:[
    {j:'手伝いましょうか。', k:'てつだいましょうか。', v:'Để tôi giúp một tay nhé?'}]}
],
15: [
  {p:'Vても いいです', d:'Cho phép làm gì.', ex:[
    {j:'写真を 撮っても いいですか。', k:'しゃしんを とっても いいですか。', v:'Tôi chụp ảnh có được không?'}]},
  {p:'Vては いけません', d:'Cấm làm gì.', ex:[
    {j:'ここで たばこを 吸っては いけません。', k:'ここで たばこを すっては いけません。', v:'Không được hút thuốc ở đây.'}]},
  {p:'Vて います（trạng thái）', d:'Trạng thái, nghề nghiệp, thói quen.', ex:[
    {j:'大阪に 住んで います。', k:'おおさかに すんで います。', v:'Tôi đang sống ở Osaka.'}]}
],
16: [
  {p:'Vて、Vて、～', d:'Nối các hành động theo trình tự.', ex:[
    {j:'朝 起きて、シャワーを 浴びて、朝ご飯を 食べます。', k:'あさ おきて、シャワーを あびて、あさごはんを たべます。', v:'Sáng tôi dậy, tắm rồi ăn sáng.'}]},
  {p:'Vて から、～', d:'Sau khi làm A thì làm B.', ex:[
    {j:'仕事が 終わってから、映画を 見ます。', k:'しごとが おわってから、えいがを みます。', v:'Sau khi xong việc tôi sẽ xem phim.'}]},
  {p:'Nは Nが いA です', d:'Miêu tả đặc điểm bộ phận.', ex:[
    {j:'ミラーさんは 背が 高いです。', k:'ミラーさんは せが たかいです。', v:'Anh Miller cao.'}]}
],
17: [
  {p:'Vない で ください', d:'Đề nghị đừng làm gì.', ex:[
    {j:'ここに 車を 止めないで ください。', k:'ここに くるまを とめないで ください。', v:'Xin đừng đỗ xe ở đây.'}]},
  {p:'Vなければ なりません', d:'Bắt buộc phải làm.', ex:[
    {j:'あした 病院へ 行かなければ なりません。', k:'あした びょういんへ いかなければ なりません。', v:'Ngày mai tôi phải đi bệnh viện.'}]},
  {p:'Vなくても いいです', d:'Không cần làm cũng được.', ex:[
    {j:'あしたは 来なくても いいです。', k:'あしたは こなくても いいです。', v:'Ngày mai bạn không cần đến cũng được.'}]}
],
18: [
  {p:'Vること が できます', d:'Có khả năng làm gì.', ex:[
    {j:'わたしは 漢字を 読む ことが できます。', k:'わたしは かんじを よむ ことが できます。', v:'Tôi có thể đọc được chữ Hán.'}]},
  {p:'しゅみは Vること です', d:'Nói về sở thích.', ex:[
    {j:'趣味は 音楽を 聞く ことです。', k:'しゅみは おんがくを きく ことです。', v:'Sở thích của tôi là nghe nhạc.'}]},
  {p:'Vる まえに、～', d:'Trước khi làm gì.', ex:[
    {j:'寝る まえに、本を 読みます。', k:'ねる まえに、ほんを よみます。', v:'Trước khi ngủ tôi đọc sách.'}]}
],
19: [
  {p:'Vた ことが あります', d:'Đã từng làm gì.', ex:[
    {j:'富士山に 登った ことが あります。', k:'ふじさんに のぼった ことが あります。', v:'Tôi đã từng leo núi Phú Sĩ.'}]},
  {p:'Vたり Vたり します', d:'Liệt kê vài hành động tiêu biểu.', ex:[
    {j:'日曜日は 洗濯したり 掃除したり します。', k:'にちようびは せんたくしたり そうじしたり します。', v:'Chủ nhật tôi giặt đồ rồi dọn dẹp.'}]},
  {p:'いA く／なA に なります', d:'Sự thay đổi trạng thái.', ex:[
    {j:'だんだん 寒く なりました。', k:'だんだん さむく なりました。', v:'Trời đã lạnh dần.'}]}
],
20: [
  {p:'Thể thông thường (普通形)', d:'Dùng với bạn bè, người thân. だ thay cho です.', ex:[
    {j:'あした 京都へ 行く。', k:'あした きょうとへ いく。', v:'Ngày mai tớ đi Kyoto.'},
    {j:'この 料理は おいしくない。', k:'この りょうりは おいしくない。', v:'Món này không ngon.'}]},
  {p:'～？（câu hỏi thân mật）', d:'Bỏ か, lên giọng cuối câu.', ex:[
    {j:'いっしょに 行かない？', k:'いっしょに いかない？', v:'Đi cùng không?'}]}
],
21: [
  {p:'～と 思います', d:'Nêu ý kiến, phỏng đoán. Trước と dùng thể thông thường.', ex:[
    {j:'あしたは 雨が 降ると 思います。', k:'あしたは あめが ふると おもいます。', v:'Tôi nghĩ ngày mai trời sẽ mưa.'}]},
  {p:'「～」と 言います', d:'Trích dẫn lời nói.', ex:[
    {j:'田中さんは 「あした 休みます」と 言いました。', k:'たなかさんは 「あした やすみます」と いいました。', v:'Anh Tanaka nói "Ngày mai tôi nghỉ".'}]},
  {p:'～でしょう？', d:'Xác nhận, tìm sự đồng tình.', ex:[
    {j:'この 映画は おもしろいでしょう？', k:'この えいがは おもしろいでしょう？', v:'Bộ phim này thú vị đúng không?'}]}
],
22: [
  {p:'Mệnh đề bổ nghĩa cho danh từ', d:'Dùng thể thông thường đứng trước danh từ.', ex:[
    {j:'これは 母が 作った 料理です。', k:'これは ははが つくった りょうりです。', v:'Đây là món ăn mẹ tôi đã nấu.'},
    {j:'めがねを かけて いる 人は 誰ですか。', k:'めがねを かけて いる ひとは だれですか。', v:'Người đeo kính kia là ai vậy?'}]},
  {p:'Nが 生まれた ところ', d:'Mệnh đề trong câu dùng が thay cho は.', ex:[
    {j:'わたしが 生まれた 町は 静かです。', k:'わたしが うまれた まちは しずかです。', v:'Thị trấn nơi tôi sinh ra rất yên tĩnh.'}]}
],
23: [
  {p:'～とき、～', d:'Khi ~ thì ~.', ex:[
    {j:'日本へ 来たとき、日本語が わかりませんでした。', k:'にほんへ きたとき、にほんごが わかりませんでした。', v:'Khi mới đến Nhật tôi đã không hiểu tiếng Nhật.'}]},
  {p:'Vると、～', d:'Hễ làm A thì B xảy ra (đương nhiên, tự động).', ex:[
    {j:'この ボタンを 押すと、切符が 出ます。', k:'この ボタンを おすと、きっぷが でます。', v:'Bấm nút này thì vé sẽ ra.'}]}
],
24: [
  {p:'Vて あげます／もらいます／くれます', d:'Cho và nhận hành động.', ex:[
    {j:'友達に 日本語を 教えて あげました。', k:'ともだちに にほんごを おしえて あげました。', v:'Tôi đã dạy tiếng Nhật cho bạn.'},
    {j:'山田さんが 手伝って くれました。', k:'やまださんが てつだって くれました。', v:'Anh Yamada đã giúp tôi.'}]},
  {p:'Vて くれませんか', d:'Nhờ vả lịch sự.', ex:[
    {j:'ちょっと 手伝って くれませんか。', k:'ちょっと てつだって くれませんか。', v:'Bạn giúp tôi một chút được không?'}]}
],
25: [
  {p:'Vたら、～', d:'Nếu / sau khi ~ thì ~.', ex:[
    {j:'お金が あったら、旅行します。', k:'おかねが あったら、りょこうします。', v:'Nếu có tiền tôi sẽ đi du lịch.'}]},
  {p:'Vても、～', d:'Dù ~ đi nữa thì ~.', ex:[
    {j:'雨が 降っても、行きます。', k:'あめが ふっても、いきます。', v:'Dù trời mưa tôi vẫn đi.'}]}
],
26: [
  {p:'～んです', d:'Nhấn mạnh, giải thích lý do hoặc hỏi thông tin.', ex:[
    {j:'どうして 遅れたんですか。', k:'どうして おくれたんですか。', v:'Tại sao bạn lại đến muộn?'},
    {j:'頭が 痛いんです。', k:'あたまが いたいんです。', v:'Là vì tôi bị đau đầu.'}]},
  {p:'～んですが、～', d:'Mở đầu câu chuyện trước khi nhờ vả.', ex:[
    {j:'日本語を 習いたいんですが、いい 学校を 知りませんか。', k:'にほんごを ならいたいんですが、いい がっこうを しりませんか。', v:'Tôi muốn học tiếng Nhật, bạn có biết trường nào tốt không?'}]}
],
27: [
  {p:'Thể khả năng (可能形)', d:'書く→書ける, 食べる→食べられる, する→できる, 来る→来られる.', ex:[
    {j:'わたしは 日本語が 話せます。', k:'わたしは にほんごが はなせます。', v:'Tôi có thể nói tiếng Nhật.'},
    {j:'ここから 富士山が 見えます。', k:'ここから ふじさんが みえます。', v:'Từ đây có thể nhìn thấy núi Phú Sĩ.'}]},
  {p:'しか ～ません', d:'Chỉ có ~ (kèm phủ định).', ex:[
    {j:'千円しか ありません。', k:'せんえんしか ありません。', v:'Tôi chỉ có 1000 yên thôi.'}]}
],
28: [
  {p:'Vながら、～', d:'Làm hai việc cùng lúc.', ex:[
    {j:'音楽を 聞きながら、勉強します。', k:'おんがくを ききながら、べんきょうします。', v:'Tôi vừa nghe nhạc vừa học.'}]},
  {p:'Vて います（thói quen）', d:'Việc lặp đi lặp lại, thói quen lâu dài.', ex:[
    {j:'毎朝 ジョギングを して います。', k:'まいあさ ジョギングを して います。', v:'Sáng nào tôi cũng chạy bộ.'}]},
  {p:'～し、～し、～', d:'Liệt kê nhiều lý do.', ex:[
    {j:'この 店は 安いし、おいしいし、人気が あります。', k:'この みせは やすいし、おいしいし、にんきが あります。', v:'Quán này vừa rẻ vừa ngon nên được ưa chuộng.'}]}
],
29: [
  {p:'Tự động từ ＋ て います', d:'Diễn tả trạng thái kết quả.', ex:[
    {j:'窓が 開いて います。', k:'まどが あいて います。', v:'Cửa sổ đang mở.'},
    {j:'電気が 消えて います。', k:'でんきが きえて います。', v:'Đèn đang tắt.'}]},
  {p:'Vて しまいました', d:'Hoàn thành hoặc tiếc nuối.', ex:[
    {j:'財布を 忘れて しまいました。', k:'さいふを わすれて しまいました。', v:'Tôi lỡ quên mất ví rồi.'}]}
],
30: [
  {p:'Vて あります', d:'Trạng thái do ai đó cố ý tạo ra.', ex:[
    {j:'壁に 地図が 貼って あります。', k:'かべに ちずが はって あります。', v:'Trên tường có dán bản đồ.'}]},
  {p:'Vて おきます', d:'Làm trước để chuẩn bị.', ex:[
    {j:'旅行の 前に 切符を 買って おきます。', k:'りょこうの まえに きっぷを かって おきます。', v:'Tôi mua vé trước khi đi du lịch.'}]}
],
31: [
  {p:'Thể ý chí (意向形)', d:'行きます→行こう, 食べます→食べよう.', ex:[
    {j:'いっしょに 帰ろう。', k:'いっしょに かえろう。', v:'Cùng về thôi.'}]},
  {p:'Vよう と 思って います', d:'Dự định làm gì.', ex:[
    {j:'来年 留学しようと 思って います。', k:'らいねん りゅうがくしようと おもって います。', v:'Tôi đang định năm sau đi du học.'}]},
  {p:'Vる つもりです', d:'Ý định rõ ràng.', ex:[
    {j:'国へ 帰る つもりです。', k:'くにへ かえる つもりです。', v:'Tôi định về nước.'}]}
],
32: [
  {p:'Vた／Vない ほうが いいです', d:'Khuyên nên / không nên làm.', ex:[
    {j:'薬を 飲んだ ほうが いいですよ。', k:'くすりを のんだ ほうが いいですよ。', v:'Bạn nên uống thuốc đấy.'}]},
  {p:'～でしょう', d:'Phỏng đoán.', ex:[
    {j:'あしたは 晴れるでしょう。', k:'あしたは はれるでしょう。', v:'Ngày mai chắc trời sẽ nắng.'}]},
  {p:'～かもしれません', d:'Có thể, có khả năng.', ex:[
    {j:'約束の 時間に 遅れるかもしれません。', k:'やくそくの じかんに おくれるかもしれません。', v:'Có thể tôi sẽ đến muộn giờ hẹn.'}]}
],
33: [
  {p:'Thể mệnh lệnh／cấm chỉ', d:'行け (hãy đi) / 行くな (cấm đi). Dùng trong biển báo, khẩu lệnh.', ex:[
    {j:'ここに 入るな。', k:'ここに はいるな。', v:'Cấm vào đây.'},
    {j:'早く 逃げろ。', k:'はやく にげろ。', v:'Chạy trốn nhanh lên!'}]},
  {p:'～と 書いて あります', d:'Diễn đạt nội dung ghi trên biển báo.', ex:[
    {j:'あの 紙に 「駐車禁止」と 書いて あります。', k:'あの かみに 「ちゅうしゃきんし」と かいて あります。', v:'Trên tờ giấy kia có ghi "Cấm đỗ xe".'}]}
],
34: [
  {p:'～とおりに、～', d:'Làm y như, theo đúng như.', ex:[
    {j:'説明書の とおりに 組み立てて ください。', k:'せつめいしょの とおりに くみたてて ください。', v:'Hãy lắp ráp theo đúng bản hướng dẫn.'}]},
  {p:'Vた あとで、～', d:'Sau khi làm gì đó.', ex:[
    {j:'食事の あとで 歯を 磨きます。', k:'しょくじの あとで はを みがきます。', v:'Sau bữa ăn tôi đánh răng.'}]},
  {p:'Vない で、～', d:'Làm gì mà không làm gì.', ex:[
    {j:'朝ご飯を 食べないで、学校へ 行きました。', k:'あさごはんを たべないで、がっこうへ いきました。', v:'Tôi đến trường mà không ăn sáng.'}]}
],
35: [
  {p:'Điều kiện thể ば', d:'行く→行けば, 安い→安ければ.', ex:[
    {j:'安ければ、買います。', k:'やすければ、かいます。', v:'Nếu rẻ thì tôi sẽ mua.'}]},
  {p:'～なら、～', d:'Nếu là ~ thì (nêu chủ đề).', ex:[
    {j:'温泉なら、箱根が いいですよ。', k:'おんせんなら、はこねが いいですよ。', v:'Nếu là suối nước nóng thì Hakone tốt đấy.'}]}
],
36: [
  {p:'～ように、～', d:'Nỗ lực để đạt được điều gì.', ex:[
    {j:'日本語が 話せるように、毎日 練習して います。', k:'にほんごが はなせるように、まいにち れんしゅうして います。', v:'Tôi luyện tập mỗi ngày để nói được tiếng Nhật.'}]},
  {p:'～ように なりました', d:'Đã trở nên có thể ~.', ex:[
    {j:'漢字が 読めるように なりました。', k:'かんじが よめるように なりました。', v:'Tôi đã đọc được chữ Hán rồi.'}]},
  {p:'～ように して います', d:'Cố gắng duy trì thói quen.', ex:[
    {j:'毎日 運動するように して います。', k:'まいにち うんどうするように して います。', v:'Tôi cố gắng tập thể dục mỗi ngày.'}]}
],
37: [
  {p:'Thể bị động (受身形)', d:'書く→書かれる, 食べる→食べられる.', ex:[
    {j:'先生に ほめられました。', k:'せんせいに ほめられました。', v:'Tôi đã được thầy khen.'},
    {j:'この お寺は 300年前に 建てられました。', k:'この おてらは さんびゃくねんまえに たてられました。', v:'Ngôi chùa này được xây cách đây 300 năm.'}]},
  {p:'Nに Nを 盗まれました', d:'Bị động chỉ sự thiệt hại.', ex:[
    {j:'どろぼうに 財布を 盗まれました。', k:'どろぼうに さいふを ぬすまれました。', v:'Tôi bị kẻ trộm lấy mất ví.'}]}
],
38: [
  {p:'Vる のが 好きです', d:'Danh từ hóa động từ bằng の.', ex:[
    {j:'絵を かくのが 好きです。', k:'えを かくのが すきです。', v:'Tôi thích vẽ tranh.'}]},
  {p:'Vる のを 忘れました', d:'Quên làm gì.', ex:[
    {j:'鍵を かけるのを 忘れました。', k:'かぎを かけるのを わすれました。', v:'Tôi quên khóa cửa mất rồi.'}]},
  {p:'Nは Vる のが 難しいです', d:'Đánh giá về hành động.', ex:[
    {j:'漢字を 覚えるのは 難しいです。', k:'かんじを おぼえるのは むずかしいです。', v:'Nhớ chữ Hán thì khó.'}]}
],
39: [
  {p:'Vて、～（nguyên nhân）', d:'Thể て chỉ nguyên nhân.', ex:[
    {j:'ニュースを 聞いて、びっくりしました。', k:'ニュースを きいて、びっくりしました。', v:'Nghe tin tôi đã rất bất ngờ.'}]},
  {p:'～ので、～', d:'Lý do khách quan, nhẹ nhàng hơn から.', ex:[
    {j:'用事が あるので、先に 帰ります。', k:'ようじが あるので、さきに かえります。', v:'Vì có việc nên tôi về trước.'}]}
],
40: [
  {p:'～か どうか、～', d:'Có ~ hay không.', ex:[
    {j:'彼が 来るか どうか わかりません。', k:'かれが くるか どうか わかりません。', v:'Tôi không biết anh ấy có đến hay không.'}]},
  {p:'Vて みます', d:'Thử làm gì đó.', ex:[
    {j:'この 服を 着て みても いいですか。', k:'この ふくを きて みても いいですか。', v:'Tôi mặc thử bộ này được không?'}]}
],
41: [
  {p:'Vて いただきます／くださいます', d:'Kính ngữ cho việc nhận hành động.', ex:[
    {j:'先生に 手紙を 直して いただきました。', k:'せんせいに てがみを なおして いただきました。', v:'Tôi được thầy sửa giúp lá thư.'},
    {j:'部長が 駅まで 送って くださいました。', k:'ぶちょうが えきまで おくって くださいました。', v:'Trưởng phòng đã đưa tôi ra ga.'}]},
  {p:'Vて やります', d:'Làm cho người dưới hoặc động vật, cây cối.', ex:[
    {j:'犬を 散歩に 連れて 行って やります。', k:'いぬを さんぽに つれて いって やります。', v:'Tôi dắt chó đi dạo.'}]}
],
42: [
  {p:'Nの ために、～', d:'Vì mục đích, vì lợi ích của ai.', ex:[
    {j:'家族の ために 働いて います。', k:'かぞくの ために はたらいて います。', v:'Tôi làm việc vì gia đình.'}]},
  {p:'Vる のに 使います', d:'Dùng để làm gì.', ex:[
    {j:'この はさみは 紙を 切るのに 使います。', k:'この はさみは かみを きるのに つかいます。', v:'Cái kéo này dùng để cắt giấy.'}]}
],
43: [
  {p:'～そうです（trông có vẻ）', d:'Phán đoán từ vẻ bề ngoài. おいしい→おいしそう.', ex:[
    {j:'この ケーキは おいしそうですね。', v:'Cái bánh này trông ngon nhỉ.'},
    {j:'今にも 雨が 降りそうです。', k:'いまにも あめが ふりそうです。', v:'Trời sắp mưa đến nơi rồi.'}]},
  {p:'Vて きます', d:'Đi làm gì rồi quay lại.', ex:[
    {j:'ちょっと 買い物して きます。', k:'ちょっと かいものして きます。', v:'Tôi đi mua đồ một lát rồi về.'}]}
],
44: [
  {p:'～すぎます', d:'Quá mức. 食べる→食べすぎる, 高い→高すぎる.', ex:[
    {j:'ゆうべ 飲みすぎました。', k:'ゆうべ のみすぎました。', v:'Tối qua tôi đã uống quá nhiều.'}]},
  {p:'Vやすい／Vにくい', d:'Dễ / khó làm gì.', ex:[
    {j:'この 本は 読みやすいです。', k:'この ほんは よみやすいです。', v:'Quyển sách này dễ đọc.'}]},
  {p:'いA く／なA に します', d:'Làm cho trở nên ~.', ex:[
    {j:'髪を 短く して ください。', k:'かみを みじかく して ください。', v:'Xin cắt tóc ngắn giúp tôi.'}]}
],
45: [
  {p:'～場合は、～', d:'Trong trường hợp ~.', ex:[
    {j:'故障の 場合は、ここに 電話して ください。', k:'こしょうの ばあいは、ここに でんわして ください。', v:'Trường hợp hỏng hóc, hãy gọi vào số này.'}]},
  {p:'～のに、～', d:'Mặc dù ~ nhưng ~ (bất mãn, ngoài dự đoán).', ex:[
    {j:'約束したのに、彼は 来ませんでした。', k:'やくそくしたのに、かれは きませんでした。', v:'Đã hẹn rồi vậy mà anh ấy không đến.'}]}
],
46: [
  {p:'Vる／Vて いる／Vた ところです', d:'Sắp / đang / vừa mới làm.', ex:[
    {j:'ちょうど 今 出かける ところです。', k:'ちょうど いま でかける ところです。', v:'Tôi vừa đúng lúc sắp ra ngoài.'},
    {j:'今 食べた ところです。', k:'いま たべた ところです。', v:'Tôi vừa mới ăn xong.'}]},
  {p:'Vた ばかりです', d:'Vừa mới ~ (cảm giác chủ quan).', ex:[
    {j:'日本へ 来た ばかりです。', k:'にほんへ きた ばかりです。', v:'Tôi mới đến Nhật thôi.'}]}
],
47: [
  {p:'～そうです（nghe nói）', d:'Truyền đạt thông tin nghe được. Trước そう dùng thể thông thường.', ex:[
    {j:'天気予報に よると、あしたは 寒く なるそうです。', k:'てんきよほうに よると、あしたは さむく なるそうです。', v:'Theo dự báo thời tiết, ngày mai trời sẽ lạnh.'}]},
  {p:'～ようです', d:'Phỏng đoán dựa trên căn cứ.', ex:[
    {j:'彼は 元気が ないようです。', k:'かれは げんきが ないようです。', v:'Có vẻ như anh ấy không được khỏe.'}]}
],
48: [
  {p:'Thể sai khiến (使役形)', d:'行く→行かせる, 食べる→食べさせる.', ex:[
    {j:'部長は 山田さんを 大阪へ 出張させました。', k:'ぶちょうは やまださんを おおさかへ しゅっちょうさせました。', v:'Trưởng phòng cử anh Yamada đi công tác Osaka.'},
    {j:'子どもに 野菜を 食べさせます。', k:'こどもに やさいを たべさせます。', v:'Tôi cho con ăn rau.'}]},
  {p:'Vさせて ください', d:'Xin phép được làm gì.', ex:[
    {j:'あした 休ませて ください。', k:'あした やすませて ください。', v:'Xin cho tôi nghỉ ngày mai.'}]}
],
49: [
  {p:'Kính ngữ tôn kính (尊敬語)', d:'Nâng cao vị thế người nghe: いらっしゃる, 召し上がる, なさる.', ex:[
    {j:'社長は 今 いらっしゃいません。', k:'しゃちょうは いま いらっしゃいません。', v:'Giám đốc hiện không có ở đây.'},
    {j:'コーヒーを 召し上がりますか。', k:'コーヒーを めしあがりますか。', v:'Ngài dùng cà phê chứ ạ?'}]},
  {p:'お Vに なります', d:'Dạng tôn kính chung cho động từ.', ex:[
    {j:'先生は もう お帰りに なりました。', k:'せんせいは もう おかえりに なりました。', v:'Thầy đã về rồi ạ.'}]}
],
50: [
  {p:'Kính ngữ khiêm nhường (謙譲語)', d:'Hạ thấp mình: 参る, 申す, いたす, 拝見する.', ex:[
    {j:'ベトナムから 参りました グエンと 申します。', k:'ベトナムから まいりました グエンと もうします。', v:'Tôi tên là Nguyễn, đến từ Việt Nam.'},
    {j:'お写真を 拝見しました。', k:'おしゃしんを はいけんしました。', v:'Tôi đã xem bức ảnh ạ.'}]},
  {p:'お Vします', d:'Dạng khiêm nhường chung.', ex:[
    {j:'お荷物を お持ちします。', k:'おにもつを おもちします。', v:'Để tôi xách hành lý giúp ạ.'}]}
]
};
