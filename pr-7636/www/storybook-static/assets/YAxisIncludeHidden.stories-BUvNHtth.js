import{r as f,R as e}from"./iframe-CtnQdIY7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-18LfpUGe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-uhZ24fvC.js";import{C as k}from"./ComposedChart-CQbfWDL_.js";import{X as K}from"./XAxis-XO5v4-hr.js";import{L as v}from"./Legend-BiRbjuQ8.js";import{B as s}from"./Bar-Bh7Gg3Gf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-qBa5cEUX.js";import"./Text-B-1OewBP.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./DOMUtils-BvAafYtQ.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DMqHwKfA.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./index-CsEievrw.js";import"./throttle-BK98nfBm.js";import"./axisSelectors-RZmSNqcb.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./CartesianAxis-B2-Emwk9.js";import"./Layer-CrHPq_vq.js";import"./types-CuvpKj9W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./CategoricalChart-DN8vznAz.js";import"./Symbols-DQM-19oT.js";import"./symbol-CyjWwlnJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qg6DMFTI.js";import"./uniqBy-B5Eni1L2.js";import"./iteratee-Cjnl5Vus.js";import"./tooltipContext-CgvFYzEb.js";import"./AnimatedItems-C-8qrP3C.js";import"./useAnimationId-DN6fR6pH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dt_H66Jb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./ErrorBarContext-ryDidWCv.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getZIndexFromUnknown-CHBAdc_K.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BZA8fGlN.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
