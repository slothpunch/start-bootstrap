import React from 'react';
import Footer from './Footer';

function Services() {
  return (
    <div className="App">
      <section class="page-section" id="services">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Services</h2>
            <h3 class="section-subheading text-muted">Care about customers</h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-wrench fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Optimisation</h4>
              <p class="text-muted">
                We provide the best quality of e-commerce websites based on our
                experience and with the latest technologies.{' '}
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-palette fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">UX/UI</h4>
              <p class="text-muted">
                We provide bespoke User Interface Design (UI) & User Experience
                Design(UX) so that customers websites look like much more
                appealing.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Web Security</h4>
              <p class="text-muted">
                Prventing cyber attacks and protecting websites are crucial
                nowadays. We provide the latest security technologies for our
                customers
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Services;
