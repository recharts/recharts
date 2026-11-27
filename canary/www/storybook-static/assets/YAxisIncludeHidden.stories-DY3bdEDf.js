import{r as f,R as e}from"./iframe-BkOwE2GN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-hX7zZE17.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Chy-hne0.js";import{C as k}from"./ComposedChart-BhRq4U8z.js";import{X as K}from"./XAxis-0fckSjiA.js";import{L as v}from"./Legend-BP3s6Hw6.js";import{B as a}from"./Bar-CwOgKBHC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./Label-y4X5dBPS.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./throttle-DAc5l_dD.js";import"./axisSelectors-DGKEku6n.js";import"./diverging-CTw2DMEK.js";import"./CartesianAxis-DEhg_nUI.js";import"./Layer-CnUstnfJ.js";import"./types-CoO4ONhi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CXzR8xrS.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C2OMNI73.js";import"./uniqBy-CEEShQv_.js";import"./iteratee-CcBPK2XM.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-R9P1sHzA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jQhwNsi0.js";import"./useAnimationId-DWRfsMZ5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./tooltipContext-DlfBTk9y.js";import"./ErrorBarContext-BuIxRivK.js";import"./activeStyles-fROkMw-p.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./getZIndexFromUnknown-BGzvUspL.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./omit-3dRxX8ce.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
