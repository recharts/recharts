import{r as f,e}from"./iframe-DTjNyuRV.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-CTYfecrB.js";import{R as A}from"./arrayEqualityCheck-C4xGcSTy.js";import{C}from"./ComposedChart-D6xbDU0w.js";import{X as K}from"./XAxis-Cc4WtM0z.js";import{L as v}from"./Legend--KVfADKp.js";import{B as a}from"./Bar-CQ9qjQMP.js";import{R as x}from"./RechartsHookInspector-euo4g-ug.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./CartesianAxis-DGjvbjMn.js";import"./Layer-Bnob1t-w.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./Label-BLKfXojP.js";import"./PolarUtils-jGr_7wxa.js";import"./ZIndexLayer-DQomkPs4.js";import"./zIndexSlice-DRfn0LKt.js";import"./types-To9Ddb8E.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./Symbols-Bqb-NDkg.js";import"./Curve-OPgUPtNu.js";import"./useElementOffset-CG9nz9uh.js";import"./iteratee-ZsRreprt.js";import"./tooltipContext-DeWM14_N.js";import"./ReactUtils-338dS-Qh.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./useAnimationId-DyTjjL6a.js";import"./Trapezoid-DDbPynHI.js";import"./Sector-DY-WO6-X.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./ErrorBarContext-D6_J_E6J.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./getZIndexFromUnknown-oJ4pp5B2.js";import"./graphicalItemSelectors-DqkonIUB.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
