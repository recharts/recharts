import{r as f,R as e}from"./iframe-D0jufW3D.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D7roMtR7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BoierTw-.js";import{C as k}from"./ComposedChart-CHSW6wo4.js";import{X as K}from"./XAxis-DbxDHf11.js";import{L as v}from"./Legend-BS3Q5f_P.js";import{B as a}from"./Bar-uWAAMv6p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-L5bBHry2.js";import"./Text-CJ7ZV5G-.js";import"./resolveDefaultProps-CwNNBflB.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-eVHebS17.js";import"./throttle-BRaHJfbv.js";import"./axisSelectors-Dx__qMJ7.js";import"./d3-scale-CK6BpS5A.js";import"./CartesianAxis-xT0IlJ0n.js";import"./Layer-D5IjCwFP.js";import"./types-KyGzz8Fo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DTMB1NV8.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cmh5XwmF.js";import"./uniqBy-Dx1aoyhy.js";import"./iteratee-CPaJ8F08.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BSqidkx_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcLE3h-E.js";import"./useAnimationId-BckzpxH4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dLVute71.js";import"./tooltipContext-B_0Qk7xj.js";import"./dataEntryStyles-L1JX3I7t.js";import"./ErrorBarContext-DD4Me9w9.js";import"./activeStyles-CKVoF1Mf.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getZIndexFromUnknown-DjXH6rxy.js";import"./useEffectiveDataKey-D47_79bJ.js";import"./omit-CZTm-iJG.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
