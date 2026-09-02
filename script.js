/* ============================================================
   I18N
   ============================================================ */
const I18N = {
ru:{
  eyebrow_auth:'64 клетки · вечная игра', brand1:'Chess', brand2:'Online', brand_full:'Chess Online',
  auth_desc:'Играйте против компьютера, проходите обучение с подсказками или сразитесь с другом за одним экраном. Работает на компьютере и в телефоне.',
  tab_login:'Вход', tab_register:'Регистрация', login_id_label:'Имя пользователя или e-mail', password_label:'Пароль',
  btn_login:'Войти', no_account:'Нет аккаунта?', register_link:'Зарегистрироваться',
  username_label:'Имя пользователя', email_label:'E-mail', avatar_label:'Выберите аватар',
  btn_register:'Создать аккаунт', have_account:'Уже есть аккаунт?', login_link:'Войти',
  nav_achievements:'Достижения', nav_logout:'Выйти', nav_to_menu:'В меню',
  eyebrow_menu:'выберите режим', menu_h2a:'Партия начинается', menu_h2b:'здесь',
  mode3_title:'Онлайн', mode3_desc:'Найдите соперника в лобби: присоединяйтесь к открытой комнате или создайте свою. В обычном режиме 3 подсказки, в соревновательном — ни одной.',
  mode1_title:'Игра с ботом', mode1_desc:'Выберите уровень сложности и сыграйте против движка. Включите помощника, если не уверены в ходе.',
  diff_easy:'Лёгкий', diff_medium:'Средний', diff_hard:'Сложный',
  mode2_title:'Обучение', mode2_desc:'Свободная доска без ограничений хода — изучайте, как ходит каждая фигура.',
  hint_label:'Подсказка', tutorial_default:'Выберите фигуру, чтобы увидеть её ходы.',
  assistant_label:'Помощник', btn_hint:'Подсказать ход',
  captured_label:'Взятые фигуры', moves_label:'Ходы', btn_restart:'Начать заново', btn_exit_menu:'Выйти в меню',
  eyebrow_ach:'зал славы', ach_h2a:'Ваши', ach_h2b:'достижения', highlights_label:'Яркие моменты',
  btn_to_menu:'В меню', btn_rematch:'Реванш',
  settings_title:'Настройки', setting_hints:'Подсказки помощника', setting_hints_sub:'Показывать кнопку подсказки в игре',
  setting_theme:'Тема оформления', setting_theme_sub:'Светлая или тёмная', setting_lang:'Язык интерфейса', setting_lang_sub:'Russian / English',
  setting_email:'E-mail аккаунта', btn_close:'Закрыть',
  theme_dark:'Тёмная', theme_light:'Светлая', lang_ru:'🇷🇺 RU', lang_en:'🇬🇧 EN',
  status_white_turn:'Ход белых', status_black_turn:'Ход чёрных', status_check:'· шах!', status_tutorial:'Свободный режим',
  title_bot:'Против бота', title_tutorial:'Обучение', title_local:'Онлайн · игрок против игрока',
  lvl_easy:'лёгкий', lvl_medium:'средний', lvl_hard:'сложный',
  err_name_short:'Ник должен быть не короче 2 символов.', err_pass_short:'Пароль должен быть не короче 4 символов.',
  err_email_invalid:'Введите корректный e-mail.', err_user_exists:'Такой пользователь или e-mail уже существует.',
  ok_created:'Аккаунт создан! Входим...', err_fill:'Введите имя/e-mail и пароль.', err_bad_login:'Неверные данные для входа.',
  modal_draw_title:'Ничья', modal_draw_text:'Пат — у игрока нет доступных ходов, но короля не атакуют.',
  modal_win_title:'Победа!', modal_win_text:'Мат сопернику — отличная партия!',
  modal_loss_title:'Поражение', modal_loss_text:'Бот поставил мат. Попробуйте ещё раз.',
  modal_local_title_w:'Белые побеждают', modal_local_title_b:'Чёрные побеждают', modal_local_text:'Мат! Игра окончена.',
  piece_P:'Пешка', piece_N:'Конь', piece_B:'Слон', piece_R:'Ладья', piece_Q:'Ферзь', piece_K:'Король',
  desc_P:'ходит вперёд на одну клетку (на две с начальной позиции), бьёт по диагонали.',
  desc_N:'ходит буквой «Г»: две клетки в одну сторону и одна в перпендикулярную.',
  desc_B:'ходит по диагоналям на любое число клеток.', desc_R:'ходит по горизонталям и вертикалям на любое число клеток.',
  desc_Q:'сочетает ходы ладьи и слона — самая сильная фигура.', desc_K:'ходит на одну клетку в любом направлении, может рокироваться.',
  hint_no_moves:'Нет доступных ходов.', hint_prefix:'Совет: сходите', hint_capture:'и возьмите фигуру соперника.',
  hint_check:'— это поставит сопернику шах!', hint_develop:'чтобы развить фигуру и лучше контролировать доску.',
  hint_center:'чтобы усилить контроль центра.',
  ach_first_win:'Первая победа', ach_first_win_d:'Выиграйте свою первую партию.',
  ach_beat_easy:'Разминка', ach_beat_easy_d:'Обыграйте бота на лёгком уровне.',
  ach_beat_medium:'Крепкий орешек', ach_beat_medium_d:'Обыграйте бота на среднем уровне.',
  ach_beat_hard:'Гроссмейстер', ach_beat_hard_d:'Обыграйте бота на сложном уровне.',
  ach_five_wins:'Пять побед', ach_five_wins_d:'Наберите 5 побед в любых партиях.',
  ach_ten_games:'Опытный игрок', ach_ten_games_d:'Сыграйте 10 партий.',
  ach_streak:'Серия побед', ach_streak_d:'Выиграйте 3 партии подряд.',
  ach_tutorial:'Первые шаги', ach_tutorial_d:'Откройте режим обучения.',
  unlocked:'Открыто', locked:'Заблокировано',
  stat_games:'Партий', stat_wins:'Побед', stat_losses:'Поражений', stat_draws:'Ничьих', stat_streak:'Лучшая серия',
  hl_win_bot:'Победа над ботом', hl_moves:'ходов', hl_draw:'Ничья в партии', hl_local:'Мат в локальной партии', hl_ach:'Новое достижение:',
  online_casual:'Обычный', online_competitive:'Соревновательный',
  online_comp_note:'Соревновательный режим — со ставкой 50 🪙 и таймером ♟ 10 минут',
  bot_hard_note:'На сложном уровне включается шахматный таймер ♟ 10 минут',
  clock_white:'Белые', clock_black:'Чёрные',
  status_bot_thinking:'Бот думает...',
  modal_timeout_text:'Время вышло — победа по времени.',
  err_not_enough_coins:'Недостаточно монет. Нужно {n} 🪙 для ставки.',
  rank_pawn:'Пешка', rank_knight:'Конь', rank_bishop:'Слон', rank_rook:'Ладья', rank_queen:'Ферзь', rank_king:'Король',
  rank_max:'максимальный ранг',
  tasks_title:'Задания за валюту',
  task_watch_ad:'Посмотреть рекламу', task_watch_ad_d:'Просмотрите короткий ролик до конца.',
  task_change_theme:'Сменить тему', task_change_theme_d:'Переключите светлую/тёмную тему в настройках.',
  task_change_lang:'Сменить язык', task_change_lang_d:'Переключите язык интерфейса в настройках.',
  task_try_tutorial:'Пройти обучение', task_try_tutorial_d:'Откройте режим обучения хотя бы раз.',
  task_play_bot:'Сыграть с ботом', task_play_bot_d:'Начните партию против компьютера.',
  task_use_hint:'Спросить помощника', task_use_hint_d:'Воспользуйтесь подсказкой хода в игре.',
  task_claim:'Забрать', task_claimed:'Получено', task_watch:'Смотреть', task_pending:'Не выполнено',
  ad_title:'Рекламный ролик', ad_text:'Демонстрационная реклама. Награда будет доступна через', ad_sec:'сек.',
  hl_comp:'Победа в соревновательной партии', hl_rankup:'Новый ранг:',
  forgot_link:'Забыли пароль?', back_to_login:'Вернуться ко входу',
  password2_label:'Повторите пароль', new_password_label:'Новый пароль',
  btn_find_account:'Найти аккаунт', btn_reset_password:'Сменить пароль',
  err_pw_mismatch:'Пароли не совпадают.',
  err_account_not_found:'Аккаунт не найден.', err_wrong_email:'E-mail не совпадает с указанным при регистрации.',
  confirm_email_label:'Подтвердите e-mail аккаунта', rec_hint:'Привязанный адрес:',
  ok_account_found:'Аккаунт найден. Подтвердите e-mail и задайте новый пароль.',
  ok_password_changed:'Пароль изменён! Теперь войдите с новым паролем.',
  storage_note:'Аккаунты сохраняются на этом устройстве.',
  nav_profile:'Мой профиль', prof_stats_title:'Статистика',
  stat_checkmates:'Матов поставлено', stat_winrate:'Процент побед',
  stat_balance:'Баланс монет', stat_coins_earned:'Монет заработано', stat_coins_lost:'Монет проиграно',
  hl_comp_loss:'Проигрыш ставки в соревновательной партии',
  hint_limit_reached:'Подсказки на эту партию закончились.', hints_left:'осталось подсказок: {n}',
  country_label:'Страна',
  lobby_title:'Поиск соперника', btn_create_room:'Создать комнату', rooms_open:'Открытые комнаты',
  btn_refresh:'Обновить', btn_join:'Играть', room_waiting:'ждёт',
  room_locked:'Разница рангов больше {g}', err_no_opponents:'Нет подходящих соперников — попробуйте обновить список.',
  lobby_note_casual:'Обычные партии: ставка и таймер на ваш выбор, доступны 3 подсказки. XP начисляется за победу и снимается за поражение.',
  lobby_note_comp:'Соревновательные партии: ставку выбираете при создании комнаты, подсказок нет, таймер обязателен, соперник не дальше {g} рангов от вас.',
  waiting_for_player:'Ожидание соперника', waiting_connecting:'Подключение к комнате',
  waiting_opponent:'Соперник:', btn_cancel_wait:'Отменить',
  status_opponent_thinking:'Соперник думает...',
  leaderboard_title:'Топ игроков',
  hl_online_win:'Победа в онлайн-партии', hl_online_loss:'Поражение в онлайн-партии',
  hl_rankdown:'Ранг понижен:',
  create_room_title:'Новая комната', stake_label:'Ставка на партию', stake_none:'Без ставки',
  stake_hint:'Со счёта спишется {n} 🪙. Победитель забирает {p} 🪙, при ничьей ставка возвращается.',
  stake_hint_none:'Дружеская партия: монеты не списываются и не начисляются.',
  timer_label:'Контроль времени', timer_on:'10 минут', timer_off:'Без таймера',
  sec_rank:'Ранг и прогресс', sec_modes:'Режимы игры', sec_tasks:'Задания', sec_leaders:'Топ игроков',
  sec_lobby:'Поиск соперника', sec_rooms:'Комнаты', sec_profile:'Профиль', sec_stats:'Статистика',
  sec_achievements:'Достижения', sec_highlights:'Яркие моменты',
  ready_title:'Комната собрана', ready_not:'Не готов', ready_yes:'Готов', ready_waiting:'Ожидает',
  btn_ready:'Я готов', btn_not_ready:'Отменить готовность', btn_leave_room:'Покинуть комнату',
  ready_hint:'Партия начнётся, когда оба игрока подтвердят готовность.',
  err_stake_step:'Ставка должна быть кратна {s}.', err_stake_min:'Минимальная ставка — {n} 🪙.',
  err_stake_rank:'Ваш ранг позволяет ставить не больше {n} 🪙.',
  stake_limits:'Ранг {r}: максимум {n} 🪙 за партию.',
  nav_shop:'Магазин', shop_eyebrow:'за монеты', shop_title:'Магазин скинов',
  shop_boards:'Доски', shop_pieces:'Фигуры', sec_shop:'Магазин',
  skin_buy:'Купить', skin_equip:'Надеть', skin_equipped:'Используется', skin_free:'Бесплатно',
  skin_classic:'Классика', skin_emerald:'Изумруд', skin_ocean:'Океан', skin_rose:'Роза',
  skin_midnight:'Полночь', skin_gold:'Золото', skin_sapphire:'Сапфир', skin_crimson:'Багрянец',
  skin_forest:'Лес', skin_amethyst:'Аметист', skin_royal:'Королевский',
  hl_bought:'Куплен скин:', err_cannot_afford:'Не хватает монет: нужно {n} 🪙.',
  topup_title:'Пополнить баланс', topup_balance:'Сейчас на счету:', topup_bonus:'бонус',
  topup_demo:'Демонстрационный магазин: настоящая оплата не проводится и деньги не списываются. Монеты начисляются сразу, чтобы можно было опробовать механику.',
  topup_demo_short:'демо-покупка',
  topup_confirm:'Начислить {c} 🪙 за €{e}?\n\nЭто демонстрация: настоящая оплата не проводится.',
  hl_topup:'Баланс пополнен на {c} 🪙',
  skin_tryon:'Примерить', skin_previewing:'Примерено', skin_preview_on:'Предпросмотр',
  btn_preview_reset:'Показать мои скины',
  ranks_title:'Система рангов', ranks_sub:'Ваш ранг: {r} · {n} XP',
  rank_you_are_here:'вы здесь', rank_stake_cap:'ставка до {n} 🪙',
  prof_history_title:'История партий', hist_empty:'Пока нет сыгранных партий — сыграйте, и они появятся здесь.',
  hist_vs_bot:'Бот', hist_opponent:'Соперник', hist_mate:'мат', hist_moves:'{n} ходов',
  hist_w:'П', hist_l:'Пр', hist_d:'Н',
  time_now:'только что', time_min:'{n} мин назад', time_hour:'{n} ч назад', time_day:'{n} дн назад',
  empty_highlights:'Пока нет ярких моментов — сыграйте партию, чтобы они появились здесь.'
},
en:{
  eyebrow_auth:'64 squares · a timeless game', brand1:'Chess', brand2:'Online', brand_full:'Chess Online',
  auth_desc:'Play against the computer, learn the rules with hints, or face a friend on the same screen. Works on desktop and mobile.',
  tab_login:'Log in', tab_register:'Sign up', login_id_label:'Username or e-mail', password_label:'Password',
  btn_login:'Log in', no_account:"Don't have an account?", register_link:'Sign up',
  username_label:'Username', email_label:'E-mail', avatar_label:'Choose an avatar',
  btn_register:'Create account', have_account:'Already have an account?', login_link:'Log in',
  nav_achievements:'Achievements', nav_logout:'Log out', nav_to_menu:'Menu',
  eyebrow_menu:'choose a mode', menu_h2a:'The game begins', menu_h2b:'here',
  mode3_title:'Online', mode3_desc:'Find an opponent in the lobby: join an open room or create your own. Casual games allow 3 hints; competitive games allow none.',
  mode1_title:'Play against a bot', mode1_desc:'Pick a difficulty and play against the engine. Turn on the assistant if you are unsure of a move.',
  diff_easy:'Easy', diff_medium:'Medium', diff_hard:'Hard',
  mode2_title:'Tutorial', mode2_desc:'A free-form board with no turn order — learn how each piece moves.',
  hint_label:'Hint', tutorial_default:'Select a piece to see how it moves.',
  assistant_label:'Assistant', btn_hint:'Suggest a move',
  captured_label:'Captured pieces', moves_label:'Moves', btn_restart:'Restart', btn_exit_menu:'Exit to menu',
  eyebrow_ach:'hall of fame', ach_h2a:'Your', ach_h2b:'achievements', highlights_label:'Highlights',
  btn_to_menu:'Menu', btn_rematch:'Rematch',
  settings_title:'Settings', setting_hints:'Assistant hints', setting_hints_sub:'Show the hint button during games',
  setting_theme:'Theme', setting_theme_sub:'Light or dark', setting_lang:'Interface language', setting_lang_sub:'Russian / English',
  setting_email:'Account e-mail', btn_close:'Close',
  theme_dark:'Dark', theme_light:'Light', lang_ru:'🇷🇺 RU', lang_en:'🇬🇧 EN',
  status_white_turn:"White's move", status_black_turn:"Black's move", status_check:'· check!', status_tutorial:'Free mode',
  title_bot:'Vs bot', title_tutorial:'Tutorial', title_local:'Online · player vs player',
  lvl_easy:'easy', lvl_medium:'medium', lvl_hard:'hard',
  err_name_short:'Username must be at least 2 characters.', err_pass_short:'Password must be at least 4 characters.',
  err_email_invalid:'Enter a valid e-mail address.', err_user_exists:'That username or e-mail is already taken.',
  ok_created:'Account created! Logging in...', err_fill:'Enter your username/e-mail and password.', err_bad_login:'Incorrect login details.',
  modal_draw_title:'Draw', modal_draw_text:'Stalemate — no legal moves are available and the king is not in check.',
  modal_win_title:'Victory!', modal_win_text:'Checkmate — great game!',
  modal_loss_title:'Defeat', modal_loss_text:'The bot delivered checkmate. Try again.',
  modal_local_title_w:'White wins', modal_local_title_b:'Black wins', modal_local_text:'Checkmate! Game over.',
  piece_P:'Pawn', piece_N:'Knight', piece_B:'Bishop', piece_R:'Rook', piece_Q:'Queen', piece_K:'King',
  desc_P:'moves forward one square (two from its starting square) and captures diagonally.',
  desc_N:'moves in an L-shape: two squares one way, then one square perpendicular.',
  desc_B:'moves diagonally any number of squares.', desc_R:'moves horizontally or vertically any number of squares.',
  desc_Q:'combines the rook and bishop moves — the strongest piece.', desc_K:'moves one square in any direction and can castle.',
  hint_no_moves:'No legal moves available.', hint_prefix:'Tip: move', hint_capture:'and capture the opponent piece.',
  hint_check:'— this delivers check!', hint_develop:'to develop the piece and control more of the board.',
  hint_center:'to strengthen your control of the center.',
  ach_first_win:'First victory', ach_first_win_d:'Win your first game.',
  ach_beat_easy:'Warm-up', ach_beat_easy_d:'Beat the bot on easy.',
  ach_beat_medium:'Tough nut', ach_beat_medium_d:'Beat the bot on medium.',
  ach_beat_hard:'Grandmaster', ach_beat_hard_d:'Beat the bot on hard.',
  ach_five_wins:'Five wins', ach_five_wins_d:'Reach 5 wins across any games.',
  ach_ten_games:'Seasoned player', ach_ten_games_d:'Play 10 games.',
  ach_streak:'Win streak', ach_streak_d:'Win 3 games in a row.',
  ach_tutorial:'First steps', ach_tutorial_d:'Open the tutorial mode.',
  unlocked:'Unlocked', locked:'Locked',
  stat_games:'Games', stat_wins:'Wins', stat_losses:'Losses', stat_draws:'Draws', stat_streak:'Best streak',
  hl_win_bot:'Beat the bot', hl_moves:'moves', hl_draw:'Draw in a game', hl_local:'Checkmate in a local match', hl_ach:'New achievement:',
  online_casual:'Casual', online_competitive:'Competitive',
  online_comp_note:'Competitive mode — 50 🪙 stake and a ♟ 10-minute clock',
  bot_hard_note:'Hard difficulty enables the ♟ 10-minute chess clock',
  clock_white:'White', clock_black:'Black',
  status_bot_thinking:'Bot is thinking...',
  modal_timeout_text:'Time is up — win on time.',
  err_not_enough_coins:'Not enough coins. You need {n} 🪙 for the stake.',
  rank_pawn:'Pawn', rank_knight:'Knight', rank_bishop:'Bishop', rank_rook:'Rook', rank_queen:'Queen', rank_king:'King',
  rank_max:'max rank',
  tasks_title:'Tasks for coins',
  task_watch_ad:'Watch an ad', task_watch_ad_d:'Watch a short clip all the way through.',
  task_change_theme:'Change the theme', task_change_theme_d:'Switch between light and dark in settings.',
  task_change_lang:'Change the language', task_change_lang_d:'Switch the interface language in settings.',
  task_try_tutorial:'Try the tutorial', task_try_tutorial_d:'Open the tutorial mode at least once.',
  task_play_bot:'Play a bot', task_play_bot_d:'Start a game against the computer.',
  task_use_hint:'Ask the assistant', task_use_hint_d:'Use the move hint during a game.',
  task_claim:'Claim', task_claimed:'Claimed', task_watch:'Watch', task_pending:'Not done',
  ad_title:'Advertisement', ad_text:'Demo advertisement. Your reward unlocks in', ad_sec:'sec.',
  hl_comp:'Won a competitive match', hl_rankup:'New rank:',
  forgot_link:'Forgot your password?', back_to_login:'Back to log in',
  password2_label:'Repeat password', new_password_label:'New password',
  btn_find_account:'Find account', btn_reset_password:'Change password',
  err_pw_mismatch:'The passwords do not match.',
  err_account_not_found:'Account not found.', err_wrong_email:'That e-mail does not match the one used at sign-up.',
  confirm_email_label:'Confirm the account e-mail', rec_hint:'Linked address:',
  ok_account_found:'Account found. Confirm the e-mail and set a new password.',
  ok_password_changed:'Password changed! Now log in with the new one.',
  storage_note:'Accounts are saved on this device.',
  nav_profile:'My profile', prof_stats_title:'Statistics',
  stat_checkmates:'Checkmates delivered', stat_winrate:'Win rate',
  stat_balance:'Coin balance', stat_coins_earned:'Coins earned', stat_coins_lost:'Coins lost',
  hl_comp_loss:'Lost the stake in a competitive match',
  hint_limit_reached:'No hints left for this game.', hints_left:'hints left: {n}',
  country_label:'Country',
  lobby_title:'Finding an opponent', btn_create_room:'Create a room', rooms_open:'Open rooms',
  btn_refresh:'Refresh', btn_join:'Play', room_waiting:'waiting',
  room_locked:'Rank gap over {g}', err_no_opponents:'No suitable opponents — try refreshing the list.',
  lobby_note_casual:'Casual games: you choose the stake and time control, 3 hints available. XP is gained for a win and lost for a defeat.',
  lobby_note_comp:'Competitive games: you pick the stake when creating a room, no hints, clock always on, opponents within {g} ranks of you.',
  waiting_for_player:'Waiting for an opponent', waiting_connecting:'Connecting to the room',
  waiting_opponent:'Opponent:', btn_cancel_wait:'Cancel',
  status_opponent_thinking:'Opponent is thinking...',
  leaderboard_title:'Top players',
  hl_online_win:'Won an online match', hl_online_loss:'Lost an online match',
  hl_rankdown:'Rank dropped to:',
  create_room_title:'New room', stake_label:'Stake per game', stake_none:'No stake',
  stake_hint:'{n} 🪙 will be deducted. The winner takes {p} 🪙; a draw refunds the stake.',
  stake_hint_none:'Friendly game: no coins are deducted or awarded.',
  timer_label:'Time control', timer_on:'10 minutes', timer_off:'No clock',
  sec_rank:'Rank & progress', sec_modes:'Game modes', sec_tasks:'Tasks', sec_leaders:'Top players',
  sec_lobby:'Find an opponent', sec_rooms:'Rooms', sec_profile:'Profile', sec_stats:'Statistics',
  sec_achievements:'Achievements', sec_highlights:'Highlights',
  ready_title:'Room is full', ready_not:'Not ready', ready_yes:'Ready', ready_waiting:'Deciding',
  btn_ready:'I am ready', btn_not_ready:'Cancel ready', btn_leave_room:'Leave the room',
  ready_hint:'The game starts once both players confirm they are ready.',
  err_stake_step:'The stake must be a multiple of {s}.', err_stake_min:'The minimum stake is {n} 🪙.',
  err_stake_rank:'Your rank allows a stake of at most {n} 🪙.',
  stake_limits:'{r} rank: up to {n} 🪙 per game.',
  nav_shop:'Shop', shop_eyebrow:'spend your coins', shop_title:'Skin shop',
  shop_boards:'Boards', shop_pieces:'Pieces', sec_shop:'Shop',
  skin_buy:'Buy', skin_equip:'Equip', skin_equipped:'Equipped', skin_free:'Free',
  skin_classic:'Classic', skin_emerald:'Emerald', skin_ocean:'Ocean', skin_rose:'Rose',
  skin_midnight:'Midnight', skin_gold:'Gold', skin_sapphire:'Sapphire', skin_crimson:'Crimson',
  skin_forest:'Forest', skin_amethyst:'Amethyst', skin_royal:'Royal',
  hl_bought:'Skin purchased:', err_cannot_afford:'Not enough coins: {n} 🪙 required.',
  topup_title:'Top up your balance', topup_balance:'Current balance:', topup_bonus:'bonus',
  topup_demo:'Demo store: no real payment is taken and no money is charged. Coins are credited instantly so you can try the mechanic.',
  topup_demo_short:'demo purchase',
  topup_confirm:'Credit {c} 🪙 for €{e}?\n\nThis is a demo: no real payment is taken.',
  hl_topup:'Balance topped up by {c} 🪙',
  skin_tryon:'Try on', skin_previewing:'Trying on', skin_preview_on:'Preview',
  btn_preview_reset:'Show my skins',
  ranks_title:'Rank system', ranks_sub:'Your rank: {r} · {n} XP',
  rank_you_are_here:'you are here', rank_stake_cap:'stake up to {n} 🪙',
  prof_history_title:'Game history', hist_empty:'No games played yet — play one and it will show up here.',
  hist_vs_bot:'Bot', hist_opponent:'Opponent', hist_mate:'mate', hist_moves:'{n} moves',
  hist_w:'W', hist_l:'L', hist_d:'D',
  time_now:'just now', time_min:'{n} min ago', time_hour:'{n} h ago', time_day:'{n} d ago',
  empty_highlights:'No highlights yet — play a game and they will appear here.'
}
};
let currentLang = 'ru';
function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || key; }

