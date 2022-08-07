import { FormFind, Label, Input, Span } from "./SearchForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { filtered } from "../../../redux/reducers";
import { getDataFilter } from "../../../redux/reducers";
// import { connect } from "react-redux";
// import actions from "../../../redux/actions";

function SearchForm() {
  const value = useSelector(getDataFilter);
  const dispatch = useDispatch();
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

/**------------------------------------------------- */
// function SearchForm(props: any) {
//   return (
//     <FormFind>
//       <Label htmlFor="search">Finde contact by name</Label>
//       <Input
//         id="search"
//         onChange={props.onChange}
//         value={props.value}
//         type="search"
//         pattern=".*\S.*"
//         required
//       />
//       <Span className="caret"></Span>
//     </FormFind>
//   );
// }

// const mapStatetoProps = (state: any) => ({
//   value: state.contact.filterData,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   onChange: (e: React.ChangeEvent<HTMLInputElement>): void =>
//     dispatch(actions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStatetoProps, mapDispatchToProps)(SearchForm);
