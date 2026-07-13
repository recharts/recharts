import{r as f,R as e}from"./iframe-DMOF2lK6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-RrgtBsUU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DhTc22fH.js";import{C as k}from"./ComposedChart-D3i3PjRq.js";import{X as K}from"./XAxis-D4z0E1S_.js";import{L as v}from"./Legend-Bb7zjNIJ.js";import{B as s}from"./Bar-CCKHmoTf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B3U1UDpz.js";import"./Layer-7eLuysDW.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./Label-BEoMP2Su.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUULPtO2.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./types-CpWsykXF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./throttle-DdV_xgY5.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./Symbols-BPG1JSvh.js";import"./symbol-BHRYy0Uh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpfPFtuA.js";import"./uniqBy-BlzluoM8.js";import"./iteratee-BqDUwzTx.js";import"./tooltipContext-CXiCr-XV.js";import"./AnimatedItems-BdaIVj2C.js";import"./useAnimationId-Djm7sZoE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Czy0xVaV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./ErrorBarContext-B97mauET.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getZIndexFromUnknown-ZXt_eyeP.js";import"./graphicalItemSelectors-iCteOsSQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
