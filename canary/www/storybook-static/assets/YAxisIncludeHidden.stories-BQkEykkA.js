import{r as f,R as e}from"./iframe-XShEXmHR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CC_fCC6K.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BbKyzabk.js";import{C as k}from"./ComposedChart-Buz-P00K.js";import{X as K}from"./XAxis-DWLQMeD5.js";import{L as v}from"./Legend-81x18Ee1.js";import{B as a}from"./Bar-vbL9-DWq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-PHQocy7u.js";import"./Text-DdUz3atv.js";import"./resolveDefaultProps-DM0s23ft.js";import"./pageBackground-Caz1wwpV.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BjS9bgAg.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./axisSelectors-CSJ2InJO.js";import"./throttle-DGpDaXVx.js";import"./d3-scale-DlV_OlJQ.js";import"./CartesianAxis-DXjpiMVV.js";import"./Layer-C_-u4_qv.js";import"./types-Du-HQFzW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-B0AN-0kz.js";import"./index-C8Ku-gFK.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-WU0hX8ZH.js";import"./index-CNWPVzDl.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./Symbols-CEnD6S3J.js";import"./symbol-BPoRGGbG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDXnga2p.js";import"./uniqBy-2p13vlX2.js";import"./iteratee-Dckbnh0N.js";import"./activeStyles-JUu5k5N9.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3DMVp7GS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./tooltipContext-BEGw6oth.js";import"./ErrorBarContext-D_UY1Ewg.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./getZIndexFromUnknown--N4SIXFB.js";import"./useEffectiveDataKey-Ca_DBmdg.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