function applyI18N(){
  document.documentElement.lang = currentLang;
  document.title = t('brand_full');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  buildLangSwitch('lang-switch-settings');
  buildThemeSwitch('theme-switch-settings');
  buildAuthControls();
  if(recoveryTarget){
    document.getElementById('rec-hint').textContent = t('rec_hint') + ' ' + maskEmail(recoveryTarget.email);
  }
  if(document.getElementById('screen-game').classList.contains('active')){
    updateGameTitle(); updateStatus(); updateMovesLog(); updateHintButton();
  }
  if(document.getElementById('screen-achievements').classList.contains('active')){
    renderStats(); renderAchievements(); renderHighlights();
  }
  if(currentUser && document.getElementById('screen-profile').classList.contains('active')){
    renderProfile();
  }
  buildCountrySelect();
  if(typeof buildScrollRail === 'function') buildScrollRail();
  if(currentUser && document.getElementById('screen-shop').classList.contains('active')) renderShop();
  if(currentUser){
    renderLeaderboard();
    if(document.getElementById('screen-lobby').classList.contains('active')) renderRooms();
  }
}

/* ---- sign-in screen: language picker + theme slider ---- */
const LANG_LIST = [
  {code:'ru', flag:'🇷🇺', label:'Русский', short:'RU'},
  {code:'en', flag:'🇬🇧', label:'English', short:'ENG'}
];

function buildAuthControls(){
  const code = document.getElementById('cur-lang-code');
  const menu = document.getElementById('lang-menu');
  if(!code || !menu) return;

  const active = LANG_LIST.find(l=>l.code===currentLang) || LANG_LIST[0];
  code.textContent = active.short;

  menu.innerHTML = LANG_LIST.map(l=>
    `<button class="lang-option ${l.code===currentLang?'active':''}" type="button" onclick="pickLang('${l.code}')">
       <span>${l.flag}</span><span>${l.label}</span>${l.code===currentLang?'<span class="tick">✓</span>':''}
     </button>`
  ).join('');

  const toggle = document.getElementById('theme-toggle');
  if(toggle) toggle.setAttribute('aria-label', currentTheme === 'light' ? 'light' : 'dark');
}

function toggleLangMenu(event){
  if(event) event.stopPropagation();
  const picker = document.getElementById('lang-picker');
  if(picker) picker.classList.toggle('open');
}
function closeLangMenu(){
  const picker = document.getElementById('lang-picker');
  if(picker) picker.classList.remove('open');
}
function pickLang(code){
  closeLangMenu();
  setLang(code);
}
function flipTheme(){
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function buildLangSwitch(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = `<button class="${currentLang==='ru'?'active':''}" onclick="setLang('ru')">${t('lang_ru')}</button><button class="${currentLang==='en'?'active':''}" onclick="setLang('en')">${t('lang_en')}</button>`;
}
function buildThemeSwitch(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = `<button class="${currentTheme==='dark'?'active':''}" onclick="setTheme('dark')">${t('theme_dark')}</button><button class="${currentTheme==='light'?'active':''}" onclick="setTheme('light')">${t('theme_light')}</button>`;
}

let currentTheme = 'dark';
function setTheme(theme){
  const changed = currentTheme !== theme;
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  buildThemeSwitch('theme-switch-settings');
  buildAuthControls();
  applySkins();
  if(currentUser){
    currentUser.settings.theme = theme;
    persistUser();
    if(changed && typeof markTaskReady === 'function') markTaskReady('change_theme');
  } else {
    saveGuestPrefs();          // remember the choice made on the sign-in screen
  }
}
function setLang(lang){
  const changed = currentLang !== lang;
  currentLang = lang;
  applyI18N();
  if(currentUser){
    currentUser.settings.lang = lang;
    persistUser();
    if(changed && typeof markTaskReady === 'function') markTaskReady('change_lang');
    refreshMenuMeta();
  } else {
    saveGuestPrefs();
  }
}

/* Language/theme picked before logging in are kept for the next visit.
   Flicking the switches fires several writes in a row, so they are coalesced
   into one delayed write with retries — otherwise the storage backend starts
   rejecting them. */
let prefsTimer = null, prefsSaving = false;

function saveGuestPrefs(){
  if(prefsTimer) clearTimeout(prefsTimer);
  prefsTimer = setTimeout(flushGuestPrefs, 700);
}

async function flushGuestPrefs(){
  if(prefsSaving) return;
  prefsTimer = null;
  prefsSaving = true;
  const snapshot = { lang: currentLang, theme: currentTheme };
  let ok = false;
  for(let attempt = 0; attempt < 3 && !ok; attempt++){
    ok = await storeSet('prefs', snapshot);
    if(!ok) await delay(500 * (attempt + 1));
  }
  prefsSaving = false;
}
async function loadGuestPrefs(){
  const prefs = await storeGet('prefs');
  if(prefs){
    if(prefs.lang) currentLang = prefs.lang;
    if(prefs.theme) currentTheme = prefs.theme;
  }
  document.documentElement.setAttribute('data-theme', currentTheme);
  applyI18N();
}

/* ============================================================
   STORAGE HELPERS
   ============================================================ */
/* ============================================================
   STORAGE ("database")
   Keys used:
     schema            -> version marker
     user:<username>   -> full account record
     email:<email>     -> username (index for e-mail login)
   ============================================================ */
const SCHEMA_VERSION = 3;

/* Storage backend.
   Inside the Claude app `window.storage` exists and is used.
   When this file is opened on its own (file:// or any web host) that object is
   missing, so we fall back to the browser's own localStorage. Both keep the
   same interface, so nothing else in the page has to care.
   Note: the two are separate stores — an account made in one is not visible
   in the other. */
const STORE_PREFIX = 'chessonline:';

const LocalBackend = {
  available(){
    try{
      const probe = STORE_PREFIX + '__probe';
      window.localStorage.setItem(probe, '1');
      window.localStorage.removeItem(probe);
      return true;
    }catch(e){ return false; }
  },
  async get(key){
    const raw = window.localStorage.getItem(STORE_PREFIX + key);
    if(raw === null) throw new Error('not found');
    return { key, value: raw };
  },
  async set(key, value){ window.localStorage.setItem(STORE_PREFIX + key, value); return { key, value }; },
  async delete(key){ window.localStorage.removeItem(STORE_PREFIX + key); return { key, deleted:true }; },
  async list(prefix){
    const keys = [];
    for(let i = 0; i < window.localStorage.length; i++){
      const full = window.localStorage.key(i);
      if(full && full.indexOf(STORE_PREFIX) === 0){
        const k = full.slice(STORE_PREFIX.length);
        if(!prefix || k.indexOf(prefix) === 0) keys.push(k);
      }
    }
    return { keys };
  }
};

/* an in-memory last resort so the page still runs even with storage blocked */
const MemoryBackend = (function(){
  const map = new Map();
  return {
    async get(key){ if(!map.has(key)) throw new Error('not found'); return { key, value: map.get(key) }; },
    async set(key, value){ map.set(key, value); return { key, value }; },
    async delete(key){ map.delete(key); return { key, deleted:true }; },
    async list(prefix){ return { keys:[...map.keys()].filter(k=>!prefix || k.indexOf(prefix)===0) }; }
  };
})();

let STORAGE_MODE = 'memory';
const Store = (function(){
  if(typeof window !== 'undefined' && window.storage && typeof window.storage.get === 'function'){
    STORAGE_MODE = 'app';
    return {
      get:(k)=>window.storage.get(k, false),
      set:(k,v)=>window.storage.set(k, v, false),
      delete:(k)=>window.storage.delete(k, false),
      list:(p)=>window.storage.list(p, false)
    };
  }
  if(typeof window !== 'undefined' && window.localStorage && LocalBackend.available()){
    STORAGE_MODE = 'local';
    return LocalBackend;
  }
  return MemoryBackend;
})();

async function storeGet(key){
  try{ const r = await Store.get(key); return r ? JSON.parse(r.value) : null; }
  catch(e){ return null; }
}
async function storeSet(key, value){
  try{ await Store.set(key, JSON.stringify(value)); return true; }
  catch(e){ return false; }   /* callers retry; a single failure is not fatal */
}
function delay(ms){ return new Promise(r=>setTimeout(r, ms)); }
async function storeDelete(key){
  try{ await Store.delete(key); }catch(e){ /* key may not exist */ }
}
async function storeList(prefix){
  try{ const r = await Store.list(prefix); return (r && r.keys) ? r.keys : []; }
  catch(e){ return []; }
}

/* Wipe every account once, so registration can start from a clean slate. */
async function wipeAllAccounts(){
  const keys = [...await storeList('user:'), ...await storeList('email:')];
  for(const k of keys){ await storeDelete(k); }
  return keys.length;
}

async function initDatabase(){
  let schema = null;
  try{ schema = await storeGet('schema'); }catch(e){ schema = null; }
  if(!schema || schema.version !== SCHEMA_VERSION){
    const removed = await wipeAllAccounts();
    // the version marker MUST land, otherwise the next load would wipe accounts again
    let ok = false;
    for(let attempt = 0; attempt < 4 && !ok; attempt++){
      ok = await storeSet('schema', { version: SCHEMA_VERSION, resetAt: Date.now() });
      if(!ok) await delay(400 * (attempt + 1));
    }
    if(removed) console.log('Cleared '+removed+' old account records.');
  }
}

/* ---- password hashing (so raw passwords are never stored) ---- */
async function hashPassword(plain, salt){
  const input = salt + '::' + plain;
  if(window.crypto && window.crypto.subtle){
    try{
      const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
      return 'sha256:' + Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
    }catch(e){ /* fall through */ }
  }
  let h1 = 0x811c9dc5, h2 = 0x01000193;
  for(let i=0;i<input.length;i++){
    h1 = Math.imul(h1 ^ input.charCodeAt(i), 16777619) >>> 0;
    h2 = Math.imul(h2 + input.charCodeAt(i) * (i+1), 2654435761) >>> 0;
  }
  return 'fb:' + h1.toString(16) + h2.toString(16);
}
function makeSalt(){
  const a = new Uint8Array(16);
  if(window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(a);
  else for(let i=0;i<16;i++) a[i] = Math.floor(Math.random()*256);
  return Array.from(a).map(b=>b.toString(16).padStart(2,'0')).join('');
}

/* ---- show/hide password ---- */
function togglePw(inputId, btn){
  const el = document.getElementById(inputId);
  if(!el) return;
  const show = el.type === 'password';
  el.type = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁';
  btn.classList.toggle('shown', show);
}

/* ============================================================
   AUTH
   ============================================================ */
const AVATARS = ['♔','♕','♖','♗','♘','♙','♚','♛'];
let selectedAvatar = AVATARS[0];
let currentUser = null;

function buildAvatarRow(){
  const row = document.getElementById('avatar-row');
  row.innerHTML = '';
  AVATARS.forEach(a=>{
    const d = document.createElement('div');
    d.className = 'avatar-opt' + (a===selectedAvatar?' sel':'');
    d.textContent = a;
    d.onclick = ()=>{ selectedAvatar=a; buildAvatarRow(); };
    row.appendChild(d);
  });
}
buildAvatarRow();

function buildMiniBoard(){
  const mb = document.getElementById('mini-board');
  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){
      const cell = document.createElement('div');
      cell.className = 'mini-cell ' + (((r+c)%2===0)?'l':'d');
      mb.appendChild(cell);
    }
  }
}
buildMiniBoard();

