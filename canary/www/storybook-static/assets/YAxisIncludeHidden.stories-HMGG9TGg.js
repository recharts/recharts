import{r as f,R as e}from"./iframe-GBGc-iKq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-mSAPjc-3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DP0tLqWW.js";import{C as k}from"./ComposedChart-BAWAmmMR.js";import{X as K}from"./XAxis-BBjH0uDR.js";import{L as v}from"./Legend-F4vRuJVq.js";import{B as s}from"./Bar-QHhZHYJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DICUyaHN.js";import"./CartesianAxis-DQP4bonx.js";import"./Layer-CDGRbd8f.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./Label-DSpdGeyH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./types-BTPiehg7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./immer-9IN4E6VX.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./index-DEGNeWRW.js";import"./axisSelectors-DUsVRTIw.js";import"./d3-scale-Dym64WYU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./Symbols-DCPOqpq2.js";import"./symbol-Dstt6t6v.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_LlNMZ1b.js";import"./uniqBy-BPbPdDdp.js";import"./iteratee-DqpINt84.js";import"./tooltipContext-DRZw4DN2.js";import"./AnimatedItems-C29R-vhg.js";import"./useAnimationId-BXgA3n2L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C36d9lkh.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getZIndexFromUnknown-D4tcK45P.js";import"./graphicalItemSelectors-CSv0afn4.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
