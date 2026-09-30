import{r as f,R as e}from"./iframe-CgcESoS_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bq6E-73C.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C9Cb6Bbs.js";import{C as k}from"./ComposedChart-WZ7M5LR1.js";import{X as K}from"./XAxis-DGXMp8Is.js";import{L as v}from"./Legend-BV0Dl49X.js";import{B as a}from"./Bar-CQIgb9Di.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-_q8lYILX.js";import"./Text-BcEh6RFZ.js";import"./resolveDefaultProps-veeYoS0W.js";import"./DOMUtils-Cw9s48Kn.js";import"./isWellBehavedNumber-DhEFf9E-.js";import"./useId-Dc2THN-S.js";import"./useBackwardsCompatibleTheme-BFuFikoj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DED1yjXT.js";import"./index-1XAen2V_.js";import"./index-D8jvDgL_.js";import"./RechartsWrapper-DtWJJ1V3.js";import"./axisSelectors-C7-DsMGo.js";import"./throttle-CQ8B3fUq.js";import"./d3-scale-D8W7M27y.js";import"./index-BTxBwUxJ.js";import"./index-C9UQ_w7z.js";import"./renderedTicksSlice-B_kIuOFM.js";import"./index-jPmp1Ffa.js";import"./CartesianAxis-CyNZQ6so.js";import"./Layer-Dw6zZzpv.js";import"./types-8FiI2U_s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BTQK_Cp5.js";import"./chartDataContext-DUBSEFa9.js";import"./CategoricalChart-BFNKJgcW.js";import"./Symbols-Ckj8mUZ8.js";import"./symbol-CqfI7rOQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_ajIM7J.js";import"./uniqBy--75j5a0F.js";import"./iteratee-CDEjiyt4.js";import"./AnimatedItems-tEo2zXLi.js";import"./useAnimationId-C9QrN9Yt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3dp6HRo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cy154cWG.js";import"./tooltipContext-21eVRK3H.js";import"./RegisterGraphicalItemId-BEYzOUyb.js";import"./ErrorBarContext-ZU3bae9x.js";import"./GraphicalItemClipPath-C3tOgX87.js";import"./SetGraphicalItem-D2ZPo27B.js";import"./getZIndexFromUnknown-CVjPDJhJ.js";import"./useGraphicalItemIdentity-ry1LG-EM.js";import"./dataEntryStyles-D5fiNXvw.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
