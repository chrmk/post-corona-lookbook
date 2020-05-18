// Vue.component('cv-', {
//   template: `

//   `
// });

Vue.component('cv-page-header', {
  template: `
  <header class="main-header main-header-overlay" data-sticky-header="true"
      data-sticky-options='{ "stickyTrigger": "first-section" }'>

    <div class="mainbar-wrap">
      <div class="megamenu-hover-bg"></div><!-- /.megamenu-hover-bg -->
      <div class="container-fluid mainbar-container">
        <div class="mainbar">
          <div class="row mainbar-row align-items-lg-stretch px-4">

            <div class="col-auto pr-5">
              <div class="navbar-header">
                <a class="navbar-brand" href="index-creative.html" rel="home">
                  <span class="navbar-brand-inner">
                    <img class="logo-dark" src="./img/logo.png" alt="CDTM">
                    <img class="logo-sticky" src="./img/logo.png" alt="CDTM">
                    <img class="mobile-logo-default" src="./img/logo.png" alt="CDTM">
                    <img class="logo-default" src="./img/logo.png" alt="CDTM">
                  </span>
                </a>
                <button type="button" class="navbar-toggle collapsed nav-trigger style-mobile" data-toggle="collapse"
                  data-target="#main-header-collapse" aria-expanded="false"
                  data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'>
                  <span class="sr-only">Toggle navigation</span>
                  <span class="bars">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                  </span>
                </button>
              </div><!-- /.navbar-header -->
            </div><!-- /.col -->

            <div class="col">

              <div class="collapse navbar-collapse" id="main-header-collapse">

                <ul id="primary-nav" class="main-nav nav align-items-lg-stretch justify-content-lg-start"
                  data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }' data-localscroll="true">

                  <li>
                    <a href="./index.html">
                      <span class="link-icon"></span>
                      <span class="link-txt">
                        <span class="link-ext"></span>
                        <span class="txt font-weight-bold">Overview</span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="./theme-relationships.html">
                      <span class="link-icon"></span>
                      <span class="link-txt">
                        <span class="link-ext"></span>
                        <span class="txt font-weight-bold"><small class="text-uppercase">Theme #1</small><br />Boosting Relationships</span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="./theme-wellbeing.html">
                      <span class="link-icon"></span>
                      <span class="link-txt">
                        <span class="link-ext"></span>
                        <span class="txt font-weight-bold"><small class="text-uppercase">Theme #2</small><br />Promoting Wellbeing</span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="./theme-leisure.html">
                      <span class="link-icon"></span>
                      <span class="link-txt">
                        <span class="link-ext"></span>
                        <span class="txt font-weight-bold"><small class="text-uppercase">Theme #3</small><br />Adapting Leisure Times</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="conversio.html">
                      <span class="link-icon"></span>
                      <span class="link-txt">
                        <span class="link-ext"></span>
                        <span class="txt font-weight-bold"><small class="text-uppercase">Case Study</small><br />Conversio Board Game</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="./about.html">
                      <span class="link-icon"></span>
                      <span class="link-txt">
                        <span class="link-ext"></span>
                        <span class="txt font-weight-bold">About</span>
                      </span>
                    </a>
                  </li>

                </ul><!-- /#primary-nav  -->

              </div><!-- /#main-header-collapse -->

            </div><!-- /.col -->

          </div><!-- /.mainbar-row -->
        </div><!-- /.mainbar -->
      </div><!-- /.mainbar-container -->
    </div><!-- /.mainbar-wrap -->

  </header><!-- /.main-header -->
  `
});

Vue.component('cv-page-footer', {
  template: `
  <footer class="main-footer pt-80">
    <section class="bt-fade-white-015 pt-90 pb-90">
      <div class="container">
        <div class="row">

          <div class="lqd-column col-md-6 col-md-offset-3 text-center">

            <figure>
              <img src="./img/logo.png" alt="Logo">
            </figure>
            <p class="mb-1">Do you have ideas, comments, or feedback?</p>
            <a href="https://forms.gle/SZ7uAM2ouZY97E3K6"
              class="btn btn-solid btn-lg semi-round btn-gradient font-size-10 font-weight-bold lh-2 mb-2"
              target="_blank">
              <span>
                <span class="btn-gradient-bg"></span>
                <span class="btn-txt">We are happy to hear more!</span>
                <span class="btn-gradient-bg btn-gradient-bg-hover bg-primary"></span>
              </span>
            </a>
            <p>© 2020 CDTM</p>

          </div><!-- /.col-md-6 -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
  </footer><!-- /.main-footer -->`
});


Vue.component('cv-about-team', {
  template: `
  <section class="vc_row pt-130 pb-80">
    <div class="container">
      <div class="row">
      <div class="lqd-column col-md-10 col-md-offset-1">
        <header class="fancy-title text-center mb-75" data-custom-animations="true"
          data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
          <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">Our Team</h6>
          <h2 class="mt-4 mb-4">
          Great Things are Never Done by One Person.
          </h2>
        </header><!-- /.fancy-title -->
      </div><!-- /.col-md-8 col-md-offset-2 -->

      </div><!-- /.row -->

      <div class="row">

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-7.jpg" alt="Loretta Dean" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">Loretta Dean</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-8.jpg" alt="David Richards" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">David Richards</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-9.jpg" alt="Andrea Harman" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">Andrea Harman</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-10.jpg" alt="Andrea Harman" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">Andrea Harman</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->


        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-7.jpg" alt="Loretta Dean" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">Loretta Dean</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-8.jpg" alt="David Richards" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">David Richards</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-9.jpg" alt="Andrea Harman" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">Andrea Harman</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

        <div class="lqd-column col-md-3 col-sm-6">

          <div class="liquid-img-group-single mb-20" data-reveal="true" data-reveal-options='{"direction":"bt"}'>
            <div class="liquid-img-group-img-container">
              <div class="liquid-img-container-inner">
                <figure>
                  <img src="./assets/demo/team/team-10.jpg" alt="Andrea Harman" />
                </figure>
              </div><!-- /.liquid-img-container-inner -->
            </div><!-- /.liquid-img-group-img-container -->
          </div><!-- /.liquid-img-group-single -->

          <div class="ld-fancy-heading mask-text">
            <h3 class="font-size-20 mb-1" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"300","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50},"animations":{"translateY":0}}'
              data-split-options='{"type":"words"}'><span class="ld-fh-txt">Andrea Harman</span></h3>
          </div><!-- /.ld-fancy-heading -->
          <div class="ld-fancy-heading mask-text">
            <h6 class="font-size-14 font-weight-medium" data-split-text="true" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"600","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":39},"animations":{"translateY":0}}'
              data-split-options='{"type":"lines"}'><span class="ld-fh-txt">Founder</span></h6>
          </div><!-- /.ld-fancy-heading -->

        </div><!-- /.col-md-3 col-sm-6 -->

      </div><!-- /.row -->

    </div><!-- /.container -->

  </section>
  `
});

