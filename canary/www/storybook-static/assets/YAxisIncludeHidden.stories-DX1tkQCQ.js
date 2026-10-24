import{r as f,R as e}from"./iframe-CHJ8qNn-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BiD1d_mO.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DNIXTlyt.js";import{C as k}from"./ComposedChart-Gh2_Mw5N.js";import{X as K}from"./XAxis-L9UrmdET.js";import{L as v}from"./Legend-CtgsxT5S.js";import{B as a}from"./Bar-N13jfkZ1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B11lJlmF.js";import"./Text-CNSLXPSH.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./pageBackground-DmOvuMA2.js";import"./isWellBehavedNumber-BRib7OTz.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D300_86G.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./dataEntryStyles-DVh89c5p.js";import"./axisSelectors-BBd7_xKf.js";import"./throttle-XqMRt2jJ.js";import"./d3-scale-Tozs6n73.js";import"./CartesianAxis-Durs5z8j.js";import"./Layer-D78kPmJv.js";import"./types-Dz3e-B0c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BJlTvsU4.js";import"./index-CoSZFYA7.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./Symbols-AUdiU7pc.js";import"./symbol-B3rYpPSJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BalShxiV.js";import"./uniqBy-CEOdNzvN.js";import"./iteratee-B1w-dxbF.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-ujvHG1pk.js";import"./useAnimationId-CQYAMcX9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0Mkl8MZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./tooltipContext-D_sHfR4N.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./ErrorBarContext-gVyy4V_e.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getZIndexFromUnknown-DzS5M4dq.js";import"./useEffectiveDataKey-BD8sCJ8W.js";import"./omit-V5dJ_cDJ.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
