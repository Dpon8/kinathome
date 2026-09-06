// ── Glosario Integral de Traducción de Ejercicios ──
  const PALABRAS_CLAVE = [
    // Acciones y tipos de movimiento
    [/bench press/gi, 'press de banca'],
    [/overhead press/gi, 'press militar sobre la cabeza'],
    [/shoulder press/gi, 'press de hombros'],
    [/chest press/gi, 'press de pecho'],
    [/push-up|push up/gi, 'flexión de brazos'],
    [/pull-up|pull up/gi, 'dominada prona'],
    [/chin-up|chin up/gi, 'dominada supina'],
    [/lat pulldown/gi, 'jalón dorsal al pecho'],
    [/pulldown/gi, 'jalón al pecho'],
    [/deadlift/gi, 'peso muerto'],
    [/squat/gi, 'sentadilla'],
    [/lunge/gi, 'estocada'],
    [/biceps curl|bicep curl/gi, 'curl de bíceps'],
    [/triceps extension/gi, 'extensión de tríceps'],
    [/triceps dip|dip/gi, 'fondos de tríceps'],
    [/calf raise/gi, 'elevación de talones'],
    [/leg raise/gi, 'elevación de piernas'],
    [/lateral raise/gi, 'elevación lateral'],
    [/front raise/gi, 'elevación frontal'],
    [/rear delt/gi, 'deltoides posterior'],
    [/hip thrust/gi, 'empuje de cadera (hip thrust)'],
    [/glute bridge/gi, 'puente de glúteos'],
    [/kickback/gi, 'patada de glúteo/tríceps'],
    [/side bend/gi, 'inclinación lateral'],
    [/crunch/gi, 'abdominal crunch'],
    [/sit-up|sit up/gi, 'abdominal sit-up'],
    [/plank/gi, 'plancha abdominal'],
    [/fly|flyes/gi, 'aperturas'],
    [/shrug/gi, 'encogimiento de hombros'],
    [/row/gi, 'remo'],
    [/stretch/gi, 'estiramiento'],
    [/stretching/gi, 'estiramiento'],
    [/jump/gi, 'salto'],
    [/hop/gi, 'salto corto'],
    [/twist/gi, 'giro / rotación'],

    // Posturas, posiciones y lados
    [/all fours/gi, 'cuadrupedia'],
    [/seated/gi, 'sentado'],
    [/standing/gi, 'de pie'],
    [/lying/gi, 'acostado'],
    [/supine/gi, 'en decúbito supino (boca arriba)'],
    [/prone/gi, 'en decúbito prono (boca abajo)'],
    [/incline/gi, 'inclinado'],
    [/decline/gi, 'declinado'],
    [/hanging/gi, 'colgado'],
    [/kneeling/gi, 'de rodillas'],
    [/single leg|one leg/gi, 'a una pierna'],
    [/single arm|one arm/gi, 'a un brazo'],
    [/alternate|alternating/gi, 'alternado'],
    [/bent over/gi, 'inclinado hacia adelante'],
    [/behind neck/gi, 'tras nuca'],
    [/close grip/gi, 'agarre estrecho'],
    [/wide grip/gi, 'agarre ancho'],
    [/reverse grip/gi, 'agarre invertido / supino'],
    [/underhand/gi, 'agarre supino'],
    [/overhand/gi, 'agarre prono'],
    [/neutral grip/gi, 'agarre neutro'],

    // Elementos y equipamiento en el título
    [/dumbbell/gi, 'con mancuerna'],
    [/barbell/gi, 'con barra'],
    [/cable/gi, 'en polea'],
    [/kettlebell/gi, 'con pesa rusa'],
    [/band/gi, 'con banda elástica'],
    [/bodyweight/gi, 'con peso corporal'],
    [/machine/gi, 'en máquina'],
    [/smith/gi, 'en máquina Smith'],
    [/stability ball/gi, 'en fitball'],
    [/medicine ball/gi, 'con balón medicinal'],
    [/roller/gi, 'con rodillo']
  ];

  function traducirTitulo(nombre) {
    if (!nombre) return '';
    let t = nombre;
    for (const [en, es] of PALABRAS_CLAVE) {
      t = t.replace(en, es);
    }
    // Formatear: primera letra en mayúscula y quitar espacios dobles
    t = t.replace(/\s+/g, ' ').trim();
    return t.charAt(0).toUpperCase() + t.slice(1);
  }