export default {
  global: {
    componenteFormativo:
      'Implementación del acompañamiento psicosocial familiar',
    descripcionCurso:
      'En este componente se expone en qué consiste el proceso de acompañamiento familiar, desde el ejercicio de focalización hasta su cierre y despedida.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Cómo inicia el proceso de acompañamiento? ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Focalización de familias por criterios de identificación y selección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Búsqueda y vinculación de familias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Identificación tipo de acompañamiento psicosocial (preventivo, intensivo o discapacidad) ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '¿Qué sucede durante el acompañamiento psicosocial? ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Encuadre ¿cómo nos acercamos a las familias? ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              '¿Cómo acompañamos desde el ciclo básico y de profundización a las familias? Desarrollo del acompañamiento psicosocial ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Definición del Plan Familiar',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Visitas en el hogar',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Encuentros familiares y comunitarios ',
            hash: 't_2_5',
          },

          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Convergencia de oferta y gestión de redes ',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '¿Con qué otras herramientas se cuentan para el acompañamiento psicosocial? Acciones adicionales en el acompañamiento psicosocial ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Gestión de caso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Articulación con protección ?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Articulación con primera infancia ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Cierre del acompañamiento psicosocial familiar, con cada despedida llegan nuevos comienzos ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '¿Qué aspectos son relevantes en la comprensión de las familias por parte del PAF, desde los enfoques que considera Mi familia?',
      referencia:
        'ICBF. (2021). Guía de convergencia de oferta y gestión de redes. ICBF. ',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g7.mo18.pp_guia_convergencia_de_oferta_y_redes_mi_familia_v1.pdf',
    },
    {
      tema: 'Ficha de caracterización sociofamiliar',
      referencia:
        'ICBF. (2020). Guía para el diligenciamiento Ficha de caracterización sociofamiliar. ICBF.',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g4.mo18.pp_guia_para_diligenciamiento_ficha_caracterizacion_socio_familiar_v2.pdf',
    },
    {
      tema: 'Genograma',
      referencia: 'ICBF. (s.f.). Mi familia. Ficha técnica genograma. ICBF. ',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu4.g1.mo18.pp_ficha_tecnica_-_genograma_v1.pdf ',
    },
    {
      tema: 'Ecomapa',
      referencia: 'ICBF. (s.f.). Mi familia. Ficha técnica Ecomapa. ICBF. ',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu3.g1.mo18.pp_ficha_tecnica_-_ecomapa_v1.pdf',
    },
    {
      tema: 'Instrumentos de medición de habilidades',
      referencia:
        'ICBF. (s.f.). Mi familia. Ficha técnica autoeficacia parental. ICBF.',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu1.g1.mo18.pp_ficha_tecnica_-_autoeficacia_parental_v1.pdf',
    },
    {
      tema: 'Instrumentos de medición de habilidades',
      referencia:
        'ICBF. (s.f.). Mi familia. Ficha técnica autoeficacia parental. ICBF.',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu2.g1.mo18.pp_ficha_tecnica_-_disciplina_positiva_v1.pdf',
    },
    {
      tema: 'Instrumentos de medición de habilidades',
      referencia:
        'ICBF. (s.f.). Mi familia. Ficha técnica autoeficacia parental. ICBF.',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu1.g1.mo18.pp_ficha_tecnica_-_autoeficacia_parental_v1.pdf',
    },
    {
      tema: 'Instrumentos de medición de habilidades',
      referencia:
        'ICBF. (s.f.). Mi familia. Ficha técnica autoeficacia parental. ICBF.',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu6.g1.mo18.pp_ficha_tecnica_-_vinculacion_v1.pdf',
    },
    {
      tema:
        '¿Cuál es la relación entre las cartillas metodológicas y el plan familiar?',
      referencia:
        'ICBF. (2022). Guía de orientaciones metodológicas para el desarrollo de la iniciativa comunitaria en el marco de los encuentros comunitarios. ICBF.  ',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g8.mo18.pp_guia_iniciativas_comunitarias_v1_0.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autoeficacia',
      significado:
        'Es la percepción que una persona tiene de su propia capacidad para ejecutar determinadas tareas con un buen rendimiento. La autoeficacia no es una característica global en una persona, sino que responde a aspectos y tareas concretas en momentos determinados, por ejemplo, alguien puede tener alto sentido de autoeficacia en el trabajo o en su vida social, y tener un bajo nivel de autoeficacia como padre o madre.',
    },
    {
      termino: 'Cartilla metodológica',
      significado:
        'Instrumento de apoyo para orientar el desarrollo del plan familiar con cada familia beneficiaria.',
    },
    {
      termino: 'Ecomapa',
      significado:
        'Representación gráfica de la relación o del sistema de vinculación más significativo de una persona o de la familia con su contexto primario, instituciones y actores sociales. Se constituye en una herramienta complementaria al genograma con el objetivo de aproximarse a la realidad familiar.',
    },
    {
      termino: 'FCSF',
      significado:
        ' Ficha de caracterización sociofamiliar. Permite el registro de todas las personas que pertenecen al grupo familiar beneficiario de Mi familia.',
    },
    {
      termino: 'Genograma',
      significado:
        'Instrumento gráfico que permite conocer, recoger, registrar y exponer algunos datos de la familia, información de sus integrantes y las relaciones a lo largo de diferentes generaciones (Fernández, Escalante & Palmero, 2011).',
    },
    {
      termino: 'Mi familia',
      significado:
        'Programa de acompañamiento familiar psicosocial que tiene como objetivo fortalecer las capacidades de las familias para promover el desarrollo integral de los niños, las niñas y los adolescentes, y reducir y mitigar los efectos de la violencia, el abuso o la negligencia en su contra.',
    },
    {
      termino: 'PAF',
      significado: 'Abreviatura de profesional de acompañamiento familiar.',
    },
    {
      termino: 'Prácticas parentales',
      significado:
        'Conjunto de actitudes y comportamientos específicos que utilizan los padres y las madres para interactuar con sus hijos e hijas (Ceulemans & Kuppens, 2018).',
    },
  ],
  referencias: [
    {
      referencia:
        'Ardila, G. (2006). Cultura y desarrollo territorial. Diplomado Gestión de procesos culturales y construcción de lo público. Instituto Distrital de Cultura y Turismo, Sistema Distrital de Cultura.',
      link: '',
    },
    {
      referencia:
        'Cibanal, L. (2002). Genograma familiar. Apuntes: introducción a la sistémica y terapia familiar. Nicanor Aniorte. ',
      link: 'http://www.aniorte-nic.net/apunt_terap_famil_8.htm ',
    },
    {
      referencia:
        'Clemente, M. (2003). Redes sociales de apoyo en relación al proceso de envejecimiento humano. Revisión bibliográfica. Interdisciplinaria. Revista de Psicología y Ciencias Afines, 20(1), p. 31-60.',
      link: '',
    },
    {
      referencia:
        'Durrant, J. (2011). Positive discipline. What is and How to do it? Save the Children Sweden.',
      link: '',
    },
    {
      referencia:
        'Farkas-Klein, C. (2008). Escala de evaluación parental (EEP): desarrollo, propiedades psicométricas y aplicaciones. Universitas Psychologica, p. 457-467.',
      link: '',
    },
    {
      referencia:
        'Feixas, G., Muñoz, D. y Montesano, A. (2012). El genograma en terapia familiar sistémica. Universidad de Barcelona, Departament de Personalitat, Avaluació i Tractament Psicològics.',
      link: '',
    },
    {
      referencia:
        'Fernández, J., Escalante, E. & Palmero, F. (2011). Revisitando algunas herramientas de evaluación sistémica. Psicoperspectivas, Individuo y Sociedad, 10(1), p. 190-208.',
      link: '',
    },
    {
      referencia:
        'Gómez, E. y Klotiarenco, M. (2010). Resiliencia familiar: un enfoque de investigación e intervención con familias multiproblemáticas. Revista de Psicología de la Universidad de Chile, 19(2), p. 103-132. ',
      link:
        'https://revistapsicologia.uchile.cl/index.php/RDP/article/view/17112',
    },
    {
      referencia:
        'Gómez, O. y Calleja, N. (2016). Regulación emocional: definición, red nomológica y medición. Revista Mexicana de Investigación en Psicología, p. 96-117. ICBF. (2020). Lineamiento técnico Mi familia. ICBF. ',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      referencia:
        'ICBF. (2009). Lineamientos técnicos para la inclusión y atención de familias. ICBF. ',
      link: '',
    },
    {
      referencia: 'ICBF. (2020). Manual operativo Mi familia. ICBF.',
      link:
        'https://www.icbf.gov.co/system/files/procesos/mo18.pp_manual_operativo_modalidad_mi_familia_v4.pdf',
    },
    {
      referencia:
        'ICBF y MEN. (2009). Promoción de la resiliencia familiar. Tejiendo vínculos. Manual de agentes educativos. Organización Internacional para las Migraciones (OIM).',
      link: '',
    },
    {
      referencia:
        'Orpinas, P., Rico, A. & Martínez-Cox, L. (2012). Latino families and youth: a compendium of assessment tools. University of Georgia.',
      link: '',
    },
    {
      referencia:
        'Pérez-Abarca, R., Lucchini-Raies, C. & Márquez-Doren, F. (2020). Paternidades, vinculación afectiva y promoción de la salud mental infantil: percepciones de madres y padres de lactantes mayores de un año. Revista Chilena de Enfermería - RchE. ',
      link:
        'https://revistachilenaenfermeria.uchile.cl/index.php/RCHE/article/view/58236',
    },
    {
      referencia:
        'Pérez, T. (2017). El enfoque apreciativo, valiosa herramienta para construir cultura de paz. Revista de la Universidad de La Salle (72), p. 137-158. ',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1522&context=ruls ',
    },
    {
      referencia:
        'Romero, F. (2007). La construcción social de la parentalidad y los procesos de vinculación y desvinculación padre - hijo. El papel del mediador familiar. Ciencias Psicológicas, (2), p. 119-133.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sonia Milena Moreno Páez',
        cargo: 'Experta temática',
        centro: 'ICBF',
      },
      {
        nombre: 'Mayra Alexandra Pacheco Montealegre',
        cargo: 'Experta temática',
        centro: 'ICBF',
      },
      {
        nombre: 'Diego Fernando Ramírez Bermúdez',
        cargo: 'Experto temático',
        centro: 'ICBF',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego ',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime ',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez ',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de  contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
