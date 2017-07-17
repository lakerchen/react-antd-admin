
const loadSomething = () => {
  return (
    <Bundle load={loadSomething}>
      {(Comp) => (Comp
        ? <Comp/>
        : <Loading/>
      )}
    </Bundle>
  );
}