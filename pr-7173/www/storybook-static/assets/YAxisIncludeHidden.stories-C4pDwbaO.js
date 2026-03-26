import{r as f,e}from"./iframe-BnJtTsiG.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-2aBmaGwM.js";import{R as A}from"./arrayEqualityCheck-JqF9arvj.js";import{C}from"./ComposedChart-Wvhceelx.js";import{X as K}from"./XAxis-DNI9rGLu.js";import{L as v}from"./Legend-DTHSX-ax.js";import{B as a}from"./Bar-CA0u9UMp.js";import{R as x}from"./RechartsHookInspector-BUkbtt6T.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BY9ve2Nt.js";import"./Layer-CZajLfJ2.js";import"./resolveDefaultProps-CNKXDHIv.js";import"./Text-8iVX3WBp.js";import"./DOMUtils-u57yL_f_.js";import"./Label-C079WU8o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MihbceXQ.js";import"./zIndexSlice-u5N52emx.js";import"./immer-BilgQS7Z.js";import"./types-Dgf_4DYj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C2Lx4sh9.js";import"./hooks-DgbcPaC5.js";import"./axisSelectors-_uj0cu9d.js";import"./d3-scale-RH1gCsj4.js";import"./RechartsWrapper-DnFeqk-S.js";import"./index-BR9ucj69.js";import"./CartesianChart-yY9oGGmK.js";import"./chartDataContext-Br9_d6ie.js";import"./CategoricalChart-CVrJtZ9b.js";import"./Symbols-kj3svvPH.js";import"./symbol-Y2fv4Hlp.js";import"./step-Dk-_s7iR.js";import"./useElementOffset-D1u0B1Cx.js";import"./uniqBy-CH72kEBn.js";import"./iteratee-Bfor77rc.js";import"./tooltipContext-B4Ol6AMl.js";import"./ReactUtils-CGCbFUwc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CiETt0z1.js";import"./isPlainObject-DWBUHdsc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-38-vQMAB.js";import"./useAnimationId-BlSLZQPR.js";import"./Trapezoid-CcsFZinE.js";import"./Sector-DPWQhCCR.js";import"./Curve-Dms99yFp.js";import"./RegisterGraphicalItemId-Cp9jZ34F.js";import"./ErrorBarContext-DLm5F4wp.js";import"./GraphicalItemClipPath-BqLiE-Qj.js";import"./SetGraphicalItem-DTmYNChn.js";import"./getZIndexFromUnknown-BRZn0VyP.js";import"./graphicalItemSelectors-B4Ru_z8e.js";import"./index-BsJ1xsh-.js";import"./ChartSizeDimensions-DdW7v9MQ.js";import"./OffsetShower-YcN9xEjX.js";import"./PlotAreaShower-B5YeOyEN.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
