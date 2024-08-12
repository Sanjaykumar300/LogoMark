import React from "react";
import "../features.css";

function Features() {
  return (
    <section id="features">
      <div className="features">
        <div className="features-list">
          <div className="features-list1">
            <div className="list-logo-1">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-3"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/></svg>
              </div>
            </div>
            <div className="list-text-1">
              <h5>Eliminate worry about designs.</h5>
              <p>Receive your logo right  over a few weeks.</p>
            </div>
          </div>

          <div className="features-list2">
            <div className="list-logo-2">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-bottom-dashed-scissors"><path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"/><path d="M10 22H8"/><path d="M16 22h-2"/><circle cx="8" cy="8" r="2"/><path d="M9.414 9.414 12 12"/><path d="M14.8 14.8 18 18"/><circle cx="8" cy="16" r="2"/><path d="m18 6-8.586 8.586"/></svg>
              </div>
            </div>
            <div className="list-text-2">
              <h5>Do you need to modify your design?</h5>
              <p>We'll complete it for you at no cost at all.</p>
            </div>
          </div>

          <div className="features-list3">
            <div className="list-logo-3">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
              </div>
            </div>
            <div className="list-text-3">
              <h5>No Ongoing Charges</h5>
              <p> Pay once to have lifetime access to our branding resources.
              </p>
            </div>
          </div>

          <div className="features-list4">
            <div className="list-logo-4">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copyright"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg>
              </div>
            </div>
            <div className="list-text-4">
              <h5>Complete copyright is granted.</h5>
              <p>For use in both private and business endeavors</p>
            </div>
          </div>

          <div className="features-list5">
            <div className="list-logo-5">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/></svg>
              </div>
            </div>
            <div className="list-text-5">
              <h5> Infinite changes</h5>
              <p>Change your logo anytime, even after you've made a purchase.</p>
            </div>
          </div>
        </div>
        <div className="features-bottom">
          <h2>Create a Unique Logo Design
          </h2>
          <p>Make as many logos as you like for free.
          </p>
          <a href="#">
            <button>Make my logo</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
