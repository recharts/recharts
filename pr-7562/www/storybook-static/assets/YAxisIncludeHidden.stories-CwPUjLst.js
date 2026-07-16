import{r as f,R as e}from"./iframe-54ZcEpUv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-2cFJkYpr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D4EcTS4q.js";import{C as k}from"./ComposedChart-CXJcoZU4.js";import{X as K}from"./XAxis-BhMXtQiv.js";import{L as v}from"./Legend-CB35QEBv.js";import{B as s}from"./Bar-D9w0_3rN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BfyoGem3.js";import"./Layer-C5bNrRV9.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./Label--73vW_dK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQupnOhG.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./types-kdBRSK-c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./throttle-DtmCwuH2.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./axisSelectors-BFZg6wbM.js";import"./d3-scale-Bz_vEXwn.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./Symbols-Vlrvy7XV.js";import"./symbol-sg6ZkDjS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CHF_XBdP.js";import"./uniqBy-DtjPrqio.js";import"./iteratee-Bz0VOYsU.js";import"./tooltipContext-D8x71NVd.js";import"./AnimatedItems-Bo-aqLFl.js";import"./useAnimationId-D-RZ_xXC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KX1Q4ZbD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./ErrorBarContext-DIEqyawL.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getZIndexFromUnknown-BzvwOVTj.js";import"./graphicalItemSelectors-C-mFdHvd.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