function switchTab(which){
  ['login','register','recover'].forEach(name=>{
    const pane = document.getElementById('pane-'+name);
    if(pane) pane.style.display = which===name ? 'block' : 'none';
  });
  // recovery has no tab of its own — it belongs to the login flow
  const activeTab = which==='recover' ? 'login' : which;
  ['login','register'].forEach(name=>{
    const tab = document.getElementById('tab-'+name);
    if(tab) tab.classList.toggle('active', activeTab===name);
  });
  if(which==='recover'){
    recoveryTarget = null;
    document.getElementById('rec-step2').style.display = 'none';
    document.getElementById('recover-msg').textContent = '';
  }
}

function defaultStats(){
  return { games:0, wins:0, losses:0, draws:0, streak:0, bestStreak:0, beatEasy:false, beatMedium:false, beatHard:false, tutorialDone:false, compWins:0, checkmates:0 };
}
function defaultSettings(){ return { hints:true, theme:'dark', lang:'ru', skins:{ board:'classic', pieces:'classic' } }; }
function defaultProgress(){ return { coins:100, xp:0, tasks:{}, coinsEarned:0, coinsLost:0, owned:[], history:[] }; }
const DEFAULT_COUNTRY = 'LV';

function ensureUserShape(u){
  if(!u.stats) u.stats = defaultStats();
  if(u.stats.compWins===undefined) u.stats.compWins = 0;
  if(u.stats.checkmates===undefined) u.stats.checkmates = 0;
  if(!u.achievements) u.achievements = [];
  if(!u.highlights) u.highlights = [];
  if(!u.settings) u.settings = defaultSettings();
  if(!u.progress) u.progress = defaultProgress();
  if(!u.progress.tasks) u.progress.tasks = {};
  if(!u.country) u.country = DEFAULT_COUNTRY;   // existing accounts default to Latvia
  if(u.progress.coinsEarned===undefined) u.progress.coinsEarned = 0;
  if(!u.progress.owned) u.progress.owned = [];
  if(!u.progress.history) u.progress.history = [];
  if(!u.settings.skins) u.settings.skins = { board:'classic', pieces:'classic' };
  if(u.progress.coinsLost===undefined) u.progress.coinsLost = 0;
  return u;
}

function isValidEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

async function doRegister(){
  const msg = document.getElementById('register-msg');
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const password2 = document.getElementById('reg-password2').value;
  msg.className = 'auth-msg font-ui';

  if(username.length < 2){ msg.textContent = t('err_name_short'); return; }
  if(!isValidEmail(email)){ msg.textContent = t('err_email_invalid'); return; }
  if(password.length < 4){ msg.textContent = t('err_pass_short'); return; }
  if(password !== password2){ msg.textContent = t('err_pw_mismatch'); return; }

  const key = 'user:'+username.toLowerCase();
  const emailKey = 'email:'+email.toLowerCase();
  if(await storeGet(key) || await storeGet(emailKey)){ msg.textContent = t('err_user_exists'); return; }

  const country = (document.getElementById('reg-country').value) || DEFAULT_COUNTRY;
  const salt = makeSalt();
  const userObj = {
    username, email, country,
    salt, passwordHash: await hashPassword(password, salt),
    avatar: selectedAvatar,
    stats: defaultStats(), achievements: [], highlights: [],
    // a new account keeps the language and theme chosen on the sign-in screen
    settings: Object.assign(defaultSettings(), { lang: currentLang, theme: currentTheme }),
    progress: defaultProgress(),
    createdAt: Date.now()
  };
  await storeSet(key, userObj);
  await storeSet(emailKey, username);

  msg.className = 'auth-msg font-ui ok';
  msg.textContent = t('ok_created');
  setTimeout(()=>{ currentUser = userObj; enterApp(); }, 500);
}

async function resolveUsername(id){
  if(id.includes('@')){
    const mapped = await storeGet('email:'+id.toLowerCase());
    if(mapped) return mapped;
  }
  return id;
}

async function doLogin(){
  const msg = document.getElementById('login-msg');
  const id = document.getElementById('login-id').value.trim();
  const password = document.getElementById('login-password').value;
  msg.className = 'auth-msg font-ui';
  if(!id || !password){ msg.textContent = t('err_fill'); return; }

  const username = await resolveUsername(id);
  const existing = await storeGet('user:'+username.toLowerCase());
  if(!existing){ msg.textContent = t('err_bad_login'); return; }

  const attempt = await hashPassword(password, existing.salt || '');
  if(attempt !== existing.passwordHash){ msg.textContent = t('err_bad_login'); return; }

  currentUser = ensureUserShape(existing);
  enterApp();
}

/* ---- password recovery (verified by the account's e-mail) ---- */
let recoveryTarget = null;

function maskEmail(email){
  const [name, domain] = String(email||'').split('@');
  if(!domain) return '—';
  const shown = name.slice(0, Math.min(2, name.length));
  return shown + '•'.repeat(Math.max(1, name.length - shown.length)) + '@' + domain;
}

async function findAccountForRecovery(){
  const msg = document.getElementById('recover-msg');
  const id = document.getElementById('rec-id').value.trim();
  msg.className = 'auth-msg font-ui';
  if(!id){ msg.textContent = t('err_fill'); return; }

  const username = await resolveUsername(id);
  const account = await storeGet('user:'+username.toLowerCase());
  if(!account){
    recoveryTarget = null;
    document.getElementById('rec-step2').style.display = 'none';
    msg.textContent = t('err_account_not_found');
    return;
  }
  recoveryTarget = account;
  document.getElementById('rec-hint').textContent = t('rec_hint') + ' ' + maskEmail(account.email);
  document.getElementById('rec-step2').style.display = 'block';
  msg.className = 'auth-msg font-ui ok';
  msg.textContent = t('ok_account_found');
}

async function doRecover(){
  const msg = document.getElementById('recover-msg');
  msg.className = 'auth-msg font-ui';
  if(!recoveryTarget){ msg.textContent = t('err_account_not_found'); return; }

  const email = document.getElementById('rec-email').value.trim();
  const pw = document.getElementById('rec-password').value;
  const pw2 = document.getElementById('rec-password2').value;

  if(email.toLowerCase() !== String(recoveryTarget.email||'').toLowerCase()){
    msg.textContent = t('err_wrong_email'); return;
  }
  if(pw.length < 4){ msg.textContent = t('err_pass_short'); return; }
  if(pw !== pw2){ msg.textContent = t('err_pw_mismatch'); return; }

  const salt = makeSalt();
  recoveryTarget.salt = salt;
  recoveryTarget.passwordHash = await hashPassword(pw, salt);
  await storeSet('user:'+recoveryTarget.username.toLowerCase(), recoveryTarget);

  msg.className = 'auth-msg font-ui ok';
  msg.textContent = t('ok_password_changed');
  document.getElementById('rec-step2').style.display = 'none';
  recoveryTarget = null;
  setTimeout(()=>{ switchTab('login'); }, 1200);
}

function logout(){
  persistUserNow();
  stopClock();
  gs = null;
  currentUser = null;
  showScreen('screen-auth');
}

function enterApp(){
  refreshHeaders();
  currentTheme = currentUser.settings.theme || 'dark';
  currentLang = currentUser.settings.lang || 'ru';
  document.documentElement.setAttribute('data-theme', currentTheme);
  applyI18N();
  applySkins();
  refreshMenuMeta();
  showScreen('screen-menu');
}

function refreshMenuMeta(){
  if(!currentUser) return;
  renderRankBanner();
  renderCurrency();
  renderTasks();
  renderLeaderboard();
}

function showScreen(id){
  closeProfileMenus();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  if(typeof buildScrollRail === 'function') setTimeout(buildScrollRail, 30);
}
function backToMenu(){ stopClock(); refreshMenuMeta(); showScreen('screen-menu'); }

/* clicking the title in the top-left always returns to the mode menu */
function goHome(){
  if(!currentUser) return;   // not logged in yet: title is not a shortcut
  closeProfileMenus();
  cancelWaiting(true);
  backToMenu();
}

/* ---- keyboard: Enter submits the auth forms ---- */
function bindEnter(inputIds, action){
  inputIds.forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter'){ e.preventDefault(); action(); }
    });
  });
}
function setupKeyboardShortcuts(){
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      closeLangMenu();
      if(isRanksOpen()) closeRanks();
      else if(isTopupOpen()) closeTopup();
      else if(isCreateRoomOpen()) closeCreateRoom();
      else if(isSettingsOpen()) closeSettings();
    }
  });
  bindEnter(['login-id','login-password'], doLogin);
  bindEnter(['reg-username','reg-email','reg-password','reg-password2'], doRegister);
  bindEnter(['rec-id'], findAccountForRecovery);
  bindEnter(['rec-email','rec-password','rec-password2'], doRecover);
  // Enter on the focused title also goes home (keyboard accessibility)
  document.querySelectorAll('.brand-link').forEach(el=>{
    el.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); goHome(); }
    });
  });
}

/* ============================================================
   SETTINGS MODAL
   ============================================================ */
function openSettings(){
  document.getElementById('toggle-hints').classList.toggle('on', currentUser.settings.hints);
  document.getElementById('settings-email-value').textContent = currentUser.email || '—';
  buildLangSwitch('lang-switch-settings');
  buildThemeSwitch('theme-switch-settings');
  document.getElementById('settings-bg').classList.add('active');
}
function closeSettings(){ document.getElementById('settings-bg').classList.remove('active'); }

/* clicking the dimmed area outside the dialog closes it; clicks inside do not */
function onBackdropClick(event, closeFn){
  if(event.target === event.currentTarget) closeFn();
}
function isSettingsOpen(){
  return document.getElementById('settings-bg').classList.contains('active');
}
function toggleHints(){
  currentUser.settings.hints = !currentUser.settings.hints;
  document.getElementById('toggle-hints').classList.toggle('on', currentUser.settings.hints);
  persistUser();
  refreshAssistantVisibility();
}

/* ============================================================
   CHESS ENGINE
   ============================================================ */
/* both colours use the solid glyph set; the actual colour comes from the
   active piece skin, which is what makes themed pieces possible */
const PIECE_GLYPH = { wK:'♚', wQ:'♛', wR:'♜', wB:'♝', wN:'♞', wP:'♟', bK:'♚', bQ:'♛', bR:'♜', bB:'♝', bN:'♞', bP:'♟' };
const FILES = ['a','b','c','d','e','f','g','h'];

