/**
 * @file: core/base/core.js
 * @author: Leonid Vinikov <czf.leo123@gmail.com>
 * @description: is base class/object for all instances, responsible for 'getNamespace', 'getName', implementation.
 */
import { ForceMethodBase } from '../errors/force-method';

/**
 * @memberOf core
 */
export class Core {
	static getNamespace() {
        throw new ForceMethodBase( 'Core/Base/Core', 'getNamespace' );
	}

	static getName() {
		throw new ForceMethodBase( 'Core/Base/Core', 'getName' );
	}

	getNamespace() {
		return this.constructor.getNamespace();
	}

	getName() {
		return this.constructor.getName();
	}

}

export default Core;
