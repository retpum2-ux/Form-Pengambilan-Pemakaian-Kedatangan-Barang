/**
 * ============================================================================
 * LOKASI FILE CSV: src/code/daftar-barang.csv (atau code/daftar-barang.csv)
 * ============================================================================
 * Anda cukup mengedit file "daftar-barang.csv" dengan Microsoft Excel,
 * Google Sheets, Notepad, atau VSCode untuk menambah/mengubah daftar barang!
 *
 * Kolom CSV:
 * name,code,category,defaultUnit
 */

import rawCsv from './daftar-barang.csv?raw';
import { parseCSV } from './csvParser';

export interface ItemBarang {
  name: string;
  code?: string;
  category?: string;
  defaultUnit?: string;
}

function loadItemsFromCSV(): ItemBarang[] {
  try {
    const rows = parseCSV(rawCsv);
    return rows.map((row) => ({
      name: row.name || '',
      code: row.code || undefined,
      category: row.category || undefined,
      defaultUnit: row.defaultUnit || undefined,
    })).filter((item) => item.name.trim().length > 0);
  } catch (err) {
    console.error('Error parsing daftar-barang.csv:', err);
    return [];
  }
}

export const DAFTAR_BARANG: ItemBarang[] = loadItemsFromCSV();
