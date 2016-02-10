import classNames from 'classnames';
import style from 'hover.css/scss/hover';

function identity(t) { return t; };

export default function hover(...effects) {
	const classList = effects.filter(identity).map(name => style[`hvr-${name}`]);
	return classNames(...classList);
}
