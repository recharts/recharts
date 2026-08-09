import{r as f,R as e}from"./iframe-DiVXU681.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DRIG0Uth.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DzaA_87S.js";import{C as k}from"./ComposedChart-Ce0ZmhAi.js";import{X as K}from"./XAxis-C3k2I40a.js";import{L as v}from"./Legend-DlJsX6wB.js";import{B as s}from"./Bar-B1kBQUfc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-0bv0xRMH.js";import"./Text-CCIULR2F.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./DOMUtils-CLkaSbmi.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbNui_5z.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./throttle-TSFzffo4.js";import"./axisSelectors-D56P7LNb.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./CartesianAxis-pQr6RLfR.js";import"./Layer-BIRlOb6y.js";import"./types-VNyUreZc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./Symbols-CJedFpAh.js";import"./symbol-C6BtcMJ6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DnWcYAZJ.js";import"./uniqBy-BfbLVdUA.js";import"./iteratee-BKX_gc7E.js";import"./tooltipContext-BNzkw3eR.js";import"./AnimatedItems-CmBbc9Cv.js";import"./useAnimationId-CxWNxwEQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NkoMZfI8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./ErrorBarContext-DQhhoIiU.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getZIndexFromUnknown-CldbyVqp.js";import"./graphicalItemSelectors-BrOmBPmn.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
