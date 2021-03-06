export default `
.counter,
.countdown_container {
    text-align: center;
    display: none;
}

.counter.hide {
    transform: translate(-50%, -50%) scale(0);
    animation: hide .2s ease-out;
}

.nums {
    position: relative;
    font-size: 50px;
    overflow: hidden;
    height: 50px;
}

.nums span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(120deg);
    transform-origin: bottom center;
}

.nums span.in {
    transform: translate(-50%, -50%) rotate(0deg);
    animation: goIn .5s ease-in-out;
}

.nums span.out {
    animation: goOut .5s ease-in-out;
}

@keyframes hide {
    0% {
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        transform: translate(-50%, -50%) scale(0);
    }
}



@keyframes show {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    80% {
        transform: translate(-50%, -50%) scale(1.4);
    }

    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes goIn {
    0% {
        transform: translate(-50%, -50%) rotate(120deg);
    }

    30% {
        transform: translate(-50%, -50%) rotate(-20deg);
    }

    60% {
        transform: translate(-50%, -50%) rotate(10deg);
    }

    90%,
    100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

}

@keyframes goOut {

    0%,
    30% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    60% {
        transform: translate(-50%, -50%) rotate(20deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(-120deg);
    }
}
`;