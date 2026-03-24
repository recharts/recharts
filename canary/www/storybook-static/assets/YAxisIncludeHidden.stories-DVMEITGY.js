import{r as f,e}from"./iframe-Be0JMHKG.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DHI26o98.js";import{R as A}from"./arrayEqualityCheck-EyQ3L5Ga.js";import{C}from"./ComposedChart-CGSNhVQA.js";import{X as K}from"./XAxis-BpLM44rb.js";import{L as v}from"./Legend-FRWeEnPb.js";import{B as a}from"./Bar-CLP0Pu0-.js";import{R as x}from"./RechartsHookInspector-L4PsTFM9.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cva2Lh8B.js";import"./Layer-Ce00NG_9.js";import"./resolveDefaultProps-P4FnSb9y.js";import"./Text-Bbi69GeO.js";import"./DOMUtils-xnRjlpdc.js";import"./Label-CgKr6rFd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C2oM15Rp.js";import"./zIndexSlice-Dprd7Xhy.js";import"./immer-CtKQQ-wS.js";import"./types-BE6ispln.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Z7QNJQ_Y.js";import"./hooks-xrwIZsei.js";import"./axisSelectors-C9mh9qYD.js";import"./d3-scale-DcVoBlH3.js";import"./RechartsWrapper-BN1eXA1J.js";import"./index-C3PHkgdT.js";import"./CartesianChart-DHx86xgd.js";import"./chartDataContext-BmO3bTO_.js";import"./CategoricalChart-Cj__GJYp.js";import"./Symbols-CKbcWLtD.js";import"./symbol-CXMp1weA.js";import"./step-HmHdlQax.js";import"./useElementOffset-Dodh3F-h.js";import"./uniqBy-DO0PDSvA.js";import"./iteratee-BGvnERnv.js";import"./tooltipContext-Cj-A2kO3.js";import"./ReactUtils-BDRjtMGi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Djxieeih.js";import"./isPlainObject-Bd8ieRPg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5cLj3QF.js";import"./useAnimationId-kpn7-WPo.js";import"./Trapezoid-CONlCK3y.js";import"./Sector-Qb-LMRcI.js";import"./Curve-X4p0VWII.js";import"./RegisterGraphicalItemId-B6mWng-O.js";import"./ErrorBarContext-CSxGgjy5.js";import"./GraphicalItemClipPath-BI28y9oi.js";import"./SetGraphicalItem-owgD-Syr.js";import"./getZIndexFromUnknown-CtQV5ZfO.js";import"./graphicalItemSelectors-j3KvFxjp.js";import"./index-B0wdhlLK.js";import"./ChartSizeDimensions-C6t0D3ol.js";import"./OffsetShower-DAHfT2r_.js";import"./PlotAreaShower-BtjPjtQq.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
