import{r as f,R as e}from"./iframe-Bc_TQ7zr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dbf9f4fH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CO4_damr.js";import{C as k}from"./ComposedChart-GKyMiMHY.js";import{X as K}from"./XAxis-DWAumGqR.js";import{L as v}from"./Legend-DSyel8Aq.js";import{B as a}from"./Bar-BHY-K6dY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B9G7W81w.js";import"./Text-DL7i-IN9.js";import"./resolveDefaultProps-urKJAClX.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./throttle-DHt3nTHd.js";import"./axisSelectors-BQX-Wl7f.js";import"./d3-scale-2JXHcyFQ.js";import"./CartesianAxis-C2icTJ4e.js";import"./Layer-Pn8de_pX.js";import"./types-CI1g0QBx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6rTFYDIL.js";import"./uniqBy-euoVOqhK.js";import"./iteratee-KP71SW6w.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-aO6gLBJB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4HzsWKb.js";import"./useAnimationId-BaQxjUGX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./tooltipContext-DzjzWl1v.js";import"./dataEntryStyles-CcDBy8RW.js";import"./ErrorBarContext-C3uNXZgX.js";import"./activeStyles-CqnjEaUo.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getZIndexFromUnknown-hxP-NfEd.js";import"./useEffectiveDataKey-BSvuchOk.js";import"./omit-CqoR7aV0.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
