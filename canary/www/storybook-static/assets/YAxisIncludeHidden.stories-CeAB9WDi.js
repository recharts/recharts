import{r as f,R as e}from"./iframe-BWaBJMJm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BbW4o0g7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CtmWcXao.js";import{C as k}from"./ComposedChart-DVxlQhI3.js";import{X as K}from"./XAxis-Du0WrONz.js";import{L as v}from"./Legend-qoAhyscU.js";import{B as a}from"./Bar-DOGzCGT3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaAaSDK3.js";import"./Text-CaLxBG_J.js";import"./resolveDefaultProps-BoTf8eWq.js";import"./DOMUtils-ZU1bRPvN.js";import"./isWellBehavedNumber-hjVXvh9H.js";import"./useId-DH400x7B.js";import"./useBackwardsCompatibleTheme-C9V53e4Q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbdMqToM.js";import"./index-DUifKCeq.js";import"./index-D2GUCawm.js";import"./RechartsWrapper-C_LHq0Dp.js";import"./axisSelectors-WjeILgtA.js";import"./throttle-Dt5qCkk5.js";import"./d3-scale-DYdeDEBW.js";import"./index-I7xfvYkR.js";import"./index-B1abja9I.js";import"./renderedTicksSlice-B4vPTGd7.js";import"./index-BakoavmS.js";import"./CartesianAxis-ihxfexzN.js";import"./Layer-WH1GH-3R.js";import"./types-CeFzDtUp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DTHkZiLZ.js";import"./chartDataContext-D5Ez6fbj.js";import"./CategoricalChart-DZaCTL-I.js";import"./Symbols-CtYV93jH.js";import"./symbol-Djg3VJZl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3gaIHtz.js";import"./uniqBy-y_0rvX4w.js";import"./iteratee-CZlOM5B3.js";import"./AnimatedItems-CqoL6PKs.js";import"./useAnimationId-CrzFE7bT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkogAKI_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlN6eMVb.js";import"./tooltipContext-B7JCteW0.js";import"./RegisterGraphicalItemId-B7vtKiJL.js";import"./ErrorBarContext-BU0PpEiW.js";import"./GraphicalItemClipPath-DPY_uU75.js";import"./SetGraphicalItem-DSLLIs8g.js";import"./getZIndexFromUnknown-CTXFDQEN.js";import"./useGraphicalItemIdentity-B-PLK1-q.js";import"./dataEntryStyles-DHMdVsJm.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
