import{r as f,R as e}from"./iframe-CO23d3n1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DVp-8yRY.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMSZKiVC.js";import{C as k}from"./ComposedChart-D8Yj3pPk.js";import{X as K}from"./XAxis-BoBOjjsH.js";import{L as v}from"./Legend-Beev8OHM.js";import{B as a}from"./Bar-Bj7Ckloc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-2Fni25es.js";import"./Text-DWIEtkwC.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./ZIndexLayer-DcfMfyOV.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8_om16C.js";import"./throttle-B66_T3U8.js";import"./axisSelectors-DJQVEMl6.js";import"./d3-scale-C9xcvLA3.js";import"./CartesianAxis-Dnx0rUNa.js";import"./Layer-CYlWB893.js";import"./types-BU4Ojrin.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-D4fJrATD.js";import"./index-D0uo_LWY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bh8_r7fw.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./Symbols-BjRa6Boz.js";import"./symbol-CniqeamR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DdC3N3ay.js";import"./uniqBy-MGV_25lQ.js";import"./iteratee-BTK9QdXN.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BB1e2MfD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xnUKvACR.js";import"./useAnimationId-DzTpCf5I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./tooltipContext-DH4nuqG4.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./activeStyles-Bl6Emzo4.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./getZIndexFromUnknown-CJSbLwv_.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./omit-BKvazyKr.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
