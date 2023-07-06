"use client";
import React from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import FlagUz from "../../assets/Image/UZ.png";
import FlagRu from "../../assets/Image/ru.png";
import FlagGb from "../../assets/Image/GB.png";
import { setLanguage } from "../../redux/navbar.slice";

function CustomSelect({ fixedNavbar, className }) {
  const { language } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      border: "none",
      outline: "none",
      background: "transparent",
      cursor: "pointer",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: !fixedNavbar ? "#0D4C93" : "#000000B2",
      padding: 0,
    }),
    singleValue: (provided, state) => {
      const countryCode = state.data.value.toLowerCase();
      return {
        ...provided,
        paddingLeft: 0,
        color: !fixedNavbar ? "#0D4C93" : "#000000B2",
        "& > span > span": {
          display: !fixedNavbar ? "inline-block" : "inline-block",
        },
        // background: `url(https://flagcdn.com/${30}/${countryCode}.png) no-repeat 5px center`,
      };
    },
    menu: (baseStyles) => ({
      ...baseStyles,
      width: "150px",
    }),
  };

  const options = [
    {
      value: "en",
      label: (
        <span className="d-flex  gap-2">
          <img src={FlagGb} alt="Great Britin" style={{borderRadius:"50%"}}/>
          <span >English</span>
        </span>
      ),
    },
    {
      value: "uz",
      label: (
        <span className="d-flex">
          <img src={FlagUz} alt="Uzbekistan" style={{borderRadius:"50%"}}/>
          <span >Uzbek</span>
        </span>
      ),
    },
    {
      value: "ru",
      label: (
        <span className="d-flex  gap-2">
          <img src={FlagRu} alt="Russia" style={{borderRadius:"50%"}}/>
          <span >Русский</span>
        </span>
      ),
    },
  ];

  return (
    <>
      <Select
        styles={styles}
        className={className}
        onChange={(item) => dispatch(setLanguage(item.value))}
        defaultValue={{
          value: "ru",
          label: (
            <span className="d-flex gap-2">
            <img src={FlagRu} alt="Russia" style={{borderRadius:"50%"}}/>
            <span >Русский</span>
          </span>
          ),
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
        isSearchable={false}
        options={options}
      />
    </>
  );
}

export default CustomSelect;
