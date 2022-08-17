import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import i18next from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputPosition: {
      position: "absolute",
      bottom: 0,
      right: 0,
    },
    text: {
      color: "var(--text)",
    },
  })
);

export default function SimpleSelect() {
  const classes = useStyles();
  const [len, setLen] = React.useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const localStorage: any = window.localStorage.getItem("i18nextLng")?.length;
    if (localStorage > 2) {
      i18n.changeLanguage("en");
    }
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLen(event.target.value as string);
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <div className={classes.inputPosition}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          className={classes.text}
        >
          {t("leng")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={len}
          onChange={handleChange}
          label="len"
          className={classes.text}
        >
          <MenuItem value="ua">UA</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
