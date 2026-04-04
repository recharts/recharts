import{r as f,e}from"./iframe-DchjWIcT.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DuKGJBLI.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-QCkrs1PG.js";import{C}from"./ComposedChart-CFs0TJqd.js";import{X as K}from"./XAxis-D4P_mYvM.js";import{L as v}from"./Legend-C0EOX5Tx.js";import{B as s}from"./Bar-BIWruxV4.js";import{R as x}from"./RechartsHookInspector-CPRA6xJz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DSoy_rG_.js";import"./Layer-BGlDxeZH.js";import"./resolveDefaultProps-SMaOT1cA.js";import"./Text-BMGBMw2v.js";import"./DOMUtils-BQHfItYf.js";import"./Label-DmoQv3Ji.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4usu0YU.js";import"./zIndexSlice-B4fo6Fp2.js";import"./immer-DLCBpJSm.js";import"./types-pHat4itB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ARMD3d3P.js";import"./hooks-0MUNxS-P.js";import"./axisSelectors-Cs62S3eJ.js";import"./d3-scale-Dz9swnGz.js";import"./RechartsWrapper-B6NPWdWo.js";import"./index-Brnv01PQ.js";import"./CartesianChart-9IsHXkda.js";import"./chartDataContext-CtCLKmwO.js";import"./CategoricalChart-Cx0EsJSw.js";import"./Symbols-BflYIgaG.js";import"./symbol-CXv5i0x2.js";import"./step-DoaVUl3G.js";import"./useElementOffset-C6-L7OPB.js";import"./uniqBy-DidLvKGu.js";import"./iteratee-CVHZomq6.js";import"./tooltipContext-CQdCblz-.js";import"./ReactUtils-CJlztPJN.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-dHK-lCgP.js";import"./isPlainObject-BctI-URS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsEwa7FZ.js";import"./useAnimationId-D5Nwowfc.js";import"./Trapezoid-BNsb85N7.js";import"./Sector-lrv0bu3P.js";import"./Curve-B-giixFy.js";import"./RegisterGraphicalItemId-BNrN6AWA.js";import"./ErrorBarContext-DeijJDUH.js";import"./GraphicalItemClipPath-BfbIuSDD.js";import"./SetGraphicalItem-CNHi9Fw6.js";import"./getZIndexFromUnknown-Cyx9YYNw.js";import"./graphicalItemSelectors-VD2YP5y4.js";import"./index-DNOa6QVy.js";import"./ChartSizeDimensions-CVsXW5Vd.js";import"./OffsetShower-35EhUoAr.js";import"./PlotAreaShower-CHLX1rVB.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
