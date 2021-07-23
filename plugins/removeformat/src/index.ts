import { isEngine, Plugin, PluginOptions } from '@aomao/engine';

export interface Options extends PluginOptions {
	hotkey?: string | Array<string>;
}
export default class extends Plugin<Options> {
	static get pluginName() {
		return 'removeformat';
	}

	execute() {
		if (!isEngine(this.editor)) return;
		const { change, block, mark } = this.editor;
		const range = change.getRange();
		const blocks = block.getBlocks(range);
		blocks.forEach((block) => {
			block.removeAttributes('style');
		});
		mark.unwrap();
	}

	hotkey() {
		return this.options.hotkey || 'mod+\\';
	}
}
