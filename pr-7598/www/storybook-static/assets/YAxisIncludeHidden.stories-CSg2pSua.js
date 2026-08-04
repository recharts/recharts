import{r as f,R as e}from"./iframe-CWA9dL1n.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Crip943s.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-aQmFZxtc.js";import{C as k}from"./ComposedChart-JYsLvtOs.js";import{X as K}from"./XAxis-DeVvUZ6V.js";import{L as v}from"./Legend-Cop-tyu3.js";import{B as s}from"./Bar-Cez3_PYu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Ci3V9in7.js";import"./Text-B5gv-Qby.js";import"./resolveDefaultProps-3gLKwpWY.js";import"./DOMUtils-h2leYdBT.js";import"./isWellBehavedNumber-Bm4ocvOr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQgxZgR-.js";import"./index-B9WDmcBs.js";import"./index-D3IuHkaK.js";import"./RechartsWrapper-CId5I6PX.js";import"./index-C7DdHlxQ.js";import"./index-BzvjS6S7.js";import"./throttle-CO5aCb3a.js";import"./renderedTicksSlice-C0LhBYgl.js";import"./axisSelectors-kDLbJQaY.js";import"./d3-scale-CcIRMvmh.js";import"./CartesianAxis-TOCYRN01.js";import"./Layer-DdfHe4zJ.js";import"./types-Dm1l0pKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-PN0Sf9X-.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CjycZaTM.js";import"./chartDataContext-B92OI4-S.js";import"./CategoricalChart-19SPVwUn.js";import"./Symbols-CS3q9FMu.js";import"./symbol-DpU8AU8u.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEgQPazE.js";import"./uniqBy-Cq9W0uGc.js";import"./iteratee-DihBNj6d.js";import"./tooltipContext-Bfz9ab30.js";import"./AnimatedItems-4dsj7PS2.js";import"./useAnimationId-BfVlpqgG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-mWWl0VjI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-cijm59wq.js";import"./RegisterGraphicalItemId-BY6CqeJu.js";import"./ErrorBarContext-CsfUMbkm.js";import"./GraphicalItemClipPath-CNA6w-35.js";import"./SetGraphicalItem-iurO2H6w.js";import"./getZIndexFromUnknown-CodkHglj.js";import"./graphicalItemSelectors-Ci2bweSS.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
