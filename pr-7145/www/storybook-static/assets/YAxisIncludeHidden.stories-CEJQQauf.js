import{r as f,e}from"./iframe-BTtdS09W.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CGeIp8Ig.js";import{R as A}from"./arrayEqualityCheck-Cr7uheU5.js";import{C}from"./ComposedChart-llfZcW-b.js";import{X as K}from"./XAxis-BIGryZaf.js";import{L as v}from"./Legend-CcmMXJ4b.js";import{B as a}from"./Bar-CNa3c76v.js";import{R as x}from"./RechartsHookInspector-CAlJBqiK.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bttov5cI.js";import"./Layer-CG03jz1V.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./Label-DQKpHpKK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbMDIpL4.js";import"./zIndexSlice-upTe-uMW.js";import"./immer-h2tBWHbd.js";import"./types-DbbwF8j4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./hooks-D1OOIbEZ.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./Symbols-DPD-AVYc.js";import"./symbol-C5fxreGH.js";import"./step-8k9vNXVF.js";import"./useElementOffset-CBCTXrKZ.js";import"./uniqBy-i0BZM8rB.js";import"./iteratee-sVBPIoKX.js";import"./tooltipContext-LAVhyWhn.js";import"./ReactUtils-DVOsTE35.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BJOC9-wX.js";import"./isPlainObject-LS29Qx7o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIL45UrG.js";import"./useAnimationId-D12e2U_3.js";import"./Trapezoid-DqH5uCSa.js";import"./Sector-U4JfKldd.js";import"./Curve-DdtOV6ZM.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./ErrorBarContext-amKR2pcK.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./getZIndexFromUnknown-b16aeF5m.js";import"./graphicalItemSelectors-BFealQV5.js";import"./index-DrM9enLn.js";import"./ChartSizeDimensions-DNML0thn.js";import"./OffsetShower-CC2yWEZE.js";import"./PlotAreaShower-4F-cactL.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
