import{r as f,R as e}from"./iframe-CMVuz_WR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DhZVcnhy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bu9BgD7f.js";import{C as k}from"./ComposedChart-BHXT81yI.js";import{X as K}from"./XAxis-Dls2O1nz.js";import{L as v}from"./Legend-CqRA3wWf.js";import{B as a}from"./Bar-DTzQ_dDy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BusuXXbv.js";import"./Text-_Yf6eN5X.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./DOMUtils-ClFVphvT.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CC6O4jFa.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./throttle-BD5EEuEt.js";import"./d3-scale-BJGJFwwk.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./index-CqRVWfEr.js";import"./CartesianAxis-aP0rvO-w.js";import"./Layer-BNHnjhAQ.js";import"./types-C-qBJNve.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./Symbols-9CFG7RjC.js";import"./symbol-CYW2jSWB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DlxoAXh8.js";import"./uniqBy-DV8vNVc-.js";import"./iteratee-r3vqN0UI.js";import"./AnimatedItems-BtNlpq_I.js";import"./useAnimationId-DpagfNvu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfCZIbio.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ce44UUga.js";import"./tooltipContext-_6LAkaCJ.js";import"./RegisterGraphicalItemId-CX_ikIzR.js";import"./ErrorBarContext-Bf0CG0PF.js";import"./GraphicalItemClipPath-Dm_wDd6O.js";import"./SetGraphicalItem-B2N4WPPi.js";import"./getZIndexFromUnknown-CT7SNiW0.js";import"./useGraphicalItemIdentity-Czg2hm9T.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
