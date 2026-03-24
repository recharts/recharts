import{r as f,e}from"./iframe-BA0Mk_bm.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BeQUgSYX.js";import{R as A}from"./arrayEqualityCheck-BXIKBtlL.js";import{C}from"./ComposedChart-DMgKK5eu.js";import{X as K}from"./XAxis-BJCrLdXA.js";import{L as v}from"./Legend-B135trhz.js";import{B as a}from"./Bar-B4XLZrLy.js";import{R as x}from"./RechartsHookInspector-07Cffhze.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BT4UVk71.js";import"./Layer-UodA2S_o.js";import"./resolveDefaultProps-B36LrC6B.js";import"./Text-CQNk2n0w.js";import"./DOMUtils-dYc2sDor.js";import"./Label-BRfB6AgB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7XpdSr6g.js";import"./zIndexSlice-IJtIz665.js";import"./immer-CuXxKPwW.js";import"./types-bktBoSaY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-k5mZM9in.js";import"./hooks-TaUW4PzE.js";import"./axisSelectors-BPwVyIe5.js";import"./d3-scale-C-j_j56q.js";import"./RechartsWrapper-BFZ1uel6.js";import"./index-DOFwstvs.js";import"./CartesianChart-ojIzik51.js";import"./chartDataContext-BS06iSAA.js";import"./CategoricalChart-Dl2FpaUQ.js";import"./Symbols-BlFKSVPh.js";import"./symbol-B4YfvXWL.js";import"./step-BTgjudL3.js";import"./useElementOffset-BK5XlP36.js";import"./uniqBy-Dh57tVx5.js";import"./iteratee-BxNTpPTk.js";import"./tooltipContext-nmEiNHsK.js";import"./ReactUtils-DsC8Xpl6.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-jRacbU19.js";import"./isPlainObject-DqKcpOXv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRPXSI0S.js";import"./useAnimationId-Del0ERlM.js";import"./Trapezoid-CwhddTPc.js";import"./Sector-BUd4hzuV.js";import"./Curve-DYn67gsG.js";import"./RegisterGraphicalItemId-B9TRMD4g.js";import"./ErrorBarContext-qCzTcwLw.js";import"./GraphicalItemClipPath-D9S218iW.js";import"./SetGraphicalItem-pHlPp9Gw.js";import"./getZIndexFromUnknown-CuIG3I6l.js";import"./graphicalItemSelectors-QxeuRNW7.js";import"./index-BMjkAMKv.js";import"./ChartSizeDimensions-XLtPrUd2.js";import"./OffsetShower-DE5bCLFy.js";import"./PlotAreaShower-noNIcByU.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
