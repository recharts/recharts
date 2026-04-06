import{r as f,e}from"./iframe-B8SpPQoN.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DNa02LBn.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-2MTTUHAP.js";import{C}from"./ComposedChart-DxJImS0j.js";import{X as K}from"./XAxis-Cin7z-gi.js";import{L as v}from"./Legend-6SJRyuws.js";import{B as s}from"./Bar-CPaj8_xh.js";import{R as x}from"./RechartsHookInspector-C-uKGE-C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CtyZJFvD.js";import"./Layer-qfrTI4Q6.js";import"./resolveDefaultProps-DzQ1rR94.js";import"./Text-CvYPnnR9.js";import"./DOMUtils-7jDgYM5P.js";import"./Label-D7a9N5YB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ORGjuoDq.js";import"./zIndexSlice-D7POqXab.js";import"./immer-DXJ0Fvyi.js";import"./types-ro_75Oqz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DVrFbe8I.js";import"./hooks-D1vO-Uu8.js";import"./axisSelectors-7IbcFarQ.js";import"./d3-scale-CgZuTiLl.js";import"./RechartsWrapper-BPCT0kIp.js";import"./index-0MgJGhOu.js";import"./CartesianChart-B4UYsacS.js";import"./chartDataContext-5xAcHE6X.js";import"./CategoricalChart-BwxXShMz.js";import"./Symbols-Dk8MuMBV.js";import"./symbol-BupuQwEg.js";import"./step-oz_v09YS.js";import"./useElementOffset-D_wecJQa.js";import"./uniqBy-C7608wgp.js";import"./iteratee-C9ah-un7.js";import"./tooltipContext-ChJzGCgx.js";import"./ReactUtils-Dvtx4mkZ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CAMIqiYR.js";import"./isPlainObject-D7MEnopY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CmJKdPc2.js";import"./useAnimationId-BPBgs8nb.js";import"./Trapezoid-B4rCe4Ap.js";import"./Sector-WPeAUgwy.js";import"./Curve-Cnx0u3AQ.js";import"./RegisterGraphicalItemId-rH65yuEl.js";import"./ErrorBarContext-UPy6xw3i.js";import"./GraphicalItemClipPath-DEUbhDcY.js";import"./SetGraphicalItem-DEk7bfFl.js";import"./getZIndexFromUnknown-Jn7KYacX.js";import"./graphicalItemSelectors-BmPR3CZd.js";import"./index-emaQayzG.js";import"./ChartSizeDimensions-B4hjUxAl.js";import"./OffsetShower-DFaIhHkZ.js";import"./PlotAreaShower-Yg7RB84W.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
