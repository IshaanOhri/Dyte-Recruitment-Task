/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 16:29:16
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 16:29:16
 * @Description: Interface for browser details
 */

export interface IBrowserDetails {
  browser: string | undefined;
  version: string | undefined;
  os: string | undefined;
  platform: string | undefined;
  source: string | undefined;
}
