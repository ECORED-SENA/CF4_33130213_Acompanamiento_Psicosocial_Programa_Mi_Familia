<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 ¿Qué sucede durante el acompañamiento psicosocial? 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img1.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Este apartado describe la estructura del acompañamiento psicosocial, encaminado a movilizar procesos participativos, sensibles, flexibles, abiertos y con disposición a reconocer, valorar y ajustarse a las diferencias, particularidades y procesos de cada familia.
        p Se podrá identificar cómo estos elementos, que son transversales desde los enfoques de Mi Familia, dando forma al encuadre del proceso, delinean una perspectiva para el abordaje y la construcción del plan familiar y orientan la implementación de los ciclos de atención a través de las visitas, los encuentros y las acciones de convergencia de oferta y gestión de redes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p El acompañamiento psicosocial propuesto por Mi Familia consiste en la atención y apoyo personalizado a las familias, que tiene como fin lograr que cada una de ellas reconozca y fortalezca sus potencialidades y recursos, para la consolidación de vínculos familiares, dinámicas y relaciones basadas en el respecto, la solidaridad, el amor, el cuidado mutuo, entre otras, para la promoción de los derechos y la prevención de cualquier vulneración o amenaza de sus integrantes y en especial hacía los niños, niñas y adolescentes 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ICBF, 2022, p. 45).
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img3.svg')
    p.mb-5 De acuerdo con lo anterior, el profesional de acompañamiento familiar tendrá la labor de acercarse a las familias de manera asertiva, de tal forma que pueda establecer una comunicación en doble vía con la familia, que permita el entendimiento de su situación e intereses en cuanto a su fortalecimiento, para ello se sugiere que se tengan en cuenta acciones de encuadre, en donde se presentará y establecerán las impresiones en cuanto al acompañamiento y los compromisos que este implica de acuerdo al tiempo de atención que ofrece la modalidad Mi Familia. 
    .row.justify-content-center
      .col-12.col-lg-8.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se invita, entonces, a que se tenga presente que el acompañamiento parte del reconocimiento de las capacidades de las familias, por mínimas que sean, por ejemplo, una familia con una perspectiva negativa o fatalista en relación con su vida presente y futura, en donde el profesional pueda identificar que pese a esta visión la familia tiene la intención (disposición) de mejorar y de incluir a todos sus integrantes en un proceso participativo.
    p.mb-5 La profesional y la familia se orientarán por la generación de un vínculo de apoyo, recuerde que, al tener el contacto con la familia, el profesional se vuelve parte del sistema de ayuda de la familia, por tanto, se deberá desarrollar a partir del respeto y el establecimiento de cooperación constante, por ello es necesario que haya claridad desde el inicio, frente a como se desarrollará el acompañamiento psicosocial.
    
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Encuadre: ¿cómo nos acercamos a las familias? 
    .bg13
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-11(data-aos="fade-left")
            p En este paso del proceso de atención, que sucede entre la primera y la segunda visita domiciliaria que realiza el PAF a la familia beneficiaria, el protagonista es el vínculo que se empieza a construir, por ello se espera que entre estos actores se desarrolle una comunicación fluida, movilizada por la experiencia conversacional del profesional que acompaña el proceso.
          .col-lg-1.mb-4.mb-lg-0
            figure
              img.img-t(src='@/assets/curso/tema2/img4.svg').mx-auto
    p.mb-5 En ese sentido, la forma de atención estará dirigida a lograr la comprensión de la situación que genera el riesgo y realizar un acompañamiento psicosocial a la familia y sus integrantes, con el fin de promover mayor apropiación de los recursos o capacidades para transformar la situación y desarrollar o fortalecer prácticas protectoras (ICBF, 2019), tal como se puede observar en el siguiente video.
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rNIbz_sMsQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img5.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Los profesionales deben mantener una actitud apreciativa hacia los saberes de las familias y su cultura, de manera que pueda entrar en un diálogo de saberes partiendo del enfoque diferencial de derechos; por ello, se sugiere al profesional desarrollar las visitas domiciliarias con las familias beneficiarias con metodologías acordes a sus usos y costumbres, que permitan fortalecer sus capacidades a partir del desarrollo de los temas que se definan conjuntamente, las cuales se espera que sean participativas, incluyentes, dinámicas, cálidas y respetuosas. 
    
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 ¿Cómo acompañamos desde el ciclo básico y de profundización a las familias? Desarrollo del acompañamiento psicosocial a partir del ciclo de atención
    p.mb-5 En la modalidad Mi Familia, se desarrollan dos ciclos de atención, a continuación, se describe cada uno de ellos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-right")
      .row(titulo="Ciclo básico")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Se concentra en los elementos de cuidado y protección al interior de la familia, en especial cuando están dirigidos a niños, niñas y adolescentes (capacidades parentales). 

          p El desarrollo del ciclo básico se realiza a través de una secuencia temática sugerida. Sin embargo, esta secuencia se puede ajustar de acuerdo con el criterio del profesional de acompañamiento, en respuesta a las necesidades, intereses, expectativas y/o situaciones emergentes en las familias, de tal suerte que los criterios de pertinencia y oportunidad, según la realidad familiar, conlleven a una mayor significancia e incidencia del proceso. (ICBF, Guía de Orientaciones Metodológicas Mi Familia, 2022, p. 56) 

          p La primera visita al domicilio o su equivalente no presencial corresponde a una sesión de encuadre y de reconocimiento entre la familia y el profesional la cual se ha denominado ‘Zarpando a la aventura’. La última visita constituye el cierre del proceso, se ha denominado ‘Con cada despedida llegan nuevos comienzos’ e invita a la familia a continuar avanzando en su proyecto de vida familiar e impulsando los proyectos de vida individuales de cada uno de sus integrantes. Estas dos sesiones se consideran parte del ciclo básico de acompañamiento dado que todas las familias beneficiarias las desarrollan. 
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')
          a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
            span Ampliar imagen
            i.fas.fa-search
            .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img6.svg', style="width: 900px").m-auto
      .row(titulo="Ciclo de profundización")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Se define de manera conjunta entre el PAF y la familia y considera elementos que responden a las particularidades e intereses de las mismas. Este ciclo permite profundizar en aspectos propios del sistema de cuidado y protección al interior de la familia o abordar estrategias de protección frente a los sistemas externos. Por ejemplo, frente a lo primero, en este ciclo se puede desarrollar el tema de seguridad en el hogar como complemento a los abordajes alrededor del cuidado y autocuidado o involucramiento parental como profundización de los desarrollos alrededor de la conexión - comunicación. 
          p Asimismo, en este ciclo se pueden abordar temas relacionados con las estrategias de protección frente a sistemas externos como la prevención del consumo de sustancias psicoactivas, violencia sexual, riesgos digitales, promoción de los derechos de las familias y de los niños, niñas y adolescentes, la capacidad de agencia de las familias, entre otros.
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen')
          a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
            span Ampliar imagen
            i.fas.fa-search
            .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img7.svg', style="width: 900px").m-auto
    p.mb-5 Los siguientes videos profundizan un poco más en cada ciclo de atención:
    TabsB.color-acento-contenido.mb-5.color_img-tab(data-aos="zoom-in-down")
      .py-4.py-md-5(titulo="Ciclo básico" :icono="require('@/assets/curso/tema2/img8.svg')")
        .row
          .col-lg-12.mb-4.mb-lg-0
            h4 Ciclo básico
            figure(data-aos="zoom-in").mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/KoEWjsFzuwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .py-4.py-md-5(titulo="Ciclo de profundización" :icono="require('@/assets/curso/tema2/img8.svg')")
        .row
          .col-lg-12.mb-4.mb-lg-0
            h4 Ciclo de profundización
            figure(data-aos="zoom-in").mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/6ecLkZt4SK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
        
    p.mb-5 Para cada una de las visitas se proponen temas básicos abarcadores, que se pueden desarrollar con la familia, dependiendo de las necesidades e intereses de esta, es decir, se puede hacer énfasis según lo que evidencia el PAF en las interacciones con la familia. 
    
    .row.justify-content-center.ps-3.mb-5
      .col-lg-12
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img13.svg")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  h4 Temáticas para el Acompañamiento Psicosocial Familiar
                  p Para las visitas de profundización, la modalidad Mi Familia propone una serie de temáticas, sin embargo, el PAF junto con la UAT estará en capacidad de diseñar nuevas temáticas, según el contexto territorial y realidad familiar (ICBF, 2022, p. 59).
                .col-sm-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                    span.text-white Ver imagen
                    i.fas.fa-search(style="color: white")
                    .indicador--click(v-if="mostrarIndicador")
                  ModalA(:abrir-modal.sync="modal1")
                    .row
                      .col-12
                        figure
                          img(src='@/assets/curso/tema2/img8.png', style="width: 900px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3	Definición del Plan Familiar                     
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img9.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Para el desarrollo adecuado del acompañamiento psicosocial a las familias beneficiarias, se debe construir un Plan Familiar, el cual que se refiere a un acuerdo entre el profesional y las familias entorno al proceso que llevará la familia como beneficiaria de la modalidad, el cual se centra en la definición del abordaje a la familia con el apoyo de las temáticas que guiarán las sesiones del acompañamiento. 
        p El Plan Familiar se construye de acuerdo con el tipo de acompañamiento, los resultados de los instrumentos de caracterización y diagnóstico, la observación y aportes del profesional de acompañamiento, y las necesidades, intereses, expectativas y/o situaciones emergentes en las familias. Cuando termina el acompañamiento, se realiza una sesión de cierre donde aplican nuevamente los Instrumentos de habilidades, lo cual permitirá conocer una aproximación a los resultados del proceso con cada una de las familias. (ICBF, 2022, p. 47).

    .bg1.p-2
      .row.align-items-center.p-3.mb-5
        .col-lg-12
          figure
            img.mb-3(src='@/assets/curso/tema2/img8.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Para el buen desarrollo del acompañamiento, se deben revisar los instrumentos de caracterización presentados en el componente formativo Estructuración del acompañamiento psicosocial familiar y estudiar las especificidades de cada uno de estos consignados en las publicaciones (Ficha de Caracterización, Genograma, Ecomapa, Mapa de pertenencia y Medición de Habilidades).
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-6.py-4
        img.img-t.mb-3(src='@/assets/curso/tema2/img9.svg', alt='')  
        figcaption <b>Nota.</b> Plan familiar. Cartilla Zarpando a la Aventura (ICBF 2021).   
      .col-lg-6
        .row
          .col-12.p-4.bg14
            .row.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/img10.svg', style="width: 70px").m-auto
              .col-lg-12
                p.mb-0 Existen muchos tipos de <em>buyer</em> persona, los cuales se pueden catalogar en tres categorías principales, especialmente perceptibles hacia el final del proceso de la toma de decisiones. Aunque el <em>buyer</em> persona no siempre es la persona que se encarga de tomar la decisión de compra del producto, sí juega un papel vital motivándolo.
    p.mb-5 En este Plan Familiar se encuentra el cronograma de visitas y encuentros, donde la familia consigna la fecha y hora acordadas para cada visita o encuentro; espacios para la elaboración del genograma y ecomapa o mapa de pertenencia (actual y potencial), que hace parte del proceso de caracterización y diagnóstico; presenta también infografías sobre los temas abordados como insumo para las sesiones con el PAF o para análisis y revisión por parte de las familias de manera autónoma e incluye apartados para consignar los aprendizajes y compromisos de cada sesión. Adicionalmente, permite a la familia precisar información sobre los procesos de convergencia de oferta y gestión de redes que desarrolla con apoyo del talento humano del operador de la modalidad. (ICBF, 2022, p. 49).          
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Visitas en el hogar 
    p.mb-5 Son una forma de intervención psicosocial para brindar acompañamiento a las familias en su residencia, donde se busca observar y comprender las interacciones de los individuos y su sistema familiar en sus contextos cotidianos.  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Estas visitas tienen como propósito identificar y promover recursos y potencialidades en las familias a fin de lograr el reconocimiento, resignificación, resolución y abordaje de situaciones que obstaculizan o facilitan el desarrollo integral del grupo familiar, y promover cambios que contribuyan a la protección integral de los niños, niñas y adolescentes. 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ICBF, 2022, p. 14).
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img11.svg') 
    p Es importante que se pueda concertar con las familias los horarios más adecuados para la realización de estas visitas, así como el diseño de actividades que involucren a todos los integrantes. Las visitas o encuentros con las familias en domicilio buscan motivar la resignificación de su proyecto de vida como familia y movilizar los proyectos individuales, teniendo como punto de partida las capacidades de la familia como colectivo. Es importante mantener el lenguaje asertivo, inclusivo y respetuoso durante todo el desarrollo de las acciones de acompañamiento. 
    p.mb-5 Para la realización de las visitas en domicilio por parte del profesional de acompañamiento familiar, deben contemplarse las siguientes consideraciones: 
    .row.mb-5.justify-content-center
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bg15.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
          p La puntualidad y cumplimiento de los tiempos dispuestos para la visita.
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bg15.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
          p Los procedimientos no quirúrgicos necesarios para rehabilitación como las terapias física, respiratoria, ocupacional, de lenguaje, entre otras.
      .col-12.col-md-6.col-lg-3
          .bg15.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
            p Los profesionales deben mantener una actitud apreciativa hacia los saberes de las familias y su cultura.
    
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Encuentros familiares y comunitarios
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-7(data-aos="fade-left")
        p El ecomapa le permite a cada integrante y a la familia en general identificar su grado de satisfacción, de cercanía y vinculación con una red, así como establecer potencialidades o situaciones problemáticas. Con ese nivel de satisfacción o de insatisfacción, la persona, la familia y los profesionales pueden identificar acciones posibles para ampliarla, modificar vínculos y resolver las situaciones problemáticas en cada área.
        p Para conocer las redes de las familias beneficiarias de la oferta Mi familia se propone el uso del ecomapa. Este instrumento permite identificar de forma rápida el estado en términos relacionales de la familia, tanto al interior (relaciones filiales y afectivas) como con actores externos, ya sean formales o informales, tales como el deporte, el colegio, los amigos o el empleo. 
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img31.png').m-auto
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img32.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Debido a que es la extensión o complemento del genograma, también muestra las relaciones de la familia, lo que permite al profesional de acompañamiento trazar una ruta de acción más cercana a las realidades de la familia, de acuerdo con su propio desarrollo y la relación o construcción con su territorio. En este sentido, el concepto de territorio no solo obedece a la idea de un área física delimitada, habitada y usada, sino que es producto de las relaciones sociales entre lo que se considera personas en cada una de las sociedades, y entre estas y su entorno (Ardila, 2006).
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img33.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p El ecomapa puede ser construido por cada integrante de manera autónoma o en conjunto con el PAF en una conversación en la cual, además, se construya el sentido de cada relación y la posibilidad de enriquecerla en el futuro inmediato. Se solicita a la persona o a la familia que represente en el gráfico a las personas de su red social en un momento concreto, según se defina por parte del profesional para el desarrollo de la intervención.
        p En la construcción del ecomapa se hace necesario registrar todos los actores con los que la familia tiene relación, incluyendo los que de alguna forma generen procesos de estrés o malestar (grupos armados, venta de sustancias psicoactivas, vertederos de aguas negras, entre otros), con el fin de identificar estos actores y buscar formas de protección de la familia con estrategias individuales o comunitarias que minimicen los riesgos que estos pueden generar para las familias y las comunidades.
    .bg13
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-11(data-aos="fade-left")
          p Teniendo en cuenta lo anterior, cobra relevancia el papel del gestor de oferta y del profesional de acompañamiento familiar, ya que son los encargados de realizar el análisis de las redes a las que pertenece la familia y su relación con estas, así como de identificar que otras redes existen en el territorio, además de ayudar a gestionar situaciones que estén presentes en la familia que no sean generativas.
        .col-lg-1.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema2/img34.svg').mx-auto
    .row.mb-5
      .col-12.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img35.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es importante que estos dos profesionales estén en constante comunicación y tengan claridad que no todas las familias deben estar en las mismas redes, ya que su aporte o no, depende de las dinámicas familiares y comunitarias. Ahora bien, para valorar, identificar acciones de intervención y realizar seguimiento es necesario que tanto el profesional de acompañamiento como el gestor de oferta registren la información en los formatos y sistemas de información que disponga el ICBF para tal fin. <br><br> Por lo anterior, en el aplicativo Mi familia se definieron las siguientes variables que se deben recoger en conversación con la familia y, como resultado de la elaboración del ecomapa lo siguiente:
    .row.justify-content-center.mb-5
      .col-lg-10.col-xl-8
        figure
          img(src='@/assets/curso/tema2/img36.svg').mb-3
    p.mb-5 Es importante tener presente que estos elementos deberán ser de especial atención por parte del profesional y del gestor para movilizar el componente de convergencia de oferta, gestión de redes y realizar los reportes en el seguimiento al componente. 
    Separador
    #t_2_5 
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Instrumentos de medición de habilidades
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img37.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Para complementar la información que se recoge a través de la ficha sociofamiliar, el genograma y el ecomapa, el programa Mi familia incorpora cuatro instrumentos que permiten medir habilidades relevantes en la vida familiar y que se relacionan con los objetivos que busca el programa. Estos instrumentos son la autoeficacia parental, la disciplina positiva, la regulación emocional y la vinculación.
        p Estos instrumentos se seleccionaron luego de una amplia revisión y tienen en común que han sido validados a través de estudios e investigación. A continuación se presenta el valor que tienen estos:
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-12.py-4
        .tarjeta--azul1.p-4.p-md-5
          SlyderA(tipo="b").color_slyder-a_botones
            .row.justify-content-center.align-items-center        
              .col-lg-6.mb-4.mb-md-0
                h4.mb-4 Perfiles o patrones
                p Proporcionan información adicional al PAF y a la familia, dado que proveen algunos perfiles o patrones en relación con las habilidades de interés, que permitirán realizar una conversación acerca de las razones por las cuales la familia obtuvo un determinado resultado, lo que piensa de esa información y las posibles transformaciones.
              .col-lg-6
                img.img-t(src='@/assets/curso/tema2/img38.png', alt='') 
            .row.justify-content-center.align-items-center              
              .col-lg-6.mb-4.mb-md-0
                h4.mb-4 Hipótesis de trabajo
                p Dicha información le permite al PAF y a la familia conocer el estado inicial en relación con estos temas para generar hipótesis de trabajo e identificar énfasis para las sesiones del ciclo básico y seleccionar las temáticas para las sesiones de profundización. Al PAF, en particular, le ayuda a orientar el acompañamiento psicosocial y a guiar el abordaje general de la atención.
              .col-lg-6
                img.img-t(src='@/assets/curso/tema2/img39.png', alt='')
            .row.justify-content-center.align-items-center             
              .col-lg-6.mb-4.mb-md-0
                h4.mb-4 Avances
                p Estos instrumentos se aplican al inicio y al final del acompañamiento como aproximación a los resultados del mismo, igualmente, establecen los avances de las familias y la autopercepción sobre sus avances, de tal manera que puedan visualizarlos de manera complementaria a través de la información que arrojan este tipo de instrumentos.
              .col-lg-6
                img.img-t(src='@/assets/curso/tema2/img40.png', alt='')
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img5.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Ahora, se presenta para cada instrumento la definición de la habilidad o aspecto que pretende medir, por qué es importante para el fortalecimiento familiar, a quiénes se aplica y una descripción general del mismo:
    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-12(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul4")
          .row.align-items-center(titulo="Autoeficacia parental")   
            .col-lg-9.my-3.mb-4.mb-md-0
              p Se refiere a la percepción que tienen las personas sobre su propia capacidad para desempeñarse como buenos padres o madres, y se ve afectada por distintos factores como el conocimiento que tenga el padre o la madre sobre prácticas de crianza, el acceso a información que le ayude a entender las necesidades de su hijo o hija en cada momento de su desarrollo, entre otros.
              p <b>Es necesario tener en cuenta que el instrumento de eficacia parental tiene 17 preguntas y se compone de dos subescalas: la de autoeficacia y la de satisfacción.</b> La primera corresponde a una dimensión instrumental que refleja la competencia, la capacidad de resolución de problemas y la capacidad en el papel de los padres y las madres, mientras que la segunda es una dimensión afectiva que refleja la frustración, la ansiedad y la motivación de los padres. Dentro de las 17 preguntas, 8 se dirigen a medir la satisfacción y 9 la autoeficacia, y en todas ellas la persona tiene 6 opciones de respuesta que son: totalmente en desacuerdo, bastante en desacuerdo, en desacuerdo, de acuerdo, bastante de acuerdo y totalmente de acuerdo.
            .col-lg-3.my-3 
              img.img-a.img-t(src='@/assets/curso/tema2/img6.svg', alt='')  
            p <b>Este instrumento es de autoreporte, está dirigido a los padres y las madres de los NNA del grupo familiar. Esta relación de parentesco puede ser biológica, jurídica o de crianza. </b>
          .row.align-items-center(titulo="Disciplina positiva ")   
            .col-lg-9.my-3.mb-4.mb-md-0
              p La disciplina positiva o crianza respetuosa se puede considerar como una forma no violenta y respetuosa de interactuar con los niños, las niñas y los adolescentes. Es una manera de aproximación que le permite a los padres y las madres ayudar, enseñar, orientar y relacionarse con los NNA de forma que puedan tener el apoyo y la información necesaria para su desarrollo (Durrant, 2011). Estas formas de aproximarse se pueden analizar a través de las prácticas que los padres aplican para interactuar en la crianza de sus hijos. 
              p En palabras simples, “disciplina” significa “enseñar”. La disciplina positiva es la forma más amorosa de enseñanza. Involucra la crianza, confianza, conexión, habilidades para compartir, y crear un ambiente donde los niños puedan desarrollar sus capacidades y confianza. La disciplina positiva está soportada sobre la enseñanza, entendimiento, motivación y comunicación, no en el castigo. El castigo busca que los niños y las niñas “paguen” por lo que han hecho. La disciplina está diseñada para ayudar a los niños y las niñas a aprender de lo que han hecho (Nelsen, Erwin y Duffy, 2015). 
            .col-lg-3.my-3 
              img.img-a.img-t(src='@/assets/curso/tema2/img43.png', alt='')  
            p <b>El instrumento cuenta con 29 afirmaciones que miden 5 prácticas específicas: parentalidad positiva (6 afirmaciones); involucramiento parental (10 afirmaciones); bajo monitoreo o supervisión (10 afirmaciones); y castigo físico (3 afirmaciones). Este instrumento de autoreporte es multifuente, es decir, está dirigido a los padres, las madres o a quien ejerza este rol y a los adolescentes entre los 12 y los 17 años, con el objetivo de obtener una perspectiva bidimensional de las prácticas parentales.</b>
          .row.align-items-center(titulo="Regulación emocional")     
            .col-lg-9.my-3.mb-4.mb-md-0
              p Para entender el concepto de regulación emocional es necesario partir de la noción de emoción que, de acuerdo con Gómez y Calleja (2016), se puede entender como “una respuesta del individuo ante los estímulos del entorno que coordina diferentes sistemas y tiene como objetivo proporcionar información para influir en él según sus necesidades” (p. 97). Además, son ‘respuestas inteligentes’ que se construyen racionalmente (Naussbaum, 2001) y, por esa razón, “independientemente de la perspectiva desde la que se aborde el concepto, es considerada como una de las variables psicológicas de más impacto en la vida de los individuos, ya que determina el comportamiento en gran medida” (Gómez y Calleja, 2016, p. 98).
              p El reconocimiento de las emociones y la regulación emocional se ha considerado un aspecto fundamental del desarrollo individual y familiar dada su relación con la autoestima y la satisfacción con la vida, la inteligencia emocional, la competencia social, la personalidad, el temperamento, los procesos de aprendizaje, el desempeño académico, el desempeño laboral, entre otros.
            .col-lg-3.my-3 
              img.img-a.img-t(src='@/assets/curso/tema2/img44.png', alt='') 
            p <b>Este instrumento se aplica a quienes en la familia cumplan el rol de padres, madres o a los cuidadores (cuando no estén presentes el padre o la madre), a los niños, las niñas y los adolescentes entre 12 y 17 años.</b>
          .row.align-items-center(titulo="Vinculación")     
            .col-lg-9.my-3.mb-4.mb-md-0
              p El vínculo supone la sensibilidad con las capacidades del otro y no solo con sus necesidades. Supone conocimiento y respeto por las aspiraciones del otro. Implica la comprensión de las dificultades del otro según como este las vive y no según como se perciben desde fuera. De esta manera, los vínculos afectivos permiten que las personas que los desarrollan se sientan parte significativa del colectivo (ICBF y MEN, 2009).
              p Por tanto, la vinculación es un proceso psicoemocional donde interactúan las madres y los padres con sus hijas e hijos, que permite que reconozcan su entorno e influye en las áreas psicológicas, física, cognitiva, social y emocional, así como en el mejoramiento de su confianza y resiliencia contribuyendo a un desarrollo cerebral sano (Pérez-Abarca, Lucchini-Raies, & Márquez-Doren, 2020). 
            .col-lg-3.my-3 
              img.img-a.img-t(src='@/assets/curso/tema2/img45.png', alt='') 
            p <b>El instrumento de vinculación del programa Mi familia contempla dos subescalas, cariño y hostilidad. La primera hace referencia al relacionamiento con el otro mediante acciones y muestras de simpatía, apego, amistad y amor; mientras que la subescala de hostilidad da cuenta de las acciones agresivas o adversas entre las personas. Este instrumento incluye en total doce ítems y se aplica a los niños, las niñas y los adolescentes entre 12 y 17 años que hagan parte de la familia que recibe el acompañamiento.</b>
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img46.svg').m-auto
      .col-lg-8(data-aos="fade-left")
        p Cabe decir de manera adicional que en la autoeficacia parental la confianza de los padres y las madres en sus propias capacidades los hacen sentir más satisfechos, motivados y tener mayor tolerancia frente a la frustración (Farkas-Klein, 2008). Lo anterior, se relaciona con la actitud con la que las madres y los padres afrontan las responsabilidades de cuidado y crianza de sus hijos e hijas y en su capacidad para ofrecerles un entorno físico y psicológico de calidad.
        p También en la disciplina positiva, según Kuppens & Ceulemans (2018) las prácticas parentales juegan un rol importante en el desarrollo de la capacidad de autorregulación emocional de los niños, las niñas y los adolescentes, es decir, con la habilidad para entender sus emociones y la de los demás y adaptar su comportamiento a la demanda del entorno (p. 168).
    p De hecho, Dennis (2006) y Forst, Worthman y Reifel (2008) muestran que la calidad de las emociones que se involucran en la relación padres e hijos influye en la capacidad de los NNA de regular sus emociones, mostrando efectos negativos entre la exposición de reacciones adversas con ansiedad, depresión, tristeza, nerviosismo y rabia (Clark & Watson, 1991). Esto quiere decir que entre mayor involucramiento tengan los padres y las madres con los hijos e hijas, los NNA tendrán un manejo más asertivo de sus emociones y las formas en que expresan estas a las demás personas, brindándoles la posibilidad de aumentar sus habilidades sociales.
    p Para medir prácticas parentales Mi familia utiliza la adaptación en español de la escala de Alabama Parenting Questionnaire (Orpinas, Rico & Martínez-Cox, 2012).
    .row.mb-5
      .col-12.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img47.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La emoción (en la regulación emocional), entonces, es considerada como una de las variables psicológicas de más impacto en la vida de los individuos, ya que determina el comportamiento en gran medida. En relación con lo anterior, la regulación emocional se describe como el proceso a través del cual los individuos toman decisiones sobre sus emociones, influenciándolas para experimentar aquellas que les permitan alcanzar metas tanto personales como sociales. Los mecanismos de influencia a través de los cuales se modifican las emociones son denominados estrategias de regulación emocional.
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-7(data-aos="fade-left")
        p Finalmente, el vínculo es una “relación, conexión, red de solidaridad y afectos” (ICBF, MEN, 2009, p. 44) que se puede desarrollar con personas, uno mismo, un grupo de individuos, como la familia o la comunidad, el lugar donde se vive o el tiempo en el que se vive (historia). Específicamente, los vínculos se entienden como aquellas relaciones que existen entre las personas, van más allá de los lazos de parentesco que se tengan, ya que representan la unión indispensable que le da soporte y equilibrio a las decisiones y situaciones que se presentan en el curso de la vida de un individuo (ICBF, 2017).
        p Los niños y las niñas requieren un modelo materno y paterno para formar su yo, para consolidar su identidad, para desarrollar sus ideales y aspiraciones (Romero, 2007). Por tanto, lograr la vinculación del padre y la madre toma mayor relevancia para promover el desarrollo integral de los NNA. Cuando los niños, las niñas y los adolescentes se sienten reconocidos, queridos y valorados por sus padres, son capaces de integrar normas y seguridad en proyectos personales coherentes. 
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img48.png').m-auto
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-10
        .bg12
          .tarjeta.position-relative.rounded-0.p-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-lg-4
                .imagen-absolute4
                  img.img-t.mx-auto(data-aos="zoom-in")(src='@/assets/curso/tema2/img49.svg', alt='')
              .col-lg-8.my-3
                p(data-aos="fade-down") Por otra parte, los vínculos entre padres, madres, niños, niñas y adolescentes son fundamentales en la medida en que permiten “consolidar relaciones protectoras y de cuidado para contribuir al desarrollo afectivo, social y cognitivo de aquellos que están en proceso de formación desde sus primeras etapas de vida, además, los vínculos afectivos serán la base para el establecimiento de relaciones futuras” (ICBF, 2017, p. 9).
    .bg13
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-11(data-aos="fade-left")
          p En conclusión, estos instrumentos le permiten a los PAF identificar cuáles son las principales fortalezas con las que cuenta la familia para afrontar situaciones de crisis, constituirse en sistemas resilientes y habilidades que requieren fortalecimiento, en especial aquellas que pueden suponer riesgos para el desarrollo familiar y personal de cada uno de los miembros de la familia, en especial de los niños, las niñas y los adolescentes.
        .col-lg-1.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema2/img50.svg').mx-auto
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img51.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Con el análisis de los instrumentos de medición de habilidades y una lectura integrada con los resultados de los otros instrumentos de diagnóstico se pueden generar, en comunicación con las familias, hipótesis de trabajo y cursos de acción que permitan orientar el acompañamiento familiar psicosocial y brindar una atención diseñada a la medida de sus necesidades y realidades. 
        p La forma como se realice el levantamiento de esta información es vital para el adecuado análisis e interpretación de los resultados. Por esto, es importante no cambiar el orden de las preguntas, mantener el fraseo propuesto en los formularios y sobre todo, no interferir en la respuesta de las familias. Para una adecuada recolección de información a través de estos instrumentos, idealmente deberá generarse un espacio para que cada integrante pueda responder de manera autónoma las preguntas y en caso de dudas, frente a palabras o significado de alguna frase y brindar el acompañamiento requerido. 
    p En casos en los que no sea posible el diligenciamiento autónomo, ya sea por razones de bioseguridad o nivel de comprensión de la persona, será el profesional quien realice en voz alta cada una de las preguntas y las opciones de respuesta, en estos casos y sin interferir con la respuesta, puede hacer lectura del lenguaje corporal para incluirlo entre los componentes del diagnóstico. 
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img52.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 La siguiente tabla incluye un resumen de los cuatro instrumentos de habilidades del programa Mi familia, sus subescalas, la población a la que van dirigidos, la cantidad de preguntas o ítems y las opciones de respuesta. 
    .row.justify-content-center
      .col-lg-8.col-xl-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1 
          span Instrumentos de habilidades del programa Mi familia
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Instrumento
                th Subescala o componente
                th ¿A quién se aplica?
                th Cantidad de preguntas o ítems
                th Escala
            tbody
              tr
                th(rowspan="2") Autoeficacia parental
                td Autoeficacia  
                td(rowspan="2") Padres y madres
                td.text-center 7
                td(rowspan="2") 
                  p.mb-0 1-Totalmente en desacuerdo 
                  p.mb-0 2-Bastante en desacuerdo
                  p.mb-0 3-En desacuerdo
                  p.mb-0 4-De acuerdo
                  p.mb-0 5-Bastante de acuerdo
                  p.mb-0 6-Totalmente de acuerdo
              tr
                td Satisfacción 
                td.text-center 10
             
              tr(style="background-color: #F6F6F6")
                th(rowspan="4") Disciplina positiva
                td Parentalidad positiva
                td(rowspan="4") Padres, madres y, niños, niñas y adolescentes entre 12 y 18 años.
                td.text-center 6
                td(rowspan="4") 
                  p.mb-0 1-Nunca
                  p.mb-0 2-Casi nunca
                  p.mb-0 3-A veces
                  p.mb-0 4-A menudo
                  p.mb-0 5-Siempre 

              tr(style="background-color: #F6F6F6")
                td Involucramiento parental 
                td.text-center 10
              tr(style="background-color: #F6F6F6")
                td Bajo monitoreo o supervisión 
                td.text-center 10
              tr(style="background-color: #F6F6F6")
                td Castigo físico
                td.text-center 3
                tr(style="background-color: #F6F6F6")                       
              tr
                th(rowspan="3") Regulación emocional
                td Atención
                td(rowspan="3")
                  p Padres, madres y, niños, niñas y adolescentes entre 12 y 18 años.
                  p * Cuidador principal cuando no esté presente el padre o la madre.
                td.text-center 8
                td(rowspan="3") 
                  p.mb-0 1-Nada de acuerdo
                  p.mb-0 2-Algo de acuerdo
                  p.mb-0 3-Bastante de acuerdo
                  p.mb-0 4-Muy de acuerdo
                  p.mb-0 5-Totalmente de acuerdo
              tr
                td Claridad
                td.text-center 8
              tr
                td Reparación
                td.text-center 8
              tr(style="background-color: #F6F6F6")
                th(rowspan="3") Vinculación
                td Cariño
                td(rowspan="3")
                  p Niños, niñas y adolescentes entre 12 y 18 años.
                td.text-center 5
                td(rowspan="3") 
                  p.mb-0 1-Nunca
                  p.mb-0 2-Casi nunca
                  p.mb-0 3-Muchas veces
                  p.mb-0 4-Siempre
              tr(style="background-color: #F6F6F6")
                td Hostilidad
                td.text-center 7
              tr(style="background-color: #F6F6F6")
                td Hostilidad
                td.text-center 7
              
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
