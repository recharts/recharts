import{r as f,R as e}from"./iframe-DtUqFz4i.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BMscqJB-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D7wiyJvz.js";import{C as k}from"./ComposedChart-CzQBCEWP.js";import{X as K}from"./XAxis-CDer3rOu.js";import{L as v}from"./Legend-nKNwmpxg.js";import{B as a}from"./Bar-kSp6kUTA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DSBhBvVo.js";import"./Text-Ci0TXZMh.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./DOMUtils-CAVjRHi7.js";import"./isWellBehavedNumber-BD9jivhZ.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./RechartsWrapper-okeo-S0V.js";import"./axisSelectors-DKiSvbvB.js";import"./throttle-Xq_SZc3C.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./index-Dz7I98PR.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./CartesianAxis-CvUiwg6W.js";import"./Layer-DaGE4xdO.js";import"./types-DIyWN1O2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./Symbols-DUAmEX4d.js";import"./symbol-CuIzRMST.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zKQGkCXa.js";import"./uniqBy-CF70an62.js";import"./iteratee-BsjABlDl.js";import"./AnimatedItems-Bqh_lJsV.js";import"./useAnimationId-yAmPQwMn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBwoe9pk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dur4qT68.js";import"./tooltipContext-DOzIg8ml.js";import"./RegisterGraphicalItemId-DHE_UdIi.js";import"./ErrorBarContext-CnzHFxN7.js";import"./GraphicalItemClipPath-SRfs0G_i.js";import"./SetGraphicalItem-Cs09Djqk.js";import"./getZIndexFromUnknown-CScG8aTM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6MoKrmF.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
