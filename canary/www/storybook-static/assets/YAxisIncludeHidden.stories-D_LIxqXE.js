import{r as f,R as e}from"./iframe-CDSer5wk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DN7TNoMj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B-lpBScO.js";import{C as k}from"./ComposedChart-b_m8lhmT.js";import{X as K}from"./XAxis-CLZ8_tLg.js";import{L as v}from"./Legend-D5bRhJ8Z.js";import{B as a}from"./Bar-B2cdH9M1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDfUkOd_.js";import"./Text-B-qlIjrY.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./DOMUtils-COEpD6x9.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGJbwrqn.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./axisSelectors-DSp6qoYe.js";import"./throttle-fnP7_niv.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./CartesianAxis-DnSeAvbN.js";import"./Layer-BlrsPtdk.js";import"./types-DCfhmQQy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./Symbols-DNCMzjd9.js";import"./symbol-HykW2qul.js";import"./path-DyVhHtw_.js";import"./useElementOffset-pulofrmD.js";import"./uniqBy-BRQZPpXV.js";import"./iteratee-CIlfEQ2h.js";import"./AnimatedItems-C7ScRxUV.js";import"./useAnimationId-DsIt1eY5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9-QabtY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./tooltipContext-BWklhKSb.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./ErrorBarContext-DAmUJr4k.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getZIndexFromUnknown-s7HsEvWj.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./dataEntryStyles-st-w92pF.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
