import ButtonPrimary from "@/app/components/btnPrimary";
import React, { ReactElement } from "react";

interface Props {
  summary: ReactElement;
  onClose: () => void;
}

const SummaryPopup = ({ summary, onClose }: Props) => {
  return (
    <>
      <div className="popup-overlay">
        <div className="popup-container flex flex-col">
          <div className="popup-title-container heading text-primary-text-color bg-primary-color">
            <h3 className="popup-title pl-6 pt-7 pb-7">Order Summary</h3>
          </div>
          <div className="popup-content flex flex-col gap-6">
            <div className="popup-summary-text-container">
              <h4 className="heading text-secondary-color">{summary}</h4>
            </div>
            <div className="popup-verify-text-container">
              <p className="body-text text-secondary-color">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
            </div>
            <div className="popup-btn-mobile-container md:hidden self-center">
              <ButtonPrimary
                title="Checkout - $14.00 / mo"
                href="/home"
                onClick={onClose}
              />
            </div>
            <div className="popup-btn-tablet-container">
              <div className="tablet-price-container">
                <h4 className="heading text-primary-color">$14.00 / mo</h4>
              </div>
              <div className="btn-tablet-container ">
                <ButtonPrimary
                  title="Checkout"
                  href="/home"
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryPopup;
