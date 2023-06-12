import React, { useCallback } from "react";
import { PageSelector } from "../../ui";
import {
  customersSlice,
  fetchCustomers,
  AppDispatch,
  useAppDispatch,
  useAppSelector,
} from "@/features";

const fetchAndInsertCustomer = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const customers = await fetchCustomers();
      // Возможно мы тут сами строим payload, без фукнции addCustomers
      const payload = customersSlice.addCustomers(customers);
      dispatch(payload);
    } catch (error) {
      console.error(error);
    }
  };
};

const Async: React.FC = (props) => {
  const { customers } = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => {
    dispatch(fetchAndInsertCustomer());
  }, [dispatch]);

  return (
    <>
      <PageSelector />
      <h1>Async</h1>
      <div>
        <button onClick={fetch}>Загрузить</button>
        {customers.map(({ id, name }, index) => {
          return (
            <div key={`${id}-${index}`}>
              <p>{id}</p>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Async);