Vue.component('cv-about-zukunftsinstitut', {
  template: `
    <section class="vc_row pt-80 pb-80" id="zukunftsinstitut">
      <div class="container">

        <div class="row">
          <div class="lqd-column col-md-10 col-md-offset-1">
            <header class="fancy-title text-center mb-75" data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
              <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">Building on the Shoulders of Others</h6>
              <h2 class="mt-4 mb-4">
                Scenarios of a Post-Corona World by the Zukunftsinstitut
              </h2>
            </header><!-- /.fancy-title -->
          </div><!-- /.col-md-8 col-md-offset-2 -->
        </div><!-- /.row -->

        <div class="row">

          <div class="lqd-column col-md-6">

            <h4 class="text-center">Scenario 1</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/peOlsJ1YT3E" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

          </div><!-- /.col-md-6 -->

          <div class="lqd-column col-md-6">

            <h4 class="text-center">Scenario 2</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kf8twOATaTE" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

          </div><!-- /.col-md-6 -->

          <div class="lqd-column col-md-6">

            <h4 class="text-center">Scenario 3</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aDPcg0p-bAc" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

          </div><!-- /.col-md-6 -->

          <div class="lqd-column col-md-6">

            <h4 class="text-center">Scenario 4</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/luZgKAET4t4" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

          </div><!-- /.col-md-6 -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
  `
});

Vue.component('cv-about-cdtm', {
  template: `
    <section class="vc_row pt-90 pb-150 mt-90" id="about">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center">

          <div class="lqd-column col-md-5 hidden-xs hidden-sm">

            <div class="lqd-parallax-team-members">

              <div class="liquid-img-group-container">
                <div class="liquid-img-group-inner">
                  <div class="liquid-img-group-single" data-roundness="4">
                    <div class="liquid-img-group-img-container">
                      <div class="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"translateY":17}' data-parallax-to='{"translateY":-74}' data-parallax-options='{"overflowHidden": false, "easing": "linear"}'>
                        <figure>
                          <img src="./img/cdtm3.jpg"  alt="Team Member"/>
                        </figure>
                      </div><!-- /.liquid-img-container-inner -->
                    </div><!-- /.liquid-img-group-img-container -->
                  </div><!-- /.liquid-img-group-single -->
                </div><!-- /.liquid-img-group-inner -->
              </div><!-- /.liquid-img-group-container -->
  
              <div class="liquid-img-group-container">
                <div class="liquid-img-group-inner">
                  <div class="liquid-img-group-single" data-roundness="4">
                    <div class="liquid-img-group-img-container">
                      <div class="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"translateY":83}' data-parallax-to='{"translateY":-94}' data-parallax-options='{"overflowHidden": false, "easing": "linear"}'>
                        <figure>
                          <img src="./img/cdtm4.jpg" alt="Team Member"/>
                        </figure>
                      </div><!-- /.liquid-img-container-inner -->
                    </div><!-- /.liquid-img-group-img-container -->
                  </div><!-- /.liquid-img-group-single -->
                </div><!-- /.liquid-img-group-inner -->
              </div><!-- /.liquid-img-group-container -->
  
              <div class="liquid-img-group-container">
                <div class="liquid-img-group-inner">
                  <div class="liquid-img-group-single" data-roundness="4">
                    <div class="liquid-img-group-img-container">
                      <div class="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"translateY":167}' data-parallax-to='{"translateY":-151}' data-parallax-options='{"overflowHidden": false, "easing": "linear"}'>
                        <figure>
                          <img src="./img/cdtm1.jpg"  alt="Team Member"/>
                        </figure>
                      </div><!-- /.liquid-img-container-inner -->
                    </div><!-- /.liquid-img-group-img-container -->
                  </div><!-- /.liquid-img-group-single -->
                </div><!-- /.liquid-img-group-inner -->
              </div><!-- /.liquid-img-group-container -->

            </div><!-- /.lqd-parallax-team-members -->

          </div><!-- /.col-md-5 -->

          <div class="lqd-column col-md-6 col-md-offset-1"  data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

            <header class="fancy-title mb-60">

              <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">About the CDTM</h6>
              <h2 class="mt-4 mb-4">Educating the Innovators of Tomorrow</h2>
              <p>The <strong>Center for Digital Technology and Management (CDTM)</strong> is a joint institution of the two universities in Munich, the Ludwig-Maximilians-Universität München (LMU) and the Technische Universität München (TUM).</p>
              <p>CDTM offers the interdisciplinary add-on study program „Technology Management“, which is part of the Elite Network of Bavaria. Students from various study backgrounds with creative ideas, great motivation and an entrepreneurial mindset are offered the tools to put their ideas into practice.</p>

            </header><!-- /.fancy-title -->

            <a href="#" class="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-14 font-weight-semibold" data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
              <span>
                <span class="btn-txt">More about the CDTM</span>
              </span>
            </a>

          </div><!-- /.col-md-7 -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
  `
});