function initBoardArray(){
  const b = Array.from({length:8}, ()=>Array(8).fill(null));
  const back = ['R','N','B','Q','K','B','N','R'];
  for(let c=0;c<8;c++){ b[0][c]='b'+back[c]; b[1][c]='bP'; b[6][c]='wP'; b[7][c]='w'+back[c]; }
  return b;
}
function cloneState(s){
  return { board: s.board.map(row=>row.slice()), turn: s.turn, castling: {...s.castling}, enPassant: s.enPassant ? {...s.enPassant} : null };
}
function newGameState(){
  return { board: initBoardArray(), turn:'w', castling:{wK:true,wQ:true,bK:true,bQ:true}, enPassant:null };
}
function inBounds(r,c){ return r>=0 && r<8 && c>=0 && c<8; }
function findKing(board, color){
  for(let r=0;r<8;r++) for(let c=0;c<8;c++) if(board[r][c]===color+'K') return {r,c};
  return null;
}
const DIRS = {
  B:[[-1,-1],[-1,1],[1,-1],[1,1]], R:[[-1,0],[1,0],[0,-1],[0,1]],
  Q:[[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]],
  N:[[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]],
  K:[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
};
function isSquareAttacked(board, r, c, byColor){
  const pdir = byColor==='w' ? 1 : -1;
  for(const dc of [-1,1]){ const rr=r+pdir, cc=c+dc; if(inBounds(rr,cc) && board[rr][cc]===byColor+'P') return true; }
  for(const [dr,dc] of DIRS.N){ const rr=r+dr, cc=c+dc; if(inBounds(rr,cc) && board[rr][cc]===byColor+'N') return true; }
  for(const [dr,dc] of DIRS.K){ const rr=r+dr, cc=c+dc; if(inBounds(rr,cc) && board[rr][cc]===byColor+'K') return true; }
  for(const [dr,dc] of DIRS.B){ let rr=r+dr, cc=c+dc; while(inBounds(rr,cc)){ const p=board[rr][cc]; if(p){ if(p[0]===byColor && (p[1]==='B'||p[1]==='Q')) return true; break;} rr+=dr; cc+=dc; } }
  for(const [dr,dc] of DIRS.R){ let rr=r+dr, cc=c+dc; while(inBounds(rr,cc)){ const p=board[rr][cc]; if(p){ if(p[0]===byColor && (p[1]==='R'||p[1]==='Q')) return true; break;} rr+=dr; cc+=dc; } }
  return false;
}
function isInCheck(board, color){
  const k = findKing(board, color);
  if(!k) return false;
  return isSquareAttacked(board, k.r, k.c, color==='w'?'b':'w');
}
function genPieceMoves(state, r, c){
  const board = state.board;
  const p = board[r][c];
  if(!p) return [];
  const color = p[0], type = p[1];
  const moves = [];
  const enemy = color==='w'?'b':'w';
  if(type==='P'){
    const dir = color==='w'?-1:1;
    const startRow = color==='w'?6:1;
    const promoRow = color==='w'?0:7;
    if(inBounds(r+dir,c) && !board[r+dir][c]){
      moves.push({r:r+dir,c,promo:r+dir===promoRow});
      if(r===startRow && !board[r+2*dir][c]) moves.push({r:r+2*dir,c,twoStep:true});
    }
    for(const dc of [-1,1]){
      const rr=r+dir, cc=c+dc;
      if(inBounds(rr,cc)){
        if(board[rr][cc] && board[rr][cc][0]===enemy) moves.push({r:rr,c:cc,capture:true,promo:rr===promoRow});
        else if(state.enPassant && state.enPassant.r===rr && state.enPassant.c===cc) moves.push({r:rr,c:cc,capture:true,enPassant:true});
      }
    }
  } else if(type==='N' || type==='K'){
    for(const [dr,dc] of DIRS[type]){
      const rr=r+dr, cc=c+dc;
      if(!inBounds(rr,cc)) continue;
      const target = board[rr][cc];
      if(!target) moves.push({r:rr,c:cc});
      else if(target[0]===enemy) moves.push({r:rr,c:cc,capture:true});
    }
    if(type==='K'){
      const rights = state.castling;
      const row = color==='w'?7:0;
      if(r===row && c===4 && !isInCheck(board,color)){
        if((color==='w'?rights.wK:rights.bK) && !board[row][5] && !board[row][6] && board[row][7]===color+'R'){
          if(!isSquareAttacked(board,row,5,enemy) && !isSquareAttacked(board,row,6,enemy)) moves.push({r:row,c:6,castle:'K'});
        }
        if((color==='w'?rights.wQ:rights.bQ) && !board[row][3] && !board[row][2] && !board[row][1] && board[row][0]===color+'R'){
          if(!isSquareAttacked(board,row,3,enemy) && !isSquareAttacked(board,row,2,enemy)) moves.push({r:row,c:2,castle:'Q'});
        }
      }
    }
  } else {
    for(const [dr,dc] of DIRS[type]){
      let rr=r+dr, cc=c+dc;
      while(inBounds(rr,cc)){
        const target = board[rr][cc];
        if(!target) moves.push({r:rr,c:cc});
        else { if(target[0]===enemy) moves.push({r:rr,c:cc,capture:true}); break; }
        rr+=dr; cc+=dc;
      }
    }
  }
  return moves;
}
function applyMove(state, from, move){
  const ns = cloneState(state);
  const board = ns.board;
  const p = board[from.r][from.c];
  const color = p[0], type = p[1];
  let captured = board[move.r][move.c];
  if(move.enPassant){ captured = board[from.r][move.c]; board[from.r][move.c]=null; }
  board[move.r][move.c] = p;
  board[from.r][from.c] = null;
  if(move.promo) board[move.r][move.c] = color+'Q';
  if(move.castle){
    const row = from.r;
    if(move.castle==='K'){ board[row][5]=board[row][7]; board[row][7]=null; }
    else { board[row][3]=board[row][0]; board[row][0]=null; }
  }
  if(type==='K'){ if(color==='w'){ns.castling.wK=false; ns.castling.wQ=false;} else {ns.castling.bK=false; ns.castling.bQ=false;} }
  if(type==='R'){
    if(color==='w' && from.r===7 && from.c===0) ns.castling.wQ=false;
    if(color==='w' && from.r===7 && from.c===7) ns.castling.wK=false;
    if(color==='b' && from.r===0 && from.c===0) ns.castling.bQ=false;
    if(color==='b' && from.r===0 && from.c===7) ns.castling.bK=false;
  }
  if(captured==='wR'){ if(move.r===7&&move.c===0) ns.castling.wQ=false; if(move.r===7&&move.c===7) ns.castling.wK=false; }
  if(captured==='bR'){ if(move.r===0&&move.c===0) ns.castling.bQ=false; if(move.r===0&&move.c===7) ns.castling.bK=false; }
  ns.enPassant = null;
  if(type==='P' && move.twoStep) ns.enPassant = { r:(from.r+move.r)/2, c:from.c };
  ns.turn = color==='w' ? 'b' : 'w';
  return {state: ns, captured};
}
function getLegalMoves(state, r, c){
  const p = state.board[r][c];
  if(!p) return [];
  const color = p[0];
  const pseudo = genPieceMoves(state, r, c);
  const legal = [];
  for(const m of pseudo){ const {state:ns} = applyMove(state,{r,c},m); if(!isInCheck(ns.board,color)) legal.push(m); }
  return legal;
}
function getAllLegalMoves(state, color){
  const all = [];
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const p = state.board[r][c];
    if(p && p[0]===color){ getLegalMoves(state,r,c).forEach(m=>all.push({from:{r,c},move:m})); }
  }
  return all;
}
function gameStatus(state){
  const color = state.turn;
  const moves = getAllLegalMoves(state, color);
  const check = isInCheck(state.board, color);
  if(moves.length===0) return check ? {over:true, result: color==='w'?'black_win':'white_win', reason:'checkmate'} : {over:true, result:'draw', reason:'stalemate'};
  return {over:false, check};
}

/* ============================================================
   AI / ASSISTANT
   ============================================================ */
const PIECE_VAL = {P:100, N:320, B:330, R:500, Q:900, K:20000};
const PAWN_TABLE = [[0,0,0,0,0,0,0,0],[50,50,50,50,50,50,50,50],[10,10,20,30,30,20,10,10],[5,5,10,25,25,10,5,5],[0,0,0,20,20,0,0,0],[5,-5,-10,0,0,-10,-5,5],[5,10,10,-20,-20,10,10,5],[0,0,0,0,0,0,0,0]];
function evalBoard(board){
  let score = 0;
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const p = board[r][c]; if(!p) continue;
    let v = PIECE_VAL[p[1]];
    if(p[1]==='P') v += p[0]==='w' ? PAWN_TABLE[r][c] : PAWN_TABLE[7-r][c];
    score += p[0]==='w' ? v : -v;
  }
  return score;
}
function minimax(state, depth, alpha, beta, maximizing){
  const status = gameStatus(state);
  if(depth===0 || status.over){
    if(status.over && status.reason==='checkmate') return maximizing ? -99000+depth : 99000-depth;
    if(status.over) return 0;
    return evalBoard(state.board);
  }
  const moves = getAllLegalMoves(state, state.turn);
  if(maximizing){
    let best=-Infinity;
    for(const {from,move} of moves){ const {state:ns}=applyMove(state,from,move); const val=minimax(ns,depth-1,alpha,beta,false); best=Math.max(best,val); alpha=Math.max(alpha,val); if(beta<=alpha) break; }
    return best;
  } else {
    let best=Infinity;
    for(const {from,move} of moves){ const {state:ns}=applyMove(state,from,move); const val=minimax(ns,depth-1,alpha,beta,true); best=Math.min(best,val); beta=Math.min(beta,val); if(beta<=alpha) break; }
    return best;
  }
}
function chooseBotMove(state, difficulty){
  const moves = getAllLegalMoves(state, state.turn);
  if(moves.length===0) return null;
  const maximizing = state.turn==='w';
  if(difficulty==='easy'){
    const captures = moves.filter(m=>m.move.capture);
    if(captures.length && Math.random()<0.4) return captures[Math.floor(Math.random()*captures.length)];
    return moves[Math.floor(Math.random()*moves.length)];
  }
  const depth = difficulty==='medium' ? 2 : 3;
  let best=null, bestVal = maximizing?-Infinity:Infinity;
  const shuffled = moves.slice().sort(()=>Math.random()-0.5);
  for(const {from,move} of shuffled){
    const {state:ns} = applyMove(state, from, move);
    const val = minimax(ns, depth-1, -Infinity, Infinity, !maximizing);
    if(maximizing ? val>bestVal : val<bestVal){ bestVal=val; best={from,move}; }
  }
  return best;
}
function bestAssistMove(state){
  // best move for whoever's turn it is, moderate depth for responsiveness
  const maximizing = state.turn==='w';
  const moves = getAllLegalMoves(state, state.turn);
  if(moves.length===0) return null;
  let best=null, bestVal = maximizing?-Infinity:Infinity;
  for(const {from,move} of moves){
    const {state:ns} = applyMove(state, from, move);
    const val = minimax(ns, 2, -Infinity, Infinity, !maximizing);
    if(maximizing ? val>bestVal : val<bestVal){ bestVal=val; best={from,move}; }
  }
  return best;
}

/* ============================================================
   GAME UI CONTROLLER
   ============================================================ */
let gs=null, mode=null, botColor='b', difficulty='medium', subMode='casual';
let selected=null, legalForSelected=[], lastMove=null;
let capturedByWhite=[], capturedByBlack=[], moveHistory=[], gameOverHandled=false;
let currentStake = 0;
let currentOpponent = null;

/* ---- chess clock ---- */
const CLOCK_START = 600; // 10 minutes
let clockEnabled = false;
let clockTime = {w:CLOCK_START, b:CLOCK_START};
let clockInterval = null;

function formatClock(sec){
  const m = Math.floor(sec/60), s = sec%60;
  return m + ':' + String(s).padStart(2,'0');
}
function renderClock(){
  if(!clockEnabled) return;
  document.getElementById('clock-white-time').textContent = formatClock(clockTime.w);
  document.getElementById('clock-black-time').textContent = formatClock(clockTime.b);
  const wEl = document.getElementById('clock-white'), bEl = document.getElementById('clock-black');
  wEl.classList.toggle('active', gs && gs.turn==='w' && !gameOverHandled);
  bEl.classList.toggle('active', gs && gs.turn==='b' && !gameOverHandled);
  wEl.classList.toggle('low', clockTime.w<=30);
  bEl.classList.toggle('low', clockTime.b<=30);
}
function stopClock(){
  if(clockInterval){ clearInterval(clockInterval); clockInterval = null; }
}
function startClock(){
  stopClock();
  if(!clockEnabled) return;
  clockInterval = setInterval(()=>{
    if(gameOverHandled || !gs){ stopClock(); return; }
    const side = gs.turn;
    clockTime[side]--;
    if(clockTime[side] <= 0){
      clockTime[side] = 0;
      renderClock();
      stopClock();
      handleTimeout(side);
      return;
    }
    renderClock();
  }, 1000);
}
function handleTimeout(loserSide){
  const status = { over:true, result: loserSide==='w' ? 'black_win' : 'white_win', reason:'timeout' };
  handleGameOver(status, true);
}

/* true when the engine (not a second human) controls the black pieces */
function engineControlsOpponent(){ return mode === 'bot' || mode === 'local'; }

function updateGameTitle(){
  const el = document.getElementById('game-title');
  if(mode==='bot') el.textContent = t('title_bot') + ' · ' + t('lvl_'+difficulty);
  else if(mode==='tutorial') el.textContent = t('title_tutorial');
  else if(mode==='local'){
    const opp = currentOpponent ? ' · vs ' + currentOpponent.name : '';
    el.textContent = (subMode==='competitive' ? t('online_competitive') : t('online_casual')) + opp;
  }
}

/* how many assistant hints a mode allows (null = unlimited, 0 = none) */
const CASUAL_HINT_LIMIT = 3;
let hintsUsed = 0;

function hintAllowance(){
  if(mode === 'bot') return null;                              // unlimited vs the engine
  if(mode === 'local') return subMode === 'competitive' ? 0 : CASUAL_HINT_LIMIT;
  return 0;
}

function refreshAssistantVisibility(){
  const allowance = hintAllowance();
  const showAssist = !!currentUser && currentUser.settings.hints && allowance !== 0;
  document.getElementById('assistant-panel').style.display = showAssist ? 'block' : 'none';
  document.getElementById('hint-text').classList.remove('show');
  clearHintHighlight();
  updateHintButton();
}

function updateHintButton(){
  const btn = document.getElementById('hint-btn');
  if(!btn) return;
  const allowance = hintAllowance();
  if(allowance === null){
    btn.textContent = t('btn_hint');
    btn.disabled = false;
    return;
  }
  const left = Math.max(0, allowance - hintsUsed);
  btn.textContent = t('btn_hint') + ' (' + left + ')';
  btn.disabled = left === 0;
}

function startBotGame(diff){
  mode='bot'; difficulty=diff; botColor='b'; subMode='casual'; currentStake = 0;
  clockEnabled = (diff==='hard');
  document.getElementById('tutorial-panel').style.display = 'none';
  initGameUI();
  markTaskReady('play_bot');
}
function startTutorial(){
  mode='tutorial'; subMode='casual'; currentStake = 0;
  clockEnabled = false;
  document.getElementById('tutorial-panel').style.display = 'block';
  document.getElementById('tutorial-text').textContent = t('tutorial_default');
  initGameUI();
  unlockTutorial();
  markTaskReady('try_tutorial');
}
/* Starts an online match against the opponent found in the lobby.
   The opponent is played by the engine at a strength matching their rank. */
function startOnlineMatch(sub, opponent, options){
  subMode = sub || 'casual';
  currentOpponent = opponent;
  const o = options || { stake:0, timed:true };
  const stake = Math.max(0, o.stake || 0);

  if(stake > 0){
    if(currentUser.progress.coins < stake){
      alert(t('err_not_enough_coins').replace('{n}', stake));
      return false;
    }
    currentUser.progress.coins -= stake;
    currentStake = stake;
    persistUser();
    renderCurrency();
  } else {
    currentStake = 0;
  }

  mode = 'local';                       // online match: player is White, engine is Black
  botColor = 'b';
  difficulty = difficultyForRank(opponent ? opponent.rankIdx : 1);
  clockEnabled = (subMode === 'competitive') ? true : !!o.timed;
  document.getElementById('tutorial-panel').style.display = 'none';
  initGameUI();
  return true;
}

/* stronger opponents think deeper */
function difficultyForRank(rankIdx){
  if(rankIdx <= 1) return 'easy';
  if(rankIdx <= 3) return 'medium';
  return 'hard';
}

function initGameUI(){
  stopClock();
  gs = newGameState();
  selected=null; legalForSelected=[]; lastMove=null;
  capturedByWhite=[]; capturedByBlack=[]; moveHistory=[]; gameOverHandled=false;
  clockTime = {w:CLOCK_START, b:CLOCK_START};
  hintsUsed = 0;
  document.getElementById('clock-row').style.display = clockEnabled ? 'flex' : 'none';
  updateGameTitle();
  refreshAssistantVisibility();
  renderBoard();
  updateStatus();
  updateCaptured();
  updateMovesLog();
  if(clockEnabled){ renderClock(); startClock(); }
  showScreen('screen-game');
}
function restartGame(){
  if(mode==='local' && subMode==='competitive'){
    if(currentUser.progress.coins < COMP_STAKE){ alert(t('err_not_enough_coins').replace('{n}', COMP_STAKE)); backToMenu(); return; }
    currentUser.progress.coins -= COMP_STAKE;
    currentStake = COMP_STAKE;
    persistUser(); renderCurrency();
  }
  initGameUI();
}
function pieceGlyph(p){ return PIECE_GLYPH[p]; }

let hintSquares = null;
function clearHintHighlight(){ hintSquares = null; }

