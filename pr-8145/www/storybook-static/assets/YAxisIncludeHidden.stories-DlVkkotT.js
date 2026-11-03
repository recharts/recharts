import{r as f,R as e}from"./iframe-B5EBEutQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-US4huNHY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BS5hvVSM.js";import{C as k}from"./ComposedChart-BL8Vy27a.js";import{X as K}from"./XAxis-C0OgGT6V.js";import{L as v}from"./Legend-B5cuN_n_.js";import{B as a}from"./Bar-NKit9PFb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bho88syw.js";import"./Text-BVXkgzAF.js";import"./resolveDefaultProps-CBLh7NYz.js";import"./DOMUtils-EesDyIQg.js";import"./ZIndexLayer-2f9RfWsU.js";import"./index-C_XmK0o8.js";import"./index-C5geO6kL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CqmKpuRO.js";import"./throttle-B9WW5VMA.js";import"./axisSelectors-CLoHgdoC.js";import"./d3-scale-iNRnE1hH.js";import"./CartesianAxis-7YbWTN27.js";import"./Layer-BYAjyABW.js";import"./types-BmtCPhIx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_QLVgTg.js";import"./index-BF-QrOX1.js";import"./index-DOPYkGg1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BC-brhau.js";import"./index-DxeJdFG6.js";import"./fillDefinitions-FU64iHqp.js";import"./CartesianChart-YkNn32dh.js";import"./ZIndexPortal-D0P5glPn.js";import"./CategoricalChart-DwIu15RM.js";import"./Symbols-BFE2HVM6.js";import"./symbol-Uauys67f.js";import"./path-DyVhHtw_.js";import"./useElementOffset-5ftWeo_0.js";import"./uniqBy-tVD2kZAe.js";import"./iteratee-Cg-J5YFs.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BsIU2Cho.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZKbEhjO.js";import"./useAnimationId-5jS9WdgM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrbC1Zls.js";import"./tooltipContext-KHm7eipe.js";import"./dataEntryStyles-DbY2Nm9f.js";import"./ErrorBarContext-dLbqY2mz.js";import"./activeStyles-CuQ8L2cy.js";import"./SetGraphicalItem-WzwPCAJ5.js";import"./getZIndexFromUnknown-6-_TCKzY.js";import"./useEffectiveDataKey-BNkN63Yq.js";import"./omit-DYVbvTBJ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
