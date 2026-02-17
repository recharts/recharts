import{r as f,e}from"./iframe-DSWYlzWY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-Bm_Vu3am.js";import{R as A}from"./arrayEqualityCheck-Fy9pCvBq.js";import{C}from"./ComposedChart-CsltzT4x.js";import{X as K}from"./XAxis-iMOgY7Au.js";import{L as v}from"./Legend-ChFyYIbp.js";import{B as a}from"./Bar-cASxdDTM.js";import{R as x}from"./RechartsHookInspector-f6frTyp5.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./CartesianAxis-BDz1zwgU.js";import"./Layer-BJ-1LjgN.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./Label-DAbjiZ3-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DdgNL7UI.js";import"./zIndexSlice-CwHVazMP.js";import"./types-C3ofbdQr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-soMCmbpR.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./RechartsWrapper-DVh3xt6X.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./Symbols-DBQdL11F.js";import"./Curve-kGDkBF5o.js";import"./useElementOffset-Chrj36We.js";import"./iteratee-DTflgsMG.js";import"./tooltipContext-CyOsvigW.js";import"./ReactUtils-cJI4Ub_j.js";import"./ActiveShapeUtils-CIyCCcXD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMuMjxhY.js";import"./useAnimationId-C_vJY8DS.js";import"./Trapezoid-COd96k2O.js";import"./Sector-BpUrusHe.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./ErrorBarContext-W32xCQ7P.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./getZIndexFromUnknown-BAzIcvHZ.js";import"./graphicalItemSelectors-DN5wHNNo.js";import"./index-CFzpIqAG.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
