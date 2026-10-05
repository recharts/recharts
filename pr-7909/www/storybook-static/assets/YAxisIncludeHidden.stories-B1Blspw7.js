import{r as f,R as e}from"./iframe-Mdt8VJ2w.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D9-WHDrj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BsdMuIdb.js";import{C as k}from"./ComposedChart-eoHVURcz.js";import{X as K}from"./XAxis-GQVgJzZC.js";import{L as v}from"./Legend-CU_BQ7Au.js";import{B as a}from"./Bar-BfohqoPh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CtCuuSl7.js";import"./Text-C4xsU_o9.js";import"./resolveDefaultProps-CpPg4Klh.js";import"./DOMUtils-BUFAvfGk.js";import"./isWellBehavedNumber-t2MA1Hj2.js";import"./useId-DFFN6HWZ.js";import"./useBackwardsCompatibleTheme-CUPajrH3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Di_3Ujup.js";import"./index-aQiBtsFK.js";import"./index-CBF1PFXA.js";import"./RechartsWrapper-BSXOrQ0o.js";import"./axisSelectors-BFf5BOkR.js";import"./throttle-VIBdIbYw.js";import"./d3-scale-DhLC6v_0.js";import"./index-Bh66vNwH.js";import"./index-BNwNegUe.js";import"./renderedTicksSlice-DSt8-RgC.js";import"./index-DXJpIZWy.js";import"./CartesianAxis-CC5aUDzH.js";import"./Layer-CcarLXD9.js";import"./types-6Q4AmTS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cjv56MYV.js";import"./chartDataContext-bPArfWn-.js";import"./CategoricalChart-DQulxF7t.js";import"./Symbols-CsPrbuzU.js";import"./symbol-CXLx3OGs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJ7XjXe1.js";import"./uniqBy-Bre31482.js";import"./iteratee-BzS5DkOb.js";import"./AnimatedItems-B_SFlbBu.js";import"./useAnimationId-BjS9VFFE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cz_1U9tO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-COWK-Ag5.js";import"./tooltipContext-D2qENeVS.js";import"./RegisterGraphicalItemId-B7ELoHw_.js";import"./ErrorBarContext-_5c9Wah_.js";import"./GraphicalItemClipPath-D5E8uSuA.js";import"./SetGraphicalItem-DcJbL-HK.js";import"./getZIndexFromUnknown-DfPzGUp9.js";import"./useGraphicalItemIdentity-Dbl0dkEe.js";import"./dataEntryStyles-DulBzXyp.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
