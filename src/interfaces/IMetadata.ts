/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 16:25:06
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 16:25:06
 * @Description: Definition for the Metadata interface used in HTTP Response
 */

export interface IMetadata {
	success: boolean;
	status: number;
	message: string;
	timestamp: string;
}
