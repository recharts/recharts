import{r as f,e}from"./iframe-Cg8afp3P.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Bp6BdEbp.js";import{Y as c}from"./YAxis-B5L1n3Hm.js";import{R as A}from"./arrayEqualityCheck-CdnxX3zW.js";import{C}from"./ComposedChart-Dw1ue8mx.js";import{X as K}from"./XAxis-CcHOaWFK.js";import{L as v}from"./Legend-CfuybC4t.js";import{B as a}from"./Bar-QbcGwr9h.js";import{R as x}from"./RechartsHookInspector-DBmCwbx2.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BH2_JJNm.js";import"./Layer-YebNzFxt.js";import"./resolveDefaultProps-3HltEOEu.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./Label-DvKY9pNQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8TBIBWl0.js";import"./zIndexSlice-BhrWtTkt.js";import"./immer-496O7mbU.js";import"./types-CMLysTZx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./step-CqAkm0lp.js";import"./useElementOffset-RqGPhtWN.js";import"./uniqBy-CzLOAIrK.js";import"./iteratee-C64KKsoF.js";import"./tooltipContext-BYXsX5Eu.js";import"./ReactUtils-Bs6wbtV4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C8ehvzet.js";import"./isPlainObject-exJkdHtC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-m1zl6eyw.js";import"./useAnimationId-KzNTUIqt.js";import"./Trapezoid-CNmEBD2U.js";import"./Sector-DyLH-ktt.js";import"./Curve-kDork6Kh.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./ErrorBarContext-CYmUoBhN.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./getZIndexFromUnknown-DNdKCVA7.js";import"./graphicalItemSelectors-Dk-ZfK_L.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