function renderBoard(){
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';
  const check = mode!=='tutorial' && isInCheck(gs.board, gs.turn);
  const kingPos = check ? findKing(gs.board, gs.turn) : null;

  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){
      const sq = document.createElement('div');
      sq.className = 'sq ' + (((r+c)%2===0)?'l':'d');
      if(selected && selected.r===r && selected.c===c) sq.classList.add('selected');
      if(lastMove && ((lastMove.from.r===r&&lastMove.from.c===c) || (lastMove.to.r===r&&lastMove.to.c===c))) sq.classList.add('last-to');
      if(kingPos && kingPos.r===r && kingPos.c===c) sq.classList.add('in-check');
      if(hintSquares && hintSquares.from.r===r && hintSquares.from.c===c) sq.classList.add('hint-from');
      if(hintSquares && hintSquares.to.r===r && hintSquares.to.c===c) sq.classList.add('hint-to');

      const mv = legalForSelected.find(m=>m.r===r && m.c===c);
      if(mv) sq.classList.add(mv.capture ? 'move-capture' : 'move-dot');

      const p = gs.board[r][c];
      if(p){ const span=document.createElement('span'); span.className='piece '+(p[0]==='w'?'pw':'pb'); span.textContent=pieceGlyph(p); sq.appendChild(span); }
      if(c===7){ const cf=document.createElement('span'); cf.className='coord-f'; cf.textContent=8-r; sq.appendChild(cf); }
      if(r===7){ const cr=document.createElement('span'); cr.className='coord-r'; cr.textContent=FILES[c]; sq.appendChild(cr); }

      sq.onclick = ()=>onSquareClick(r,c);
      boardEl.appendChild(sq);
    }
  }
}

function onSquareClick(r,c){
  if(gameOverHandled) return;
  clearHintHighlight();
  document.getElementById('hint-text').classList.remove('show');
  const p = gs.board[r][c];

  if(mode==='tutorial'){
    if(selected && selected.r===r && selected.c===c){ selected=null; legalForSelected=[]; renderBoard(); return; }
    const mvHit = legalForSelected.find(m=>m.r===r && m.c===c);
    if(mvHit && selected){
      const {state:ns} = applyMove(gs, selected, mvHit);
      gs = ns;
      lastMove = {from:selected, to:{r,c}};
      selected=null; legalForSelected=[];
      renderBoard();
      return;
    }
    if(p){
      selected = {r,c};
      legalForSelected = genPieceMoves(gs, r, c);
      const pieceName = t('piece_'+p[1]);
      const desc = t('desc_'+p[1]);
      document.getElementById('tutorial-text').innerHTML = '<b>'+pieceName+'</b> '+desc;
      renderBoard();
    } else { selected=null; legalForSelected=[]; renderBoard(); }
    return;
  }

  if(engineControlsOpponent() && gs.turn===botColor) return;

  if(selected){
    const mvHit = legalForSelected.find(m=>m.r===r && m.c===c);
    if(mvHit){ makePlayerMove(selected, mvHit); return; }
    if(p && p[0]===gs.turn){ selected={r,c}; legalForSelected=getLegalMoves(gs,r,c); renderBoard(); return; }
    selected=null; legalForSelected=[]; renderBoard();
    return;
  }
  if(p && p[0]===gs.turn){ selected={r,c}; legalForSelected=getLegalMoves(gs,r,c); renderBoard(); }
}

const BOT_DELAY = { easy: 1400, medium: 2000, hard: 2600 };

function makePlayerMove(from, move){
  const p = gs.board[from.r][from.c];
  const {state:ns, captured} = applyMove(gs, from, move);
  if(captured) recordCapture(captured);
  recordMoveLog(p, from, move, captured);
  gs = ns;
  lastMove = {from, to:{r:move.r,c:move.c}};
  selected=null; legalForSelected=[];
  renderBoard(); updateStatus(); updateCaptured(); updateMovesLog(); renderClock();

  const status = gameStatus(gs);
  if(status.over){ handleGameOver(status); return; }
  if(engineControlsOpponent() && gs.turn===botColor){
    document.getElementById('game-status').textContent =
      mode === 'local' ? t('status_opponent_thinking') : t('status_bot_thinking');
    setTimeout(botPlay, BOT_DELAY[difficulty] || 1600);
  }
}

function botPlay(){
  if(gameOverHandled) return;
  const choice = chooseBotMove(gs, difficulty);
  if(!choice) return;
  const p = gs.board[choice.from.r][choice.from.c];
  const {state:ns, captured} = applyMove(gs, choice.from, choice.move);
  if(captured) recordCapture(captured);
  recordMoveLog(p, choice.from, choice.move, captured);
  gs = ns;
  lastMove = {from:choice.from, to:{r:choice.move.r,c:choice.move.c}};
  renderBoard(); updateStatus(); updateCaptured(); updateMovesLog(); renderClock();
  const status = gameStatus(gs);
  if(status.over) handleGameOver(status);
}

function showHint(){
  if(!gs || gameOverHandled) return;
  if(engineControlsOpponent() && gs.turn===botColor) return;

  const hintEl = document.getElementById('hint-text');
  const allowance = hintAllowance();
  if(allowance === 0){ return; }                      // competitive: no assistance at all
  if(allowance !== null && hintsUsed >= allowance){   // casual: limited number of hints
    hintEl.textContent = t('hint_limit_reached');
    hintEl.classList.add('show');
    updateHintButton();
    return;
  }

  const choice = bestAssistMove(gs);
  if(!choice){ hintEl.textContent = t('hint_no_moves'); hintEl.classList.add('show'); return; }
  hintSquares = {from:choice.from, to:{r:choice.move.r, c:choice.move.c}};
  const p = gs.board[choice.from.r][choice.from.c];
  const fromSq = FILES[choice.from.c]+(8-choice.from.r);
  const toSq = FILES[choice.move.c]+(8-choice.move.r);
  let text = t('hint_prefix') + ' ' + t('piece_'+p[1]).toLowerCase() + ' ' + fromSq + '-' + toSq + ' ';
  if(choice.move.capture) text += t('hint_capture');
  else {
    const {state:ns} = applyMove(gs, choice.from, choice.move);
    if(isInCheck(ns.board, ns.turn)) text += t('hint_check');
    else if(choice.move.c>=2 && choice.move.c<=5 && choice.move.r>=2 && choice.move.r<=5) text += t('hint_center');
    else text += t('hint_develop');
  }
  if(allowance !== null){
    hintsUsed++;
    const left = Math.max(0, allowance - hintsUsed);
    text += '  ·  ' + t('hints_left').replace('{n}', left);
  }
  hintEl.textContent = text;
  hintEl.classList.add('show');
  updateHintButton();
  renderBoard();
  markTaskReady('use_hint');
}

function recordCapture(pieceCode){ if(pieceCode[0]==='w') capturedByBlack.push(pieceCode); else capturedByWhite.push(pieceCode); }
function updateCaptured(){
  const cell = p=>`<span class="piece-mini ${p[0]==='w'?'pw':'pb'}">${pieceGlyph(p)}</span>`;
  document.getElementById('captured-white').innerHTML = capturedByWhite.map(cell).join('');
  document.getElementById('captured-black').innerHTML = capturedByBlack.map(cell).join('');
}
function recordMoveLog(p, from, move, captured){
  const notation = (p[1]==='P'?'':p[1]) + (captured?'x':'') + FILES[move.c] + (8-move.r);
  moveHistory.push(notation);
}
function updateMovesLog(){
  const el = document.getElementById('moves-log');
  let html = '';
  for(let i=0;i<moveHistory.length;i+=2){
    const num = i/2+1;
    html += `<div><span class="mv-num">${num}.</span>${moveHistory[i]||''} ${moveHistory[i+1]||''}</div>`;
  }
  el.innerHTML = html;
  el.scrollTop = el.scrollHeight;
}
function updateStatus(){
  if(mode==='tutorial'){ document.getElementById('game-status').textContent = t('status_tutorial'); return; }
  const status = gameStatus(gs);
  const turnLabel = gs.turn==='w' ? t('status_white_turn') : t('status_black_turn');
  document.getElementById('game-status').textContent = status.check && !status.over ? turnLabel + ' ' + t('status_check') : turnLabel;
}

function handleGameOver(status, byTimeout){
  gameOverHandled = true;
  stopClock();
  renderClock();
  const wasMate = status.reason === 'checkmate';
  let title, text, glyph, reward = null;
  if(status.result==='draw'){
    title = t('modal_draw_title'); text = t('modal_draw_text'); glyph='♟';
    reward = recordResult('draw');
  } else {
    const winnerColor = status.result==='white_win' ? 'w' : 'b';
    if(mode==='bot'){
      const playerWon = winnerColor !== botColor;
      title = playerWon ? t('modal_win_title') : t('modal_loss_title');
      text = byTimeout ? t('modal_timeout_text') : (playerWon ? t('modal_win_text') : t('modal_loss_text'));
      glyph = playerWon ? '♔' : '♚';
      reward = recordResult(playerWon ? 'win' : 'loss', playerWon && wasMate);
    } else {
      title = winnerColor==='w' ? t('modal_local_title_w') : t('modal_local_title_b');
      text = byTimeout ? t('modal_timeout_text') : t('modal_local_text');
      glyph = '♔';
      reward = recordResult('local_win', wasMate, winnerColor);
    }
  }
  if(reward){
    const parts = [];
    if(reward.coins) parts.push((reward.coins>0?'+':'') + reward.coins + ' 🪙');
    if(reward.xp) parts.push('+' + reward.xp + ' XP');
    if(parts.length) text += '  ·  ' + parts.join('   ');
  }
  document.getElementById('modal-glyph').textContent = glyph;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-text').textContent = text;
  document.getElementById('modal-bg').classList.add('active');
}
function closeModal(){ document.getElementById('modal-bg').classList.remove('active'); backToMenu(); }
function modalRematch(){
  document.getElementById('modal-bg').classList.remove('active');
  if(mode === 'local'){ openLobby(subMode); return; }   // online: find a new opponent
  restartGame();
}

/* ============================================================
   ACHIEVEMENTS + STATS
   ============================================================ */
const ACHIEVEMENTS_DEF = [
  {id:'first_win', icon:'🏆', key:'first_win'},
  {id:'beat_easy', icon:'♟️', key:'beat_easy'},
  {id:'beat_medium', icon:'♞', key:'beat_medium'},
  {id:'beat_hard', icon:'♛', key:'beat_hard'},
  {id:'five_wins', icon:'⭐', key:'five_wins'},
  {id:'ten_games', icon:'📜', key:'ten_games'},
  {id:'win_streak_3', icon:'🔥', key:'streak'},
  {id:'tutorial_done', icon:'📘', key:'tutorial'}
];

const XP_REWARD = { win:60, draw:25, loss:10, comp_win:120 };

/* Online XP is a contest: beating a higher-ranked player pays much more,
   and every defeat costs XP (losing to a far stronger player costs least). */
const XP_ONLINE = { winBase:80, lossBase:45, perRankUp:0.45, perRankDown:0.22 };

function onlineXpChange(result, opponentRankIdx){
  const gap = opponentRankIdx - myRankIdx();   // > 0 means the opponent outranks you
  if(result === 'win'){
    const mult = gap >= 0 ? (1 + XP_ONLINE.perRankUp * gap)
                          : Math.max(0.35, 1 + XP_ONLINE.perRankDown * gap);
    return Math.round(XP_ONLINE.winBase * mult);
  }
  // a loss: penalty shrinks when the opponent was stronger, grows when weaker
  const mult = gap >= 0 ? Math.max(0.35, 1 - XP_ONLINE.perRankDown * gap)
                        : (1 + XP_ONLINE.perRankUp * Math.abs(gap));
  return -Math.round(XP_ONLINE.lossBase * mult);
}

function recordResult(kind, wasMate, winnerColor){
  if(!currentUser) return null;
  const st = currentUser.stats;
  const pr = currentUser.progress;
  st.games++;
  let xp = 0, coins = 0, accountWon = false;

  if(kind==='win'){
    accountWon = true;
    st.wins++; st.streak++; st.bestStreak = Math.max(st.bestStreak, st.streak);
    if(mode==='bot'){
      if(difficulty==='easy') st.beatEasy = true;
      if(difficulty==='medium') st.beatMedium = true;
      if(difficulty==='hard') st.beatHard = true;
      xp = XP_REWARD.win; coins = 15;
      addHighlight('🏆', t('hl_win_bot')+' ('+t('lvl_'+difficulty)+')', moveHistory.length+' '+t('hl_moves'));
    }
  } else if(kind==='loss'){
    st.losses++; st.streak=0; xp = XP_REWARD.loss;
  } else if(kind==='draw'){
    st.draws++; st.streak=0; xp = XP_REWARD.draw;
    if(subMode==='competitive' && currentStake) coins = currentStake; // stake refunded, net 0
    addHighlight('🤝', t('hl_draw'), moveHistory.length+' '+t('hl_moves'));
  } else if(kind==='local_win'){
    // online match: the account holder plays White
    accountWon = (winnerColor === 'w');
    const oppRank = currentOpponent ? currentOpponent.rankIdx : myRankIdx();
    xp = onlineXpChange(accountWon ? 'win' : 'loss', oppRank);

    if(accountWon){
      st.wins++; st.streak++; st.bestStreak = Math.max(st.bestStreak, st.streak);
      if(subMode==='competitive'){
        st.compWins++;
        coins = currentStake * 2;             // winner takes the pot
        pr.coinsEarned += currentStake;       // net gain equals the stake
        addHighlight('👑', t('hl_comp'), (currentOpponent?currentOpponent.name:'') + ' · +' + xp + ' XP');
      } else {
        coins = 10;
        pr.coinsEarned += coins;
        addHighlight('♔', t('hl_online_win'), (currentOpponent?currentOpponent.name:'') + ' · +' + xp + ' XP');
      }
    } else {
      st.losses++; st.streak = 0;
      if(subMode==='competitive'){
        pr.coinsLost += currentStake;         // stake was already deducted
        addHighlight('💸', t('hl_comp_loss'), currentStake+' 🪙 · ' + xp + ' XP');
      } else {
        addHighlight('💤', t('hl_online_loss'), (currentOpponent?currentOpponent.name:'') + ' · ' + xp + ' XP');
      }
    }
  }

  if(wasMate && accountWon) st.checkmates++;
  if(kind==='win' && coins > 0) pr.coinsEarned += coins;

  const before = getRank(pr.xp);
  pr.xp = Math.max(0, pr.xp + xp);
  pr.coins += coins;
  const after = getRank(pr.xp);
  if(after.index > before.index){
    addHighlight('🎖️', t('hl_rankup')+' '+t('rank_'+after.key), '');
  } else if(after.index < before.index){
    addHighlight('⬇️', t('hl_rankdown')+' '+t('rank_'+after.key), '');
  }

  const outcome = kind === 'draw' ? 'draw' : (accountWon ? 'win' : 'loss');
  addGameToHistory({
    outcome,
    mode,
    subMode,
    difficulty: mode === 'bot' ? difficulty : null,
    opponent: (mode === 'local' && currentOpponent) ? currentOpponent.name : null,
    opponentCountry: (mode === 'local' && currentOpponent) ? currentOpponent.country : null,
    opponentRank: (mode === 'local' && currentOpponent) ? currentOpponent.rankKey : null,
    mate: !!wasMate,
    moves: Math.ceil(moveHistory.length / 2),
    xp,
    coins: coins - (currentStake || 0),   // net coin change for this game
    ts: Date.now()
  });

  currentStake = 0;
  checkAchievements();
  persistUser();
  refreshHeaders();
  return { xp, coins };
}

/* the profile keeps the ten most recent games */
const HISTORY_LIMIT = 10;
function addGameToHistory(entry){
  if(!currentUser) return;
  if(!currentUser.progress.history) currentUser.progress.history = [];
  currentUser.progress.history.unshift(entry);
  currentUser.progress.history = currentUser.progress.history.slice(0, HISTORY_LIMIT);
}
async function unlockTutorial(){
  if(!currentUser) return;
  currentUser.stats.tutorialDone = true;
  checkAchievements();
  persistUser();
}
function checkAchievements(){
  const st = currentUser.stats;
  const unlocked = new Set(currentUser.achievements);
  const tryUnlock = (id)=>{
    if(!unlocked.has(id)){
      unlocked.add(id);
      const def = ACHIEVEMENTS_DEF.find(a=>a.id===id);
      addHighlight('🎖️', t('hl_ach')+' '+t('ach_'+def.key), '');
    }
  };
  if(st.wins>=1) tryUnlock('first_win');
  if(st.beatEasy) tryUnlock('beat_easy');
  if(st.beatMedium) tryUnlock('beat_medium');
  if(st.beatHard) tryUnlock('beat_hard');
  if(st.wins>=5) tryUnlock('five_wins');
  if(st.games>=10) tryUnlock('ten_games');
  if(st.streak>=3) tryUnlock('win_streak_3');
  if(st.tutorialDone) tryUnlock('tutorial_done');
  currentUser.achievements = Array.from(unlocked);
}
function addHighlight(icon, title, subtitle){
  if(!currentUser.highlights) currentUser.highlights = [];
  currentUser.highlights.unshift({icon, title, subtitle, ts: Date.now()});
  currentUser.highlights = currentUser.highlights.slice(0, 12);
}
/* Account writes are debounced and retried.
   Several game events can fire at once (finishing a game unlocks a task,
   an achievement and a rank at the same moment); writing on every one of them
   hammers the storage backend and the writes start getting rejected. */
