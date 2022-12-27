<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cierre del acompañamiento psicosocial familiar, con cada despedida llegan nuevos comienzos 
    .row
      .col-12.p-5.tambloqimg.tambloqtxt
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para orientar el desarrollo de las sesiones de acompañamiento psicosocial, sean visitas domiciliarias o encuentros, la Dirección de familias y comunidades del ICBF pone a disposición de los operadores y sus equipos una serie de cartillas metodológicas que son la caja de herramientas para el trabajo con las familias. Estas cartillas fueron elaboradas con el apoyo técnico del programa Recursos humanos para la salud en 2030 (HRH2030 por sus siglas en inglés) de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID), la Organización Internacional para las Migraciones (OIM) y el Fondo de las Naciones Unidas para la Infancia (UNICEF). 
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 ¿Cuál es la relación entre las cartillas metodológicas y el plan familiar?
    .bg13
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-11(data-aos="fade-left")
          p El plan familiar incluye el abordaje temático que se desarrolla a lo largo de las visitas y encuentros en los que participa cada familia, de acuerdo con el modelo de atención que reciba. Es preciso recordar que la cantidad de visitas o encuentros en los que participa una familia depende de la zona en la que resida (urbana o rural), si recibe un acompañamiento preventivo o intensivo o, si tiene un niño, niña o adolescente en situación de discapacidad. Lo anterior se amplía en la siguiente infografía:
        .col-lg-1.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema3/img2.svg').mx-auto
    .row.justify-content-center.align-items-center
      .col-lg-12
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
          .tarjeta.color-cuarto1.p-3(x="12%" y="15.3%" numero="+")
            p.text-white <b>PRIMERA VISITA (CM)</b> 
            p.text-white.mb-0 La primera visita domiciliaria siempre debe estar guiada por la cartilla «Zarpando a la aventura», que contiene las orientaciones para la presentación del programa a la familia y la realización de la caracterización y el diagnóstico.
          .tarjeta.color-cuarto1.p-3(x="35%" y="15.3%" numero="+")
            p.text-white <b>CINCO VISITAS</b> 
            p.text-white.mb-3 Luego de la visita inicial se recomienda dar continuidad al ciclo básico, el cual cuenta, aparte de la visita inicial y de cierre, con cinco sesiones para las familias del modelo preventivo, seis sesiones para las familias del modelo intensivo y siete sesiones para las familias con algún integrante en situación de discapacidad. 
          .tarjeta.color-cuarto1.p-3(x="58.7%" y="15.3%" numero="+")
            p.text-white <b>ÚLTIMA VISITA</b> 
            p.text-white.mb-0 La última visita domiciliaria siempre estará guiada por la cartilla «Con cada despedida llegan nuevos comienzos», que representa el cierre del acompañamiento psicosocial y la proyección de la familia para continuar avanzando de manera autónoma en sus metas y propósitos.
          .tarjeta.color-cuarto1.p-3(x="8.2%" y="56.8%" numero="+")
            p.text-white <b>CRITERIO DE DISCAPACIDAD</b> 
            p.text-white.mb-0 En el caso de las familias que ingresan al programa por el criterio de discapacidad, el encuadre inicial, el ciclo básico y la visita de cierre ocupan las nueve visitas que se contemplan en su modelo de atención; por tanto, las posibilidades de profundización para estas familias se desarrollan a través de los encuentros.
          .tarjeta.color-cuarto1.p-3(x="24%" y="57%" numero="+")
            p.text-white <b>MODELO PREVENTIVO</b> 
            p.text-white.mb-0 Las familias que ingresan al modelo preventivo y no tienen integrantes con discapacidad tienen la posibilidad de incorporar dos temáticas de profundización en las visitas domiciliarias, aparte de las que puedan trabajar a través de los encuentros.
          .tarjeta.color-cuarto1.p-3(x="44.5%" y="57%" numero="+")
            p.text-white <b>MODELO INTENSIVO</b> 
            p.text-white.mb-0 En el caso de las familias del modelo intensivo, si tienen personas en situación de discapacidad se deberá incluir dentro del ciclo básico, además de la sesión de regulación emocional 2 ‘Expresar sin herir’, las dos sesiones del ciclo básico del enfoque diferencial en discapacidad; por tanto, estas familias tendrán la posibilidad de incorporar tres temáticas de profundización en las visitas domiciliarias y si no tienen personas en situación de discapacidad, podrán desarrollar hasta cinco sesiones de este tipo. 
          .tarjeta.color-cuarto1.p-3(x="60.3%" y="57%" numero="+")
            p.text-white <b>REINTEGRO FAMILIAR</b> 
            p.text-white.mb-3 En estos casos, el PAF debe incluir en el plan familiar, por lo menos el ciclo básico del modelo intensivo y las cuatro sesiones de reintegro familiar. De igual manera, se flexibiliza el criterio de desarrollar primero el ciclo básico; el PAF puede combinar sesiones del ciclo básico con las sesiones de reintegro, en especial cuando observe que se complementan o refuerzan las actividades o reflexiones propuestas, por ejemplo, la primera sesión de reintegro familiar ‘Los primeros pasos hacia la reunificación familiar’ se complementa muy bien con las sesiones de regulación emocional. En todo caso, las cartillas de reintegro tienen un orden propuesto que se sugiere respetar, es decir, se pueden intercalar con sesiones del ciclo básico, pero sin alterar su orden.
            p.text-white.mb-0 Además de lo expuesto, para estas familias se debe hacer el énfasis en su proceso de reintegro, tanto en la sesión de encuadre ‘Zarpando a la aventura’ (si es del conocimiento del PAF en ese momento) como en la de cierre ‘Con cada despedida llegan nuevos comienzos’. 
          .tarjeta.color-cuarto1.p-3(x="24%" y="77%" numero="+")
            p.text-white <b>URBANO</b> 
            p.text-white.mb-3 En el caso de Mi familia urbana, estas corresponden a ‘Encuentros familiares’, los cuales pueden ser inclusivos, es decir, donde participan las familias sin y con personas en situación de discapacidad o especializados donde solo participan estas últimas. Los encuentros alrededor de una temática permiten a las familias con intereses en común compartir sus vivencias y estrategias de afrontamiento en torno a una situación particular. 
          .tarjeta.color-cuarto1.p-3(x="44.5%" y="77%" numero="+")
            p.text-white <b>RURAL</b> 
            p.text-white.mb-3 En el caso de Mi familia rural las intervenciones grupales se denominan ‘Encuentros comunitarios’ y en ellos, además de abordar las temáticas psicosociales, se trabaja en el diseño e implementación de una iniciativa comunitaria. El trabajo alrededor de la iniciativa comunitaria se desarrolla a lo largo de los seis encuentros inclusivos y está guiado por la cartilla ‘Iniciativas comunitarias: guía para el desarrollo comunitario’, mientras que, para el desarrollo de las temáticas psicosociales en los encuentros se utilizan las cartillas correspondientes a los encuentros inclusivos. 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema3/img4.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p El programa Mi familia cuenta con 34 cartillas metodológicas para orientar el desarrollo del Plan familiar con cada familia beneficiaria, de las cuales 24 (71 %) son cartillas para el desarrollo de visitas domiciliarias y pueden ser de ciclo básico o de profundización. El PAF puede incluir como parte del ciclo de profundización de una familia en particular una temática de ciclo básico de otro modelo de atención, por ejemplo, podría incluir “Expresar sin herir: regulación emocional 2” como una temática de profundización para una familia del modelo preventivo. 
        p Por su parte, el programa cuenta con siete  cartillas para el desarrollo de encuentros inclusivos, dos para el desarrollo de encuentros especializados y una que orienta el diseño y el desarrollo de la iniciativa comunitaria en Mi familia rural. 
    .row.justify-content-center.ps-3.mb-5
      .col-lg-12
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img13.svg")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  h4 Cartillas metodológicas programa Mi familia
                  p La siguiente tabla presenta el detalle del material metodológico mencionado.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo2.docx')" target="_blank")
                    .anexo__iconomb-0                    
                    span Descargar
                    i.fas.fa-download
    Separador
    #t_3_2 
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 ¿Cómo es la estructura de las cartillas metodológicas?
    p.mb-5 Las cartillas metodológicas que orientan el desarrollo de las visitas y encuentros del programa Mi familia tienen dos grandes partes, la primera presenta los principales conceptos asociados a la temática propuesta, los cuales debe tener presente el profesional de acompañamiento para realizar la visita o el encuentro y, en la segunda parte se detalla la metodología sugerida para el trabajo con las familias, la cual consta regularmente de cuatro momentos, tal y como se presenta en el gráfico:
    .row.justify-content-center(data-aos="fade-left").mb-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.imgtop(src='@/assets/curso/tema3/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.shadow 
            .p-4
              h3 MOMENTO 1
              p.mt-4 Constituye un ‘rompehielo’ que busca la activación física de los integrantes de la familia, mientras presenta el tema central con una actividad lúdica.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.imgtop(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.shadow 
            .p-4
              h3 MOMENTO 2
              p.mt-4 Se presentan los principales conceptos o la información más relevante sobre el tema de interés. Utiliza generalmente las infografías como recurso de apoyo y se acompaña de preguntas reflexivas que permitan valorar y conversar sobre los conocimientos y experiencia que tiene la familia sobre el tema. 
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.imgtop(src='@/assets/curso/tema3/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.shadow 
            .p-4
              h3 MOMENTO 3
              p.mt-4 Se desarrollan actividades para promover la reflexión de la familia sobre sus propias prácticas en relación con el tema de interés y la identificación de escenarios de transformación y desarrollo.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.imgtop(src='@/assets/curso/tema3/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.shadow 
            .p-4
              h3 MOMENTO 4
              p Comprende al cierre de la sesión y a la identificación de aprendizajes y compromisos.
    Separador
    #t_3_3 
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 ¿Existen escenarios para flexibilizar la propuesta metodológica que contemplan las cartillas?
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema3/img9.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Cada cartilla metodológica propone por sesión una pregunta orientadora, unos objetivos y unos resultados esperados. Estos elementos se deben conservar y proteger en el desarrollo metodológico de la sesión, sea que se haga siguiendo tal cual los pasos que propone la cartilla o que se realicen modificaciones. El programa Mi familia tiene cobertura en la mayoría de los departamentos del país y en un número importante de municipios; por tanto, las familias que participan en el programa son muy diversas en cuanto a su cultura, su historia, su pertenencia étnica, su territorio, entre otras características. Por tales motivos, un primer nivel que se identifica para posibles ajustes tiene que ver con la pertinencia cultural y territorial del lenguaje y las actividades que proponen las cartillas.
        p En este sentido, las Unidades de asistencia técnica cumplen un rol muy importante para proponer y liderar espacios colectivos de análisis e identificación de ajustes de las cartillas, teniendo como foco su pertinencia cultural y territorial; véalo:
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-5.mb-4.mb-lg-0
        p El PAF puede proponer ajustes para el desarrollo de las cartillas con cada familia en particular, sin perder de vista los elementos centrales (pregunta orientadora, objetivos y resultados esperados), en respuesta a las particularidades de cada familia, por ejemplo, si identifica que prefieren conversar en vez de realizar actividades que exijan movimiento, si prefieren plasmar sus ideas y reflexiones en dibujos u otros productos creativos como canciones en lugar de escribir, etc. 
        p En este mismo sentido, en el desarrollo de cada sesión es importante hacer énfasis en los asuntos que son de interés para cada familia, por ejemplo, si como resultado de su interacción con la familia se da cuenta que los cuidadores están muy al tanto de las necesidades de cuidado de los demás, pero no de las propias, dedicará más tiempo para la conversación y reflexión, luego de las actividades que enfatizan en el cuidado propio como condición necesaria para poder cuidar de los demás. 
      .col-lg-7(data-aos="fade-left")
        figure
          img.img-t(src='@/assets/curso/tema3/img10.svg').m-auto
    p.mb-5 Existe un nivel de mayor complejidad en la flexibilización de las metodologías propuestas en las cartillas, que resultan cuando las visitas o los encuentros no se pueden realizar de manera presencial, como ha sido el caso durante la pandemia por COVID-19. En todo caso y como ya se ha mencionado, la flexibilización metodológica debe procurar la resolución de la pregunta orientadora y el alcance de los objetivos y los resultados esperados. 
    .row.justify-content-center
      .col-12.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando las condiciones no permitan el desarrollo de las visitas domiciliarias el acompañamiento a las familias se realizará por medio de contactos telefónicos, por videollamadas o por plataformas de encuentros virtuales como WhatsApp, Teams, Zoom, Google Meet, entre otras.
    .bg1.p-2
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema3/img11.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Para el desarrollo no presencial de este tipo de intervención se contemplan escenarios que combinen contactos no presenciales realizados por el profesional de acompañamiento familiar - PAF a las familias beneficiarias y espacios lúdicos de reflexión en familia, los cuales son realizados de manera autónoma por la familia entre contacto y contacto, a partir de las orientaciones entregadas por el PAF, con el propósito de avanzar en la apropiación de los conceptos y en la identificación de las prácticas familiares relacionadas con el tema, así como posibles escenarios de transformación. Para esto, la Dirección de familias y comunidades del ICBF pone a disposición de los operadores y sus equipos protocolos para el desarrollo no presencial de las visitas domiciliarias, que guardan coherencia con las cartillas correspondientes. 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
