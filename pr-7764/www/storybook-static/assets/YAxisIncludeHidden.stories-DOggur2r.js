import{r as f,R as e}from"./iframe-BKCxgEu7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-_Uh6yuoH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DPN7gMs_.js";import{C as k}from"./ComposedChart-Dzlr49a2.js";import{X as K}from"./XAxis-DBpqCofo.js";import{L as v}from"./Legend-U0wGo6Kf.js";import{B as a}from"./Bar-FLMthQSt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D0bShNKS.js";import"./Text-DbzVeL34.js";import"./resolveDefaultProps-hjqhlyP6.js";import"./DOMUtils-B8pyYDTq.js";import"./isWellBehavedNumber-4uIsFCV6.js";import"./useId-DtzVtqW0.js";import"./useBackwardsCompatibleTheme-D4Zi4gsK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bi2QbHjK.js";import"./index-C0FXEVD9.js";import"./index-ByWdUQTm.js";import"./RechartsWrapper-BUOX-u1t.js";import"./axisSelectors-D2VU5o1r.js";import"./throttle-SvLRig2f.js";import"./d3-scale-fKLPTI5B.js";import"./index-BQwfhQz_.js";import"./index-bhQBCTAA.js";import"./renderedTicksSlice-7MFbI2Ip.js";import"./index-BL0gWy2l.js";import"./CartesianAxis-CuN00Lvq.js";import"./Layer-GDBs0RPs.js";import"./types--eHqqtV8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dx01wauZ.js";import"./chartDataContext-D7QilCwv.js";import"./CategoricalChart-TFuOhU4H.js";import"./Symbols-CdXXhC3x.js";import"./symbol-BczE_9ZM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpTYfk3M.js";import"./uniqBy-BerM9mz3.js";import"./iteratee-DALipbtq.js";import"./AnimatedItems-BXOuP06z.js";import"./useAnimationId-Dludl8d_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DaSdwAeX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EGktKins.js";import"./tooltipContext-CG3e_Drv.js";import"./RegisterGraphicalItemId-DzHzaEjw.js";import"./ErrorBarContext-8H81gPWM.js";import"./GraphicalItemClipPath-Qfm8sxPZ.js";import"./SetGraphicalItem-BTjD6Tnz.js";import"./getZIndexFromUnknown-DPP7UlyI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DKPOYdjf.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