Vue.component('cv-headline', {
  props: ['title', 'subtitle', 'text'],
  template: `
    <div class="row">
      <div class="lqd-column col-md-10 col-md-offset-1">
        <header class="fancy-title text-center mb-40" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
          <h6 class="text-uppercase ltr-sp-2 font-size-14 font-weight-semibold text-secondary">{{ subtitle }}</h6>
          <h2 class="mt-0 mb-0">{{ title }}</h2>
          <p>{{ text }}</p>
        </header><!-- /.fancy-title -->
      </div><!-- /.col-md-8 col-md-offset-2 -->
    </div><!-- /.row -->
  `,
});

// <div class="ld-pf-details pl-0 py-3">
//   <div class="ld-pf-details-inner">
//     <h5 class="ld-pf-title h5">{{ trend.name }}</h5>
//   </div><!-- /.ld-pf-details-inner -->
// </div><!-- /.ld-pf-details -->

Vue.component('cv-theme-header', {
  props: ['theme'],
  methods: {
    getLinkID: function (link) {
      return link.replace('#', '')
    }
  },
  template: `
    <section class="vc_row pt-120 pb-60" :id=getLinkID(theme.link)>
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center">

          <div class="lqd-column col-lg-5 col-md-6 mb-5 mb-md-0" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

            <header class="fancy-title mb-60">
              <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">{{ theme.subtitle }}</h6>
              <h2 class="mt-4 mb-4">{{ theme.name }}</h2>
              <p>{{ theme.summary }}</p>
            </header><!-- /.fancy-title -->
          </div><!-- /.col-lg-5 col-md-6 -->

          <div class="lqd-column col-lg-6 col-md-5 col-md-offset-1">
            <div class="liquid-img-group-single stretch-to-right" data-shadow-style="4" data-roundness="4" data-inview="true" data-animate-shadow="true" data-reveal="true" data-reveal-options='{"direction":"rl","bgcolor":"rgb(25, 38, 47)"}'>
              <div class="liquid-img-group-img-container">
                <div class="liquid-img-container-inner">
                  <figure>
                    <img  :src=theme.image :alt=theme.name />
                  </figure>
                </div>
              </div>
            </div>
          </div><!-- /.col-lg-6 col-md-5 col-md-offset-1 -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
  `,
});

Vue.component('cv-trend-masonry', {
  props: ['trend'],
  template: `
    <div class="lqd-column col-lg-2 col-sm-4 px-4 masonry-item" :class=trend.category>
      <div class="ld-pf-item ld-pf-dark pf-details-visible pf-bg-hidden title-size-30 pf-hover-shadow pf-hover-shadow-alt">

        <div class="ld-pf-inner">
          <div class="ld-pf-image">
            <figure><img :src=trend.image :alt=trend.name></figure>
            <div class="ld-pf-bg bg-gradient-primary-lr opacity-09" data-localscroll="true">
              <a :href=trend.link class="btn btn-xsm btn-naked font-weight-bold text-white" style="white-space: normal; padding: 30px; line-height: 1.5;" data-localscroll="true">
                <span><span class="btn-txt">{{ trend.name }}</span></span>
              </a>
            </div><!-- /.ld-pf-bg -->
          </div><!-- /.ld-pf-image -->

          <a :href=trend.link class="liquid-overlay-link"></a>
        </div><!-- /.ld-pf-inner -->
      </div><!-- /.ld-pf-item -->
    </div><!-- /.col-lg-4 col-md-6 -->
  `
});

Vue.component('cv-trend-details', {
  props: ['t'],
  methods: {
    getLinkID: function (link) {
      return link.replace('#', '')
    }
  },
  stemplate: `
    <h1>{{ t }}</h1>
  `,
  template: `
    <section class="vc_row pt-20 pb-120" :id=getLinkID(t.link)>
      <div class="container">

        <div class="row">
          <div class="lqd-column col-md-8 z-index-2">
            <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">
            {{ t.subtitle }}
            </h6>
            <div class="ld-fancy-heading">
              <h2>
                {{ t.name }}
              </h2>
            </div><!-- /.ld-fancy-heading -->

            <div class="ld-fancy-heading mask-text mb-10">
              <h5
                data-split-text="true"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":"1200","startDelay":"300","delay":"180","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":0},"animations":{"translateY":0}}'
                data-split-options='{"type":"lines"}'
              >{{ t.summary  }}</h5>
            </div><!-- /.ld-fancy-heading mask-text -->

            <p
              data-split-text="true"
              class="text-justify"
              data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":"1200","startDelay":"600","delay":"15","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":100,"rotateZ":2,"opacity":0},"animations":{"translateY":0,"rotateZ":0,"opacity":1}}'>{{ t.detail }}</p>
          </div><!-- /.lqd-column col-md-12 -->
        
          <div class="lqd-column col-md-4 visible-md visible-lg" style="left: 20px; top: 20px">
            <div class="liquid-img-group-single" data-shadow-style="4" data-inview="true" data-inview-options='{"delayTime":400}' data-animate-shadow="true">
              <div class="liquid-img-group-img-container">
                <div class="liquid-img-container-inner">
                  <figure>
                    <img :src=t.image :alt=t.name />
                  </figure>
                </div>
              </div>
            </div>
          </div><!-- /.lqd-column col-md-6 col-md-offset-2 -->

        </div><!-- /.row -->

        <div class="row pt-10">

          <div class="lqd-column col-md-4 col-sm-4 text-center">
            <cv-trend-signal v-bind:s="t.signals[0]" :subtitle="1"></cv-trend-signal>
          </div><!-- /.col-md-3 col-sm-8 -->

          <div class="lqd-column col-md-4 col-sm-4 text-center">
            <cv-trend-signal v-bind:s="t.signals[1]" :subtitle="2"></cv-trend-signal>
          </div><!-- /.col-md-3 col-sm-8 -->

          <div class="lqd-column col-md-4 col-sm-4 text-center">
            <cv-trend-signal v-bind:s="t.signals[2]" :subtitle="3"></cv-trend-signal>
          </div><!-- /.col-md-3 col-sm-8 -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
  `
});

