import{r as f,R as e}from"./iframe-B3-vagTW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DormNcwM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ZzyVUAHl.js";import{C as k}from"./ComposedChart-DWsqb0Fg.js";import{X as K}from"./XAxis-DFfS9226.js";import{L as v}from"./Legend-DJkkf3EF.js";import{B as a}from"./Bar-38Bj-wYd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-vZvIOvi1.js";import"./Text-BuzE9c3N.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./DOMUtils-_lgsh9Yh.js";import"./ZIndexLayer-D9XZSYmm.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./throttle-CY8bAEWp.js";import"./axisSelectors-HaoK80F7.js";import"./d3-scale-C4523EFb.js";import"./CartesianAxis-Cwp1aQTy.js";import"./Layer-PmVaLGrp.js";import"./types-BBjBCtu2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CddNfr5P.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";import"./Symbols-ETwvKCIL.js";import"./symbol-DMAPBY15.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-FOCBXEG_.js";import"./useElementOffset-D_j3OR66.js";import"./uniqBy-DNND0Smg.js";import"./iteratee-CTRTWi67.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-MPu8rBts.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKi9ciwV.js";import"./useAnimationId-mixmWsfB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-b384wv9G.js";import"./tooltipContext-DlRTVlJa.js";import"./ErrorBarContext-B_sCBDRD.js";import"./activeStyles-mevkhAS-.js";import"./SetGraphicalItem-CRfd0rzO.js";import"./getZIndexFromUnknown-Cdag1ENW.js";import"./useEffectiveDataKey-pQIYsbLr.js";import"./omit-ButR-_Qh.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
