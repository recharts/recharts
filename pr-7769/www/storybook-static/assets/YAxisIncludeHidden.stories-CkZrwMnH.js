import{r as f,R as e}from"./iframe-5Ln2iLqA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BgyWvHpM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DFex-upv.js";import{C as k}from"./ComposedChart-D13UaSHz.js";import{X as K}from"./XAxis-C-UtlQCm.js";import{L as v}from"./Legend-CnXbXW_A.js";import{B as a}from"./Bar-Ccw-DzNj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-9F2YL2wp.js";import"./Text-oIzTAhmK.js";import"./resolveDefaultProps-IjnCGfXZ.js";import"./DOMUtils-Cf_dBvDb.js";import"./isWellBehavedNumber-CdZO7OXS.js";import"./useId-DeG95-BA.js";import"./useBackwardsCompatibleTheme-C1dsWZXc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ZmLJud1E.js";import"./index-CzncCR4k.js";import"./index-D7j-yBVr.js";import"./RechartsWrapper-BHuvBmBF.js";import"./axisSelectors-BMU5_zje.js";import"./throttle-BvN7rUxU.js";import"./d3-scale-DUTFXTFy.js";import"./index-SDNpyV8r.js";import"./index-1g9ahHpc.js";import"./renderedTicksSlice-B6ULVZ0v.js";import"./index-LP2TzsJ5.js";import"./CartesianAxis-TNvZ3AHE.js";import"./Layer-DAiXs0AA.js";import"./types-DPL8-78e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-1RwtF1h6.js";import"./chartDataContext-BWMyO-qW.js";import"./CategoricalChart-no-3Z0-_.js";import"./Symbols-CDH7p16m.js";import"./symbol-8zOBKyIH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tgIx7o39.js";import"./uniqBy-DUSKgABV.js";import"./iteratee-BinWTTLm.js";import"./AnimatedItems-axJun3VY.js";import"./useAnimationId-CJTvG1Qi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMEZChfE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DterXnUU.js";import"./tooltipContext-BGn83IkZ.js";import"./RegisterGraphicalItemId-08XYAnQ7.js";import"./ErrorBarContext-Mgqq5-U9.js";import"./GraphicalItemClipPath-CFv0pGXv.js";import"./SetGraphicalItem-woQRWKGe.js";import"./getZIndexFromUnknown-Bsj3cw8i.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CG8kUMtb.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
