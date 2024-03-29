import { DetectLoopLinkedList } from "../../linkedlist/detectLoop"

describe('Detect Loop', () => {
    let detectLoop: DetectLoopLinkedList

    beforeEach(() => {
        detectLoop = new DetectLoopLinkedList();
    })

    it('Detect a loop by method 1', () => {
        detectLoop.append(1)
        detectLoop.append(2)
        detectLoop.append(3)
        detectLoop.append(4)
        detectLoop.createLoop()

        expect(detectLoop.detectLoop1()).toBe(true)
    })

    it('Check for falsy condition by method 1', () => {
        detectLoop.append(1)
        detectLoop.append(2)
        detectLoop.append(3)
        detectLoop.append(4)

        expect(detectLoop.detectLoop1()).toBe(false)
    })

    it('Detect a loop by method 1', () => {
        detectLoop.append(1)
        detectLoop.append(2)
        detectLoop.append(3)
        detectLoop.append(4)
        detectLoop.createLoop()

        expect(detectLoop.detectLoop2()).toBe(true)
    })

    it('Check for falsy condition by method 1', () => {
        detectLoop.append(1)
        detectLoop.append(2)
        detectLoop.append(3)
        detectLoop.append(4)

        expect(detectLoop.detectLoop2()).toBe(false)
    })
})