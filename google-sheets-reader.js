
/**
 * Fetches and parses a publicly accessible google sheet
 * @param {String} url Public URL of the Google sheet's Webpage
 * @returns {Promise<GSheet>} The parsed Google sheet
 */
async function get_google_sheet(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.text().then(txt => resolve(new GSheet(txt))))
        .catch(err => reject(err))
    })
}


/**
 * Parses a sheets webpage and makes the data easily accessible.
 */
class GSheet {
    constructor(raw_html) {

        // Parse the sheet into a matrix or rows and columns
        let root = document.createElement("html")
        root.innerHTML = raw_html
        
        let temp_rows = [...root.querySelector("table").querySelectorAll("tbody > tr")]

        this.matrix = temp_rows.map(row => {
            return [...row.querySelectorAll("td")].map(td => this._extractCellValue(td))
        })
    }

    /**
     * Extract a cell's value from its HTML table cell
     * @param {HTMLElement} el The <td> table cell
     * @returns {String} The cell's value
     */
    _extractCellValue(el) {
        if(el.children.length > 0) {
            return this._extractCellValue(el.children[0])
        }

        return el.innerHTML
    }

    /**
     * Get the values stored in a specified row
     * @param {Number} row_index The row number
     * @returns The values stored in that row
     */
    getRow(row_index) {

        if(row_index < 0 || row_index > this.matrix.length - 1) {
            throw "row_index is out of bounds"
        }

        return this.matrix[row_index]
    }

    /**
     * Get the values stored in a specified column
     * @param {Number} col_index The column number
     * @returns The values stored in that column
     */
    getCol(col_index) {
        return this.matrix.map(row => {

            if(col_index > row.length - 1) {
                throw "col_index is out of bounds"
            }

            return row[col_index]
        })
    }
}