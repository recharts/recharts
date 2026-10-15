import{r as f,R as e}from"./iframe-DW88jlWE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-uwKRdj5s.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DVK4421h.js";import{C as k}from"./ComposedChart-CCOYdmsW.js";import{X as K}from"./XAxis-DR4MLdhh.js";import{L as v}from"./Legend-CpCFRfof.js";import{B as a}from"./Bar-BQqwZ5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-woFms0xV.js";import"./Text-BEy-xjYS.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./pageBackground-D5Jdtqol.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NojUaQJi.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./axisSelectors-BvsqhHdG.js";import"./throttle-DdwERQOb.js";import"./d3-scale-B9KsqEcg.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./Symbols-CutYEzOh.js";import"./symbol-D0ar7WGl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BhYHZyL1.js";import"./uniqBy-CqnjSlNB.js";import"./iteratee-CxMCF-q0.js";import"./activeStyles-D70ZhOkY.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTJIjFU2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./tooltipContext-BBMsUqm9.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getZIndexFromUnknown-C_N_5TMa.js";import"./useEffectiveDataKey-OZ4YR6rc.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