Vue.component('cv-trend-signal', {
  props: ['s', 'subtitle'],
  stemplate: `
    <h1>Signal: {{ s }}</h1>
  `,
  template: `
    <div
      class="lqd-parallax"
      data-parallax="true"
      data-parallax-from='{"translateY":20}'
      data-parallax-to='{"translateY":0}'
      data-parallax-options='{"easing":"linear", "overflowHidden": false}'
      data-custom-animations="true"
      data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":35,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
    >
      <header class="fancy-title">
        <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">
          Signal #{{ subtitle }}
        </h6>
        <h3 class="font-size-18 mb-15">
          {{ s.text }}
        </h3>
        <p class="mb-15">
          <a :href=s.link target="_blank">{{ s.source }}</a>
        </p>
      </header><!-- /.fancy-title -->
    </div><!-- /.lqd-parallax -->
  `
});

Vue.component('cv-opportunity-details', {
  props: ['o' ],
  methods: {
    getLinkID: function (link) {
      return link.replace('#', '')
    }
  },
  template: `
    <section class="vc_row pt-20 pb-20" :id=getLinkID(o.link)>>
        <div class="container">

          <div class="row">

            <div class="lqd-column col-md-8 z-index-2">

              <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">{{ o.subtitle }}</h6>
              <div class="ld-fancy-heading">
                <h2>
                  {{ o.name }}
                </h2>
              </div><!-- /.ld-fancy-heading -->

              <div class="ld-fancy-heading mask-text">

                <p data-split-text="true" data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":"1200","startDelay":"300","delay":"180","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":60},"animations":{"translateY":0}}'
                  data-split-options='{"type":"lines"}'>
                  {{ o.summary }}
                </p>
              </div><!-- /.ld-fancy-heading mask-text -->
            </div><!-- /.lqd-column col-md-4 -->

            <div class="lqd-column col-md-4 visible-md visible-lg" style="left: 20px; top: 20px">
              <div class="liquid-img-group-single" data-shadow-style="4" data-inview="true"
                data-inview-options='{"delayTime":800}' data-animate-shadow="true">
                <div class="liquid-img-group-img-container">
                  <div class="liquid-img-container-inner">
                    <figure>
                      <img :src=o.image :alt=o.name />
                    </figure>
                  </div>
                </div>
              </div>
            </div><!-- /.lqd-column col-md-6 col-md-offset-2 -->

          </div><!-- /.row -->
        </div><!-- /.container -->

        <div class="container mt-45">
          <div class="row">

            <div class="lqd-column col-md-6 col-sm-12 mb-50">

              <div class="iconbox iconbox-heading-sm px-4" data-animate-icon="true"
                data-plugin-options='{"color":"rgb(249, 184, 81):rgb(249, 184, 81)"}'>
                <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">Value Proposition</h6>
                <div class="iconbox-icon-wrap">
                  <span class="iconbox-icon-container">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"
                      xml:space="preserve">
                      <path stroke-width="2" stroke-miterlimit="10" d="M63,18L63,54L1,54L1,10L22,10L30,18Z"></path>
                      <path stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" d="M23,36L30,43L 43,30">
                      </path>
                    </svg>
                  </span>
                </div><!-- /.iconbox-icon-wrap -->
                <div class="contents text-justify">
                  <p>With a platform that connects people to new people that are close to their social network, we could
                    enable the formation of new friend circles of friends of friends that live close together that could
                    support one another mentally as well as in everyday needs. By connecting them to people that are
                    close to their social network, you increase the chance that they trust one another more quickly and
                    that lasting and strong social bonds form. </p>
                </div><!-- /.contents -->
              </div><!-- /.iconbox -->

            </div><!-- /.col-md-4 col-sm-12 -->

            <div class="lqd-column col-md-6 col-sm-12 mb-50">

              <div class="iconbox iconbox-heading-sm px-4" data-animate-icon="true"
                data-plugin-options='{"color":"rgb(249, 184, 81):rgb(249, 184, 81)"}'>
                <h6 class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">Solution Sketch</h6>
                <div class="iconbox-icon-wrap">
                  <span class="iconbox-icon-container">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"
                      xml:space="preserve">
                      <path stroke-width="2" stroke-miterlimit="10" d="M17,16A15,15 0,1,1 47,16A15,15 0,1,1 17,16">
                      </path>
                      <path stroke-width="2" stroke-miterlimit="10" d="M22.083,16c0-5.477,4.44-9.917,9.917-9.917">
                      </path>
                      <path stroke-width="2" stroke-miterlimit="10" d="M32,64L32,31"></path>
                    </svg>
                  </span>
                </div><!-- /.iconbox-icon-wrap -->
                <div class="contents text-justify">
                  <p>Build an app/website that builds a person's social network from his existing social media contacts
                    and asks for a person's current location (and/or location he/she will move to). Ask the person how
                    close people should live that we then give “friend” suggestions for. Thereby we create a person’s
                    personal circle of friends in the local area (/multiple areas) that he can reach out to via the
                    platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping
                    trips and exchanges/borrowings of everyday goods (e.g. kitchen machines, car, …). </p>
                </div><!-- /.contents -->
              </div><!-- /.iconbox -->

            </div><!-- /.col-md-4 col-sm-12 -->

          </div><!-- /.row -->
        </div><!-- /.container -->
      </section>
  `
});


