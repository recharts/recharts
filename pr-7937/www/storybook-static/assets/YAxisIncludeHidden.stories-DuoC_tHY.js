import{r as f,R as e}from"./iframe-BPYH2WpS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CEufsP3h.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CRIY2DI-.js";import{C as k}from"./ComposedChart-DPayCZiQ.js";import{X as K}from"./XAxis-Cp4YLkQ5.js";import{L as v}from"./Legend-D0KkKToF.js";import{B as a}from"./Bar-f2bbGrqP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVwS1qXs.js";import"./Text-zynwh62u.js";import"./resolveDefaultProps-CGvNj-Ia.js";import"./DOMUtils-BPeWtLKN.js";import"./isWellBehavedNumber-CF5FkEe7.js";import"./useId-BE8oxSSZ.js";import"./useBackwardsCompatibleTheme-D75GrB32.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSe5AwCg.js";import"./index-BlMmEtsK.js";import"./index-DJpd9u5l.js";import"./RechartsWrapper-CeSqC8qM.js";import"./axisSelectors-BixSNhmq.js";import"./throttle-xyVQD3_H.js";import"./d3-scale-C1nlw5KN.js";import"./index-CWtZ8b1U.js";import"./index-B4bTdLCM.js";import"./renderedTicksSlice-6vdJGY0j.js";import"./index-BPYK78er.js";import"./CartesianAxis-CGCKig2C.js";import"./Layer-C2LXKbkN.js";import"./types-CqopvqdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CvYs98y7.js";import"./chartDataContext-kSMgmHGF.js";import"./CategoricalChart-Biw_xsj3.js";import"./Symbols-DO2NWfq5.js";import"./symbol-6t26GgH1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C6LgEkRR.js";import"./uniqBy-BLfWWLf6.js";import"./iteratee-BZ9sVM1E.js";import"./AnimatedItems-C-cMTO2B.js";import"./useAnimationId-BKqfl7rh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3aQUV3ep.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds20vJPV.js";import"./tooltipContext-CWyc1cD1.js";import"./RegisterGraphicalItemId-BFsJivb8.js";import"./ErrorBarContext-BJvfmcx_.js";import"./GraphicalItemClipPath-B49DsmcO.js";import"./SetGraphicalItem-rIgP9mSO.js";import"./getZIndexFromUnknown-1eF7iTjG.js";import"./useGraphicalItemIdentity-AHFKb_mu.js";import"./dataEntryStyles-CkEyscHr.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
