import{r as f,e}from"./iframe-DwKnaYxn.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-CPIo8OmW.js";import{R as A}from"./arrayEqualityCheck-LpIzrfco.js";import{C}from"./ComposedChart-DVQptumT.js";import{X as K}from"./XAxis-BZQZZAmU.js";import{L as v}from"./Legend-CtcC-yxU.js";import{B as a}from"./Bar-DdPmfMKg.js";import{R as x}from"./RechartsHookInspector-BulN8Qtf.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CcPlK-DU.js";import"./Layer-DSEoyjCD.js";import"./resolveDefaultProps-C4ASXxnl.js";import"./Text-Cmd1_Toj.js";import"./DOMUtils-Poqmn9Kz.js";import"./Label-V1o-IcdK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BN-fjZdO.js";import"./zIndexSlice-BYI3CC3N.js";import"./immer-DQq_9s85.js";import"./types-CuZ_PvfO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CSkX6jPi.js";import"./hooks-hd7QZ5DW.js";import"./axisSelectors-CHTcuo-V.js";import"./d3-scale-DF79GY39.js";import"./RechartsWrapper-Cx1zvPpd.js";import"./index-CdfNcBdj.js";import"./CartesianChart-CzQwlEOC.js";import"./chartDataContext-BLheDghz.js";import"./CategoricalChart-E4I9FfSw.js";import"./Symbols-C2QRSUXD.js";import"./symbol-CZd2cT8P.js";import"./step-Cbn8vCGE.js";import"./useElementOffset-CmOXLvcN.js";import"./uniqBy-BxUPqeI8.js";import"./iteratee-CyMhRah8.js";import"./tooltipContext-Bp_z7nZo.js";import"./ReactUtils-BWd9nqnf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BElib0Bt.js";import"./isPlainObject-CWJcMVMA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bCycDAsX.js";import"./useAnimationId-DAuxgXsL.js";import"./Trapezoid-lPFf9vCg.js";import"./Sector-DE27qkYe.js";import"./Curve-BGSMtIpM.js";import"./RegisterGraphicalItemId-DJ-_fktQ.js";import"./ErrorBarContext-C_ynaDio.js";import"./GraphicalItemClipPath-BWTY-wx8.js";import"./SetGraphicalItem-BvmoZ9RU.js";import"./getZIndexFromUnknown-BvopCGcW.js";import"./graphicalItemSelectors-DCxC451_.js";import"./index-DfrlB0-M.js";import"./ChartSizeDimensions-Bj69MEnT.js";import"./OffsetShower-BpsLBEIx.js";import"./PlotAreaShower-5WwlvIXR.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
