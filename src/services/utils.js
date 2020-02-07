/**
 * 
 * @param {*} date 
 * @param {*} separator 
 * @param {*} format 
 */
export function convertDate(date, separator = '/', format = 'simple') {
    
    const newDate = new Date(date);
    const day = newDate.getDay();
    const month = convertMonth(newDate.getMonth());
    const year = newDate.getFullYear();
    switch (format) {
        case 'simple':
            return `${day} ${separator} ${month} ${separator} ${year}`;

        default:
            return `${day} ${separator} ${month} ${separator} ${year}`;

    }
}

/**
 * Convierte un number al correspondiente mes en string
 * @param {string} month 
 * @param {string} format 
 */
export function convertMonth(month) {
    
    const es = ['Enero', 'Febrero', 'Mayo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return es[month] || '';
}

export function extractSubtype(recetas, subtype='7') {
    if (!Array.isArray(recetas)) return [];

    return recetas.filter(item => item.subtype === subtype);
}
/**
 * 
 * @param {*} data 
 */
export function getTags(data) {
    const tags = {}
    
    data
        .map(item => item.taxonomy.tags)
        .forEach(item => {

            const count = item.length;

            item.forEach(element => {
                element.count = count;

                Object.defineProperty(tags, element.slug, {
                    value: element,
                    configurable: true,
                    enumerable: true
                });                
                
            });
        });

    function orderKeys(obj) {
        var ordered = {};

        Object
            .keys(obj)
            .sort((a, b) => {
                if (a.toLowerCase() < b.toLowerCase()) return 1;
                if (b.toLowerCase() < a.toLowerCase()) return -1;
                return 0;
        }).forEach(function(key) {
            ordered[key] = obj[key];
        });

        return ordered;
    }
    return orderKeys(tags);

    // return Object.values(a).slice(0, 10);
}