import{r as f,R as e}from"./iframe-CcMBsn7a.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BnF9M7Oe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DFRlFrsj.js";import{C as k}from"./ComposedChart-DZIz87wm.js";import{X as K}from"./XAxis-Dcud2AjR.js";import{L as v}from"./Legend-Bzh10Y7T.js";import{B as a}from"./Bar-Djl7boDS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-M1IGuJE8.js";import"./Text-Dz_XqFLj.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./throttle-LNv5qelv.js";import"./axisSelectors-CpYzXpFY.js";import"./d3-scale-DgNN2Fjk.js";import"./CartesianAxis-Dr7Ti05X.js";import"./Layer-CeaFY6L3.js";import"./types-6qK0DF3w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5Uizgqh.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./Symbols-BeP2l-ue.js";import"./symbol-ZVm563IN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIR_VWXQ.js";import"./uniqBy-Cq9UYuC_.js";import"./iteratee-CPdK2ALT.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BOiHk-iP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJTdQbL8.js";import"./useAnimationId-BiyhMFfV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./tooltipContext-4MmzbFvB.js";import"./dataEntryStyles-Bttpss0z.js";import"./ErrorBarContext-B0K3ejq2.js";import"./activeStyles-CkIUhE4Y.js";import"./SetGraphicalItem-D39u22t5.js";import"./getZIndexFromUnknown-Bo3A1RnC.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./omit-XgeoO07C.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
