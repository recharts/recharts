import{r as f,R as e}from"./iframe-sVYf0T4K.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CNIo2SjU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DCYn61_Z.js";import{C as k}from"./ComposedChart-79IdZ4r_.js";import{X as K}from"./XAxis-DBp8xvXF.js";import{L as v}from"./Legend-C9mntufH.js";import{B as a}from"./Bar-CT4oIuK5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DWNcL86V.js";import"./Text-BWcB5EFj.js";import"./resolveDefaultProps-BNjxkguA.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./throttle-B5u3GWWh.js";import"./dataEntryStyles-4CyLqaB1.js";import"./axisSelectors-DeiSy_-h.js";import"./d3-scale-CaVFs3zj.js";import"./CartesianAxis-BI1VsAr7.js";import"./Layer-BIjeoEg2.js";import"./types-ZHVwXJa3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BGq7qwld.js";import"./useAnimationId-D71D5MAL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--uO5acWR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./tooltipContext-CN3GbuoS.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getZIndexFromUnknown-CkpFwhFm.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./omit-CGn4-LBM.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
