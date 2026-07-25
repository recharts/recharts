import{r as f,R as e}from"./iframe-DNItCT7m.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BTzQl_Zr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BIc7DaAW.js";import{C as k}from"./ComposedChart-C5LgD4az.js";import{X as K}from"./XAxis-Daqmz5Xv.js";import{L as v}from"./Legend-S1INlTBC.js";import{B as s}from"./Bar-BrqBu6YB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bnx97baV.js";import"./Layer-Db2cjn9q.js";import"./resolveDefaultProps-Bl2ououO.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./Label-Dd-8-k84.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./types-BUhan55B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./throttle-C6rBLGvR.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./index-C_m6BLaT.js";import"./axisSelectors-BBK9nbq3.js";import"./d3-scale-CToN17b5.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./Symbols-Blhs67Ix.js";import"./symbol-BPmt5VBA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C4tOubk4.js";import"./uniqBy-DV28RGwR.js";import"./iteratee-D8sPzuRh.js";import"./tooltipContext-7Hhe5UXg.js";import"./AnimatedItems-CA_PH1lw.js";import"./useAnimationId-0YgIZ0Y8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ymMtDHlr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DbSW9g1N.js";import"./RegisterGraphicalItemId-DzuoUeII.js";import"./ErrorBarContext-BlEkCG4n.js";import"./GraphicalItemClipPath-DTm1hIPW.js";import"./SetGraphicalItem-B0-RRBJT.js";import"./getZIndexFromUnknown-C5v9zWNW.js";import"./graphicalItemSelectors-DTMH4QI8.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
