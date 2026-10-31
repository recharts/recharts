import{r as f,R as e}from"./iframe-CDpmIgQT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ogt9or7H.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BfaxD0dh.js";import{C as k}from"./ComposedChart-BJALrnW1.js";import{X as K}from"./XAxis-3XA4-bKe.js";import{L as v}from"./Legend-MQRSYMdg.js";import{B as a}from"./Bar-DR4D050-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-PB9tCobP.js";import"./Text-BSIquxO3.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./DOMUtils-Cs7FGDH8.js";import"./pageBackground-JqsHu2De.js";import"./ZIndexLayer-DJsGHloM.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./throttle-aImz7VVk.js";import"./axisSelectors-CxEn2HHB.js";import"./d3-scale-D8Pupn_R.js";import"./CartesianAxis-f-wQfyV-.js";import"./Layer-mHCkFu2a.js";import"./types-C_7I-XQd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CVUl_Te9.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./Symbols-DArBJCV3.js";import"./fillDefinitions-os6E-iMi.js";import"./symbol-MYiWw4z2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-QH7GmGID.js";import"./uniqBy-DQsH6j_y.js";import"./iteratee-BSoVQiX1.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-IVU2RGL-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D76RToCn.js";import"./useAnimationId-LIn9B9pI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CinHd9se.js";import"./tooltipContext-BuClDIkr.js";import"./dataEntryStyles-tenSUrif.js";import"./ErrorBarContext-Bqx6IufA.js";import"./activeStyles-BpeBFXJT.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./getZIndexFromUnknown-BIyjUwkt.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./omit-C64e-Xwc.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
