import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filter/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter.contacts);

  const onChange = ({ currentTarget }) => {
    const filterValue = currentTarget.value.trim();
    dispatch(changeFilter(filterValue));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
