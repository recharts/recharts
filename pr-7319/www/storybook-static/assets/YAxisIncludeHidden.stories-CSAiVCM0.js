import{r as f,e}from"./iframe-bIRDwOrj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Cmkuai_3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-TXFMRjRi.js";import{C}from"./ComposedChart-B96jNgZT.js";import{X as K}from"./XAxis-R_euWI3w.js";import{L as v}from"./Legend-DSQOIfOC.js";import{B as s}from"./Bar-cVC2wu5X.js";import{R as x}from"./RechartsHookInspector-CVcWeYmF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-mK0sN7a0.js";import"./Layer-IjPfnpTW.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./Label-C1RClCIo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7UlnPMP.js";import"./zIndexSlice-D22DBnXA.js";import"./immer-BfeMUSMO.js";import"./types-dvoy8M64.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./hooks-BdMZPZGx.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./RechartsWrapper-D2ef2x-I.js";import"./index-TSn5rXzG.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./Symbols-DOx_UbzB.js";import"./symbol-NHM4e63q.js";import"./step-DQ7wUDFq.js";import"./useElementOffset-BV5HmMjB.js";import"./uniqBy-aS03rcBV.js";import"./iteratee-Dq5hiuyR.js";import"./tooltipContext-Dh1V_H5h.js";import"./ReactUtils-CzayGhzm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-wXVyp0gV.js";import"./isPlainObject-DIIEh3HT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBjo9wrp.js";import"./useAnimationId-Co08wyJa.js";import"./Trapezoid-1FkDqVZ5.js";import"./Sector-D-NFzdmx.js";import"./Curve-orFRmx5o.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./ErrorBarContext-rH_nwKrW.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./getZIndexFromUnknown-BqhwZ8lf.js";import"./graphicalItemSelectors-DBAA3x5X.js";import"./index-B6Pu2s-H.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./OffsetShower-DVm6XnLi.js";import"./PlotAreaShower-8mw46bvb.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