let saveTimer = null, savePending = false, saveInFlight = false;

function persistUser(){
  if(!currentUser) return;
  savePending = true;
  if(saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(flushUserSave, 600);
}

async function flushUserSave(){
  if(!currentUser || saveInFlight) return;
  saveTimer = null;
  savePending = false;
  saveInFlight = true;

  const key = 'user:'+currentUser.username.toLowerCase();
  const snapshot = JSON.parse(JSON.stringify(currentUser));
  let ok = false;
  for(let attempt = 0; attempt < 3 && !ok; attempt++){
    ok = await storeSet(key, snapshot);
    if(!ok) await delay(400 * (attempt + 1));
  }
  saveInFlight = false;

  if(savePending && !saveTimer) saveTimer = setTimeout(flushUserSave, 600);
}

/* write immediately when we cannot afford to wait (logout, leaving the page) */
async function persistUserNow(){
  if(saveTimer){ clearTimeout(saveTimer); saveTimer = null; }
  await flushUserSave();
}

function showAchievements(){ renderStats(); renderAchievements(); renderHighlights(); showScreen('screen-achievements'); }
function renderStats(){
  const st = currentUser.stats;
  const items = [
    {v:st.games, l:t('stat_games')}, {v:st.wins, l:t('stat_wins')}, {v:st.losses, l:t('stat_losses')},
    {v:st.draws, l:t('stat_draws')}, {v:st.bestStreak, l:t('stat_streak')}
  ];
  document.getElementById('stats-row').innerHTML = items.map(i=>`<div class="stat-chip"><div class="v">${i.v}</div><div class="l">${i.l}</div></div>`).join('');
}
function renderAchievements(){
  const unlocked = new Set(currentUser.achievements||[]);
  document.getElementById('ach-grid').innerHTML = ACHIEVEMENTS_DEF.map(a=>{
    const isUnlocked = unlocked.has(a.id);
    return `<div class="ach-card ${isUnlocked?'unlocked':''}">
      <div class="icon">${a.icon}</div>
      <div><h4 class="font-display">${t('ach_'+a.key)}</h4><p>${t('ach_'+a.key+'_d')}</p>
      <span class="tag">${isUnlocked?t('unlocked'):t('locked')}</span></div>
    </div>`;
  }).join('');
}
function renderHighlights(){
  const list = currentUser.highlights || [];
  const el = document.getElementById('highlights-list');
  if(list.length===0){ el.innerHTML = `<div class="empty-note">${t('empty_highlights')}</div>`; return; }
  el.innerHTML = list.map(h=>`
    <div class="highlight-card"><div class="badge">${h.icon}</div><div class="txt"><div class="t1">${h.title}</div><div class="t2">${h.subtitle||''}</div></div></div>
  `).join('');
}

/* ============================================================
   RANKS / CURRENCY / TASKS
   ============================================================ */
const COMP_STAKE = 50;

const RANKS = [
  {key:'pawn',    icon:'♙', min:0},
  {key:'knight',  icon:'♘', min:200},
  {key:'bishop',  icon:'♗', min:500},
  {key:'rook',    icon:'♖', min:1000},
  {key:'queen',   icon:'♕', min:1800},
  {key:'king',    icon:'♔', min:3000}
];

function getRank(xp){
  let idx = 0;
  for(let i=0;i<RANKS.length;i++){ if(xp >= RANKS[i].min) idx = i; }
  const cur = RANKS[idx];
  const next = RANKS[idx+1] || null;
  return { index:idx, key:cur.key, icon:cur.icon, min:cur.min, nextMin: next ? next.min : null };
}

function renderRankBanner(){
  const pr = currentUser.progress;
  const rank = getRank(pr.xp);
  document.getElementById('rank-title-txt').textContent = rank.icon + '  ' + t('rank_'+rank.key);
  const fillEl = document.getElementById('rank-bar-fill');
  const txtEl = document.getElementById('rank-xp-txt');
  if(rank.nextMin === null){
    fillEl.style.width = '100%';
    txtEl.textContent = pr.xp + ' XP · ' + t('rank_max');
  } else {
    const span = rank.nextMin - rank.min;
    const done = pr.xp - rank.min;
    fillEl.style.width = Math.min(100, Math.round(done/span*100)) + '%';
    txtEl.textContent = pr.xp + ' / ' + rank.nextMin + ' XP → ' + t('rank_'+RANKS[rank.index+1].key);
  }
}

function refreshHeaders(){
  if(!currentUser) return;
  ['menu','game','ach','prof','lobby','shop'].forEach(sfx=>{
    const av = document.getElementById('avatar-'+sfx);
    const un = document.getElementById('username-'+sfx);
    const cu = document.getElementById('curr-'+sfx);
    if(av) av.textContent = currentUser.avatar;
    if(un) un.innerHTML = nameWithFlag(currentUser.username, currentUser.country);
    if(cu) cu.textContent = currentUser.progress.coins;
  });
}
function renderCurrency(){ refreshHeaders(); }

/* ---- profile menu (hover on desktop, tap on touch devices) ---- */
function isTouchDevice(){
  return window.matchMedia && window.matchMedia('(hover:none)').matches;
}
function closeProfileMenus(){
  document.querySelectorAll('.profile-menu.open').forEach(el=>el.classList.remove('open'));
}
function onProfileChipClick(event, chip){
  if(!currentUser) return;
  const menu = chip.closest('.profile-menu');
  if(isTouchDevice()){
    // on phones the chip opens a small menu instead of navigating straight away
    event.stopPropagation();
    const wasOpen = menu.classList.contains('open');
    closeProfileMenus();
    if(!wasOpen) menu.classList.add('open');
    return;
  }
  showProfile();
}
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.profile-menu')) closeProfileMenus();
  if(!e.target.closest('.lang-picker')) closeLangMenu();
});

/* ---- profile page ---- */
function showProfile(){
  if(!currentUser) return;
  refreshHeaders();
  renderProfile();
  showScreen('screen-profile');
}

function timeAgo(ts){
  const mins = Math.floor((Date.now() - ts) / 60000);
  if(mins < 1)   return t('time_now');
  if(mins < 60)  return t('time_min').replace('{n}', mins);
  const hours = Math.floor(mins / 60);
  if(hours < 24) return t('time_hour').replace('{n}', hours);
  const days = Math.floor(hours / 24);
  return t('time_day').replace('{n}', days);
}

function historyLabel(gme){
  if(gme.mode === 'bot')   return t('hist_vs_bot') + ' · ' + t('lvl_' + (gme.difficulty || 'medium'));
  if(gme.mode === 'local'){
    const who = gme.opponent ? gme.opponent : t('hist_opponent');
    const flag = gme.opponentCountry ? ' ' + flagOf(gme.opponentCountry) : '';
    return who + flag;
  }
  return t('title_tutorial');
}

function renderHistory(){
  const el = document.getElementById('prof-history');
  if(!el) return;
  const list = (currentUser.progress.history || []);

  if(list.length === 0){
    el.innerHTML = `<div class="empty-note">${t('hist_empty')}</div>`;
    return;
  }

  el.innerHTML = list.map(gme=>{
    const mark = gme.outcome === 'win' ? t('hist_w') : gme.outcome === 'loss' ? t('hist_l') : t('hist_d');
    const tags = [];
    if(gme.mode === 'local') tags.push(gme.subMode === 'competitive' ? t('online_competitive') : t('online_casual'));
    if(gme.opponentRank)     tags.push(t('rank_' + gme.opponentRank));
    if(gme.mate)             tags.push(t('hist_mate'));
    tags.push(t('hist_moves').replace('{n}', gme.moves));
    tags.push(timeAgo(gme.ts));

    const xpCls = gme.xp > 0 ? 'up' : gme.xp < 0 ? 'down' : '';
    const xpTxt = (gme.xp > 0 ? '+' : '') + gme.xp + ' XP';
    const coinTxt = gme.coins ? ((gme.coins > 0 ? '+' : '') + gme.coins + ' 🪙') : '';

    return `<div class="hist-row ${gme.outcome}">
      <div class="hist-mark">${mark}</div>
      <div class="hist-body">
        <div class="hist-title">${historyLabel(gme)}</div>
        <div class="hist-meta">${tags.join(' · ')}</div>
      </div>
      <div class="hist-right">
        <div class="hist-xp ${xpCls}">${xpTxt}</div>
        ${coinTxt ? `<div class="hist-coins">${coinTxt}</div>` : ''}
      </div>
    </div>`;
  }).join('');
}

function renderProfile(){
  const u = currentUser, st = u.stats, pr = u.progress;
  document.getElementById('prof-avatar').textContent = u.avatar;
  document.getElementById('prof-name').innerHTML =
    u.username + ' <span class="flag-static">' + flagOf(u.country) + '</span>';
  document.getElementById('prof-email').textContent = u.email || '—';

  const rank = getRank(pr.xp);
  document.getElementById('prof-rank-icon').textContent = rank.icon;
  document.getElementById('prof-rank-name').textContent = t('rank_'+rank.key);
  const fill = document.getElementById('prof-rank-fill');
  const xpTxt = document.getElementById('prof-rank-xp');
  if(rank.nextMin === null){
    fill.style.width = '100%';
    xpTxt.textContent = pr.xp + ' XP · ' + t('rank_max');
  } else {
    const span = rank.nextMin - rank.min;
    fill.style.width = Math.min(100, Math.round((pr.xp - rank.min)/span*100)) + '%';
    xpTxt.textContent = pr.xp + ' / ' + rank.nextMin + ' XP → ' + t('rank_'+RANKS[rank.index+1].key);
  }

  const winRate = st.games ? Math.round(st.wins / st.games * 100) : 0;
  const cells = [
    {ic:'♟', v:st.games,        l:t('stat_games'),      cls:''},
    {ic:'🏆', v:st.wins,         l:t('stat_wins'),       cls:'good'},
    {ic:'💀', v:st.losses,       l:t('stat_losses'),     cls:'bad'},
    {ic:'🤝', v:st.draws,        l:t('stat_draws'),      cls:''},
    {ic:'♔', v:st.checkmates,   l:t('stat_checkmates'), cls:'gold'},
    {ic:'📈', v:winRate+'%',     l:t('stat_winrate'),    cls:''},
    {ic:'🪙', v:pr.coins,        l:t('stat_balance'),    cls:'gold'},
    {ic:'💰', v:'+'+pr.coinsEarned, l:t('stat_coins_earned'), cls:'good'},
    {ic:'💸', v:'-'+pr.coinsLost,   l:t('stat_coins_lost'),   cls:'bad'},
    {ic:'🔥', v:st.bestStreak,   l:t('stat_streak'),     cls:''}
  ];
  renderHistory();

  document.getElementById('prof-stats-grid').innerHTML = cells.map(c=>
    `<div class="prof-stat ${c.cls}"><div class="ic">${c.ic}</div><div><div class="v">${c.v}</div><div class="l">${c.l}</div></div></div>`
  ).join('');
}

const TASKS_DEF = [
  {id:'watch_ad',    icon:'📺', reward:40, key:'watch_ad',    action:'ad'},
  {id:'change_theme',icon:'🎨', reward:25, key:'change_theme',action:'auto'},
  {id:'change_lang', icon:'🌐', reward:25, key:'change_lang', action:'auto'},
  {id:'try_tutorial',icon:'📘', reward:30, key:'try_tutorial',action:'auto'},
  {id:'play_bot',    icon:'♜', reward:35, key:'play_bot',     action:'auto'},
  {id:'use_hint',    icon:'💡', reward:20, key:'use_hint',    action:'auto'}
];

function taskState(id){ return currentUser.progress.tasks[id] || 'locked'; }
// states: 'locked' (not done), 'ready' (done, claimable), 'claimed'

function markTaskReady(id){
  if(!currentUser) return;
  if(taskState(id)==='locked'){
    currentUser.progress.tasks[id] = 'ready';
    persistUser();
    renderTasks();
  }
}

function claimTask(id){
  const def = TASKS_DEF.find(x=>x.id===id);
  if(!def || taskState(id)!=='ready') return;
  currentUser.progress.tasks[id] = 'claimed';
  currentUser.progress.coins += def.reward;
  persistUser();
  renderCurrency();
  renderTasks();
}

let adTimer = null;
function watchAd(){
  if(taskState('watch_ad')!=='locked') return;
  const modal = document.getElementById('ad-bg');
  modal.classList.add('active');
  let left = 5;
  const countEl = document.getElementById('ad-count');
  countEl.textContent = left;
  clearInterval(adTimer);
  adTimer = setInterval(()=>{
    left--;
    countEl.textContent = left;
    if(left<=0){
      clearInterval(adTimer);
      modal.classList.remove('active');
      markTaskReady('watch_ad');
    }
  }, 1000);
}

function renderTasks(){
  const grid = document.getElementById('tasks-grid');
  if(!grid) return;
  grid.innerHTML = TASKS_DEF.map(task=>{
    const state = taskState(task.id);
    let btnLabel, disabled = '', onclick = '';
    if(state==='claimed'){ btnLabel = t('task_claimed'); disabled = 'disabled'; }
    else if(state==='ready'){ btnLabel = t('task_claim'); onclick = `claimTask('${task.id}')`; }
    else if(task.action==='ad'){ btnLabel = t('task_watch'); onclick = `watchAd()`; }
    else { btnLabel = t('task_pending'); disabled = 'disabled'; }
    return `<div class="task-card">
      <div class="t-title">${task.icon}  ${t('task_'+task.key)}</div>
      <div class="t-desc">${t('task_'+task.key+'_d')}</div>
      <div class="t-reward">+${task.reward} 🪙</div>
      <button class="task-btn" ${disabled} onclick="${onclick}">${btnLabel}</button>
    </div>`;
  }).join('');
}

/* ============================================================
   COUNTRIES / OPPONENTS / LOBBY / LEADERBOARD
   NOTE: there is no multiplayer server behind this page, so the
   opponents in the lobby are simulated and their moves are played
   by the local engine at a strength matching their rank.
   ============================================================ */
const COUNTRIES = [
  {code:'LV', flag:'🇱🇻', name:'Latvia'},      {code:'LT', flag:'🇱🇹', name:'Lithuania'},
  {code:'EE', flag:'🇪🇪', name:'Estonia'},     {code:'PL', flag:'🇵🇱', name:'Poland'},
  {code:'DE', flag:'🇩🇪', name:'Germany'},     {code:'FR', flag:'🇫🇷', name:'France'},
  {code:'ES', flag:'🇪🇸', name:'Spain'},       {code:'IT', flag:'🇮🇹', name:'Italy'},
  {code:'GB', flag:'🇬🇧', name:'United Kingdom'}, {code:'US', flag:'🇺🇸', name:'United States'},
  {code:'CA', flag:'🇨🇦', name:'Canada'},      {code:'BR', flag:'🇧🇷', name:'Brazil'},
  {code:'AR', flag:'🇦🇷', name:'Argentina'},   {code:'NO', flag:'🇳🇴', name:'Norway'},
  {code:'SE', flag:'🇸🇪', name:'Sweden'},      {code:'FI', flag:'🇫🇮', name:'Finland'},
  {code:'NL', flag:'🇳🇱', name:'Netherlands'}, {code:'UA', flag:'🇺🇦', name:'Ukraine'},
  {code:'IN', flag:'🇮🇳', name:'India'},       {code:'JP', flag:'🇯🇵', name:'Japan'},
  {code:'CN', flag:'🇨🇳', name:'China'},       {code:'AU', flag:'🇦🇺', name:'Australia'}
];
function countryOf(code){ return COUNTRIES.find(c=>c.code===code) || COUNTRIES[0]; }
function flagOf(code){ return countryOf(code).flag; }

