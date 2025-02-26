import React, { useState, useRef, useEffect } from "react";

const AgeModal: React.FC = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Fix for hydration

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true); // Ensure component only renders on client

    const storedAge = localStorage.getItem("AGE");
    if (storedAge && parseInt(storedAge) >= 21) {
      setIsVerified(true);
      setIsSubmit(true);
    }
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/, "");
    setDate(value);
    if (value.length >= 2 && monthRef.current) monthRef.current.focus();
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/, "");
    setMonth(value);
    if (value.length >= 2 && yearRef.current) yearRef.current.focus();
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value.replace(/\D/, ""));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const birthYear = parseInt(year, 10);
    const birthMonth = parseInt(month, 10);
    const birthDate = parseInt(date, 10);

    if ([birthYear, birthMonth, birthDate].some(isNaN)) {
      setError("Please enter a valid date of birth.");
      return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthYear, birthMonth - 1, birthDate);
    let age = today.getFullYear() - birthYear;

    if (
      today < birthDateObj ||
      age < 25 ||
      (age === 25 &&
        (today.getMonth() < birthDateObj.getMonth() ||
          (today.getMonth() === birthDateObj.getMonth() &&
            today.getDate() < birthDateObj.getDate())))
    ) {
      setError("You must be at least 25 years old to enter.");
      return;
    }

    setIsSubmit(true);
    setError("");
    localStorage.setItem("AGE", String(age));
    setTimeout(() => {
      setIsVerified(true);
    }, 5000);
  };

  // Fix: Prevent rendering on server to avoid hydration errors
  if (!isMounted) return null;

  return (
    <section
      className={`modal-age-popup ${isVerified ? "hide" : "active"}`}
      id="modalAgePopup"
    >
      <div className={`showAgeForm ${isSubmit ? "" : "active"}`}>
        <h1>
          HELLO THERE, <br /> WELCOME TO THE WORLD OF HIMMALEH
        </h1>
        <h3>Please enter your date of birth:</h3>
        <form id="ageForm" onSubmit={handleSubmit}>
          <div className="age-inputs">
            <input
              id="ageDate"
              type="number"
              value={date}
              onChange={handleDateChange}
              placeholder="DATE"
              min="1"
              max="31"
            />
            <span></span>
            <input
              id="ageMonth"
              type="number"
              value={month}
              ref={monthRef}
              onChange={handleMonthChange}
              placeholder="MONTH"
              min="1"
              max="12"
            />
            <span></span>
            <input
              id="ageYear"
              type="number"
              value={year}
              ref={yearRef}
              onChange={handleYearChange}
              placeholder="YEAR"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          <button id="ageButton" type="submit">
            Enter
          </button>
          {error && <div id="ageError" style={{ color: "red" }}>{error}</div>}
        </form>
        <h6>
          BY ENTERING THIS YOU ARE AGREEING TO THE TERMS OF USE AND PRIVACY
          POLICY.
        </h6>
      </div>
      <div className={`showAgeMsg ${isSubmit ? "active" : ""}`}>
        <h3 className="age-heading">
          YOU ARE APPROXIMATELY 50 MILLION YEARS <br /> YOUNGER TO THE PLACE
          WHERE WE ARE TAKING YOU
        </h3>
        <h4>28.9610&ordm; N, 79.5154&ordm; E</h4>
        {process.env.NEXT_PUBLIC_IMG_SRC && (
          <img
            src={`${process.env.NEXT_PUBLIC_IMG_SRC}navigation-arrow.svg`}
            width="20px"
            alt="Navigation Arrow"
          />
        )}
      </div>
    </section>
  );
};

export default AgeModal;
