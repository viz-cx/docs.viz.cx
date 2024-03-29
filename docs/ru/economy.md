# Экономика и управление

С точки зрения (само)управления, VIZ стремится быть [децентрализованным автономным обществом](./glossary.md#dao) (DAO, DAC, ДАО). Это значит, что любой может купить долю в ДАО и влиять на управление им в соответствии с этой долей.

У VIZ нет владельцев, нет стоящей за ним компании или организации. Участники владеют долевыми токенами VIZ (shares) и решают, в каком направлении должен развиваться проект. Именно владельцы долей решают проблемы VIZ, обдумывают и предлагают изменения в код, выбирают людей, которые будут поддерживать работоспособность сети, прилагают усилия для популяризации VIZ.

Участники VIZ могут объединяться в группы для решения поставленных самим себе задач. Каждый участник - часть общества VIZ. Иными словами, VIZ – это не просто децентрализованная организация, это децентрализованная [бирюзовая организация](./glossary.md#бирюзовая-организация). А цель этой организации – создать и улучшать блокчейн, на основе которого можно разрабатывать социальные приложения.

## Активы

Каждый пользователь VIZ может владеть двумя видами активов: ликвидными токенами viz и долевыми токенами shares.

## Ликвидный токен

Ликвидный токен(viz) – это токены блокчейна, которые владелец может свободно перемещать между аккаунтами и конвертировать в деньги, криптовалюту и в [долевые токены](#shares) сети VIZ. Ликвидные токены имеет смысл держать только для торговли на бирже или для переводов между аккаунтами.

## Долевой токен shares

Долевые токены(shares) дают их владельцу право выбирать делегатов, голосовать в Комитете и распределять [эмиссию](#emission) между участниками VIZ. От количества долевых токенов зависит влияние их держателя на процессы в ДАО: чем больше shares, тем выше влияние.

Shares не могут свободно перемещаться от аккаунта к аккаунту и, следовательно, не могут торговаться на бирже. Однако, один участник может их делегировать (передать часть своих полномочий, «дать попользоваться») другому участнику. Когда второй участник получит делегированные первым участником средства, он повысит своё влияние ровно на делегированное количество shares. При этом, влияние первого участника снизится. Shares, полученные делегированием, невозможно вывести в ликвидные viz. Делегированные shares можно отозвать в любой момент - они вернутся на счёт владельца через сутки.

## Конвертация токенов

Ликвидные токены можно моментально обменять на долевые, но обратная конвертация займет 28 дней (см. [Понижение доли](#shares-reduction)). При этом, коэффициент конвертации в одну и другую сторону равен 1:1 (1 shares за 1 viz и наоборот).

## Понижение доли

Перевод из shares в viz называется «понижение доли» и занимает 28 суток для всей доли. За одни сутки обменивается 1/28 часть от общего количества shares. Если участник VIZ хочет вывести из доли не все shares, понижение пройдёт быстрее. Например, если в доле 28000 shares, а участник хочет вывести 1000 shares, то вывод пройдёт за 1 день.

## Чистые shares

Чистые shares – это количество долевых токенов аккаунта без учёта переданных и полученных путём делегирования. То есть, это shares, которыми участник реально владеет и которые может обменять на viz. При голосовании за делегатов учитываются только чистые долевые токены.

## Эффективные shares

Эффективные shares – это количество чистых долевых токенов с добавлением полученных делегированием и за вычетом делегированных. Эффективная доля учитывается при распределении [эмиссии](#emission) (награждении аккаунтов) и при голосовании в Комитете.

## Эмиссия

Для обеспечения оплаты полезных действий в сети в блокчейн заложен механизм эмиссии. Скорость эмиссии установлена в коде блокчейна и может меняться делегатами только через принятие обновления кода (т.е. через хардфорк). На момент старта блокчейна скорость эмиссии задана на уровне 10% в год. При этом, абсолютный размер эмиссии пересчитывается раз в год.

Чтобы обеспечить стабильную работу сети, блокчейн распределяет эмиссию с каждым новым блоком, примерно каждые 3 секунды.

Чтобы рассчитать, сколько токенов эмитируется вместе с каждым новым блоком, можно использовать следующую формулу:

``Q = S * 10% / N``

где ``Q`` – количество токенов, которое будет эмитировано, ``S`` – общее число всех токенов VIZ, которые есть в системе (включая shares в пересчете на VIZ) на момент начала годовой эмиссии, ``N`` – количество генерируемых блоков в год.

Рассчитать ``N`` можно по следующей формуле:

``N = 365 * 24 * 60 * 60 / v``,

где ``v`` – время генерации нового блока (равна 3 секундам), а ``365 * 24 * 60 * 60`` - количество секунд в одном годе (в VIZ один год равен 365 дням).

Эмитированные токены распределяются по нескольким направлениям:

- Фонд [наград](#awards) - 40% от эмиссии в год;
- Фонд [комитета](#committee) - 40% от эмиссии в год;
- Награда [делегатам](./witnesses.md) - 20% от эмиссии в год.

Данное распределение эмиссии [установлено делегатами](./witnesses.md##inflation-witness-percent) и может меняться. Притом, консенсусное решение для этого не требуется. Проценты определяются как периодически обновляющееся медианное значение параметров, установленных делегатами.

## Награды и энергия аккаунта

Каждый аккаунт в сети VIZ может получить награду или наградить другого пользователя с помощью shares из [эмиссии](#emission). Эти награды выплачиваются из фонда наград, пополняющегося раз в блок в соответствии с [алгоритмом эмиссии](#emission-directions). Размер награды зависит от веса [награждающего аккаунта](#effective-shares) (доли shares аккаунта в общем количестве shares). 

Некоторые действия аккаунта в блокчейне (в т.ч. награждение) тратят [энергию](./accounts.md#energy) аккаунта. При этом, чем больше энергии тратит аккаунт на награду, тем больше shares он может передать другому аккаунту при награждении.

Участник VIZ сам решает, какой процент энергии потратить на конкретную награду - то есть, на какую сумму shares наградить получателя. Однако, если участник пользуется для награждения тем или иным приложением, само это приложение может ограничивать процент затрачиваемой на награду энергии.

Энергия восстанавливается со временем. Максимальное количество энергии аккаунта равно 100%. В течение 24 часов плавно восстанавливается 20% полной энергии, то есть, за 1 час 12 минут восстанавливается 1% полной энергии.

Таким образом, награждающий аккаунт ограничен энергетическими ресурсами. Это значит, что он должен эффективно расходовать свой потенциал, чтобы энергии хватило на все награды.

Рассмотрим процесс награждения более подробно.

Часть эмиссии блокчейна идёт в пул наград. При подсчёте конкретной награды учитывается пул, собранный за 5 прошедших суток. 

Рассмотрим награждение из эмиссии на примере.

Когда Алиса награждает Боба, она сообщает блокчейну количество своих эффективных shares и процент энергии своего аккаунта, идущий на награждение.

Блокчейн перемножает эти данные и получает условную величину - [rshares](#rshares) (награждающие shares). После этого rshares Алисы делятся на сумму всех rshares всех наград, произведенных за последние 5 суток. В том числе, включая рассчитываемую награду Алисы. Получается некий коэффициент, на который и умножается пул наград. Полученная величина начисляется Бобу в shares.

*Пример.*

*У Алисы ``10000`` эффективных shares. Она награждает Боба на ``15%`` энергии. Соответственно, rshares данной награды = ``10000 * 0,15 = 1500``.

*Пул наград на текущий момент равен 27397 viz. За последние 5 суток участники использовали для награждения суммарно 4379876 rshares (сюда включены и rshares рассчитываемой награды Алисы). Делим 1500 на 4379876 и умножаем на 27397. Получаем 9,382800 viz - это и будет награда Боба, которая зачислится в его долю в виде shares.*

Награждающий аккаунт может указать не только получателя награды, но и бенефициаров. Тогда награда будет делиться между получателем и бенефициарами в соответствии с указанными процентами.

В качестве бенефициаров награждающий аккаунт может указать, например, людей помогавших ему выполнить задачу, или приложение, с помощью которого отправляется награда. Бенефициаром также может быть сам отправитель награды. Впрочем, он же может быть и получателем награды.

### Награждающие shares

Награждающие  shares (rshares) - это количество shares конкретного участника, которое он обозначил для участия в пуле конкуренции. Количество rshares зависит от эффективных shares награждающего участника и энергии, которую он готов затратить на награду. Рассчитываются rshares по следующей формуле: 

``rshares = S * E%``

где ``S`` - количество эффективных shares участника, ``E%`` - количество энергии в процентах, которое он готов затратить на награду.

### Пул конкуренции

Пул конкуренции - это суммарное количество [rshares](#rshares) участников, награждавших кого-либо за последние 5 суток к текущему моменту. Притом, учитываются только rshares, участвовавшие в этих награждениях. Награждения возрастом больше 5 суток уже не учитываются. Можно сказать, что текущее состояние конкуренции «уходит в прошлое». Rshares, участвовавшие в награждениях в текущий момент времени, будут в течение 5 суток учитываться в пуле наград, конкурировать с rshares уже будущих наград и, следовательно, влиять на размер самих будущих наград. Кроме того, если пул конкуренции опустеет, то с первым же награждением будут использованы все токены из фонда наград. Но на практике такое событие крайне маловероятно.

### «Спящие» shares

«Спящие» shares – это [shares](#shares), не участвующие в распределении выплат из фонда наград. Чем больше спящих shares, тем меньше конкуренция. Следовательно, тем большую награду может дать каждый активный участник.

## Комитет

Любой участник, делающий что-то полезное для ДАО, может запросить от ДАО VIZ компенсацию за свою деятельность или попросить ДАО спонсировать свои проекты, которые могут помочь в развитии блокчейна VIZ или приложений. Это может быть код для блокчейна, маркетинговая кампания, новый сайт или приложение, документация, программа помощи новичкам – всё, что придет в голову. Главное, чтобы это было полезно для VIZ с точки зрения сообщества. Степень полезности определяют члены сообщества.

Чтобы подать заявку, участник должен обозначить минимальную и максимальную сумму ожидаемых выплат. Также необходимо указать время (от 5 до 30 дней), в течение которого заявка должна быть рассмотрена - то есть срок, за который сообщество должно принять решение.

Помимо заполнения формальных параметров заявки, участнику стоит объяснить, зачем была создана заявка и каким образом была сформирована её цена. При подаче заявки участник может указать ссылку на ресурс, где размещено такое обоснование. 

Кроме того, в заявке, помимо аккаунта создателя, прописывается аккаунт получателя. В роли получателя может выступать как сам создатель, так и доверенное лицо, имеющее большой авторитет на платформе. Иными словами, можно создать заявку с получением средств через посредника (гаранта). Посредник может, например, гарантировать, что сожжёт(или передаст в фонд комитета) все или часть полученных токенов, если исполнитель не выполнит какие-либо условия.

В течение указанного в заявке времени участники сообщества голосуют за поддержку или против заявки. Также они могут воздержаться от голосования. Голосующий участник сообщества указывает процент от максимальной суммы заявки, который считает приемлемым. Этот процент может быть в диапазоне от -100% до 100%. При голосовании учитывается количество [эффективных долевых токенов](#effective-shares) голосующего. Это значит, что на исход заявки аккаунты с большим весом оказывают большее влияние, чем аккаунты с меньшим весом.

Заявка считается принятой, если по истечении указанного срока она получает как минимум 10% ([устанавливается делегатами](./witnesses.md##committee-request-approve-min-percent)) от всех возможных голосов - то есть, от всех shares в системе (учитываются голоса и за, и против). Затем блокчейн вычисляет средневзвешенный процент за заявку и сумму к получению. Если сумма окажется больше или равна минимальной сумме заявки, то заявка будет одобрена, и получателю выплатят одобренную сумму. В противном случае заявка будет отклонена. Также заявка может быть отменена самим создателем, если он передумает.

Формула для вычисления итоговой суммы выплат после истечения срока голосования:

``SUM(Wn * Pn) / SUM(Wn) * M``,

где ``SUM`` - функция математической суммы, ``Wn`` - количество shares участника ``n``, ``Pn`` - процент, который выставил участник ``n``, ``M`` - максимальная  сумма [ликвидных токенов](#viz-token), которую указал создатель заявки.
