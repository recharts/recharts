import{r as f,R as e}from"./iframe-C9QnkkRp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-cnj8Nk2R.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BYQlmGuM.js";import{C as k}from"./ComposedChart-Gx1n6SiU.js";import{X as K}from"./XAxis-49PSd8B9.js";import{L as v}from"./Legend-CGXNIB2v.js";import{B as a}from"./Bar-CtKrTHeu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-yo2OQSgL.js";import"./Text-BwyCofjZ.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./throttle-CzhN4mlB.js";import"./axisSelectors-CTzSQU4W.js";import"./d3-scale-Yr2mcnpg.js";import"./CartesianAxis-CyUzu-Nz.js";import"./Layer-CEkcTjee.js";import"./types-DqaK-59q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cq91RCWh.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yJR4mmFg.js";import"./uniqBy-B7emlUis.js";import"./iteratee-MiGwBwmm.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BFdezSvK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvNdNhfG.js";import"./useAnimationId-CShc60ZQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./tooltipContext-Di65yGev.js";import"./ErrorBarContext-BjyFMzrh.js";import"./activeStyles-CN7lMIFZ.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getZIndexFromUnknown-BQtXUpZz.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./omit-DbiO3X2L.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
