import{r as f,R as e}from"./iframe-ULtY-NVK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BQ0jDyxm.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-jBtZtiCi.js";import{C as k}from"./ComposedChart-BLU8rp3_.js";import{X as K}from"./XAxis-BxexlvNE.js";import{L as v}from"./Legend-Vbwf_oDe.js";import{B as a}from"./Bar-CnB-dAcN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-RNo0-Kup.js";import"./Text-DIgVe04Z.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./ZIndexLayer-3L32Zbp4.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DJMQca_o.js";import"./throttle-CHVCCuLD.js";import"./axisSelectors-DyOG1uRh.js";import"./d3-scale-ZBKsHMes.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-JXy35Des.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhIwgz5u.js";import"./uniqBy-DTA7LqR-.js";import"./iteratee-DNbp_EuJ.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CgoAn4IQ.js";import"./useAnimationId-BnN3bcdg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./tooltipContext-jXwpxvM2.js";import"./ErrorBarContext-DkSuy-bE.js";import"./activeStyles-nNAh6kPS.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getZIndexFromUnknown-BJNwi2ms.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./omit-BAMQNq7o.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
