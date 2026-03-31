import{r as f,e}from"./iframe-vUL-L_aJ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CruSc5kS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-COxCNyPK.js";import{C}from"./ComposedChart-6BNLSQo0.js";import{X as K}from"./XAxis-BMYosvSp.js";import{L as v}from"./Legend-BJDPtSQD.js";import{B as s}from"./Bar-DQwqfoeL.js";import{R as x}from"./RechartsHookInspector-CWBwyRFX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C5gNDMzm.js";import"./Layer-Dux9G07m.js";import"./resolveDefaultProps-C8rpue-w.js";import"./Text-CzUGJ8je.js";import"./DOMUtils-CvmeQvzc.js";import"./Label-C4rHqw7t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cr3lCUTq.js";import"./zIndexSlice-K47YJD8k.js";import"./immer-BVp8bXPB.js";import"./types-5KBfjt4C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CDeFkEV6.js";import"./hooks-yjZ0j-0_.js";import"./axisSelectors-CUzNHzdL.js";import"./d3-scale-DD2Sx1-d.js";import"./RechartsWrapper-CG_OUpDm.js";import"./index-BdR1gVmI.js";import"./CartesianChart-BY4kTu9-.js";import"./chartDataContext-BHVW1DWn.js";import"./CategoricalChart-C_yJwLRG.js";import"./Symbols-DfP23eLB.js";import"./symbol-DFtJsCUW.js";import"./step-DT_l3LWo.js";import"./useElementOffset-DWmb2K2h.js";import"./uniqBy-BxmRGs-t.js";import"./iteratee-DtJgozn8.js";import"./tooltipContext-CY40dPw0.js";import"./ReactUtils-B3mcMybl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D_EuKoYs.js";import"./isPlainObject-B2pB2xQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TKYWYM.js";import"./useAnimationId-DLI5pxxS.js";import"./Trapezoid-CJp4NMn-.js";import"./Sector-ztmOwzQz.js";import"./Curve-Cj7OHreQ.js";import"./RegisterGraphicalItemId-sesVzteN.js";import"./ErrorBarContext-BI53r7fn.js";import"./GraphicalItemClipPath-D84XG9Hf.js";import"./SetGraphicalItem-DiqKS2xX.js";import"./getZIndexFromUnknown-D3XO6vta.js";import"./graphicalItemSelectors-BTOBLjIL.js";import"./index-CdQg9v03.js";import"./ChartSizeDimensions-MpUtdPem.js";import"./OffsetShower-CNEUWUv0.js";import"./PlotAreaShower-Xh3uZCwl.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
