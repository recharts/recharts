import{r as f,R as e}from"./iframe-BH2TtHlY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B0vif2kn.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BUPzf8FY.js";import{C as k}from"./ComposedChart-DsOU5PTg.js";import{X as K}from"./XAxis-COZT_uqw.js";import{L as v}from"./Legend-Bsu7AJMJ.js";import{B as a}from"./Bar-BwSDy0e-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CIPQeI3a.js";import"./Text-CevbSlGY.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./ZIndexLayer-Doizp3A4.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CrYx-glo.js";import"./throttle-Dx7o9_lY.js";import"./axisSelectors-DsRwL_k-.js";import"./d3-scale-CXj_dWXw.js";import"./CartesianAxis-0pfTl-hM.js";import"./Layer-IM2jrBt3.js";import"./types-DOMxGpI2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DzLFc6RH.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BE_errrN.js";import"./uniqBy-BMu_3qtX.js";import"./iteratee-BjDUq9-x.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-oNDiL7vD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0BLzMMy.js";import"./useAnimationId-CDSf-pzR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./tooltipContext-CxVj4CRN.js";import"./ErrorBarContext-4rxkwyEB.js";import"./activeStyles-C4DAj0Um.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./getZIndexFromUnknown-BYRlpRYq.js";import"./useEffectiveDataKey-BXRZCQow.js";import"./omit-CLMzz_r6.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