function buildCountrySelect(){
  const sel = document.getElementById('reg-country');
  if(!sel) return;
  const prev = sel.value;
  sel.innerHTML = COUNTRIES
    .slice()
    .sort((a,b)=>a.name.localeCompare(b.name))
    .map(c=>`<option value="${c.code}">${c.flag}  ${c.name}</option>`).join('');
  sel.value = prev || DEFAULT_COUNTRY;
}

/* nickname with a small flag that appears on hover */
function nameWithFlag(name, countryCode){
  const c = countryOf(countryCode);
  return `<span class="has-flag" title="${c.name}">${name}<span class="flag">${c.flag}</span></span>`;
}

/* ---- simulated player pool ---- */
const FAKE_NAMES = [
  'NightRook','Vald_88','KaissaX','pawnstorm','Elo_Hunter','miralunar','TheoBlitz','zugzwang_','SilentBishop',
  'anna_gambit','KnightRider','deep_pawn','Ferz_Master','oskars_lv','ClockFlagger','endgame_god','TempoLoss',
  'Bl1tzkrieg','rookiemove','CaroKannon'
];
const FAKE_AVATARS = ['♔','♕','♖','♗','♘','♙','♚','♛','♜','♝'];

function seededRandom(seed){
  let x = seed;
  return function(){ x = (x * 1103515245 + 12345) & 0x7fffffff; return x / 0x7fffffff; };
}

/* a stable pool so the leaderboard does not reshuffle on every render */
let PLAYER_POOL = null;
function buildPlayerPool(){
  const rnd = seededRandom(20260816);
  PLAYER_POOL = FAKE_NAMES.map((name, i)=>{
    const xp = Math.floor(rnd() * 4200);
    const rank = getRank(xp);
    return {
      name,
      avatar: FAKE_AVATARS[Math.floor(rnd()*FAKE_AVATARS.length)],
      country: COUNTRIES[Math.floor(rnd()*COUNTRIES.length)].code,
      xp,
      rankIdx: rank.index,
      rankKey: rank.key
    };
  });
}

/* ---- leaderboard ---- */
function renderLeaderboard(){
  const el = document.getElementById('leaderboard');
  if(!el) return;
  if(!PLAYER_POOL) buildPlayerPool();

  const me = currentUser ? {
    name: currentUser.username, avatar: currentUser.avatar, country: currentUser.country,
    xp: currentUser.progress.xp, rankIdx: getRank(currentUser.progress.xp).index,
    rankKey: getRank(currentUser.progress.xp).key, isMe: true
  } : null;

  const rows = PLAYER_POOL.concat(me ? [me] : [])
    .sort((a,b)=> b.xp - a.xp)
    .slice(0, 10);

  el.innerHTML = rows.map((p, i)=>{
    const medal = i===0 ? '🥇' : i===1 ? '🥈' : i===2 ? '🥉' : (i+1);
    return `<div class="lb-row ${p.isMe?'me':''} ${i<3?('top'+(i+1)):''}">
      <div class="lb-pos">${medal}</div>
      <div class="lb-name"><span class="flag-static" title="${countryOf(p.country).name}">${flagOf(p.country)}</span> ${p.avatar} ${nameWithFlag(p.name, p.country)}</div>
      <div class="lb-rank">${t('rank_'+p.rankKey)}</div>
      <div class="lb-xp">${p.xp} XP</div>
    </div>`;
  }).join('');
}

/* ---- lobby ---- */
const MAX_RANK_GAP = 3;      // competitive: at most three ranks apart
let lobbyMode = 'casual';
let lobbyRooms = [];
let waitTimer = null, waitSeconds = 0;

function myRankIdx(){ return getRank(currentUser.progress.xp).index; }

function openLobby(sub){
  if(!currentUser) return;
  lobbyMode = sub || 'casual';
  cancelWaiting(true);
  refreshHeaders();

  document.getElementById('lobby-eyebrow').textContent =
    lobbyMode === 'competitive' ? t('online_competitive') : t('online_casual');
  document.getElementById('lobby-title').textContent = t('lobby_title');
  document.getElementById('lobby-note').textContent =
    lobbyMode === 'competitive'
      ? t('lobby_note_comp').replace('{n}', COMP_STAKE).replace('{g}', MAX_RANK_GAP)
      : t('lobby_note_casual');

  refreshRooms();
  showScreen('screen-lobby');
}

function refreshRooms(){
  if(!PLAYER_POOL) buildPlayerPool();
  const rnd = Math.random;
  const pool = PLAYER_POOL.slice().sort(()=>rnd()-0.5).slice(0, 6);
  lobbyRooms = pool.map((p, i)=>{
    const cap = Math.min(maxStakeForRank(p.rankIdx), maxStakeForRank(myRankIdx()));
    const steps = Math.max(1, Math.floor(cap / STAKE_STEP));
    const stake = lobbyMode === 'competitive'
      ? Math.max(MIN_COMP_STAKE, roundToStep(Math.ceil(rnd()*steps) * STAKE_STEP))
      : (rnd() > 0.5 ? roundToStep(Math.ceil(rnd()*steps) * STAKE_STEP) : 0);
    return {
    id: 'r'+i+'_'+Date.now(),
    host: p,
    stake,
    timed: lobbyMode === 'competitive' ? true : rnd() > 0.35,
    waiting: 5 + Math.floor(rnd()*90)   // seconds the host has been waiting
  };});
  renderRooms();
}

function rankGapTo(player){ return Math.abs(player.rankIdx - myRankIdx()); }
function canPlay(player){
  if(lobbyMode !== 'competitive') return true;
  return rankGapTo(player) <= MAX_RANK_GAP;
}

function renderRooms(){
  const el = document.getElementById('rooms-list');
  if(!el) return;
  el.innerHTML = lobbyRooms.map(room=>{
    const p = room.host;
    const allowed = canPlay(p);
    const waitTxt = Math.floor(room.waiting/60) + ':' + String(room.waiting%60).padStart(2,'0');
    return `<div class="room-card ${allowed?'':'locked'}">
      <div class="room-av">${p.avatar}</div>
      <div class="room-info">
        <div class="room-name">${nameWithFlag(p.name, p.country)}</div>
        <div class="room-meta">${t('rank_'+p.rankKey)} · ${p.xp} XP · ${t('room_waiting')} ${waitTxt}</div>
      </div>
      <div class="room-badges">
        ${room.stake ? `<span class="room-tag stake">${room.stake} 🪙</span>`
                     : `<span class="room-tag">${t('stake_none')}</span>`}
        <span class="room-tag">${room.timed ? '⏱ 10:00' : '∞ ' + t('timer_off')}</span>
      </div>
      ${allowed
        ? `<button class="room-join" onclick="joinRoom('${room.id}')">${t('btn_join')}</button>`
        : `<div class="room-lock">${t('room_locked').replace('{g}', MAX_RANK_GAP)}</div>`}
    </div>`;
  }).join('');
}

function joinRoom(roomId){
  const room = lobbyRooms.find(r=>r.id===roomId);
  if(!room || !canPlay(room.host)) return;
  if(room.stake > currentUser.progress.coins){
    alert(t('err_not_enough_coins').replace('{n}', room.stake));
    return;
  }
  beginWaiting(room.host, t('waiting_connecting'), 2 + Math.floor(Math.random()*2),
               { stake:room.stake, timed:room.timed });
}

/* ---- creating a room: pick the stake and the time control ----
   Stakes are typed in freely but must be round (multiples of 10),
   and the ceiling grows with your rank. */
const STAKE_STEP = 10;
const RANK_STAKE_CAP = [100, 250, 500, 1000, 2500, 10000];  // pawn -> king
const MIN_COMP_STAKE = 10;

let newRoomStake = 0;
let newRoomTimed = true;

function maxStakeForRank(rankIdx){ return RANK_STAKE_CAP[Math.min(rankIdx, RANK_STAKE_CAP.length-1)]; }
function myStakeCeiling(){ return Math.min(maxStakeForRank(myRankIdx()), currentUser.progress.coins); }
function minStakeForMode(){ return lobbyMode === 'competitive' ? MIN_COMP_STAKE : 0; }

function createRoom(){
  const ceiling = myStakeCeiling();
  if(lobbyMode === 'competitive' && ceiling < MIN_COMP_STAKE){
    alert(t('err_not_enough_coins').replace('{n}', MIN_COMP_STAKE));
    return;
  }
  newRoomStake = lobbyMode === 'competitive' ? Math.min(50, Math.max(MIN_COMP_STAKE, roundToStep(ceiling))) : 0;
  newRoomTimed = true;

  document.getElementById('createroom-sub').textContent =
    lobbyMode === 'competitive' ? t('online_competitive') : t('online_casual');
  document.getElementById('timer-block').style.display =
    lobbyMode === 'competitive' ? 'none' : 'block';   // competitive always runs on the clock

  document.getElementById('stake-input').value = newRoomStake;
  renderCreateRoomOptions();
  document.getElementById('createroom-bg').classList.add('active');
}

function roundToStep(v){ return Math.floor(v / STAKE_STEP) * STAKE_STEP; }

function bumpStake(delta){
  setStake(newRoomStake + delta);
}
function setStake(value){
  const min = minStakeForMode();
  const max = Math.max(min, roundToStep(myStakeCeiling()));
  let v = roundToStep(Math.max(0, value));
  v = Math.min(Math.max(v, min), max);
  newRoomStake = v;
  document.getElementById('stake-input').value = v;
  renderCreateRoomOptions();
}
function onStakeInput(){
  const raw = parseInt(document.getElementById('stake-input').value, 10);
  newRoomStake = isNaN(raw) ? 0 : Math.max(0, raw);
  renderCreateRoomOptions();
}

/* validity is checked separately so a half-typed number is not clobbered */
function stakeProblem(){
  const min = minStakeForMode();
  const max = roundToStep(myStakeCeiling());
  if(newRoomStake % STAKE_STEP !== 0) return t('err_stake_step').replace('{s}', STAKE_STEP);
  if(newRoomStake < min) return t('err_stake_min').replace('{n}', min);
  if(newRoomStake > currentUser.progress.coins) return t('err_not_enough_coins').replace('{n}', newRoomStake);
  if(newRoomStake > maxStakeForRank(myRankIdx())) return t('err_stake_rank').replace('{n}', maxStakeForRank(myRankIdx()));
  if(newRoomStake > max) return t('err_stake_rank').replace('{n}', max);
  return null;
}

function closeCreateRoom(){ document.getElementById('createroom-bg').classList.remove('active'); }
function isCreateRoomOpen(){ return document.getElementById('createroom-bg').classList.contains('active'); }

function selectTimed(flag){
  newRoomTimed = flag;
  renderCreateRoomOptions();
}

function renderCreateRoomOptions(){
  const min = minStakeForMode();
  const rankCap = maxStakeForRank(myRankIdx());
  const max = roundToStep(myStakeCeiling());

  // quick presets within reach
  const presets = [min, 50, 100, 250, 500, 1000]
    .filter((v,i,a) => v <= max && a.indexOf(v) === i)
    .slice(0, 5);
  document.getElementById('stake-quick').innerHTML = presets.map(v=>{
    const label = v === 0 ? t('stake_none') : v;
    return `<div class="cr-opt ${newRoomStake===v?'sel':''}" onclick="setStake(${v})">${label}</div>`;
  }).join('');

  document.getElementById('stake-hint').textContent =
    (newRoomStake > 0
      ? t('stake_hint').replace('{n}', newRoomStake).replace('{p}', newRoomStake * 2)
      : t('stake_hint_none'))
    + '  ' + t('stake_limits').replace('{r}', t('rank_'+getRank(currentUser.progress.xp).key)).replace('{n}', rankCap);

  const problem = stakeProblem();
  document.getElementById('stake-error').textContent = problem || '';
  const confirm = document.getElementById('cr-confirm');
  confirm.textContent = t('btn_create_room');
  confirm.disabled = !!problem;
  confirm.style.opacity = problem ? '0.45' : '1';

  document.getElementById('timer-options').innerHTML = `
    <div class="cr-opt ${newRoomTimed?'sel':''}" onclick="selectTimed(true)">⏱ ${t('timer_on')}</div>
    <div class="cr-opt ${!newRoomTimed?'sel':''}" onclick="selectTimed(false)">∞ ${t('timer_off')}</div>`;
}

function confirmCreateRoom(){
  const problem = stakeProblem();
  if(problem){ alert(problem); return; }
  const candidates = (PLAYER_POOL||[]).filter(canPlay);
  if(candidates.length === 0){ alert(t('err_no_opponents')); return; }
  closeCreateRoom();
  const opponent = candidates[Math.floor(Math.random()*candidates.length)];
  const timed = (lobbyMode === 'competitive') ? true : newRoomTimed;
  beginWaiting(opponent, t('waiting_for_player'), 4 + Math.floor(Math.random()*6),
               { stake:newRoomStake, timed });
}

function beginWaiting(opponent, label, seconds, matchOptions){
  document.getElementById('lobby-main').style.display = 'none';
  document.getElementById('waiting-box').style.display = 'block';
  document.getElementById('waiting-title').textContent = label;
  const o = matchOptions || { stake:0, timed:true };
  const terms = (o.stake > 0 ? o.stake + ' 🪙' : t('stake_none')) + ' · ' +
                (o.timed ? '⏱ 10:00' : '∞ ' + t('timer_off'));
  document.getElementById('waiting-sub').textContent =
    t('waiting_opponent') + ' ' + opponent.name + ' · ' + t('rank_'+opponent.rankKey) + '  |  ' + terms;

  waitSeconds = 0;
  const target = seconds;
  document.getElementById('waiting-timer').textContent = '0:00';

  clearInterval(waitTimer);
  waitTimer = setInterval(()=>{
    waitSeconds++;
    const m = Math.floor(waitSeconds/60), sec = waitSeconds%60;
    document.getElementById('waiting-timer').textContent = m + ':' + String(sec).padStart(2,'0');
    if(waitSeconds >= target){
      clearInterval(waitTimer); waitTimer = null;
      enterReadyCheck(opponent, matchOptions || { stake:0, timed:true });
    }
  }, 1000);
}

/* ---- ready check: the match only starts once both sides confirm ---- */
let readyOpponent = null, readyOptions = null;
let meReady = false, oppReady = false;
let oppReadyTimer = null;

function enterReadyCheck(opponent, options){
  readyOpponent = opponent;
  readyOptions = options;
  meReady = false; oppReady = false;

  document.getElementById('lobby-main').style.display = 'none';
  document.getElementById('waiting-box').style.display = 'none';
  document.getElementById('ready-box').style.display = 'block';

  document.getElementById('rp-me-av').textContent = currentUser.avatar;
  document.getElementById('rp-me-name').innerHTML = nameWithFlag(currentUser.username, currentUser.country);
  document.getElementById('rp-opp-av').textContent = opponent.avatar;
  document.getElementById('rp-opp-name').innerHTML = nameWithFlag(opponent.name, opponent.country);

  document.getElementById('ready-terms').textContent =
    (options.stake > 0 ? options.stake + ' 🪙' : t('stake_none')) + '  ·  ' +
    (options.timed ? '⏱ 10:00' : '∞ ' + t('timer_off')) + '  ·  ' + t('rank_'+opponent.rankKey);

  renderReadyState();

  // the opponent makes up their mind a few seconds later
  clearTimeout(oppReadyTimer);
  oppReadyTimer = setTimeout(()=>{
    oppReady = true;
    renderReadyState();
    maybeStartMatch();
  }, 2000 + Math.floor(Math.random()*4000));
}

function renderReadyState(){
  const meBox = document.getElementById('ready-me');
  const oppBox = document.getElementById('ready-opp');
  meBox.classList.toggle('is-ready', meReady);
  oppBox.classList.toggle('is-ready', oppReady);
  document.getElementById('rp-me-state').textContent = meReady ? t('ready_yes') : t('ready_not');
  document.getElementById('rp-opp-state').textContent = oppReady ? t('ready_yes') : t('ready_waiting');
  document.getElementById('ready-btn').textContent = meReady ? t('btn_not_ready') : t('btn_ready');
}

function toggleReady(){
  meReady = !meReady;
  renderReadyState();
  maybeStartMatch();
}

function maybeStartMatch(){
  if(!meReady || !oppReady) return;
  clearTimeout(oppReadyTimer); oppReadyTimer = null;
  document.getElementById('ready-box').style.display = 'none';
  startOnlineMatch(lobbyMode, readyOpponent, readyOptions);
}

function leaveReadyRoom(){
  clearTimeout(oppReadyTimer); oppReadyTimer = null;
  readyOpponent = null; readyOptions = null;
  meReady = false; oppReady = false;
  document.getElementById('ready-box').style.display = 'none';
  document.getElementById('lobby-main').style.display = 'block';
}

