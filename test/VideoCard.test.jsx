import { render, screen } from '@testing-library/react';
import VideoCard from "../src/components/VideoCard"

test('checks the values from the mock rendered correctly', () => {
    it('Card title rendered correctly', () => {
        render (
            <VideoCard 
                key="dummyKey"
                title="dummyTitle"
                thumbnail="dummyImage"
                description="dummyDescription"
            />
        );
        expect(screen.getByText('dummyTitle')).toBeDefined();
    });
    it('Card description rendered correctly', () => {
        render (
            <VideoCard 
                key="dummyKey"
                title="dummyTitle"
                thumbnail="dummyImage"
                description="dummyDescription"
            />
        );
        expect(screen.getByText('dummyDescription')).toBeDefined();
    });
    it('Card title is on correct tag', () => {
        render (
            <VideoCard 
                key="dummyKey"
                title="dummyTitle"
                thumbnail="dummyImage"
                description="dummyDescription"
            />
        );
        expect(screen.getByText('dummyTitle').tagName).toBe('p');
    });
    it('Card description is on correct tag', () => {
        render (
            <VideoCard 
                key="dummyKey"
                title="dummyTitle"
                thumbnail="dummyImage"
                description="dummyDescription"
            />
        );
        expect(screen.getByText('dummyDescription').tagName).toBe('p');
    });


    expected()
})