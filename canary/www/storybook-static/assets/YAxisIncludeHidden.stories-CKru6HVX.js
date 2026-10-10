import{r as f,R as e}from"./iframe-CMIMGlWj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-QT5bDNHN.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-wuzXiITR.js";import{C as k}from"./ComposedChart-m-Ee8JHE.js";import{X as K}from"./XAxis-D-eD-ZKH.js";import{L as v}from"./Legend-DfAkJ6Nt.js";import{B as a}from"./Bar-dXJHjyuv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BNdyp9o_.js";import"./Text-BN1TaMnw.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./pageBackground-DO_pzhaN.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_EAZsge.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./throttle-BCA5qR4E.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./Symbols-BGbhxLkB.js";import"./symbol-B2_p0roD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFwzirRX.js";import"./uniqBy-DsRHxoCo.js";import"./iteratee-Xpq30y0i.js";import"./AnimatedItems-BjpwlZ4G.js";import"./useAnimationId-x76x2OiL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZX9uaas.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./tooltipContext-A6E9dtvS.js";import"./dataEntryStyles-TQ5R--o5.js";import"./ErrorBarContext-qJfLExSm.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./getZIndexFromUnknown-RtAjFLaY.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
