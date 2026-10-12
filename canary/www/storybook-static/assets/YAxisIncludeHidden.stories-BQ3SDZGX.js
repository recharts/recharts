import{r as f,R as e}from"./iframe-BobpZpVS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BrRETyZ5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B5VUc3FO.js";import{C as k}from"./ComposedChart-BGA7EeyT.js";import{X as K}from"./XAxis-BH9jyr1P.js";import{L as v}from"./Legend-CGS_rYuE.js";import{B as a}from"./Bar-C_RTq5fO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BmZLFZpv.js";import"./Text-BN-_pQam.js";import"./resolveDefaultProps-5KovoEsD.js";import"./pageBackground-DetAsOi9.js";import"./isWellBehavedNumber-DQVuNcQo.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./axisSelectors-Bu_v2Lbu.js";import"./throttle-fEV8U6G7.js";import"./d3-scale-VuFeIDMA.js";import"./CartesianAxis-BxngHTzr.js";import"./Layer-Clw1CWo5.js";import"./types-C4bXB_C_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./index-C6hjAe0R.js";import"./index-CSAFGNBA.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DSKVysWi.js";import"./index-RL4br-tv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./Symbols-CIh84bSt.js";import"./symbol-9WIN_U8L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B88yDXSB.js";import"./uniqBy-CPmUYUdg.js";import"./iteratee-v_noJUXw.js";import"./activeStyles-DmXgXh0p.js";import"./useAnimationId-IPDjwgCP.js";import"./dataEntryStyles-JNlk2hjG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8bi7cvO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FaefHkVT.js";import"./tooltipContext-CyAgMDe_.js";import"./ErrorBarContext-CJCBopYS.js";import"./GraphicalItemClipPath-DHs6ehgp.js";import"./SetGraphicalItem-BeNFDElG.js";import"./getZIndexFromUnknown-D78ZgfAB.js";import"./useEffectiveDataKey-CwNvQLsF.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
