import{r as f,e}from"./iframe-DkFnKmz6.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-CDI-qV1c.js";import{R as C}from"./arrayEqualityCheck-B_Ane2tr.js";import{C as K}from"./ComposedChart-DUjCvTFh.js";import{X as A}from"./XAxis-ByDrXS-8.js";import{L as v}from"./Legend-BoWv2Urj.js";import{B as a}from"./Bar-C5Ll2VlH.js";import{R as x}from"./RechartsHookInspector-B3tFzt2u.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-BEmCTT1M.js";import"./CartesianAxis-DgIti1By.js";import"./Layer-BKurILEC.js";import"./Text-mK8iFpSb.js";import"./DOMUtils-8Q3WDKQX.js";import"./Label-mt1d5eVZ.js";import"./PolarUtils-C_yoPd2g.js";import"./ZIndexLayer-CZJ8gmuc.js";import"./zIndexSlice-DVsC50MZ.js";import"./types-DoGupJwC.js";import"./hooks-W6coKbOT.js";import"./axisSelectors-DvTbuhYF.js";import"./RechartsWrapper-Bs4V9sqh.js";import"./CartesianChart-CvoDLFkd.js";import"./chartDataContext-BD-hpc_7.js";import"./CategoricalChart-CWiOLY2_.js";import"./Symbols-BHmBNcPX.js";import"./Curve-CQB8Wbk0.js";import"./useElementOffset-DKLV0Pm5.js";import"./iteratee-DprsdLjM.js";import"./tooltipContext-BmNlyCXP.js";import"./ReactUtils-zV5IbihU.js";import"./ActiveShapeUtils-vu-MuxxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bgeub8cz.js";import"./useAnimationId-ClFGkqN9.js";import"./Trapezoid-1bT7tRHO.js";import"./Sector-iBjQq3Q9.js";import"./RegisterGraphicalItemId-2BrkyC_A.js";import"./ErrorBarContext-BbmTUWcN.js";import"./GraphicalItemClipPath-DEpjOnpI.js";import"./SetGraphicalItem-C0TqoRHl.js";import"./getZIndexFromUnknown-DNROikfi.js";import"./graphicalItemSelectors-Bg_bTf37.js";import"./index-DeWANcHY.js";import"./ChartSizeDimensions-DX00xq4b.js";import"./OffsetShower-B1JfcMLk.js";import"./PlotAreaShower-B1NfTpo7.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
