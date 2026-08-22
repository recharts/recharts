import{r as f,R as e}from"./iframe-DXHKQ-h8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BhGHb5Me.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CsQg_s5y.js";import{C as k}from"./ComposedChart-C6cxeCbV.js";import{X as K}from"./XAxis-Ckl7Pa3u.js";import{L as v}from"./Legend-CytQnx7k.js";import{B as s}from"./Bar-jQmahhsK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BCe67yO0.js";import"./Text-Bb1JrkH_.js";import"./resolveDefaultProps-CH3DJ1U7.js";import"./DOMUtils-BSgnm9w6.js";import"./isWellBehavedNumber-B2OYT9p4.js";import"./useId-DlJk-nhm.js";import"./useBackwardsCompatibleTheme-DuqY5Wqi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLuwldtV.js";import"./index-BoMz0vXG.js";import"./index-Bfb_F_qW.js";import"./RechartsWrapper-NUOxXBTc.js";import"./index-D51whMVe.js";import"./index-DQazPbcg.js";import"./throttle-CSmQrAIR.js";import"./axisSelectors-C2FhXeDp.js";import"./d3-scale-x1kkipsN.js";import"./renderedTicksSlice-B6yr5Yhh.js";import"./CartesianAxis-eQGKlaa2.js";import"./Layer-D8Of9gCi.js";import"./types-C9KPOeuA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BAA2O-Wi.js";import"./chartDataContext-Co2nG42J.js";import"./CategoricalChart-njav6Y1l.js";import"./Symbols-sS9GnGcd.js";import"./symbol-Be4yaci6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CgmBroAF.js";import"./uniqBy-iZsqe27X.js";import"./iteratee-BWIQYiSv.js";import"./AnimatedItems-BnmUd_N9.js";import"./useAnimationId-WfbS1c84.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKUxhVqo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_tGIq0b.js";import"./tooltipContext-ChXEFAAD.js";import"./RegisterGraphicalItemId-B_2bGmJg.js";import"./ErrorBarContext-CdeH4fn3.js";import"./GraphicalItemClipPath-BZQLFBTi.js";import"./SetGraphicalItem-CODvRDn4.js";import"./getZIndexFromUnknown-CPXIhHj8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Di3e24UN.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
