import{r as f,R as e}from"./iframe-CbPFwm7l.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CFuZPq2O.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-cmGazbpI.js";import{C as k}from"./ComposedChart-sATzgU5r.js";import{X as K}from"./XAxis-I1Z8SlwP.js";import{L as v}from"./Legend-BRTZe1bn.js";import{B as a}from"./Bar-DRoSBt67.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dd7y5kyu.js";import"./Text-BOjecne3.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./pageBackground-5oAWQhvG.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJZ-23nf.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./RechartsWrapper-C9c4OR_j.js";import"./axisSelectors-31esebaG.js";import"./throttle-CsRm63w_.js";import"./d3-scale-CHJf7NcK.js";import"./index-Cvmqex35.js";import"./index-khK7m-8Q.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./index-CKBSX-em.js";import"./CartesianAxis-CRYdmYpO.js";import"./Layer-BHHNaIH9.js";import"./types-BHufKOgb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./Symbols-Bu1nYSB-.js";import"./symbol-BML25sya.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQtr63ND.js";import"./uniqBy-CYNKKwCT.js";import"./iteratee-Cb_SGx_w.js";import"./activeStyles-C0PrsAC0.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZKE4x95.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./tooltipContext-CzUq4HA3.js";import"./ErrorBarContext-CuPWqX0o.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./getZIndexFromUnknown-CE1U09Kg.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
