import { FormFind, Label, Input, Span } from "./SearchForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { filtered } from "../../../redux/reducers";
import { getDataFilter } from "../../../redux/reducers";
import { AppDispatch } from "../../../redux/store";

function SearchForm() {
  const value = useSelector(getDataFilter);
  const dispatch = useDispatch<AppDispatch>();
  // записываем велью инпута
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filtered(e.currentTarget.value));
  };
  return (
    <FormFind>
      <Label htmlFor="search">Finde contact by name</Label>
      <Input
        id="search"
        onChange={changeFilter}
        value={value}
        type="search"
        pattern=".*\S.*"
        required
      />
      <Span className="caret"></Span>
    </FormFind>
  );
}

export default SearchForm;
