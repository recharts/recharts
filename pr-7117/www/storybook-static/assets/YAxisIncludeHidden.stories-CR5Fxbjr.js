import{r as f,e}from"./iframe-CkFXM4wB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis--nz6ltt0.js";import{R as A}from"./arrayEqualityCheck-YTUxoqUB.js";import{C}from"./ComposedChart-DibFHF-M.js";import{X as K}from"./XAxis-BrfBiI3E.js";import{L as v}from"./Legend-Cnu46-RD.js";import{B as a}from"./Bar-C5PHW-Tf.js";import{R as x}from"./RechartsHookInspector-B3xLxxYl.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bb-zNiAP.js";import"./Layer-dIWMs8k-.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./Label-BRTUkEBL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4pe948L1.js";import"./zIndexSlice-B5-XLxo_.js";import"./immer-VfMLklKA.js";import"./types-CUTS6MB0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./Symbols-D5HyOKc9.js";import"./symbol-C6JS3ts9.js";import"./step-CbyAEdw5.js";import"./useElementOffset-BnogzPjY.js";import"./uniqBy-BtLygSeP.js";import"./iteratee-BY4qpxip.js";import"./tooltipContext-BJLqNM99.js";import"./ReactUtils-YGQ827Cl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CAJHYtrp.js";import"./isPlainObject-BUyihnnB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aTEw3KI1.js";import"./useAnimationId-C9BYbESN.js";import"./Trapezoid-BrsI-zno.js";import"./Sector-DMfw9vpP.js";import"./Curve-KgtuRfAG.js";import"./RegisterGraphicalItemId-ChGWl6rQ.js";import"./ErrorBarContext-CePwVUjY.js";import"./GraphicalItemClipPath-DuUyvYTP.js";import"./SetGraphicalItem-DJLRAQ5n.js";import"./getZIndexFromUnknown-DW5Crkgc.js";import"./graphicalItemSelectors-D8LF-DWT.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
