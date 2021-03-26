/**
 * SASS
 */
import '../sass/lib/bootstrap-grid.scss';
import '../sass/main.scss';

/**
 * JavaScript
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Scroll vertical
const HorizontalScroll = (selector) => {
    const items = document.querySelectorAll(selector);
    if (items.length > 0) {

        const parallaxLeft = (items, container) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const depth = item.dataset.depth;
                const movement = -(container.offsetWidth * depth);
                tl.to(item, { x: movement, ease: "none" }, 0);
            }
        };

        const parallaxImg = (items, container) => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const diff = item.offsetWidth - item.parentElement.offsetWidth + 'px';

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                        onUpdate: ({ progress, direction, isActive }) => {
                            console.log(progress);
                            if (direction = 1) {
                                // tl.to(item, { xPercent: -5, ease: "none" }, 0);
                            } else {
                                // tl.to(item, { xPercent: 5, ease: "none" }, 0);
                            }
                        },
                    }
                });
            }
        };


        for (let i = 0; i < items.length; i++) {
            const container = items[i];
            const sections = container.querySelectorAll(':scope > section');
            let maxWidth = 0;

            const getMaxWidth = () => {
                maxWidth = 0;
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    maxWidth += section.offsetWidth;
                }
            }
            getMaxWidth();
            ScrollTrigger.addEventListener("refreshInit", getMaxWidth);


            gsap.to(sections, {
                x: `-${maxWidth - window.innerWidth}`,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${maxWidth}`,
                    anticipatePin: 1
                }
            });

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];

                // Parallax direction left
                const pr_left = section.querySelectorAll('.js-parallax-dr-left');
                // Parallax image
                const pr_img = section.querySelectorAll('.js-parallax-img');

                // Animations
                parallaxLeft(pr_left, section);
                parallaxImg(pr_img, section);

                // ScrollTrigger.create({
                //     trigger: section,
                //     start: () => 'top top-=' + (section.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
                //     end: () => '+=' + section.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                //     toggleClass: { targets: section, className: "active" }
                // });
            };
        }
    }
};

window.addEventListener('load', e => {
    // HorizontalScroll('.js-horizontal-page');
})


/**
 * Add here your JavasScript code
 */
