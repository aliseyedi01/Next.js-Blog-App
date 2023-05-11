import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function contact() {
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Perform validation and submit form data to server

    toast.current.show({ severity: "info", summary: "Send", detail: "Send your Question" });
    // Reset form data state to empty values
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-sky-200">
      <div className="max-w-screen-lg h-screen mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg leading-relaxed font-mono mb-8">
              Have a question, comment or just want to say hello? Fill out the form below and we'll
              get back to you as soon as possible.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4">
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-user-edit" />
                <InputText
                  id="name"
                  type="text"
                  className="w-full"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label htmlFor="name">Name</label>
              </span>
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  type="email"
                  className="w-full"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="email">Email</label>
              </span>
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-phone" />
                <InputText
                  id="phone"
                  type="tel"
                  className="w-full"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <label htmlFor="phone">Phone Number</label>
              </span>
              <span className="p-float-label ">
                <InputTextarea
                  id="message"
                  rows={5}
                  className="w-full"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <label htmlFor="message">Message</label>
              </span>
              <Toast ref={toast} />
              <Button
                icon="pi pi-send"
                loading={loading}
                iconPos=""
                label="Send"
                className="w-full px-[170px]"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
