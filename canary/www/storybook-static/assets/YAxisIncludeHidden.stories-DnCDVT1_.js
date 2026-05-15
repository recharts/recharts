import{r as f,e}from"./iframe-CYBvhlZy.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Cr0sgLdF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CK8f-Z2u.js";import{C}from"./ComposedChart-Bvvd3hm_.js";import{X as K}from"./XAxis-eHWI-DgF.js";import{L as v}from"./Legend-BXbVRa32.js";import{B as s}from"./Bar-aTW_zZkH.js";import{R as x}from"./RechartsHookInspector-CaeSkNQM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DeN7_m83.js";import"./Layer-DAuVz3MT.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./Label-C0OOgdLf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CJwEcLcc.js";import"./zIndexSlice-vzQlxu4v.js";import"./immer-DZ9JDNpk.js";import"./types-BeBHA9WF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-PTTaozgG.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./RechartsWrapper-D_53Ouva.js";import"./index-nd8_1HWo.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./Symbols-CUYfHAW-.js";import"./symbol-CPTqgyqe.js";import"./step-CGLzAmAZ.js";import"./useElementOffset-Vb2Ffn3s.js";import"./uniqBy-B2hQmckI.js";import"./iteratee-DPMrHAQZ.js";import"./tooltipContext-D-fzSH_v.js";import"./ReactUtils-BYIbW4_R.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CCHDnR4M.js";import"./isPlainObject-CS6IzJzX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL4E1CJr.js";import"./useAnimationId-DVYg6VJa.js";import"./Trapezoid-CMh-DiG6.js";import"./Sector-CjwyDs-v.js";import"./Curve-BOm9EQk3.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./ErrorBarContext-ggSVFX3T.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./getZIndexFromUnknown-Ch_AXV_G.js";import"./graphicalItemSelectors-DNX_hSAl.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./OffsetShower-ByB6-I6e.js";import"./PlotAreaShower-DizTc5Ay.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
