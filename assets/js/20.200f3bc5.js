(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{301:function(t,a,r){"use strict";r.r(a);var v=r(12),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"основные-понятия"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#основные-понятия"}},[t._v("#")]),t._v(" Основные понятия")]),t._v(" "),a("p",[t._v("Блокчейн VIZ относится к семейству Graphene (блокчейн-технология написанная на C++, открытый код). Исходный код Graphene доступен во множестве вариаций, так как он форкался (копировался) и видоизменялся множество раз (например: BitShares, Steem, VIZ, служил основой для EOS).")]),t._v(" "),a("p",[t._v("Несмотря на общие элементы, в каждой системе есть достаточно много различий в объектах, структурах данных и внутренних механизмах, а также в экономике. Graphene - своего рода каркас, движок для блокчейн решений. Его структуру можно долго изучать, но для разработчиков приложений на том или ином блокчейне нет необходимости досконально знать, как устроен обмен данных между нодами, как происходит синхронизация и хранение данных в памяти. Главное - разобраться в основах.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"нода-блокчеин-системы"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#нода-блокчеин-системы"}},[t._v("#")]),t._v(" Нода блокчейн-системы")]),t._v(" "),a("p",[t._v("Программное обеспечение, которое связывается с другими нодами сети, принимает и транслирует транзакции другим нодам, ведет учет и обработку блоков (подробнее в разделе "),a("RouterLink",{attrs:{to:"/ru/cookbook/node-types.html"}},[t._v("Типы нод")]),t._v(").")],1),t._v(" "),a("h2",{attrs:{id:"аккаунты"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#аккаунты"}},[t._v("#")]),t._v(" Аккаунты")]),t._v(" "),a("p",[t._v("В VIZ используется модель аккаунтов. Аккаунты входят в общее пространство имен, хранят в себе токены и публичные ключи доступа.")]),t._v(" "),a("h2",{attrs:{id:"ключи-и-типы-полномочии"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ключи-и-типы-полномочии"}},[t._v("#")]),t._v(" Ключи и типы полномочий")]),t._v(" "),a("p",[t._v("Ключи бывают приватные и публичные. С помощью приватного ключа можно подписать сообщение. С помощью публичного ключа можно доказать факт подписи сообщения. Каждому приватному ключу соответствует единственный публичный ключ. Именно публичные ключи хранятся в блокчейн-системе. Используя их, ноды могут удостовериться, что то или иное действие инициировал владелец приватного ключа (соответствующего публичному ключу).")]),t._v(" "),a("p",[t._v("Аккаунт в блокчейне VIZ содержит три типа полномочий:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("master")]),t._v(" — отвечает за право владения аккаунтом;")]),t._v(" "),a("li",[a("strong",[t._v("active")]),t._v(" — отвечает за управление токенами аккаунта;")]),t._v(" "),a("li",[a("strong",[t._v("regular")]),t._v(" — отвечает за обычные операции (например, награждение).")])]),t._v(" "),a("p",[t._v("Каждый тип полномочий может содержать список доверенных аккаунтов, которые могут подписать и выполнить операцию данного типа доступа от лица исходного аккаунта. Также каждый тип полномочий может содержать один или несколько публичных ключей разного веса (для возможности управления аккаунтом через multisig, когда аккаунтом владеют несколько пользователей).")]),t._v(" "),a("p",[t._v("Обычно аккаунт содержит либо единый ключ для всех типов полномочий, либо по одному ключу на каждый тип полномочий.\nАккаунт дополнительно содержит memo-ключ, который используют для кодирования сообщений между участниками сети.")]),t._v(" "),a("h2",{attrs:{id:"токены-viz-и-доля-сети-shares"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#токены-viz-и-доля-сети-shares"}},[t._v("#")]),t._v(" Токены VIZ и доля сети SHARES")]),t._v(" "),a("p",[t._v("Токен VIZ является передаваемым (переносимым), он не участвует в управлении, но может быть переведен в социальный капитал (SHARES). Данную операцию в других блокчейнах часто называют стейкинг (staking). Аккаунт, владеющий социальным капиталом, может принимать участие в управлении.")]),t._v(" "),a("h2",{attrs:{id:"делегаты"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#делегаты"}},[t._v("#")]),t._v(" Делегаты")]),t._v(" "),a("p",[t._v("Аккаунт может заявить о своем намерении быть делегатом. Делегат (witness) избирается участниками сети (через процедуру голосования) и участвует в очереди делегатов для подписания блоков.")]),t._v(" "),a("p",[t._v("Участник сети может проголосовать как за одного, так и за нескольких делегатов, которые разделят между собой вес его голоса поровну. Чем больше социального капитала проголосует за делегата, тем выше он будет в очереди делегатов для подписания блоков.")]),t._v(" "),a("p",[t._v("Очередь делегатов состоит из 21 слота: 11 мест зафиксированы за делегатами, набравшими наибольшее количество голосов, остальные 10 мест занимают делегаты в плавающей конкурирующей очереди согласно набранным голосам.")]),t._v(" "),a("h2",{attrs:{id:"транзакции"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#транзакции"}},[t._v("#")]),t._v(" Транзакции")]),t._v(" "),a("p",[t._v("Пользователи создают операции (действия аккаунта в сети, подробнее в разделе "),a("RouterLink",{attrs:{to:"/ru/cookbook/operations.html"}},[t._v("Операции и их типы")]),t._v("), формируют из них транзакцию, которую подписывают приватным ключом аккаунта нужного типа полномочий.")],1),t._v(" "),a("h2",{attrs:{id:"блоки"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#блоки"}},[t._v("#")]),t._v(" Блоки")]),t._v(" "),a("p",[t._v("Ноды делегатов получают от всех узлов сети транзакции, которые отправили в сеть пользователи. Делегат, чья очередь подошла подписывать блок, формирует из очереди транзакций блок и отправляет его другим узлам сети. Новый блок формируется каждые 3 секунды. Все узлы сети проверяют подписи делегата, подписи пользователей в транзакциях и применяют операции по очереди. Таким образом формируется состояние системы (подробнее в разделе "),a("RouterLink",{attrs:{to:"/ru/cookbook/state.html"}},[t._v("Состояние (стэйт) системы")]),t._v(").")],1),t._v(" "),a("h2",{attrs:{id:"консенсус"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#консенсус"}},[t._v("#")]),t._v(" Консенсус")]),t._v(" "),a("p",[t._v("VIZ использует консенсус Fair DPoS (Delegated Proof of Stake). Ноды хранят два состояния системы: необратимое и обратимое. Необратимость (irreversible) наступает тогда, когда в самой длинной цепочке блоков подтвердят свое участие в ней примерно 15 делегатов (75% от количества делегатов в очереди). После этого нода не может откатить более ранние транзакции, таким образом наступает финальность состояния сети (finality).")]),t._v(" "),a("p",[t._v("В обычном состоянии необратимость наступает за 15 блоков (около 45 секунд). Поэтому все важные операции, требующие проверки, могут получить подтверждение только достигнув необратимости.")]),t._v(" "),a("h2",{attrs:{id:"плагины"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#плагины"}},[t._v("#")]),t._v(" Плагины")]),t._v(" "),a("p",[t._v("Плагины расширяют возможности ноды, могут обрабатывать отдельные операции и управлять собственными структурами данных. Есть как обязательные плагины (отвечающие за соединение между узлами сети), так и необязатальные (например, история операций аккаунтов, подробнее в разделе "),a("RouterLink",{attrs:{to:"/ru/cookbook/plugins-api.html"}},[t._v("Плагины и их API")]),t._v(").")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);