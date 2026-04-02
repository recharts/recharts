import{r as f,e}from"./iframe-GfPTcwVI.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CAzK1_Cz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-zByCBXfp.js";import{C}from"./ComposedChart-g_3yl1AM.js";import{X as K}from"./XAxis-D09jYQEI.js";import{L as v}from"./Legend-D57hLtU6.js";import{B as s}from"./Bar-CUrXIHso.js";import{R as x}from"./RechartsHookInspector-BbE71-mZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BgLkReml.js";import"./Layer-D5BHTSBb.js";import"./resolveDefaultProps-DyMlioZM.js";import"./Text-Cz6Ir0Bd.js";import"./DOMUtils-CBAOKK6G.js";import"./Label-Dcg-6Pxd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ci0MSbfQ.js";import"./zIndexSlice-BiywrOzN.js";import"./immer-C_ivLHTT.js";import"./types-D3MLb6DN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DubTevQM.js";import"./hooks-CkLAhtAF.js";import"./axisSelectors-C1I30lvY.js";import"./d3-scale-CZ7HbC41.js";import"./RechartsWrapper-xCEfQ3e6.js";import"./index-BPTb04yT.js";import"./CartesianChart-C7artJXa.js";import"./chartDataContext-Dnq1iHBW.js";import"./CategoricalChart-DT84xA7C.js";import"./Symbols-BG3HhGrw.js";import"./symbol-Dj4Qey2P.js";import"./step-BJ9jGGmt.js";import"./useElementOffset-Cj2S4Ntr.js";import"./uniqBy-B45iBOfE.js";import"./iteratee-Jsq1qhFx.js";import"./tooltipContext-DZiQrflG.js";import"./ReactUtils-D6XtI53O.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DMmYEdu0.js";import"./isPlainObject-2G-hgaEW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBxJEym.js";import"./useAnimationId-CJpqr1GQ.js";import"./Trapezoid-CUiisPn6.js";import"./Sector-F_1AI-V0.js";import"./Curve-sYWT_Cke.js";import"./RegisterGraphicalItemId-BQasV6-Q.js";import"./ErrorBarContext-C9NklHyW.js";import"./GraphicalItemClipPath-DGk_Ausf.js";import"./SetGraphicalItem-v2qQdmnb.js";import"./getZIndexFromUnknown-DWVYwqmN.js";import"./graphicalItemSelectors-gGFkZTvU.js";import"./index-CtTj3QoQ.js";import"./ChartSizeDimensions-BaFn1hfG.js";import"./OffsetShower-C19M18-p.js";import"./PlotAreaShower-Bq5P1fMQ.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
