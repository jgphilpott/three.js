/* global QUnit */

import { DataTexture } from '../../../../src/textures/DataTexture.js';

import { Texture } from '../../../../src/textures/Texture.js';

export default QUnit.module( 'Textures', () => {

	QUnit.module( 'DataTexture', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			var object = new DataTexture();

			assert.strictEqual( object instanceof Texture, true, 'DataTexture extends from Texture' );

		} );

		// INSTANCING
		QUnit.todo( 'Instancing', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		// PROPERTIES
		QUnit.todo( 'image', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		QUnit.todo( 'generateMipmaps', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		QUnit.todo( 'flipY', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		QUnit.todo( 'unpackAlignment', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		// PUBLIC
		QUnit.test( 'isDataTexture', ( assert ) => {

			const object = new DataTexture();
			assert.ok(
				object.isDataTexture,
				'DataTexture.isDataTexture should be true'
			);

		} );

	} );

} );
