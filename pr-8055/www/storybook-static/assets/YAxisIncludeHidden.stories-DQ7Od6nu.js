import{r as f,R as e}from"./iframe-CugsIFqT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DaK5xoY3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DhzbqJ4_.js";import{C as k}from"./ComposedChart-B19W0OVJ.js";import{X as K}from"./XAxis-6HDBvGN1.js";import{L as v}from"./Legend-D8bcbKXA.js";import{B as a}from"./Bar-BYKM4Rcm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bo3nl74y.js";import"./Text-B6xMGXMn.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./pageBackground-CAJ4za5K.js";import"./isWellBehavedNumber-De17yvdK.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DwmQuX8A.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./axisSelectors-v31N2mNx.js";import"./throttle-DcWQ2VKw.js";import"./d3-scale-BE1RrYdy.js";import"./CartesianAxis-BJ-39moG.js";import"./Layer-Cn8FVO5-.js";import"./types-D00HSLdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DZRNoO74.js";import"./index-SsBOmTOW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B8Omcwd_.js";import"./index-DwBMtOAp.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./Symbols-CsFdNTJ7.js";import"./symbol-Cs2NCsK1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZwJ3BKY.js";import"./uniqBy-CE_ecxrY.js";import"./iteratee-Pb6iGz9n.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-_GUbXh9K.js";import"./useAnimationId-D9Q9XIBx.js";import"./dataEntryStyles-Be_CuUea.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTGg0Smx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5nThOoH4.js";import"./tooltipContext-CdJnrCrE.js";import"./ErrorBarContext-XAjwvqyS.js";import"./GraphicalItemClipPath-TUVXgEo2.js";import"./SetGraphicalItem-CIhe_dEk.js";import"./getZIndexFromUnknown-JHxCZ0JG.js";import"./useEffectiveDataKey-CDLJWg00.js";import"./omit-BzrrswHV.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
