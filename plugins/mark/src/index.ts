import { MarkPlugin, PluginOptions } from '@aomao/engine';
import './index.css';

export interface Options extends PluginOptions {
	hotkey?: string | Array<string>;
	markdown?: boolean;
}
export default class extends MarkPlugin<Options> {
	tagName = 'mark';

	static get pluginName() {
		return 'mark';
	}

	hotkey() {
		return this.options.hotkey || '';
	}

	markdown = this.options.markdown !== false ? '==' : '';
}
