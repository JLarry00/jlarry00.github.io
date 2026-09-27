"""Generate four review-only AG-042 SVG mockups. Does not touch the website."""

from html import escape
from pathlib import Path


OUT = Path(__file__).resolve().parent
W, H = 1600, 980


def R(x, y, w, h, fill, rad=0, stroke=None, sw=1, opacity=None):
    attrs = f'x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" rx="{rad}"'
    if stroke:
        attrs += f' stroke="{stroke}" stroke-width="{sw}"'
    if opacity is not None:
        attrs += f' opacity="{opacity}"'
    return f'<rect {attrs}/>'


def T(x, y, value, size=18, fill='#203b42', weight=400, font='sans', anchor=None, opacity=None):
    attrs = f'x="{x}" y="{y}" class="{font}" font-size="{size}" fill="{fill}" font-weight="{weight}"'
    if anchor:
        attrs += f' text-anchor="{anchor}"'
    if opacity is not None:
        attrs += f' opacity="{opacity}"'
    return f'<text {attrs}>{escape(value)}</text>'


def L(x1, y1, x2, y2, color, width=1, dash=None):
    attrs = f'x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width}"'
    if dash:
        attrs += f' stroke-dasharray="{dash}"'
    return f'<line {attrs}/>'


def P(d, stroke, width=2, fill='none', dash=None):
    attrs = f'd="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"'
    if dash:
        attrs += f' stroke-dasharray="{dash}"'
    return f'<path {attrs}/>'