Vue.component('cv-tiles', {
  props: ['t', 'isSubtitle', 'isSmall'],
  // template: `<h1>{{ t }}</h1>`,
  template: `
    <div class="row">

        <div class="lqd-column col-md-12">

          <div class="liquid-blog-posts">
            <div class="liquid-blog-grid row">
              
              <div class="lqd-column col-md-4">
                <article class="liquid-lp">
                  <figure class="liquid-lp-media rounded">
                    <a :href=t[0].link data-localscroll="true">
                      <img :src=t[0].image :alt=t[0].name>
                    </a>
                  </figure>
                  <header class="liquid-lp-header">
                    <h6 v-if="isSubtitle" class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">
                      {{ t[0].subtitle }}
                    </h6>
                    <h2 class="entry-title liquid-lp-title h5">
                      <a :href=t[0].link rel="bookmark" data-localscroll="true">{{ t[0].name }}</a>
                    </h2>
                  </header>
                </article>
              </div><!-- /.col-md-4 -->

              <div class="lqd-column col-md-4">
                <article class="liquid-lp">
                  <figure class="liquid-lp-media rounded">
                    <a :href=t[1].link data-localscroll="true">
                      <img :src=t[1].image :alt=t[1].name>
                    </a>
                  </figure>
                  <header class="liquid-lp-header">
                    <h6 v-if="isSubtitle" class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">{{ t[1].subtitle }}</h6>
                    <h5 class="entry-title liquid-lp-title h5">
                      <a :href=t[1].link rel="bookmark" data-localscroll="true">{{ t[1].name }}</a>
                    </h5>
                  </header>
                </article>
              </div><!-- /.col-md-4 -->


              <div class="lqd-column col-md-4">
                <article class="liquid-lp">
                  <figure class="liquid-lp-media rounded">
                    <a :href=t[2].link data-localscroll="true">
                      <img :src=t[2].image :alt=t[2].name>
                    </a>
                  </figure>
                  <header class="liquid-lp-header">
                    <h6 v-if="isSubtitle" class="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-secondary">{{ t[2].subtitle }}</h6>
                    <h2 class="entry-title liquid-lp-title h5">
                      <a :href=t[2].link rel="bookmark" data-localscroll="true">{{ t[2].name }}</a>
                    </h2>
                  </header>
                </article>
              </div><!-- /.col-md-4 -->
              
            </div><!-- /.liquid-blog-grid -->

          </div><!-- /.liquid-blog-posts -->

        </div><!-- /.col-md-12 -->

      </div><!-- /.row -->
  `
});

