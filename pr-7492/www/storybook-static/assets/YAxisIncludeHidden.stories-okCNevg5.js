import{r as f,R as e}from"./iframe-CThZUbdE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-COnF85r4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BDry6QRp.js";import{C as k}from"./ComposedChart-BYeWN0El.js";import{X as K}from"./XAxis-Czxsq92a.js";import{L as v}from"./Legend-D5EFqXIt.js";import{B as s}from"./Bar-COaI8xWN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VHoxVJrE.js";import"./CartesianAxis-BM-bncSs.js";import"./Layer-C1XMVqEx.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./Label-CE0t5kQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LL2CdfOc.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./types-BBvrAdrd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./immer-6NPp0ZGq.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./Symbols-DOMkQYi1.js";import"./symbol-DhevQ36Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-I2abokvN.js";import"./uniqBy-CWUL-oIl.js";import"./iteratee-BoWDAhHy.js";import"./tooltipContext-pa2zo_xo.js";import"./AnimatedItems-PV5URjHV.js";import"./useAnimationId-DzTn0J9i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Czan5czn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./getZIndexFromUnknown-QhI5Gjbl.js";import"./graphicalItemSelectors-DvTXnfX0.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
