import{r as f,R as e}from"./iframe-BGOT0UMq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ce9ej7bF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BPU0EfFx.js";import{C as k}from"./ComposedChart-Cn5XstS9.js";import{X as K}from"./XAxis-Cg--p2uq.js";import{L as v}from"./Legend-C2y0bXsP.js";import{B as a}from"./Bar-BbETrKRf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BU1lFQ2f.js";import"./Text-D50SBSje.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./DOMUtils-DS3nE711.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./RechartsWrapper-CjrWTlpw.js";import"./axisSelectors-Wq_jv7lJ.js";import"./throttle-gIJqAgIK.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./CartesianAxis-hSXvCGlw.js";import"./Layer-C_IgQKNN.js";import"./types-B69giCR1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./Symbols-BNcFTM-g.js";import"./symbol-Dx8u4lfS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qq_A2Adc.js";import"./uniqBy-DxQg0KF1.js";import"./iteratee-BjdoCIjK.js";import"./AnimatedItems-DLd27jVc.js";import"./useAnimationId-B8wYOiNY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYLcafiV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjoIgzDR.js";import"./tooltipContext-aXHRg65I.js";import"./RegisterGraphicalItemId-CDcrkiRG.js";import"./ErrorBarContext-C9R0WBsq.js";import"./GraphicalItemClipPath-CPiocMLU.js";import"./SetGraphicalItem-C3s6q2T3.js";import"./getZIndexFromUnknown-BGe9KuJ9.js";import"./useGraphicalItemIdentity-NEokAZII.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
