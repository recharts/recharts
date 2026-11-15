import{r as f,R as e}from"./iframe-DNXhgPY2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DAJ4SxQ-.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C_G2hm8X.js";import{C as k}from"./ComposedChart-X9xQAOg_.js";import{X as K}from"./XAxis-CJs7Huhu.js";import{L as v}from"./Legend-Dw3LDK1m.js";import{B as a}from"./Bar-ClfnPIYa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Ds6wWWz7.js";import"./Text-_51Pk49J.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./ZIndexLayer-wMGGFAui.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-z81ryBra.js";import"./throttle-OaXA1Z9W.js";import"./axisSelectors-CTPBeHC3.js";import"./d3-scale-B8LWxob5.js";import"./CartesianAxis-Dr28b-wt.js";import"./Layer-EsfR_jDG.js";import"./types-DuvV7zSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4y6DVLx.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5YMnEix.js";import"./uniqBy-ClVkJmze.js";import"./iteratee-DgvxGvrf.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BDMoKugF.js";import"./useAnimationId-CljrEDcm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./tooltipContext-CfXnMrjv.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./activeStyles-DSoUr8Vz.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getZIndexFromUnknown-DRvebi0r.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./omit-Dp3F79MV.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