function cancelWaiting(silent){
  if(waitTimer){ clearInterval(waitTimer); waitTimer = null; }
  if(oppReadyTimer){ clearTimeout(oppReadyTimer); oppReadyTimer = null; }
  meReady = false; oppReady = false;
  const wb = document.getElementById('waiting-box');
  const rb = document.getElementById('ready-box');
  const lm = document.getElementById('lobby-main');
  if(wb) wb.style.display = 'none';
  if(rb) rb.style.display = 'none';
  if(lm) lm.style.display = 'block';
}

/* ---- rank table ---- */
function openRanks(){
  if(!currentUser) return;
  const xp = currentUser.progress.xp;
  const mine = getRank(xp);

  document.getElementById('ranks-sub').textContent =
    t('ranks_sub').replace('{r}', t('rank_'+mine.key)).replace('{n}', xp);

  document.getElementById('ranks-list').innerHTML = RANKS.map((r, i)=>{
    const next = RANKS[i+1] || null;
    const range = next ? (r.min + ' – ' + (next.min - 1) + ' XP')
                       : (r.min + '+ XP');
    const current = i === mine.index;
    const reached = i < mine.index;

    let badge = '';
    if(current)      badge = `<div class="r-badge">${t('rank_you_are_here')}</div>`;
    else if(reached) badge = `<div class="r-badge">✓</div>`;
    else             badge = `<div class="r-badge">+${r.min - xp} XP</div>`;

    return `<div class="rank-row ${current?'current':''} ${reached?'reached':''}">
      <div class="r-icon">${r.icon}</div>
      <div class="r-body">
        <div class="r-name">${t('rank_'+r.key)}</div>
        <div class="r-range">${range}</div>
        <div class="r-extra">${t('rank_stake_cap').replace('{n}', maxStakeForRank(i))}</div>
      </div>
      ${badge}
    </div>`;
  }).join('');

  document.getElementById('ranks-bg').classList.add('active');
}
function closeRanks(){ document.getElementById('ranks-bg').classList.remove('active'); }
function isRanksOpen(){ return document.getElementById('ranks-bg').classList.contains('active'); }

/* ============================================================
   COIN TOP-UP (demonstration only — no real payment is taken)
   ============================================================ */
const TOPUP_PACKS = [
  {eur:5,   coins:500,   bonus:0},
  {eur:10,  coins:1100,  bonus:10},
  {eur:20,  coins:2400,  bonus:20},
  {eur:50,  coins:6500,  bonus:30},
  {eur:100, coins:14000, bonus:40}
];

function openTopup(){
  if(!currentUser) return;
  document.getElementById('topup-balance').textContent =
    t('topup_balance') + ' ' + currentUser.progress.coins + ' 🪙';
  document.getElementById('topup-list').innerHTML = TOPUP_PACKS.map((pack, i)=>
    `<div class="topup-row" onclick="buyCoins(${i})" role="button" tabindex="0">
      <div>
        <div class="topup-coins">${pack.coins.toLocaleString('en-US').replace(/,/g,' ')} 🪙</div>
        ${pack.bonus ? `<div class="topup-bonus">+${pack.bonus}% ${t('topup_bonus')}</div>` : ''}
      </div>
      <div class="topup-price">€${pack.eur}</div>
    </div>`
  ).join('');
  document.getElementById('topup-bg').classList.add('active');
}
function closeTopup(){ document.getElementById('topup-bg').classList.remove('active'); }
function isTopupOpen(){ return document.getElementById('topup-bg').classList.contains('active'); }

function buyCoins(index){
  const pack = TOPUP_PACKS[index];
  if(!pack || !currentUser) return;
  if(!confirm(t('topup_confirm').replace('{c}', pack.coins).replace('{e}', pack.eur))) return;

  currentUser.progress.coins += pack.coins;
  addHighlight('💳', t('hl_topup').replace('{c}', pack.coins), '€' + pack.eur + ' · ' + t('topup_demo_short'));
  persistUser();
  refreshHeaders();
  openTopup();                 // refresh the shown balance
  if(document.getElementById('screen-shop').classList.contains('active')) renderShop();
}

/* ============================================================
   SHOP: board and piece skins
   ============================================================ */
const BOARD_SKINS = [
  {id:'classic',  price:0,    light:'#e9dcc0', dark:'#8a6a4e'},
  {id:'emerald',  price:150,  light:'#e6efe4', dark:'#4a7c59'},
  {id:'ocean',    price:200,  light:'#dfe9f3', dark:'#3f6d95'},
  {id:'rose',     price:250,  light:'#f6e4e6', dark:'#9c5566'},
  {id:'midnight', price:400,  light:'#5c6b82', dark:'#22293a'},
  {id:'gold',     price:600,  light:'#f6ecd2', dark:'#a8862f'}
];
const PIECE_SKINS = [
  {id:'classic',  price:0,    white:'#f7f2e4', whiteEdge:'#4a3a28', black:'#241d18', blackEdge:'#0d0a08'},
  {id:'sapphire', price:200,  white:'#dceaff', whiteEdge:'#1c3f73', black:'#1c3f96', blackEdge:'#0b1f4d'},
  {id:'crimson',  price:250,  white:'#ffe4e4', whiteEdge:'#7a1f2b', black:'#9c1f30', blackEdge:'#4d0d16'},
  {id:'forest',   price:300,  white:'#e2f3e4', whiteEdge:'#1f4a2c', black:'#1f6b38', blackEdge:'#0c2e18'},
  {id:'amethyst', price:400,  white:'#efe1ff', whiteEdge:'#4a2472', black:'#6b2fa8', blackEdge:'#2e1049'},
  {id:'royal',    price:750,  white:'#fff4d0', whiteEdge:'#7a5a12', black:'#c99a2e', blackEdge:'#5c410b'}
];

/* a skin being tried on, shown in the preview without being equipped */
let previewSkins = { board:null, pieces:null };

function previewOrEquipped(kind){ return previewSkins[kind] || equippedSkin(kind); }
function tryOnSkin(kind, id){
  previewSkins[kind] = id;
  renderShop();
}
function clearSkinPreview(){
  previewSkins = { board:null, pieces:null };
  renderShop();
}

function boardSkin(id){ return BOARD_SKINS.find(x=>x.id===id) || BOARD_SKINS[0]; }
function pieceSkin(id){ return PIECE_SKINS.find(x=>x.id===id) || PIECE_SKINS[0]; }

function ownedSkins(){ return (currentUser && currentUser.progress.owned) || []; }
function ownsSkin(kind, id){
  if(id === 'classic') return true;                 // starter skins are always yours
  return ownedSkins().indexOf(kind+':'+id) !== -1;
}
function equippedSkin(kind){
  const sk = (currentUser && currentUser.settings.skins) || {};
  return sk[kind] || 'classic';
}

/* writes the active skin colours onto the page */
function applySkins(){
  if(!currentUser) return;
  const b = boardSkin(equippedSkin('board'));
  const p = pieceSkin(equippedSkin('pieces'));
  const root = document.documentElement.style;
  root.setProperty('--square-light', b.light);
  root.setProperty('--square-dark',  b.dark);
  root.setProperty('--piece-white',  p.white);
  root.setProperty('--piece-white-edge', p.whiteEdge);
  root.setProperty('--piece-black',  p.black);
  root.setProperty('--piece-black-edge', p.blackEdge);
}

function buySkin(kind, id){
  const list = kind === 'board' ? BOARD_SKINS : PIECE_SKINS;
  const skin = list.find(x=>x.id===id);
  if(!skin || ownsSkin(kind, id)) return;
  if(currentUser.progress.coins < skin.price){
    alert(t('err_cannot_afford').replace('{n}', skin.price));
    return;
  }
  currentUser.progress.coins -= skin.price;
  currentUser.progress.owned = ownedSkins().concat([kind+':'+id]);
  equipSkin(kind, id);
  addHighlight('🛍️', t('hl_bought')+' '+t('skin_'+id), skin.price+' 🪙');
  persistUser();
  refreshHeaders();
}

function equipSkin(kind, id){
  if(!ownsSkin(kind, id)) return;
  previewSkins[kind] = null;
  if(!currentUser.settings.skins) currentUser.settings.skins = {};
  currentUser.settings.skins[kind] = id;
  applySkins();
  persistUser();
  renderShop();
}

function showShop(){
  if(!currentUser) return;
  previewSkins = { board:null, pieces:null };
  refreshHeaders();
  renderShop();
  showScreen('screen-shop');
}

function skinSwatch(kind, skin){
  if(kind === 'board'){
    return [0,1,2,3].map(i=>
      `<div class="sw" style="background:${i%2===0?skin.light:skin.dark}"></div>`).join('');
  }
  const b = boardSkin(previewOrEquipped('board'));
  const glyphs = ['♚','♛','♞','♟'];
  return glyphs.map((gl,i)=>
    `<div class="sw" style="background:${i%2===0?b.light:b.dark}; color:${i<2?skin.white:skin.black};
      text-shadow:0 0 1px ${i<2?skin.whiteEdge:skin.blackEdge}, 0.5px 0 0 ${i<2?skin.whiteEdge:skin.blackEdge}, -0.5px 0 0 ${i<2?skin.whiteEdge:skin.blackEdge};">${gl}</div>`).join('');
}

function renderSkinGrid(kind, list, containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map(skin=>{
    const owned = ownsSkin(kind, skin.id);
    const equipped = equippedSkin(kind) === skin.id;
    const affordable = currentUser.progress.coins >= skin.price;

    const previewing = previewSkins[kind] === skin.id;

    let btn;
    if(equipped)      btn = `<button class="skin-btn owned" disabled>${t('skin_equipped')}</button>`;
    else if(owned)    btn = `<button class="skin-btn owned" onclick="equipSkin('${kind}','${skin.id}')">${t('skin_equip')}</button>`;
    else              btn = `<button class="skin-btn" ${affordable?'':'disabled'} onclick="buySkin('${kind}','${skin.id}')">${t('skin_buy')}</button>`;

    return `<div class="skin-card ${equipped?'equipped':''} ${previewing?'previewing':''}">
      <div class="skin-swatch" onclick="tryOnSkin('${kind}','${skin.id}')" style="cursor:pointer;">${skinSwatch(kind, skin)}</div>
      <div class="skin-name">${t('skin_'+skin.id)}</div>
      <div class="skin-price">${skin.price === 0 ? t('skin_free') : skin.price + ' 🪙'}</div>
      ${btn}
      <button class="skin-try" onclick="tryOnSkin('${kind}','${skin.id}')">
        ${previewing ? '👁 ' + t('skin_previewing') : '👁 ' + t('skin_tryon')}
      </button>
    </div>`;
  }).join('');
}

function renderShopPreview(){
  const b = boardSkin(previewOrEquipped('board'));
  const p = pieceSkin(previewOrEquipped('pieces'));
  const layout = [
    ['♜','♛','♚','♞'],
    ['♟','♟','♟','♟'],
    ['','','',''],
    ['♟','♟','♟','♟']
  ];
  let html = '';
  for(let r=0;r<4;r++){
    for(let c=0;c<4;c++){
      const lightSq = (r+c)%2===0;
      const isWhite = r >= 2;
      const gl = layout[r][c];
      const col = isWhite ? p.white : p.black;
      const edge = isWhite ? p.whiteEdge : p.blackEdge;
      html += `<div class="pv-sq" style="background:${lightSq?b.light:b.dark}; color:${col};
        text-shadow:0 0 1px ${edge}, 0.5px 0 0 ${edge}, -0.5px 0 0 ${edge}, 0 0.5px 0 ${edge}, 0 -0.5px 0 ${edge};">${gl}</div>`;
    }
  }
  document.getElementById('shop-preview').innerHTML = html;
}

function renderShop(){
  renderShopPreview();
  renderSkinGrid('board',  BOARD_SKINS,  'shop-boards');
  renderSkinGrid('pieces', PIECE_SKINS, 'shop-pieces');

  const active = previewSkins.board || previewSkins.pieces;
  const banner = document.getElementById('preview-banner');
  banner.style.display = active ? 'flex' : 'none';
  if(active){
    const parts = [];
    if(previewSkins.board)  parts.push(t('shop_boards') + ': ' + t('skin_'+previewSkins.board));
    if(previewSkins.pieces) parts.push(t('shop_pieces') + ': ' + t('skin_'+previewSkins.pieces));
    document.getElementById('preview-label').textContent = '👁 ' + t('skin_preview_on') + ' — ' + parts.join(' · ');
  }
}

/* ============================================================
   LEFT SCROLL RAIL
   Shows how far down the current page you are and lets you jump
   straight to a section. Each dot reveals its name on hover.
   ============================================================ */
const SCREEN_SECTIONS = {
  'screen-menu': [
    {id:'sec-rank',      icon:'🎖️', key:'sec_rank'},
    {id:'sec-modes',     icon:'♟',  key:'sec_modes'},
    {id:'sec-tasks',     icon:'🪙', key:'sec_tasks'},
    {id:'sec-leaders',   icon:'🏆', key:'sec_leaders'}
  ],
  'screen-lobby': [
    {id:'sec-lobbyhead', icon:'🔍', key:'sec_lobby'},
    {id:'sec-rooms',     icon:'🚪', key:'sec_rooms'}
  ],
  'screen-shop': [
    {id:'sec-shophead', icon:'🛒', key:'sec_shop'},
    {id:'sec-boards',   icon:'▦',  key:'shop_boards'},
    {id:'sec-pieces',   icon:'♟',  key:'shop_pieces'}
  ],
  'screen-profile': [
    {id:'sec-profcard',  icon:'👤', key:'sec_profile'},
    {id:'sec-profstats', icon:'📊', key:'sec_stats'},
    {id:'sec-profhistory', icon:'🕘', key:'prof_history_title'}
  ],
  'screen-achievements': [
    {id:'sec-achhero',   icon:'📊', key:'sec_stats'},
    {id:'sec-achlist',   icon:'🏅', key:'sec_achievements'},
    {id:'sec-highlights',icon:'✨', key:'sec_highlights'}
  ]
};

let railSections = [];

function activeScreenId(){
  const el = document.querySelector('.screen.active');
  return el ? el.id : null;
}

function buildScrollRail(){
  const rail = document.getElementById('scroll-rail');
  const dots = document.getElementById('rail-dots');
  if(!rail || !dots) return;

  const screenId = activeScreenId();
  const defs = (currentUser && SCREEN_SECTIONS[screenId]) || [];
  railSections = defs.filter(d => document.getElementById(d.id));

  if(railSections.length < 2){
    rail.classList.remove('visible');
    dots.innerHTML = '';
    return;
  }

  dots.innerHTML = railSections.map((sec, i)=>
    `<button class="rail-dot" type="button" data-idx="${i}" onclick="scrollToSection('${sec.id}')" aria-label="${t(sec.key)}">
       <span class="rail-tip"><span class="ic">${sec.icon}</span>${t(sec.key)}</span>
     </button>`
  ).join('');

  rail.classList.add('visible');
  updateScrollRail();
}

function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 76;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function updateScrollRail(){
  if(railSections.length < 2) return;

  const doc = document.documentElement;
  const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
  const pct = Math.min(100, Math.max(0, (window.pageYOffset / scrollable) * 100));
  const bar = document.getElementById('rail-progress');
  if(bar) bar.style.height = pct + '%';

  // the section currently occupying the upper third of the viewport
  const marker = window.pageYOffset + window.innerHeight * 0.33;
  let activeIdx = 0;
  railSections.forEach((sec, i)=>{
    const el = document.getElementById(sec.id);
    if(!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset;
    if(top <= marker) activeIdx = i;
  });

  document.querySelectorAll('.rail-dot').forEach(d=>{
    d.classList.toggle('active', Number(d.dataset.idx) === activeIdx);
  });
}

function setupScrollRail(){
  window.addEventListener('scroll', updateScrollRail, { passive:true });
  window.addEventListener('resize', updateScrollRail);
  buildScrollRail();
}

/* ============================================================
   BOOTSTRAP (runs last, after all declarations)
   ============================================================ */
applyI18N();          // renders the language/theme controls on the sign-in screen
document.documentElement.setAttribute('data-theme', currentTheme);
initDatabase().then(loadGuestPrefs);
setupKeyboardShortcuts();
buildCountrySelect();
setupScrollRail();
document.addEventListener('visibilitychange', ()=>{ if(document.hidden) persistUserNow(); });
window.addEventListener('beforeunload', ()=>{ persistUserNow(); });
