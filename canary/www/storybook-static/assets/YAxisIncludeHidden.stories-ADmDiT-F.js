import{r as f,e}from"./iframe-DjYpiCK1.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-bUcTdGAX.js";import{R as A}from"./arrayEqualityCheck-ChWij-6b.js";import{C}from"./ComposedChart-DGjTVrS3.js";import{X as K}from"./XAxis-BAlFokgy.js";import{L as v}from"./Legend-Bm8rNxAk.js";import{B as a}from"./Bar-CQuPCIXk.js";import{R as x}from"./RechartsHookInspector-ycUhMjsN.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C5b0QVvJ.js";import"./Layer-DTpB7dpX.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./Label-BjhhnV9x.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPHhTAxg.js";import"./zIndexSlice-DD29w02m.js";import"./immer-Q7LYndgz.js";import"./types-uugzObvO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./d3-scale-D4J-_PMg.js";import"./RechartsWrapper-BsT6E87M.js";import"./index-Dcc_DcJs.js";import"./CartesianChart-DMb_0zJ6.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./Symbols-CkWT8iKr.js";import"./symbol-CHsY7JKe.js";import"./step-e2Z4FnHn.js";import"./useElementOffset-CFnM-Vwx.js";import"./uniqBy-C94NeD_o.js";import"./iteratee-BJG9ItkJ.js";import"./tooltipContext-AAl5ihZW.js";import"./ReactUtils-Bc2S-2Ko.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BB_vNw8U.js";import"./isPlainObject-COujrb7r.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJnZMjz6.js";import"./useAnimationId-DKdTeHc-.js";import"./Trapezoid-ljRWXtqg.js";import"./Sector-lipzQdUB.js";import"./Curve-CcdovDiP.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./ErrorBarContext-D-vVpbAT.js";import"./GraphicalItemClipPath-BAi4t0TL.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./getZIndexFromUnknown-CW64FEow.js";import"./graphicalItemSelectors-DBaAmjf3.js";import"./index-DQOJXr3R.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./OffsetShower-EZRykoXG.js";import"./PlotAreaShower-BUEMDiZc.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
