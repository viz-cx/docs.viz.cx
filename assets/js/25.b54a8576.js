(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{306:function(_,t,v){"use strict";v.r(t);var e=v(12),o=Object(e.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"объекты-и-структуры-в-viz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#объекты-и-структуры-в-viz"}},[_._v("#")]),_._v(" Объекты и структуры в VIZ")]),_._v(" "),t("p",[_._v("Рассматривая VIZ необходимо разделять объекты и структуры протокола (операция, транзакция, блок, ассет, версия, полномочия) от объектов и структур которые существуют непосредственно в блокчейне (на которые влияют те или иные операции).")]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"список-объектов-и-структур-протокола"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#список-объектов-и-структур-протокола"}},[_._v("#")]),_._v(" Список объектов и структур протокола")]),_._v(" "),t("p",[_._v("Все, что касается протокола находится "),t("a",{attrs:{href:"https://github.com/VIZ-Blockchain/viz-cpp-node/tree/master/libraries/protocol",target:"_blank",rel:"noopener noreferrer"}},[_._v("в каталоге /libraries/protocol"),t("OutboundLink")],1),_._v(" исходного кода C++ ноды блокчейна VIZ.")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("types / типы данных")]),_._v(" в протоколе")]),_._v(" "),t("li",[t("strong",[_._v("operations / proposal_operations / chain_operations / chain_virtual_operations / операция")]),_._v(" — все что связано с операциями и их обработкой;")]),_._v(" "),t("li",[t("strong",[_._v("transaction / транзакция")]),_._v(" — все что связано с транзакцией (id, список операций, к какому блоку она ссылается);")]),_._v(" "),t("li",[t("strong",[_._v("block_header / block / блок")]),_._v(" — содержит транзакции, ссылается на предыдущий блок, содержит extensions который может использовать делегат для инициации голосования за переход на новую версию хардфорка;")]),_._v(" "),t("li",[t("strong",[_._v("asset / ассет")]),_._v(" — структура токенов в VIZ (VIZ и SHARES, отношение ассетов разного разряда друг к другу);")]),_._v(" "),t("li",[t("strong",[_._v("base / version / версия")]),_._v(" — структура описывающая версию протокола сети, голос и время за переход на новую версию;")]),_._v(" "),t("li",[t("strong",[_._v("authority / полномочия")]),_._v(" — структура описывающая связку ключей для определенного типа доступа аккаунта;")]),_._v(" "),t("li",[t("strong",[_._v("sign_state / состояние подписи")]),_._v(" — помощник по проверке подписей (или наличия ключа, который может ее сгенерировать).")])]),_._v(" "),t("h2",{attrs:{id:"объекты-и-структуры-в-блокчеине"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#объекты-и-структуры-в-блокчеине"}},[_._v("#")]),_._v(" Объекты и структуры в блокчейне")]),_._v(" "),t("p",[_._v("Именно из объектов и структур самого блокчейна состоит состояния системы (стэйт). Каждый блок содержащий операции обрабатывается основным модулем database, который просчитывает все изменения и принимает решения по отложенным действиям. В каталоге "),t("a",{attrs:{href:"https://github.com/VIZ-Blockchain/viz-cpp-node/tree/master/libraries/chain/include/graphene/chain",target:"_blank",rel:"noopener noreferrer"}},[_._v("/libraries/chain/include/graphene/chain"),t("OutboundLink")],1),_._v(" содержатся как объекты и структуры данных, так и внутреннее устройство блокчейна (evaluator, block_log, dynamic_global_property_object, "),t("a",{attrs:{href:"https://github.com/VIZ-Blockchain/viz-cpp-node/blob/master/libraries/chain/include/graphene/chain/chain_object_types.hpp",target:"_blank",rel:"noopener noreferrer"}},[_._v("типы объектов"),t("OutboundLink")],1),_._v(").")]),_._v(" "),t("p",[_._v("Состояние системы состоит из объектов:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("dynamic_global_property_object")]),_._v(" — основной объект содержащий данные о текущем состоянии экономики и состоянии ноды (например, номер необратимого блока);")]),_._v(" "),t("li",[t("strong",[_._v("account_object")]),_._v(" — записи аккаунтов;")]),_._v(" "),t("li",[t("strong",[_._v("account_authority_object")]),_._v(" — записи полномочий для аккаунтов;")]),_._v(" "),t("li",[t("strong",[_._v("witness_object")]),_._v(" — записи делегатов;")]),_._v(" "),t("li",[t("strong",[_._v("transaction_object")]),_._v(" — используется для транзакций в очереди (это позволяет проверять отсутствии дублей у новых транзакций и удалять транзакции из очереди, если она не выполнилась до срока истечения expire);")]),_._v(" "),t("li",[t("strong",[_._v("block_summary_object")]),_._v(" — используется для индексации блоков и их hash, "),t("RouterLink",{attrs:{to:"/ru/cookbook/state.html#Уникальность-транзакций-и-tapos-transactions-as-proof-of-stake"}},[_._v("для проверки TaPoS")]),_._v(" (транзакция должна ссылаться на прошлый блок, проверка происходит как раз по индексу, построенному из объектов "),t("code",[_._v("block_summary_object")]),_._v(");")],1),_._v(" "),t("li",[t("strong",[_._v("witness_schedule_object")]),_._v(" — состояние очереди делегатов;")]),_._v(" "),t("li",[t("strong",[_._v("witness_vote_object")]),_._v(" — записи голосов за делегатов;")]),_._v(" "),t("li",[t("strong",[_._v("hardfork_property_object")]),_._v(" — записи о текущем хардфорке сети;")]),_._v(" "),t("li",[t("strong",[_._v("withdraw_vesting_route_object")]),_._v(" — записи о маршруте распределения токенов при конвертации доли;")]),_._v(" "),t("li",[t("strong",[_._v("master_authority_history_object")]),_._v(" — записи изменений мастер полномочий;")]),_._v(" "),t("li",[t("strong",[_._v("account_recovery_request_object")]),_._v(" — запросы на восстановление аккаунта;")]),_._v(" "),t("li",[t("strong",[_._v("change_recovery_account_request_object")]),_._v(" — запросы на смену доверенного аккаунта для восстановления доступа;")]),_._v(" "),t("li",[t("strong",[_._v("escrow_object")]),_._v(" — записьи о трехсторонних сделках;")]),_._v(" "),t("li",[t("strong",[_._v("vesting_delegation_object")]),_._v(" — записи о делегированной доли;")]),_._v(" "),t("li",[t("strong",[_._v("vesting_delegation_expiration_object")]),_._v(" — записи о возвращаемой делегированной доли после отмены делегирования;")]),_._v(" "),t("li",[t("strong",[_._v("account_metadata_object")]),_._v(" — отдельные записи с мета-данными аккаунта;")]),_._v(" "),t("li",[t("strong",[_._v("proposal_object")]),_._v(" — записи proposal операций;")]),_._v(" "),t("li",[t("strong",[_._v("required_approval_object")]),_._v(" — записи требуемых подтверждений для proposal операций;")]),_._v(" "),t("li",[t("strong",[_._v("committee_request_object")]),_._v(" — записи заявок в комитет;")]),_._v(" "),t("li",[t("strong",[_._v("committee_vote_object")]),_._v(" — записи голосов по заявкам в комитете;")]),_._v(" "),t("li",[t("strong",[_._v("invite_object")]),_._v(" — записи всех инвайтов;")]),_._v(" "),t("li",[t("strong",[_._v("award_shares_expire_object")]),_._v(" — записи наград, которые должны понизить конкуренцию по истечению срока;")]),_._v(" "),t("li",[t("strong",[_._v("paid_subscription_object")]),_._v(" — информация о платных подписках;")]),_._v(" "),t("li",[t("strong",[_._v("paid_subscribe_object")]),_._v(" — записи оформленных платных подписок;")]),_._v(" "),t("li",[t("strong",[_._v("witness_penalty_expire_object")]),_._v(" — записи штрафов делегатам, пропустившим блок.")])]),_._v(" "),t("h2",{attrs:{id:"объекты-и-структуры-в-api-плагинах"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#объекты-и-структуры-в-api-плагинах"}},[_._v("#")]),_._v(" Объекты и структуры в API плагинах")]),_._v(" "),t("p",[_._v("Плагины предоставляющие API могут возвращать объекты как из блокчейна, так и собственные. Простые запросы с получением объекта по id отдают данные как есть, часто пропуская объект из блокчейна через конструктор аналогичного для API, чтобы скопировать состояние и отдать пользователю его, например: плагин "),t("code",[_._v("witness_api")]),_._v(" использует отдельный объект "),t("code",[_._v("witness_api_object")]),_._v(". А плагин "),t("code",[_._v("database_api")]),_._v(" использует "),t("code",[_._v("account_api_object")]),_._v(", который дополняет стандартный объект блокчейна аккаунт типами доступа копируя туда актуальные полномочия из индекса.")]),_._v(" "),t("p",[_._v("Если плагин расширяет стандартные таблицы индексов и объекты, то он создает новую структуру, отдельно ведет учет операций и заполняет индекс. Например, так поступает плагин "),t("code",[_._v("private_message")]),_._v(", обрабатывая custom операции (создавая объекты "),t("code",[_._v("message_object")]),_._v(", наполняющие индекс "),t("code",[_._v("message_index")]),_._v(").")]),_._v(" "),t("h2",{attrs:{id:"голосуемые-параметры-сети"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#голосуемые-параметры-сети"}},[_._v("#")]),_._v(" Голосуемые параметры сети")]),_._v(" "),t("p",[_._v("Делегаты транслируют свою позицию по голосуемым параметрам сети. Блокчейн система каждый цикл очереди делегатов (21 блок) вычисляет медианные значения голосуемых параметров и фиксирует их на этот цикл. Описание параметров (в скобках указаны медианные значения на момент написания данного раздела):")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("account_creation_fee")]),_._v(" — передаваемая комиссия при создании аккаунта (1.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("create_account_delegation_ratio")]),_._v(" — коэффициент наценки делегирования при создании аккаунта (x10);")]),_._v(" "),t("li",[t("strong",[_._v("create_account_delegation_time")]),_._v(" — время делегирования при создании аккаунта (2592000 секунд);")]),_._v(" "),t("li",[t("strong",[_._v("bandwidth_reserve_percent")]),_._v(" — доля сети, выделяемая для резервной пропускной способности (0.01%);")]),_._v(" "),t("li",[t("strong",[_._v("bandwidth_reserve_below")]),_._v(" — резервная пропускная способность действует для аккаунтов с долей сети до порога (1.000000 SHARES);")]),_._v(" "),t("li",[t("strong",[_._v("committee_request_approve_min_percent")]),_._v(" — минимальный процент доли сети голосующих, необходимый для принятия решения по заявке в комитете (10%);")]),_._v(" "),t("li",[t("strong",[_._v("min_delegation")]),_._v(" — минимальное количество токенов при делегировании (1.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("vote_accounting_min_rshares")]),_._v(" — минимальный вес голоса для учёта при награждении (5000000 rshares);")]),_._v(" "),t("li",[t("strong",[_._v("maximum_block_size")]),_._v(" — максимальный размер блока в сети (65536 байт);")]),_._v(" "),t("li",[t("strong",[_._v("inflation_witness_percent")]),_._v(" — доля инфляции для награды делегатам (20%);")]),_._v(" "),t("li",[t("strong",[_._v("inflation_ratio_committee_vs_reward_fund")]),_._v(" — соотношение разделения остатка инфляции между комитетом и фондом наград (75%);")]),_._v(" "),t("li",[t("strong",[_._v("inflation_recalc_period")]),_._v(" — количество блоков между пересчётом инфляционной модели (806400);")]),_._v(" "),t("li",[t("strong",[_._v("data_operations_cost_additional_bandwidth")]),_._v(" — дополнительная наценка пропускной способности за каждую data операцию в транзакции (0% от размера транзакции);")]),_._v(" "),t("li",[t("strong",[_._v("witness_miss_penalty_percent")]),_._v(" — штраф делегату за пропуск блока в процентах от суммарного веса голосов (1%);")]),_._v(" "),t("li",[t("strong",[_._v("witness_miss_penalty_duration")]),_._v(" — длительность штрафа делегату за пропуск блока в секундах (86400 секунд);")]),_._v(" "),t("li",[t("strong",[_._v("create_invite_min_balance")]),_._v(" — минимальная сумма чека (10.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("committee_create_request_fee")]),_._v(" — плата за создание заявки в Фонд ДАО (100.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("create_paid_subscription_fee")]),_._v(" — плата за создание платной подписки (100.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("account_on_sale_fee")]),_._v(" — плата за выставление аккаунта на продажу (10.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("subaccount_on_sale_fee")]),_._v(" — плата за выставление субаккаунтов на продажу (100.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("witness_declaration_fee")]),_._v(" — плата за объявление аккаунта делегатом (10.000 VIZ);")]),_._v(" "),t("li",[t("strong",[_._v("withdraw_intervals")]),_._v(" — количество периодов (дней) уменьшения капитала (28).")])]),_._v(" "),t("h2",{attrs:{id:"служебные-аккаунты"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#служебные-аккаунты"}},[_._v("#")]),_._v(" Служебные аккаунты")]),_._v(" "),t("p",[_._v("В VIZ существуют служебные аккаунты, которые имеют заложенные в конфигурационном файле ключи доступа к определенным полномочиям:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("null")]),_._v(" — специализированный аккаунт который сжигает полученные токены. Имеет пустые полномочия, механизм сжигания токенов заложен в исходный код блокчейна.")]),_._v(" "),t("li",[t("strong",[_._v("committee")]),_._v(" — специализированный аккаунт который все полученные токены переводит в фонд комитета, позволяя таким образом жертвовать токены на развитие экосистемы. Имеет пустые полномочия. Также служит инициатором сети, для анонимного генезиса блокчейна (когда ключ подписи блоков от аккаунта committee доступен всем в конфигурационном файле). Ключ подписи сформирован из строки конкатенации строк "),t("code",[_._v("committee")]),_._v(", "),t("code",[_._v("viz")]),_._v(", "),t("code",[_._v("sign")]),_._v(", что соответствует "),t("code",[_._v("5Hw9YPABaFxa2LooiANLrhUK5TPryy8f7v9Y1rk923PuYqbYdfC")]),_._v(". После запуска сети и подключения к ней других делегатов аноним может прекратить подпись аккаунтом "),t("code",[_._v("committee")]),_._v(" и ключ подписи обнуляется до значения "),t("code",[_._v("VIZ1111111111111111111111111111111114T1Anm")]),_._v(".")]),_._v(" "),t("li",[t("strong",[_._v("anonymous")]),_._v(" — специализированный аккаунт который при получении токенов с указанным ключом (и логином, при желании) создает анонимный аккаунт (анонимность обеспечивается возможным переводом с шлюзов как биржевых так и социальных, custody сервисов). Имеет пустые полномочия. Формат заметки "),t("code",[_._v("memo")]),_._v(" для регистрации анонимного аккаунта: "),t("code",[_._v("login:public_key")]),_._v(", где "),t("code",[_._v("login")]),_._v(" желаемый логин для нового аккаунта, а "),t("code",[_._v("public_key")]),_._v(" — единый публичный ключ для всех типов полномочий. Если логин не указан, а в заметке только "),t("code",[_._v("public_key")]),_._v(", то создается анонимный сабаккаунт формата "),t("code",[_._v("nX.anonymous")]),_._v(", где X — инкрементация номера, указанного в "),t("code",[_._v("json_metadata")]),_._v(" аккаунта "),t("code",[_._v("anonymous")]),_._v(". "),t("strong",[_._v("Внимание!")]),_._v(" Если заметка не указана, средства будут сожжены аналогично переводу на аккаунт "),t("code",[_._v("null")]),_._v(".")]),_._v(" "),t("li",[t("strong",[_._v("invite")]),_._v(" — специализированный аккаунт для возможности анонимно, не имея аккаунта в блокчейне, активировать инвайт коды. Активный ключ  доступен всем в конфигурационном файле, сформирован из строки конкатенации строк "),t("code",[_._v("invite")]),_._v(", "),t("code",[_._v("viz")]),_._v(", "),t("code",[_._v("active")]),_._v(", что соответствует "),t("code",[_._v("5KcfoRuDfkhrLCxVcE9x51J6KN9aM9fpb78tLrvvFckxVV6FyFW")]),_._v(". Изначально не имеет какой-либо доли для осуществления транзакций, что может быть исправлено путем делегирования или включения системы резервной пропускной способности делегатами.")]),_._v(" "),t("li",[t("strong",[_._v("viz")]),_._v(" — аккаунт инициатор цепочки в генезис блоке, приватный ключ "),t("code",[_._v("5JabcrvaLnBTCkCVFX5r4rmeGGfuJuVp4NAKRNLTey6pxhRQmf4")]),_._v(", был сброшен на пустой после предустановки продажи субаккаунтов за 10 000 VIZ (получатель "),t("code",[_._v("committee")]),_._v(").")])])])}),[],!1,null,null,null);t.default=o.exports}}]);