new Vue({
	el: '#wrap',
	data: {
  overviewTitle: "Social Bonding in a Post-Corona World",
  overviewText: "With our business opportunity lookbook we help people whose personal relationships suffer from contact restrictions and who want to feel connected.",
   themes: [
        {
          subtitle: "Theme #1",
          name: "Boosting Our Existing Social Bonds",
          summary: "Social distancing is an unprecedented challenge for humans as it deprives us of most physical connections with other people and alters the few social interactions still allowed. At the same time, the COVID-19 measures highlight pre-crisis societal trends such as increasing isolation and loneliness, long-distance relationships, and new work. While our lifestyle has radically changed over the last decades, the fundamental need for meaningful relationships has not. Boosting social bonds, therefore, requires different approaches than throughout most of our evolutionary history, not only during this crisis, but also in a Post-Corona world.",
          image: "./img/theme-social-bonds.jpg",
          link: "./theme-relationships.html",
          introTrends: "A Globalized Society Turns Towards Old and New Forms of Creating a Sense of Community",
          trends: [
            {
              subtitle: 'Trend #1.1',
              name: 'Search for Community & Belonging',
              summary: 'In moments of crisis humans naturally turn to communities in search for emotional support.',
              detail: 'The lifestyle of many Europeans before the crisis was mostly individualistic, focusing on personal achievements and experiences. One consequence of COVID-19 might be a prioritization of community experiences and life over detached individualism. People will value the social bonds created with their local environment during the crisis. The search for communities could be reflected in consumer decisions (e.g. focus on local shops) as well as lifestyle choices (e.g. preference of smaller cities/villages compared to megacities).',
              image: './img/trend-community.jpg',
              link: '#trend-community',
              category: ['short-term', 'macro', 'society'],
              signals: [
                {
                  text: "Local solidarity: Local community initiatives have risen all around the world. Examples are the COVID-19 Mutual Aid UK network focusing on neighborhood support or platforms like Helfen.Berlin, which sell coupons for local shops.",
                  source: "The Guardian",
                  link: "https://www.theguardian.com/society/2020/mar/16/community-aid-groups-set-up-across-uk-amid-coronavirus-crisis"
                }, {
                  text: 'Deurbanization: After social distancing and lockdown measures many young people living in cities returned "home" to their families often living in less densely populated areas.',
                  source: "Redaktionsnetzwerk Deutschland",
                  link: "https://www.rnd.de/politik/corona-und-die-zukunft-schone-neue-welt-schlimme-neue-welt-TM7HQIHASNAI5L6QXUKQYD4XSM.html"
                }, {
                  text: 'Anonymity in cities: Even though we live in crowded cities, we are only loosely connected to the local networks in them, "never knowing who neighbors are or who lives in the flat downstairs."',
                  source: "SOURCE",
                  link: "LINK"
                }
              ]
            },
            {
              subtitle: 'Trend #1.2',
              name: 'Increased Loneliness',
              summary: 'Despite ever growing cities and denser populated areas, loneliness has been increasing throughout the past decades.',
              detail: 'The Zukunftsinstut has called it "monster of modernity" and symptom of "hypercivilization". COVID-19 has shed light on this long-existing problem as many people feel the hardship of lacking social interactions. Reasons for feeling lonely are manifold, including declining community structures, religiosity, and multi-generation households and increasing social media usage. But loneliness is also receiving more political, business and health care system attention, as it is freed from taboos long associated with psychological problems and is acknowledged as a large-scale problem.',
              image: './img/trend-loneliness.jpg',
              link: '#trend-loneliness',
              category: ['long-term', 'macro', 'society'],
              signals: [
                {
                  text: '16% of people in Germany feel lonely or extremely lonely according to a recent survey. This is frightening, but in fact only slightly more than in pre-corona times. Loneliness is a symptom of "hypercivilization”, according to the Zukunftsinstitut.',
                  source: "SPIEGEL",
                  link: "https://www.spiegel.de/panorama/corona-krise-16-prozent-der-deutschen-fuehlen-sich-einsam-a-c62d1653-4aa6-4e61-8ceb-527af77acdfe"
                }, {
                  text: "More and more people are living in single households. This is especially true for elderly people, who make up more than 50% of those. These are particularly in danger of loneliness.",
                  source: "SOURCE",
                  link: "LINK"
                }, {
                  text: "Researchers found that participants who are online most frequently (50 or more visits/week) have three times the odds of perceived social isolation as those who went online less frequently.",
                  source: "Splendid Research",
                  link: "https://www.splendid-research.com/de/splendid-news/pressemitteilungen/item/studie-einsamkeit-deutschland-2018.html"
                }
              ]
            },
            {
              subtitle: 'Trend #1.3',
              name: 'Increasing Mobility',
              summary: 'In a globalized connected world global education and careers that are marked by "job-hopping" become more and more usual.',
              detail: 'In addition, migration sped up in general due to the differences in wealth and interesting job markets like Europe, USA, Dubai that attract international talent. Additionally, it is easier to relocate more often as switching costs reduce with increased connectivity. This leads to families and close friends living ever further apart which leads to the need to find new ways to keep up close social bonds over such distances.',
              image: './img/trend-mobility.jpg',
              link: '#social',
              category: ['short-term', 'micro', 'business', 'society'],
              signals: [
                {
                  text: "Younger generations change jobs more often. Gallup reports that in the millennial generation 21% say they've changed jobs within the past year, which is more than three times the number of non-millennials.",
                  source: "Gallup",
                  link: "https://www.gallup.com/workplace/231587/millennials-job-hopping-generation.aspx"
                }, {
                  text: "Families are more spatially dispersed due to the fact that people are more mobile. In Britain, for example, one in 10 have family living more than 10,000 miles away.",
                  source: "SWNS digital",
                  link: "https://www.swnsdigital.com/2019/12/modern-families-are-growing-further-apart-new-research-has-revealed/"
                }, {
                  text: "People are more likely to study and work abroad. The last years have seen an increase in student mobility, which lead to more workers mobility. ",
                  source: "IZA World of Labor",
                  link: "https://wol.iza.org/articles/university-study-abroad-and-graduates-employability/long"
                }
              ]
            },
          ],
          introOpportunities: "[INTRO Opportunities]",
          opportunities: [
            {
              subtitle: 'Opportunity #1.1',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }, {
              subtitle: 'Opportunity #1.2',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }, {
              subtitle: 'Opportunity #1.3',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }
          ]
        },
        {
          subtitle: "Theme #2",
          name: "Promoting Mental and Physical Wellbeing",
          summary: "COVID-19 poses severe threats not only to physical but also mental wellbeing of global society. Research shows that previous outbreaks of similar diseases have had lasting mental health effects, undermining the importance of proactive efforts. Moreover, subsequent habit formation during a lockdown suggests that emerging health trends will not regress in post-crisis scenarios. Consequently, besides a general acceleration of mental health problems, we expect tendencies towards a retraditionalization of gender roles, increased risks in child development, rising demand for online health care, and a trend to home cooking to substantially affect society in the long-run.",
          image: "./img/theme-wellbeing.jpg",
          link: "./theme-wellbeing.html",
          introTrends: "[INTRO TRENDS]",
          trends: [
            {
              subtitle: 'Trend #2.1',
              name: 'Increased Mental Health Issues as Isolation Aftermath',
              summary: 'With 2.6 bn people in some sort of isolation, we are conducting the largest psychological experiment ever, facing the risk of severe mental health issues.',
              detail: 'During the outbreak of the virus, a negative impact on the mental health of the whole society can be perceived. Especially for those with poor health conditions the impact is significant. However, these short-term effects manifest in long-term habits as research about previous outbreaks shows, suggesting that proactive measures have to be undertaken. Consequently, the need for psychological care is rising.',
              image: './img/trend-mental-health.jpg',
              link: '#trend-mental-health',
              category: ['short-term', 'long-term', 'micro', 'society'],
              signals: [
                {
                  text: "45 % of US adults claim that their mental health has been negatively impacted due to anxiety and stress caused by COVID-19, a KFF poll shows.",
                  source: "Kaiser Family Foundation",
                  link: "https://www.kff.org/health-reform/issue-brief/the-implications-of-covid-19-for-mental-health-and-substance-use/"
                }, {
                  text: "Especially for those with poor health status, the crisis asks its toll (53 % of these participants claim a negative impact).",
                  source: "Kaiser Family Foundation",
                  link: "https://www.kff.org/health-reform/issue-brief/the-implications-of-covid-19-for-mental-health-and-substance-use/"
                }, {
                  text: "Given the pressure on mental health experienced through COVID, WHO released a list of considerations for how to foster mental well-being ",
                  source: "WHO",
                  link: "https://www.who.int/docs/default-source/coronaviruse/mental-health-considerations.pdf"
                }
              ]
            }, {
              subtitle: 'Trend #2.2',
              name: 'Go Back to Traditional Gender Roles',
              summary: 'For families with underaged children, the corona crisis is especially challenging.',
              detail: 'Schools are closed and children have to be taken care of at home - while simultaneously balancing remote work. First surveys and studies show that this could lead to a retraditionalization of role models. It can be observed that mothers tend to overtake more of caretaking, working less in their pay jobs. If one considers that leaders are forged in crisis, this tendency could impact careers significantly. Politics and institutions, like the Bertelsmann Stiftung, raise concerns that these could foster the inequality dynamics between genders even more.',
              image: './img/trend-gender-roles.jpg',
              link: '#trend-gender-roles',
              category: ['short-term', 'long-term', 'micro', 'society'],
              signals: [
                {
                  text: "Research conducted by Wissenschaftszentrum Berlin für Sozialforschung shows a slight tendency of women rather not working during COVID-19 compared to men, especially if their are parents",
                  source: "Wissenschaftszentrum Berlin",
                  link: "https://wzb.eu/system/files/docs/dsi/af/Erwerbsarbeit%20in%20Zeiten%20von%20Corona.pdf"
                }, {
                  text: "The amount mothers of children under 16 years spend for housework and caretaking rose from 6.9 to 8.2 hours per day, according to the Mannheimer Corona-Study.",
                  source: "University of Mannheim",
                  link: "https://www.uni-mannheim.de/gip/corona-studie/"
                }, {
                  text: 'A recent survey indicates "signs of a retraditionalization in which the responsibility of mothers for children and household is emphasized again."',
                  source: "Konrad Adenauer Stiftung",
                  link: "https://www.kas.de/documents/252038/7995358/Corona+%E2%80%93+Familien+am+Limit.pdf/a31e9a94-9f27-e738-89cd-ac00b4d270b4?version=1.0&t=1588687485712"
                }
              ]
            }, {
              subtitle: 'Trend #2.3',
              name: 'Increased Risks in Child Development',
              summary: 'School closures substantially disrupt the lives of students and their families and pose long-lasting risks for child health.',
              detail: 'The unique combination of social isolation together with a public health crisis, and an upcoming economic recession lead to more expected cases of mental disorders among children. Since mental problems during childhood are often a life-long burden for individuals, we face generation-wide long-term effects on child health.',
              image: './img/trend-child-development.jpg',
              link: '#trend-child-development',
              category: ['long-term', 'macro', 'society'],
              signals: [
                {
                  text: "Children are among the most severely impacted victims of COVID-19.",
                  source: "Unicef",
                  link: "https://www.unicef.org/press-releases/dont-let-children-be-hidden-victims-covid-19-pandemic"
                }, {
                  text: "The coronavirus pandemic and the unprecedented measures to contain its spread are disrupting nearly every aspect of children’s lives.",
                  source: "World Economic Forum",
                  link: "https://www.weforum.org/agenda/2020/05/covid-19-is-hurting-childrens-mental-health/"
                }, {
                  text: "Mental illness among adolescents are expected to be exacerbated by the pandemic.",
                  source: "Kaiser Family Foundation",
                  link: "https://www.kff.org/health-reform/issue-brief/the-implications-of-covid-19-for-mental-health-and-substance-use/"
                }
              ]
            }
          ],
          introOpportunities: "[INTRO Opportunities]",
          opportunities: [
            {
              subtitle: 'Opportunity #1.1',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }, {
              subtitle: 'Opportunity #1.2',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }, {
              subtitle: 'Opportunity #1.3',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }
          ]
        },
        {
          subtitle: "Theme #3",
          name: "The Social Side of Leisure and Lifestyle",
          summary: "Concerts, bars, clubs, sports and other large gatherings of people are going to be the last thing to return. However, these are the stages where most of our social lives take place. Where we celebrate our landmark events such as birthdays, anniversaries, or weddings. Where we get to know other people and form new bonds. How will the post-corona world impact the social aspects of our leisure activities?",
          image: "./img/theme-social-side-of-leisure.jpg",
          link: "./theme-leisure.html",
          introTrends: "Leisure Activities Move into Online Space - So Do Social Bonds",
          trends: [
            {
              subtitle: 'Trend #3.1',
              name: 'Socializing with Your Idols during Interactive Concerts',
              summary: "In the years to come, different approaches of interactive live streaming of concerts could rise.",
              detail: "As the music industry has migrated to streaming, touring has become critical to financial success. In response to the coronavirus pandemic, artists are playing virtual concerts on social media platforms and video games like Fortnite. Online concerts open up new possibilities in terms of geographical availability, as well as other ways to interact with the audience. Additionally, it may drive humans to perform music together during these events. It could very well be a test case for more concert experiences migrating online in the future. Nevertheless, the willingness to spend on a virtual version of a performance is yet to be assessed.",
              image: './img/trend-idols.jpg',
              link: '#trend-idols',
              category: ['long-term', 'macro', 'business', 'society'],
              signals: [
                {
                  text: "The popular video game Fortnite hosted an interactive virtual concert by a skyscraper-sized Travis Scott. The psychedelic event gathered more than 12m views.",
                  source: "Techcrunch",
                  link: "https://techcrunch.com/2020/04/24/fortnite-hosted-a-psychedelic-travis-scott-concert-and-12-3m-people-watched/"
                }, {
                  text: "In June 2017, the One Love Manchester benefits concert, which featured several famous musicians, raised 3m USD and accumulated over 14.5m views.",
                  source: "CNBC",
                  link: "https://www.cnbc.com/2020/03/19/chris-martin-bono-and-future-of-virtual-concert-after-coronavirus.html"
                }, {
                  text: "Coldplay’s lead singer live streamed a concert taking requests from commenters, U2’s Bono debuted a new song while streaming live.",
                  source: "CNBC",
                  link: "https://www.cnbc.com/2020/03/19/chris-martin-bono-and-future-of-virtual-concert-after-coronavirus.html"
                }
              ]
            }, {
              subtitle: 'Trend #3.2',
              name: 'Escaping Into Virtual Safe Havens',
              summary: "Life Simulator online communities provide a perfect escapist entertainment, offering gentle and comforting realities.",
              detail: "While the pandemic and ensuing lockdown have dramatically changed the way we live our lives, video games offer a way to safely indulge in our basic human need to connect. Video games are letting people chat, connect, and meet new people. Video game makers are banding together to promote gaming as a healthy means of social connection. Life Simulator online communities are a way to escape into gentle and comforting worlds. The activities they involve allow players to feel a sense of normalcy and security, and the gameplay is built around the relationships with like-minded players.",
              image: './img/trend-microworlds.jpg',
              link: '#trend-microworlds',
              category: ['long-term', 'society'],
              signals: [
                {
                  text: "Kind Words is a game that helps players in lockdown communicate with strangers. In it, an avatar sits at a desk in a digital bedroom and types out questions about real-world personal problems. In return, other players respond with encouraging notes.",
            source: "engadget",
                  link: "https://www.engadget.com/2020-03-28-kind-words-social-network-nice.html"
                }, {
                  text: "Nintendo’s sales were driven by the breakout success of Animal Crossing: New Horizons, a game set on an island utopia. The company has sold more than 13m units of the game in its first six weeks of release.",
                  source: "CNN BUSINESS",
                  link: "https://edition.cnn.com/2020/05/07/tech/nintendo-earnings-intl-hnk/index.html"
                }, {
                  text: "A team UC Berkeley students built a virtual version of the university in the popular Minecraft video game, where hundreds of graduating UC Berkeley students attended a virtual, mock commencement ceremony.",
                  source: "Berkeley News",
                  link: "https://news.berkeley.edu/2020/05/16/watch-blockeley-uc-berkeleys-online-minecraft-commencement/"
                }
              ]
            }, {
              subtitle: 'Trend #3.3',
              name: 'Long-Distance Training Buddies',
              summary: 'Athletes may be training alone, but they can still feel part of a larger group.',
              detail: 'With gyms and sport clubs closing their doors to curb the coronavirus outbreak, people are turning to online alternatives to maintain their sports routines. At-home training classes and virtual races connect yogis, runners and cyclists in times of social distancing and, thus, help them to remain motivated. Athletes train and compete on their own, and then connect with others through online results and narratives.',
              image: './img/trend-training.jpg',
              link: '#trend-training',
              category: ['short-term', 'business'],
              signals: [
                {
                  text: "Major fitness studio players (such as SoulCycle or Equinox) are launching online platforms with unlimited access to at-home alternatives.",
                  source: "Fortune",
                  link: "https://fortune.com/2020/03/18/coronavirus-gyms-workouts-soulcycle-peloton-fitness-industry/",
                  category: ['short-term', 'business'],
                }, {
                  text: "77k+ runners participated simultaneously in RedBull's virtual WingsForLifeRun. 11k+ in first virtual IRONMAN triathlon race.",
                  source: "RedBull / IRONMAN",
                  link: "https://www.redbull.com/int-en/wings-for-life-world-run-2020-event-report",
                  category: ['long-term', 'society'],
                }, {
                  text: "Virtual workout class providers (such as Daily Burn) seen a 268% year-over-year increase in membership signups.",
                  source: "Business Insider",
                  link: "https://www.businessinsider.com/gyms-closing-coronavirus-home-workout-apps-2020-3",
                  category: ['short-term', 'business'],
                },
              ]
            }
          ],
          introOpportunities: "[INTRO Opportunities]",
          opportunities: [
            {
              subtitle: 'Opportunity #1.1',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }, {
              subtitle: 'Opportunity #1.2',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }, {
              subtitle: 'Opportunity #1.3',
              name: 'Discover and Strengthen Your Local Community',
              summary: 'Most people living in cities have friends in all parts of the city, but are rarely friends with their neighbours or people living in the same house. In times of social distancing, however, this could prove crucially important to team up for grocery shoppings, share necessary items, or to have one person in the same house that you are still allowed to meet, even in complete lockdown. In "normal" times, knowing people in their local communities would help to feel at home in a new city more quickly and to prevent loneliness in cities.',
              valueproposition: 'With a platform that connects people to new people that are close to their social network, we could enable the formation of new friend circles of friends of friends that live close together that could support one another mentally as well as in everyday needs. By connecting them to people that are close to their social network, you increase the chance that they trust one another more quickly and that lasting and strong social bonds form.',
              solutionsketch: "Build an app/website that builds a person's social network from his existing social media contacts and asks for a person's current location (and/or location he/she will move to). Ask the person how close people should live that we then give “friend” suggestions for. Thereby we create a person’s personal circle of friends in the local area (/multiple areas) that he can reach out to via the platform. In an advanced mode, the platform could even facilitate organizing accumulated shopping trips and exchanges/borrowings of everyday goods (e.g. kitchen machines or car).",
              image: './img/opportunity-local-community.jpg',
              link: '#opportunity-local-community',
            }
          ]
        }
      ]
  },
  methods: {
    sayHi: function (param) {
      return 'Hi' + ' ' + this.person.test
    },

    getTrends: function () {
      return this.themes[0].trends.concat(this.themes[1].trends).concat(this.themes[2].trends)
    },

    getOpportunities: function () {
      return this.themes[0].opportunities.concat(this.themes[1].opportunities).concat(this.themes[2].opportunities)
    }
  }
});

