import{r as f,R as e}from"./iframe-u9oyaNDa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DcziBOs8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CP6DEYJK.js";import{C as k}from"./ComposedChart-CjiIL43I.js";import{X as K}from"./XAxis-mDQaQsGs.js";import{L as v}from"./Legend-CcRC945r.js";import{B as a}from"./Bar-94lpO5GX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Q8r239gm.js";import"./Text-BjcDy3qe.js";import"./resolveDefaultProps-DAwvazXN.js";import"./DOMUtils-ClqiwCzY.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWsudvRq.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./RechartsWrapper-BUYC64MV.js";import"./axisSelectors-OhjP93PE.js";import"./throttle-BNJMxzFn.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./CartesianAxis-BInpl5Mc.js";import"./Layer-DjumWApv.js";import"./types-DQ_9ILU-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./Symbols-CGPR52E1.js";import"./symbol-LPq4H3NR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-12Rct7.js";import"./uniqBy-ThGgtOY0.js";import"./iteratee-TQ17fPkk.js";import"./AnimatedItems-BOaP-WB5.js";import"./useAnimationId-DzZz4Iie.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-un1MW7QV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNXHDk_r.js";import"./tooltipContext-CJc680lq.js";import"./RegisterGraphicalItemId-DN5KjZcx.js";import"./ErrorBarContext-3dixV13Q.js";import"./GraphicalItemClipPath-DV3LH61r.js";import"./SetGraphicalItem-Cs7cmOu4.js";import"./getZIndexFromUnknown-DuGzU7FO.js";import"./useGraphicalItemIdentity-BpDjC4sF.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
