import React, { useCallback, useMemo } from "react";
import { InfiniteSlider } from "@/shared/ui";
import { ROUTES_EXAMPLES } from "@/shared/config";
import { useNavigate, useLocation } from "react-router-dom";

const ROUTES = Object.entries(ROUTES_EXAMPLES).map((select) => {
  const [path, { description }] = select;
  return { path, description };
});

const ITEMS = ROUTES.map(({ description }) => description);

const PageSelector: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const selectIndex = useMemo(() => {
    return ROUTES.findIndex(({ path }) => pathname === path);
  }, [pathname]);

  const onClick = useCallback((index: number) => {
    navigate(ROUTES[index].path);
  }, []);

  return (
    <InfiniteSlider items={ITEMS} selectIndex={selectIndex} onClick={onClick} />
  );
};

export default React.memo(PageSelector);
