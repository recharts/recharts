import{P as f,c as e}from"./iframe-C5MHh42j.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BesflX3C.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-BAxAD9Hd.js";import{C as k}from"./ComposedChart-WRhT-Z7E.js";import{X as K}from"./XAxis-Dv4taIi_.js";import{L as v}from"./Legend-CWMVurX6.js";import{B as s}from"./Bar-OdA0Uymu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-w_pNkTrF.js";import"./CartesianAxis-hicrxO07.js";import"./Layer-BTdnKXgq.js";import"./resolveDefaultProps-50eaHBP1.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./Label-DPuGsfIc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqFMND8v.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./types-DIsFNNUR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJahilIk.js";import"./immer-BEKu5nAB.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./Symbols-BZjZW0di.js";import"./symbol-EmTrNRMN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CwximdNT.js";import"./uniqBy-Ba9KhnrU.js";import"./iteratee-CTywduMo.js";import"./tooltipContext-CC-43_y7.js";import"./ReactUtils-BVj-7vfo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Hfg__8px.js";import"./useAnimationId-D3rbPHOS.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./getZIndexFromUnknown-BPhdYG3N.js";import"./graphicalItemSelectors-CXCIX9f6.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
