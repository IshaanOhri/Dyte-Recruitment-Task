/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 16:25:27
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 16:25:27
 * @Description: Definition for the MetadataError interface used in HTTP Error
 */

export interface IMetadataError {
  success: boolean;
  status: number;
  error: string;
  timestamp: string;
}
