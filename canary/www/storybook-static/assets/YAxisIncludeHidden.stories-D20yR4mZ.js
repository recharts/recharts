import{r as f,R as e}from"./iframe-DNnhIzqd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DL1XukoQ.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CZnRUfU-.js";import{C as k}from"./ComposedChart-Dwrm7GV8.js";import{X as K}from"./XAxis-DyyKFn3c.js";import{L as v}from"./Legend-rRcOGwD-.js";import{B as a}from"./Bar-DD1GfBl4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./Label-zRO_Glrc.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D96CZuW6.js";import"./throttle-QyoUWs98.js";import"./axisSelectors-D3RI42dK.js";import"./diverging-DjL9qVWl.js";import"./CartesianAxis-DyWgnQe6.js";import"./Layer-BC8osa1v.js";import"./types-BRWBXBDp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CrR43_nu.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BaFq-POl.js";import"./uniqBy-_gekbtiv.js";import"./iteratee-6f6iZKQ8.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BLzS4I_n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BldvyN6i.js";import"./useAnimationId-nuwJNMaM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./tooltipContext-BL5AVfuY.js";import"./ErrorBarContext-BEOQHAHp.js";import"./activeStyles-C2NC3gaF.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./getZIndexFromUnknown-CDoNNBeO.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./omit-CCPfwULE.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
