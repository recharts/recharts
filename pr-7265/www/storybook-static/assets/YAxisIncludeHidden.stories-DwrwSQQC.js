import{r as f,e}from"./iframe-CUdKgdkG.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Na-JXGDj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BSmSVrdu.js";import{C}from"./ComposedChart-B_srWo8L.js";import{X as K}from"./XAxis-mAd7Kpdc.js";import{L as v}from"./Legend-ByTJOEs1.js";import{B as s}from"./Bar-JSt44bx6.js";import{R as x}from"./RechartsHookInspector-Cq0IOlAH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-IOZxWSIl.js";import"./Layer-DmKN-F8X.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./Label-DglRGLXy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDgenCRH.js";import"./zIndexSlice-R-FfD4BY.js";import"./immer-Cj2VbGf6.js";import"./types-Du7cRNSr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CKVu5O47.js";import"./hooks-CQ9pmujM.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./Symbols-DVxfPYYz.js";import"./symbol-CtsFoFGk.js";import"./step-DvWhuTZk.js";import"./useElementOffset-BW58k6Dr.js";import"./uniqBy-CxeABOap.js";import"./iteratee-9POT8SS0.js";import"./tooltipContext-DTd-1l92.js";import"./ReactUtils-C73Q90p0.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BTsbslWJ.js";import"./isPlainObject-rQI65vsh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfZJm5g2.js";import"./useAnimationId-AqfbREG9.js";import"./Trapezoid-CeXt5ImY.js";import"./Sector-Criwg8Ev.js";import"./Curve-CaswtT1y.js";import"./RegisterGraphicalItemId-MhTEXlyY.js";import"./ErrorBarContext-PwkZe7K2.js";import"./GraphicalItemClipPath-doETQzOU.js";import"./SetGraphicalItem-D9_vCp7v.js";import"./getZIndexFromUnknown-DLSNjJ4F.js";import"./graphicalItemSelectors-CZNxFwGu.js";import"./index-D6AtQ2XN.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./OffsetShower-Ba03E4d5.js";import"./PlotAreaShower-CBo6UyYv.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
