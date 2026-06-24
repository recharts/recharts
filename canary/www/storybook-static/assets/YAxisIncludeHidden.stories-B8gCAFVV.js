import{r as f,R as e}from"./iframe-NH2HoEvn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DayohGi9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CCMkrqvp.js";import{C as k}from"./ComposedChart-BnMLy3JL.js";import{X as K}from"./XAxis-CWamoSoZ.js";import{L as v}from"./Legend-Kz0f1qHr.js";import{B as s}from"./Bar-C_3vssuF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bo5cNVvp.js";import"./CartesianAxis-BKNqtnIf.js";import"./Layer-CmQSLVxb.js";import"./resolveDefaultProps-BGihd8_H.js";import"./Text-Dxh69SU_.js";import"./DOMUtils-DIF_Gs9K.js";import"./isWellBehavedNumber-DL2i4yQU.js";import"./Label-DT7zDdgZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4vtT6ix2.js";import"./index-C8dhIkrl.js";import"./index-B6meFPDo.js";import"./types-CyGlxecW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1ge3ajN.js";import"./immer-SVzhbtzF.js";import"./RechartsWrapper-DYZBcomz.js";import"./index-DwDUEQ_a.js";import"./index-KEn5cK9h.js";import"./axisSelectors-BVEg60Nu.js";import"./d3-scale-BOfgX5mI.js";import"./CartesianChart-n5KlOJWr.js";import"./chartDataContext-DOG-KHg0.js";import"./CategoricalChart-r18o97_M.js";import"./Symbols-BMA4KExo.js";import"./symbol-CAZ7nIX0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dSnxC0p_.js";import"./uniqBy-Bxb6tPL4.js";import"./iteratee-B0XxpJgf.js";import"./tooltipContext-CLNFwDtj.js";import"./AnimatedItems-GETRY_YP.js";import"./useAnimationId-BkMnFoWD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OLM2G5r9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_uRJL3Z.js";import"./RegisterGraphicalItemId-QTMlMqrn.js";import"./ErrorBarContext-DlMVuBVO.js";import"./GraphicalItemClipPath-C94rECFA.js";import"./SetGraphicalItem-DpdjJmMm.js";import"./getZIndexFromUnknown-COdG0M0W.js";import"./graphicalItemSelectors-B7y1crlL.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