def svg(parts, title, description):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(description)}</desc>
<defs><filter id="shadow" x="-10%" y="-20%" width="120%" height="150%"><feDropShadow dx="0" dy="16" stdDeviation="23" flood-color="#16343e" flood-opacity="0.18"/></filter>
<clipPath id="frame"><rect x="64" y="96" width="1472" height="812" rx="16"/></clipPath>
<style>.sans{{font-family:'Ubuntu Sans','DejaVu Sans',sans-serif}}.mono{{font-family:'Ubuntu Sans Mono','DejaVu Sans Mono',monospace}}</style></defs>
{''.join(parts)}</svg>'''


def mat(parts, label, detail, bg='#dce7e6'):
    parts += [R(0, 0, W, H, bg), T(66, 54, label, 22, '#15343e', 700),
              T(1534, 54, detail, 16, '#59757a', 400, anchor='end'),
              f'<rect x="64" y="96" width="1472" height="812" rx="16" fill="#f7f9f6" filter="url(#shadow)"/>',
              '<g clip-path="url(#frame)">']


def end(parts, caption):
    parts += ['</g>', T(66, 950, caption, 16, '#59757a')]


def segmented(parts, x, y, selected, dark=False):
    bg = '#31525a' if dark else '#e4eeeb'
    ink = '#eaf5f1' if dark else '#193c45'
    selected_bg = '#80c8c1' if dark else '#ffffff'
    selected_ink = '#17363c'
    parts.append(R(x, y, 105, 40, bg, 20))
    parts.append(R(x + (3 if selected == 'ES' else 53), y + 3, 49, 34, selected_bg, 17))
    parts.append(T(x + 27, y + 26, 'ES', 15, selected_ink if selected == 'ES' else ink, 700 if selected == 'ES' else 400, anchor='middle'))
    parts.append(T(x + 78, y + 26, 'EN', 15, selected_ink if selected == 'EN' else ink, 700 if selected == 'EN' else 400, anchor='middle'))


def tree(parts, x, y, w, dark=False, extended=False, active='Welcome.md'):
    bg = '#202a30' if dark else '#e9f0ed'
    ink = '#dcebe9' if dark else '#1d3e46'
    muted = '#9ab1b4' if dark else '#658082'
    select = '#34434a' if dark else '#d4e5e0'
    line = '#34464a' if dark else '#cbdcd7'
    parts += [R(x, y, w, 908 - y, bg), T(x + 30, y + 45, 'Explorar archivos' if not extended else 'EXPLORER', 17, ink, 700),
              L(x + 30, y + 63, x + w - 28, y + 63, line), T(x + 30, y + 99, '⌄  Juan/', 18, ink, 700)]
    entries = [('Welcome.md', 0), ('README.md', 0), ('AGENTS.md', 0), ('SOUL.md', 0), ('Experience.md', 0),
               ('Contact.md', 0), ('skills/', 1), ('projects/', 1)]
    if extended:
        entries = [('README.md', 0), ('AGENTS.md', 0), ('SOUL.md', 0), ('Welcome.md', 0),
                   ('Experience.md', 0), ('Contact.md', 0), ('skills/', 1),
                   ('  infrastructure.md', 0), ('  ci-cd.md', 0), ('projects/', 1),
                   ('  jarvis.md', 0), ('  payroll-extractor.md', 0)]
    step = 42 if extended else 53
    start = y + (143 if extended else 151)
    for i, (name, folder) in enumerate(entries):
        yy = start + i * step
        if name == active:
            parts.append(R(x + 18, yy - 25, w - 36, 37, select, 9))
            parts.append(R(x + 18, yy - 25, 4, 37, '#67b9b4', 2))
        if folder:
            parts.append(P(f'M{x+45} {yy-8}h13l5 5h16v13h-34z', muted, 1.7))
        else:
            parts.append(R(x + 45, yy - 15, 15, 19, 'none', 2, muted, 1.5))
        parts.append(T(x + (91 if folder else 73), yy, name, 14.5 if extended else 16, ink if name == active else muted, 700 if name == active else 400, 'mono'))


def tabs(parts, x, y, w, active='Welcome.md', dark=False, names=None):
    names = names or ['Welcome.md', 'Experience.md', 'projects/README.md']
    bg = '#233139' if dark else '#eef3f0'
    selected = '#2d4047' if dark else '#fbfcf8'
    ink = '#e9f1ec' if dark else '#1d3d45'
    muted = '#9aafb2' if dark else '#667e80'
    parts.append(R(x, y, w, 58, bg))
    pos = x
    for name in names:
        tw = max(190, min(276, 90 + 9 * len(name)))
        if pos + tw > x + w:
            break
        is_active = name == active
        if is_active:
            parts += [R(pos, y, tw, 58, selected), R(pos, y + 55, tw, 3, '#67b9b4')]
        parts.append(T(pos + 25, y + 37, name, 15, ink if is_active else muted, 700 if is_active else 400, 'mono'))
        parts.append(T(pos + tw - 25, y + 38, '×', 21, muted, 400, anchor='middle'))
        pos += tw


def variant_editorial():
    p = []
    mat(p, 'Ejemplo 1 · Cuaderno abierto', 'La lectura organiza el portfolio')
    p += [R(64, 96, 1472, 76, '#183a43'), R(92, 114, 42, 42, '#87c8c0', 10),
          T(113, 141, 'JL', 17, '#183a43', 800, anchor='middle'),
          T(152, 136, 'Juan Larrondo', 23, '#f3f8f3', 700),
          T(152, 157, 'Un portfolio contado en archivos', 14, '#b5d3ce'),
          T(1004, 141, 'Archivos', 16, '#e5f0ec'), T(1118, 141, 'Sobre mí', 16, '#e5f0ec'),
          T(1240, 141, 'Contacto', 16, '#e5f0ec')]
    segmented(p, 1413, 114, 'ES', dark=True)
    tree(p, 64, 172, 276, active='README.md')
    tabs(p, 340, 172, 1196, active='README.md', names=['README.md', 'Experience.md', 'SOUL.md'])
    p += [R(340, 230, 1196, 678, '#fbfcf9'), T(405, 272, 'Juan  ›  README.md', 15, '#71908e', font='mono'),
          T(405, 345, 'Aquí empieza', 56, '#173b44', 700),
          T(405, 406, 'mi historia.', 56, '#227680', 500),
          T(407, 465, 'Estoy preparando este portfolio como un repositorio', 20, '#375960'),
          T(407, 497, 'que puedas recorrer. Cada archivo tiene su propia puerta.', 20, '#375960'),
          L(405, 547, 1030, 547, '#d3e1dc'),
          T(405, 593, 'Si buscas lo esencial', 23, '#173b44', 700),
          T(405, 642, 'Experience.md', 19, '#227680', 700, 'mono'),
          T(991, 642, '↗', 24, '#227680'), L(405, 660, 1030, 660, '#d3e1dc'),
          T(405, 707, 'projects/README.md', 19, '#227680', 700, 'mono'),
          T(991, 707, '↗', 24, '#227680'), L(405, 725, 1030, 725, '#d3e1dc'),
          T(405, 772, 'SOUL.md', 19, '#227680', 700, 'mono'),
          T(991, 772, '↗', 24, '#227680'),
          R(1105, 300, 354, 480, '#edf4f0', 16),
          T(1138, 344, 'Índice del archivo', 19, '#173b44', 700),
          L(1138, 364, 1425, 364, '#c9dbd5'),
          T(1138, 403, 'Presentación', 17, '#227680', 700),
          T(1138, 447, 'Experiencia', 17, '#537279'),
          T(1138, 491, 'Proyectos', 17, '#537279'),
          T(1138, 535, 'Sobre mí', 17, '#537279'),
          L(1138, 568, 1425, 568, '#c9dbd5'),
          T(1138, 614, 'Una lectura seguida, con', 16, '#537279'),
          T(1138, 640, 'enlaces para profundizar.', 16, '#537279'),
          T(1450, 853, 'Para agentes ↗', 15, '#227680', 700, anchor='end')]
    end(p, 'Conserva el árbol y las pestañas; el archivo abierto se lee como una página editorial.')
    return svg(p, 'Ejemplo 1: cuaderno abierto', 'Un archivo legible con índice lateral y rutas de lectura.')


def graph_node(p, x, y, w, label, path, accent):
    p += [R(x, y, w, 106, '#234651', 17, '#518087', 1.5), R(x + 17, y + 18, 31, 31, '#315b63', 8),
          T(x + 33, y + 40, '↗', 22, accent, 700, anchor='middle'),
          T(x + 64, y + 48, label, 22, '#ebf4ef', 700),
          T(x + 64, y + 78, path, 14, '#9fbcbf', font='mono')]


def variant_map():
    p = []
    mat(p, 'Ejemplo 2 · Mapa de archivos', 'Exploración espacial del perfil', '#d7e4e2')
    p += [R(64, 96, 1472, 76, '#10252d'), T(96, 142, 'juan /', 25, '#f0f7f2', 700, font='mono'),
          T(209, 142, 'portfolio', 22, '#8dc8c4', font='mono'),
          T(1090, 142, 'Inicio', 16, '#d7e9e3'), T(1171, 142, 'Archivos', 16, '#d7e9e3'),
          T(1270, 142, 'Contacto', 16, '#d7e9e3')]
    segmented(p, 1413, 114, 'ES', dark=True)
    tree(p, 64, 172, 258, dark=True, active='Welcome.md')
    tabs(p, 322, 172, 1214, dark=True)
    p += [R(322, 230, 1214, 678, '#15333c'), T(380, 273, 'Juan  ›  Welcome.md', 15, '#89afb1', font='mono'),
          T(380, 344, 'Un mapa para entrar por donde quieras.', 39, '#edf7f2', 700),
          T(381, 380, 'Elige un archivo aquí o ábrelo desde el árbol.', 19, '#aac7c7'),
          P('M880 563 C777 520 730 482 682 466', '#59878a', 2.5),
          P('M1000 563 C1110 515 1164 482 1220 466', '#59878a', 2.5),
          P('M880 622 C777 679 726 714 682 728', '#59878a', 2.5),
          P('M1000 622 C1110 676 1161 711 1220 728', '#59878a', 2.5),
          R(794, 531, 300, 126, '#e4f2eb', 20),
          T(944, 586, 'Juan', 41, '#173b44', 800, anchor='middle'),
          T(944, 619, 'Welcome.md', 15, '#39727b', 400, 'mono', anchor='middle')]
    graph_node(p, 410, 414, 305, 'Experiencia', 'Experience.md', '#92d4c8')
    graph_node(p, 1182, 414, 287, 'Proyectos', 'projects/', '#92d4c8')
    graph_node(p, 410, 692, 305, 'Sobre mí', 'SOUL.md', '#92d4c8')
    graph_node(p, 1182, 692, 287, 'Contacto', 'Contact.md', '#92d4c8')
    p += [L(380, 853, 1471, 853, '#315660'),
          T(380, 881, 'Los nodos son enlaces; el árbol sigue disponible.', 15, '#9fbcbf'),
          T(1465, 881, 'Para agentes ↗', 15, '#92d4c8', 700, anchor='end')]
    end(p, 'Un mapa enlazado reemplaza la bienvenida tradicional; la estructura de archivos permanece.')
    return svg(p, 'Ejemplo 2: mapa de archivos', 'La portada muestra un mapa de enlaces conectados a Juan.')


def variant_split():
    p = []
    mat(p, 'Ejemplo 3 · Dos archivos abiertos', 'Lectura paralela de contenido')
    p += [R(64, 96, 1472, 76, '#2a3941'), T(97, 143, 'JL', 25, '#9cd3ca', 800),
          T(147, 142, 'Juan Larrondo', 23, '#f0f5f0', 700),
          T(1288, 142, 'Explorar', 16, '#d0e1dd')]
    segmented(p, 1413, 114, 'ES', dark=True)
    tree(p, 64, 172, 246, active='Welcome.md')
    tabs(p, 310, 172, 1226, active='Welcome.md', names=['Welcome.md', 'projects/README.md', 'Experience.md'])
    p += [R(310, 230, 756, 678, '#fbfcf9'), R(1066, 230, 470, 678, '#edf4f0'),
          L(1066, 230, 1066, 908, '#cbded8', 2),
          T(368, 273, 'Juan  ›  Welcome.md', 15, '#718a89', font='mono'),
          T(369, 362, 'Hola, soy Juan.', 57, '#193b44', 800),
          T(369, 419, 'Pasa y curiosea.', 43, '#247780', 500),
          T(371, 487, 'Estoy preparando este portfolio como un', 19, '#3e6065'),
          T(371, 518, 'repositorio que puedas recorrer.', 19, '#3e6065'),
          L(369, 574, 1003, 574, '#cfdfda'),
          T(369, 619, 'Sigue leyendo', 21, '#193b44', 700),
          T(369, 667, 'Experience.md', 17, '#247780', 700, font='mono'),
          T(369, 710, 'SOUL.md', 17, '#247780', 700, font='mono'),
          T(369, 753, 'Contact.md', 17, '#247780', 700, font='mono'),
          T(1116, 275, 'Vista paralela', 15, '#6b898b'),
          T(1116, 320, 'projects/README.md', 16, '#247780', 700, font='mono'),
          L(1116, 341, 1485, 341, '#c7dad5'),
          T(1116, 396, 'Proyectos', 35, '#193b44', 700),
          T(1116, 439, 'Abre uno sin perder de vista', 17, '#517078'),
          T(1116, 466, 'el archivo principal.', 17, '#517078'),
          R(1116, 508, 370, 96, '#ffffff', 12, '#d6e4e0'),
          T(1138, 549, 'jarvis.md', 17, '#193b44', 700, font='mono'),
          T(1138, 576, 'Abrir archivo ↗', 14, '#247780'),
          R(1116, 621, 370, 96, '#ffffff', 12, '#d6e4e0'),
          T(1138, 663, 'payroll-extractor.md', 16, '#193b44', 700, font='mono'),
          T(1138, 690, 'Abrir archivo ↗', 14, '#247780'),
          L(1116, 790, 1485, 790, '#c7dad5'),
          T(1485, 840, 'Para agentes ↗', 15, '#247780', 700, anchor='end')]
    end(p, 'Aprovecha los paneles divididos del editor para explorar dos partes del perfil a la vez.')
    return svg(p, 'Ejemplo 3: dos archivos abiertos', 'Vista dividida entre bienvenida y proyectos, con árbol y pestañas.')


def variant_minimal():
    p = []
    mat(p, 'Ejemplo 4 · Cambio mínimo', 'Sin barra de iconos; resto familiar', '#dbe3e6')
    p += [R(64, 96, 1472, 57, '#222629'), R(91, 112, 27, 27, '#549ccd', 7),
          T(104, 131, 'JL', 12, '#102538', 800, anchor='middle'),
          T(133, 132, 'juan / portfolio', 16, '#e8e9e8', 600),
          T(783, 132, 'Welcome.md — Juan', 15, '#b7c5ca', anchor='middle'),
          T(1230, 132, 'Idioma', 14, '#b7c5ca')]
    segmented(p, 1280, 105, 'ES', dark=True)
    p += [R(1410, 105, 101, 40, '#333b41', 20), T(1460, 131, 'Tema ▾', 14, '#e8e9e8', anchor='middle')]
    tree(p, 64, 153, 330, dark=True, extended=True, active='Welcome.md')
    tabs(p, 394, 153, 1142, dark=True, names=['Welcome.md', 'README.md', 'Experience.md'])
    p += [R(394, 211, 1142, 659, '#1e2327'), T(445, 251, 'Juan  ›  Welcome.md', 15, '#99a9b3', font='mono'),
          R(446, 291, 1038, 521, '#24303b', 20, '#405568', 1.5),
          T(491, 339, 'Welcome.md', 16, '#9ac7e0', 600, font='mono'),
          L(491, 355, 1437, 355, '#415567'),
          T(491, 438, 'Hola, soy Juan.', 54, '#eef5f8', 700),
          T(491, 492, 'Pasa y curiosea.', 44, '#9bcfe3', 500),
          T(493, 553, 'Estoy preparando este portfolio como un repositorio', 19, '#d1dce3'),
          T(493, 585, 'que puedas recorrer. Abre un archivo para empezar.', 19, '#d1dce3'),
          R(493, 634, 496, 66, '#2c4150', 14),
          T(517, 676, '↖  Empieza por la columna de la izquierda.', 17, '#cae1ec', 500),
          R(1242, 475, 170, 205, '#344c5d', 13, '#627d91', 1.5),
          R(1208, 453, 170, 205, '#3e5869', 13, '#87a8bb', 1.5),
          T(1230, 489, 'README.md', 16, '#d8e9ef', 700, font='mono'),
          L(1230, 514, 1349, 514, '#7893a1', 5),
          L(1230, 540, 1327, 540, '#7893a1', 5),
          L(1230, 566, 1341, 566, '#7893a1', 5),
          R(1268, 617, 173, 124, '#55768c', 15),
          T(1292, 679, 'JL', 39, '#e4f3f7', 800),
          T(1440, 774, 'Para agentes ↗', 14, '#a7d8e8', 700, anchor='end'),
          R(64, 870, 1472, 38, '#263640'),
          T(92, 894, 'Agent · desarrollo', 13, '#d3e5ee'),
          T(1510, 894, 'Welcome.md', 13, '#d3e5ee', font='mono', anchor='end')]
    end(p, 'Se elimina solo la franja de vistas; Explorer, pestañas, rutas y barra de estado siguen ahí.')
    return svg(p, 'Ejemplo 4: cambio mínimo', 'La interfaz actual sin barra de vistas, con radios suaves e idioma segmentado.')


VARIANTS = {
    'AG-042-01-cuaderno': variant_editorial(),
    'AG-042-02-mapa': variant_map(),
    'AG-042-03-paneles': variant_split(),
    'AG-042-04-cambio-minimo': variant_minimal(),
}

for name, content in VARIANTS.items():
    (OUT / f'{name}.svg').write_text(content, encoding='utf-8')
    print(OUT / f'{name}.svg')


def minimal_mobile():
    p = [R(0, 0, 392, 911, '#202a30'), R(0, 0, 392, 56, '#222629'),
         R(15, 14, 29, 29, '#549ccd', 7),
         T(30, 34, 'JL', 12, '#102538', 800, anchor='middle'),
         T(56, 34, 'juan / portfolio', 15, '#e8e9e8', 600)]
    segmented(p, 278, 8, 'ES', dark=True)
    p += [T(21, 99, 'EXPLORER', 17, '#dcebe9', 700),
          T(354, 98, '✕', 17, '#a9bac0', anchor='middle'),
          L(21, 118, 372, 118, '#384a4e'),
          T(25, 156, '⌄  Juan/', 18, '#dcebe9', 700)]
    entries = ['README.md', 'AGENTS.md', 'SOUL.md', 'Welcome.md', 'Experience.md',
               'Contact.md', 'skills/', 'infrastructure.md', 'ci-cd.md',
               'applied-ai.md', 'programming.md', 'projects/', 'jarvis.md',
               'payroll-extractor.md']
    y = 198
    for i, name in enumerate(entries):
        yy = y + 43 * i
        folder = name.endswith('/')
        child = i in (7, 8, 9, 10, 12, 13)
        xx = 75 if child else 45
        if name == 'Welcome.md':
            p += [R(16, yy - 26, 360, 37, '#34434a', 10), R(16, yy - 26, 4, 37, '#67b9b4', 2)]
        if folder:
            p.append(P(f'M{xx} {yy-14}h13l5 5h16v13h-34z', '#86b6b5', 1.7))
            tx = xx + 47
        else:
            p.append(R(xx, yy - 21, 16, 19, 'none', 2, '#9bb8bc', 1.5))
            tx = xx + 31
        p.append(T(tx, yy - 5, name, 16 if not child else 15, '#e5eeed' if name == 'Welcome.md' else '#b1c3c5', 700 if name == 'Welcome.md' else 400, 'mono'))
    return '''<svg xmlns="http://www.w3.org/2000/svg" width="392" height="911" viewBox="0 0 392 911" role="img" aria-labelledby="title desc">
<title id="title">Cambio mínimo, vista móvil</title><desc id="desc">El árbol de archivos móvil ocupa toda la anchura al retirarse la barra de vistas.</desc>
<style>.sans{font-family:'Ubuntu Sans','DejaVu Sans',sans-serif}.mono{font-family:'Ubuntu Sans Mono','DejaVu Sans Mono',monospace}</style>''' + ''.join(p) + '</svg>'


(OUT / 'AG-042-04-cambio-minimo-movil.svg').write_text(minimal_mobile(), encoding='utf-8')
print(OUT / 'AG-042-04-cambio-minimo-movil.svg')
