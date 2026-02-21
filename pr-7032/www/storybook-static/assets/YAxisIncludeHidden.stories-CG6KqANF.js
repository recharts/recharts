import{r as f,e}from"./iframe-Bu-inuC_.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-C2_h55z2.js";import{R as A}from"./arrayEqualityCheck-DU89AxsE.js";import{C}from"./ComposedChart-BDfQc7tS.js";import{X as K}from"./XAxis-B7Sm-Q2v.js";import{L as v}from"./Legend-DfqT_4h2.js";import{B as a}from"./Bar-ChbbAebt.js";import{R as x}from"./RechartsHookInspector-kfypTTkJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-RY4R-JEB.js";import"./Layer-Dlph539k.js";import"./resolveDefaultProps-CsH4psWY.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./Label-Bztw_jsS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-XPmioUZb.js";import"./zIndexSlice-jAGqg83w.js";import"./immer-XJQsdFk2.js";import"./types-kezhLfGE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./RechartsWrapper-DprTEw8A.js";import"./index-DtrjCIe1.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./Symbols-CfIo9P3Y.js";import"./symbol-DCuuGdc1.js";import"./step-CG3E5dJ5.js";import"./useElementOffset-CAcMGNUP.js";import"./uniqBy-i9XfwvOX.js";import"./iteratee-DAenRuB5.js";import"./tooltipContext-PmNssIxI.js";import"./ReactUtils-CbatvDS3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BT0ZFYuE.js";import"./isPlainObject-Dg1QCtSt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ih3X5Nav.js";import"./useAnimationId-BQHAYEwx.js";import"./Trapezoid-DN15z973.js";import"./Sector-K5K0caPh.js";import"./Curve-SSe25XRS.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./ErrorBarContext-DApypuO7.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./getZIndexFromUnknown-BChh8Ffe.js";import"./graphicalItemSelectors-GBkV0GvX.js";import"./index-CiBd-8tu.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./OffsetShower-D2S5vzbK.js";import"./PlotAreaShower-BXNxywRo.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
