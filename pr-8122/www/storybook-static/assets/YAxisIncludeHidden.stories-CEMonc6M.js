import{r as f,R as e}from"./iframe-C478ayfe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CL1QJJED.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-T3ZFb7Aa.js";import{C as k}from"./ComposedChart-DISnWYF6.js";import{X as K}from"./XAxis-CU4ivSNq.js";import{L as v}from"./Legend-D3WreQlu.js";import{B as a}from"./Bar-DiJNqbpP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-yNY_-txU.js";import"./Text-rWn3Xmx5.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CAckEIKE.js";import"./throttle-B99v42cc.js";import"./axisSelectors-Biv-SyAO.js";import"./d3-scale-Cz0p_M0k.js";import"./CartesianAxis-D6yrNWVj.js";import"./Layer-BzE3AtiA.js";import"./types-1IO_LGzE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D6tIgYO1.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./Symbols-B5clnuWh.js";import"./symbol-Djp9TiFA.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-7wVPS1Ff.js";import"./dataEntryStyles-DLRWmObc.js";import"./useElementOffset-BEuMbuoA.js";import"./uniqBy-kU7oDpQ6.js";import"./iteratee-bJQZKjxj.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CXPk-iUW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DvnRkiIM.js";import"./useAnimationId-DsdBvcVE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./tooltipContext-EbmqIB_N.js";import"./ErrorBarContext-Cxtks1NA.js";import"./activeStyles-BTHRjD5i.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./getZIndexFromUnknown-BJzUWkXe.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./omit-BJPZ4RLA.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
