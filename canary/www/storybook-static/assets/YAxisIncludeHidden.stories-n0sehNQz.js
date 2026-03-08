import{r as f,e}from"./iframe-CV07hTJo.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CQ-pu87S.js";import{R as A}from"./arrayEqualityCheck-DZYwMANi.js";import{C}from"./ComposedChart-DtynIp2o.js";import{X as K}from"./XAxis-D8-FPQnZ.js";import{L as v}from"./Legend-DvIM-PIT.js";import{B as a}from"./Bar-DLOXUNkg.js";import{R as x}from"./RechartsHookInspector-ouq6dPls.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DglFdQa3.js";import"./Layer-CjSu9kHg.js";import"./resolveDefaultProps--Z_AJC6X.js";import"./Text-DQ9H0cYG.js";import"./DOMUtils-tjr3CYLs.js";import"./Label-DYpp1LIm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bsxd_xbk.js";import"./zIndexSlice-bGazLamm.js";import"./immer-DZr-3B4h.js";import"./types-BW-iMsEE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BVud2Eit.js";import"./hooks-hiQan1d_.js";import"./axisSelectors-Colr1FXT.js";import"./d3-scale-Dsv-X1x3.js";import"./RechartsWrapper-B_A_zLwr.js";import"./index-BbPZUkKO.js";import"./CartesianChart-DxPhfcnf.js";import"./chartDataContext-Diiede2r.js";import"./CategoricalChart-BXVtqco4.js";import"./Symbols-DUW3Pbjx.js";import"./symbol-D3LFYW8o.js";import"./step-DxAhMwRF.js";import"./useElementOffset-CxU65p4j.js";import"./uniqBy-9dgZdsL6.js";import"./iteratee-CfWmwDW_.js";import"./tooltipContext-BKDJzLkt.js";import"./ReactUtils-C6WIusF5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-dmrR1-Re.js";import"./isPlainObject-BDdyHw-3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3uD8Idm.js";import"./useAnimationId-DLuTmxa5.js";import"./Trapezoid-C129hHgo.js";import"./Sector-BzLPim6R.js";import"./Curve-6Ct2z4dM.js";import"./RegisterGraphicalItemId-C78YkPgS.js";import"./ErrorBarContext-CcVjgEJt.js";import"./GraphicalItemClipPath-DbLJ1P35.js";import"./SetGraphicalItem-CWJSiYUF.js";import"./getZIndexFromUnknown-D4Y_mAnW.js";import"./graphicalItemSelectors-B3j-xLsb.js";import"./index-NB669Q6L.js";import"./ChartSizeDimensions-DYT9YPss.js";import"./OffsetShower-CIa2yD69.js";import"./PlotAreaShower-Lc3Ppbaa.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
