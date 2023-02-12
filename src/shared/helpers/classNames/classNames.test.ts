import { classNames } from './classNames';

describe('classNames', () => {
    test('with only firts param', () => {
        expect(classNames('123')).toBe('123');
    });
    test('with additional class', () => {
        const expected = '123 cl1 cl2';
        expect(classNames('123', {}, ['cl1', 'cl2'])).toBe(expected);
    });
    test('with additional class', () => {
        const expected = '123 cl1 cl2 hoverder scrolable';
        expect(
            classNames('123', { hoverder: true, scrolable: true }, ['cl1', 'cl2']),
        ).toBe(expected);
    });
    test('with additional class', () => {
        const expected = '123 cl1 cl2 hoverder';
        expect(
            classNames('123', { hoverder: true, scrolable: false }, ['cl1', 'cl2']),
        ).toBe(expected);
    });
    test('with additional class', () => {
        const expected = '123 cl1 cl2 hoverder';
        expect(
            classNames('123', { hoverder: true, scrolable: undefined }, [
                'cl1',
                'cl2',
            ]),
        ).toBe(expected);
    });
});
