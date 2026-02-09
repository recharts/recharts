import{r as f,e}from"./iframe-xqabyeMj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-DVjLQwct.js";import{R as A}from"./arrayEqualityCheck-8L6pkBib.js";import{C}from"./ComposedChart-0LqFksIP.js";import{X as K}from"./XAxis-DCnicXeQ.js";import{L as v}from"./Legend-4k7M-nb5.js";import{B as a}from"./Bar-CsLsjSaC.js";import{R as x}from"./RechartsHookInspector-CFJUwZ9y.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4CpinzP.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Layer-Bh77GRoo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DT_FpcHY.js";import"./zIndexSlice-D0PgK1Qq.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./RechartsWrapper-BiqM6SLb.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./Symbols-Co2bCSmq.js";import"./Curve-DXgolxSe.js";import"./useElementOffset-Cr7-bJ23.js";import"./iteratee-C2sEUqfR.js";import"./tooltipContext-vrzPBdCH.js";import"./ReactUtils-bWGvhqKE.js";import"./ActiveShapeUtils-CHTxT0Ma.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnLG2ZKC.js";import"./useAnimationId-Cs8mC2Bw.js";import"./Trapezoid-CzCZCQIg.js";import"./Sector-BI2kwOQX.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./ErrorBarContext-BxBXv2QU.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./getZIndexFromUnknown-B6S0NDKc.js";import"./graphicalItemSelectors-D41rnoki.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
