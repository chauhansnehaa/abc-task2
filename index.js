gsap.registerPlugin(ScrollTrigger);

// Set initial styles and scroll setup
gsap.set('.page', { position: 'fixed', width: '100vw', maxWidth: '2000px', height: '100%', top: 0 });
gsap.set('.scrollDist', { width: '100%', height: '400%' });

// Define timeline for animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    pin: true,
  }
});

const rights = ['#right1', '#right2', '#right3', '#right4', '#right5', '#right6', '#right7'];
const colors = ['#b1b1b3', '#1b035d', '#1b1952', '#0e141b', '#47cfc3', '#b0b0b0', '#0d743e'];

// Set up the timeline for each page
rights.forEach((right, index) => {
  // Define animations for each page transition
  if (index === 0) {
    // Static first page (no fade out or transitions)
    gsap.set(right, { opacity: 1 });
    gsap.set('body', { backgroundColor: colors[0] });
  } else {
    // Fade out previous page and change background color
    timeline.fromTo(rights[index - 1], { opacity: 1 }, { opacity: 0, duration: 1 }, index * 2 - 1);
    timeline.to('body', { backgroundColor: colors[index], duration: 3 }, index * 2 - 1);
    // Fade in the current page
    timeline.fromTo(right, { opacity: 0 }, { opacity: 1, duration: 2 }, index * 2);
  }

  if (index === 0) {

    timeline.from('#img-1', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#img-2', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
  }

  if (index === 1) {

   timeline.from('#img-3', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-4', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
 }

 if (index === 2) {

   timeline.from('#img-5', { y: '70%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-6', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
 }

 if (index === 3) {

   timeline.from('#pizza-box', { x: '-70%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-7', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-8', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#bread1', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#bread2', { x: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
 }

 if (index === 4) {

   timeline.from('#img-13', { x: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-9', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-10', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-11', { y: '-100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#img-12', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2); }

   if (index === 5) {

      timeline.from('#img-14', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2); }

      if (index === 6) {

         timeline.from('#img-15', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

         timeline.from('#img-16', { y: '100%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2); }

});

const lefts = ['#left1', '#left2', '#left3', '#left4', '#left5', '#left6', '#left7'];
const colors2 = ['#5b03a5', '#4b18c6', '#0f0f38', '#17263c', '#184d9d', '#05298d', '#0d743e'];

lefts.forEach((left, index) => {
  if (index === 0) {
    gsap.set(left, { opacity: 1 });
    gsap.set('#left', { backgroundColor: colors2[0] });
  } else {
    timeline.fromTo(lefts[index - 1], { opacity: 1 }, { opacity: 0, duration: 1 }, index * 2 - 1);
    timeline.to('#left', { backgroundColor: colors2[index], duration: 3 }, index * 2 - 1);
    timeline.fromTo(left, { opacity: 0 }, { opacity: 1, duration: 2 }, index * 2);
  }

  if (index === 0) {

    timeline.from('#award-1', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#h1-1', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p-1', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.fromTo('#viewCase #link',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    );

  }

  if (index === 1) {

   timeline.from('#none', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#h1-2', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p-2', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.fromTo('#viewCase #link',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    );
 }

 if (index === 2) {

   timeline.from('#none', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#h1-3', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#p-3', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
  timeline.fromTo('#viewCase #link',
     { scale: 0.5, opacity: 0 },
     { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
   );
 }

 if (index === 3) {

   timeline.from('#none', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#h1-4', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.from('#p-4', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
  timeline.fromTo('#viewCase #link',
     { scale: 0.5, opacity: 0 },
     { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
   );
 }

 if (index === 4) {

   timeline.from('#none', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#h1-5', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p-5', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.fromTo('#viewCase #link',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    ); }

   if (index === 5) {

      timeline.from('#none', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#h1-6', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p-6', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.fromTo('#viewCase #link',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    ); }

    if (index === 6) {

      timeline.from('#award-2', { y: '-60%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#h1-7', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p-7', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
   timeline.fromTo('#viewCase #link',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    ); }

});

const centerInfos = ['#centerInfo1', '#centerInfo2', '#centerInfo3', '#centerInfo4', '#centerInfo5', '#centerInfo6', '#centerInfo7'];
const colors3 = ['#5b03a5', '#4b18c6', '#0f0f38', '#17263c', '#184d9d', '#05298d', '#0d743e'];

centerInfos.forEach((center, index) => {
  if (index === 0) {
    gsap.set(center, { opacity: 1 });
    gsap.set('center', { backgroundColor: colors3[0] });
  } else {
    timeline.fromTo(centerInfos[index - 1], { opacity: 1 }, { opacity: 0, duration: 1 }, index * 2 - 1);
    timeline.to('center', { backgroundColor: colors3[index], duration: 3 }, index * 2 - 1);
    timeline.fromTo(center, { opacity: 0 }, { opacity: 1, duration: 2 }, index * 2);
  }

  if (index === 0) {

    timeline.from('#h2-1', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p2-1', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

  }

  if (index === 1) {
   timeline.from('#h4-2', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

   timeline.from('#h2-2', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p2-2', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
 }

 if (index === 2) {

   timeline.from('#h4-3', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

   timeline.from('#nasa', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p2-3', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);}

 if (index === 3) {
   timeline.from('#h4-4', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

   timeline.from('#h2-4', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p2-4', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
 }

 if (index === 4) {

   timeline.from('#h4-5', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

   timeline.from('#h2-5', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p2-5', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);}

   if (index === 5) {

      timeline.from('#h4-6', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

      timeline.from('#h2-6', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
       timeline.from('#p2-6', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);}

    if (index === 6) {

      timeline.from('#h4-7', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);

   timeline.from('#h2-7', { y: '-40%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);
    timeline.from('#p2-7', { y: '-50%', opacity: 0, duration: 1, ease: 'power1.inOut' }, index * 2);}
});

const centerWrapper = ['#centerWrapper1', '#centerWrapper2', '#centerWrapper3', '#centerWrapper4', '#centerWrapper5', '#centerWrapper6', '#centerWrapper7'];
const colors4 = ['#5b03a5', '#4b18c6', '#0f0f38', '#17263c', '#184d9d', '#05298d', '#0d743e'];

centerWrapper.forEach((wrap, index) => {
  if (index === 0) {
    gsap.set(wrap, { opacity: 1 });
    gsap.set('#center-wrapper', { backgroundColor: colors4[0] });
  } else {
    timeline
      .to('#center-wrapper', { backgroundColor: colors4[index], duration: 1 }, index * 2 - 2)
      .fromTo(centerWrapper[index - 1], { opacity: 1 }, { opacity: 0, duration: 1 }, index * 2 - 1)
      .fromTo(wrap, { opacity: 0 }, { opacity: 1, duration: 1 }, index * 2);
  }
});



