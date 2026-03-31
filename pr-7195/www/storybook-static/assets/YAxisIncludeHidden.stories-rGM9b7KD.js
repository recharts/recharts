import{r as f,e}from"./iframe-Ch1Isql8.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BZ1lWBvu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BCEbDsDx.js";import{C}from"./ComposedChart-BG01JFWy.js";import{X as K}from"./XAxis-BKww8jIv.js";import{L as v}from"./Legend-XSH_rsV0.js";import{B as s}from"./Bar-DceBjfOy.js";import{R as x}from"./RechartsHookInspector-DbN8VMTu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BTQibmSQ.js";import"./Layer-BO4GuAqP.js";import"./resolveDefaultProps-C2WRALEr.js";import"./Text-BVN_POYl.js";import"./DOMUtils-10gf_B-M.js";import"./Label-DD8AaqpA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjVbUmgd.js";import"./zIndexSlice-CfYpWTyk.js";import"./immer-BTgrVrx0.js";import"./types-BJb3G4uR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./RechartsWrapper-BHlnvpBC.js";import"./index-BQodkfcp.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./Symbols-hNJtZeth.js";import"./symbol-DKQgrSwN.js";import"./step-B9yE4hVt.js";import"./useElementOffset-BnNRxgQ2.js";import"./uniqBy-C0ShPv6b.js";import"./iteratee-BHbBqIkI.js";import"./tooltipContext-BCIU6VQs.js";import"./ReactUtils-CsOHi-wi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Ds4ws-40.js";import"./isPlainObject-CbEMMj1e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcZ1nspL.js";import"./useAnimationId-BC-9oBmZ.js";import"./Trapezoid-CyEP7tU2.js";import"./Sector-DNP4xewC.js";import"./Curve-DgBmrfnw.js";import"./RegisterGraphicalItemId-B38aETS6.js";import"./ErrorBarContext-B1gBZht8.js";import"./GraphicalItemClipPath-5ic9tQHz.js";import"./SetGraphicalItem-CK5a6DJE.js";import"./getZIndexFromUnknown-CPlnxaxE.js";import"./graphicalItemSelectors-DQiFHb1r.js";import"./index-B9MqbPA_.js";import"./ChartSizeDimensions-Xxd3TXQk.js";import"./OffsetShower-CEfGPMuj.js";import"./PlotAreaShower-BXMcaFZq.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
