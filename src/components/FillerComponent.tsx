const FillerComponent = (props: any) => {
  return (
    <div className="filler w-1/3 bg-slate-500 h-full border">
      <div className="mt-5">
        <h1 className="text-center">{props.componentTitle}</h1>
      </div>
    </div>
  );
};

export default FillerComponent;
