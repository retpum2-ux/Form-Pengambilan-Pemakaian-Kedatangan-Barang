/**
 * ============================================================================
 * LOKASI FILE CSV: src/code/daftar-satuan.csv (atau code/daftar-satuan.csv)
 * ============================================================================
 * Anda cukup mengedit file "daftar-satuan.csv" dengan Microsoft Excel,
 * Google Sheets, Notepad, atau VSCode untuk menambah/mengubah daftar satuan!
 *
 * Kolom CSV:
 * code,name
 */

import rawCsv from './daftar-satuan.csv?raw';
import { parseCSV } from './csvParser';

export interface SatuanUnit {
  code: string;
  name: string;
}

function loadUnitsFromCSV(): SatuanUnit[] {
  try {
    const rows = parseCSV(rawCsv);
    return rows.map((row) => ({
      code: (row.code || '').toUpperCase(),
      name: row.name || '',
    })).filter((unit) => unit.code.trim().length > 0);
  } catch (err) {
    console.error('Error parsing daftar-satuan.csv:', err);
    return [];
  }
}

export const DAFTAR_SATUAN: SatuanUnit[] = loadUnitsFromCSV();
