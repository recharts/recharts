import{P as f,c as e}from"./iframe-DWpXT6OO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-C6ZngbUi.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-BI8aBdB2.js";import{C as k}from"./ComposedChart-CMOLlSCj.js";import{X as K}from"./XAxis-BjHcYZV7.js";import{L as v}from"./Legend-YLtKyBjO.js";import{B as s}from"./Bar-CUFC5Ido.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CAMMj0jB.js";import"./CartesianAxis-3iObmYRO.js";import"./Layer-DdIFnola.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./Label-BLTDXbDF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cqbl6fly.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./types-B1PNqcSi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./immer-CtD26uCH.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./axisSelectors-D3pmM5ea.js";import"./d3-scale-CNTc-b9c.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./Symbols-JWI6Qnv2.js";import"./symbol-DxUpZVsx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-90O8KY7B.js";import"./uniqBy-BYp6XD8y.js";import"./iteratee-S--T3Ost.js";import"./tooltipContext-L8b5V4mz.js";import"./ReactUtils-CGwSHaxd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B23U2X2N.js";import"./useAnimationId-CbTt72_H.js";import"./ActiveShapeUtils-6dq8aYlX.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./ErrorBarContext-BPuM-bX0.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./getZIndexFromUnknown-DvPLjBYo.js";import"./graphicalItemSelectors-BqceuPFh.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
