import{r as f,R as e}from"./iframe-rIGtWy7o.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CD9Zrxmn.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-eSFvIDPB.js";import{C as k}from"./ComposedChart-R6AzKio4.js";import{X as K}from"./XAxis-DpQ4g3Lr.js";import{L as v}from"./Legend-Dz8VLuuY.js";import{B as a}from"./Bar-DqWCqLgY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BEKXXJOd.js";import"./Text-CUOAySYE.js";import"./resolveDefaultProps-CESzkdGA.js";import"./ZIndexLayer-BQOJSgP1.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./throttle-BAKkGKnI.js";import"./axisSelectors-DWDjUcOc.js";import"./d3-scale-BuxsQdRE.js";import"./CartesianAxis-DicS6pKh.js";import"./Layer-BDOLwd71.js";import"./types-BNwRi5Vr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CnGTSvJE.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DvWu6ax_.js";import"./uniqBy-C8XTS8UB.js";import"./iteratee-ByPZHGAt.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BBWs-HQj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DFHnm19R.js";import"./useAnimationId-BWpujR0E.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CybnivgX.js";import"./tooltipContext-Boptdt3E.js";import"./ErrorBarContext-B8qTxBlT.js";import"./activeStyles-CzQ969KV.js";import"./SetGraphicalItem-iESSYU5M.js";import"./getZIndexFromUnknown-skJ8ipmn.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./omit-DSNnoq2i.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
