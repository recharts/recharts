import{r as f,e}from"./iframe-uc6dFw_p.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-BSExt7in.js";import{R as A}from"./arrayEqualityCheck-CQn2kQOi.js";import{C}from"./ComposedChart-CRYzJVTL.js";import{X as K}from"./XAxis-bu2lwvBT.js";import{L as v}from"./Legend-X7c9neI_.js";import{B as a}from"./Bar-CwFXimI5.js";import{R as x}from"./RechartsHookInspector-IvFhBGHX.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kGpremEA.js";import"./CartesianAxis-B3Lcnjmt.js";import"./Layer-DswXiCbz.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./Label-D0b7Dnqv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CxICY6ph.js";import"./zIndexSlice-WGd4Bakr.js";import"./types-BngWNVP1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-nuZito-G.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./RechartsWrapper-DhOLU858.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./Symbols-ByXfoODU.js";import"./Curve-IfIaqkcg.js";import"./useElementOffset-BvIk-J79.js";import"./iteratee-Veu1fysD.js";import"./tooltipContext-DguwpOPg.js";import"./ReactUtils-Bs-3TSfa.js";import"./ActiveShapeUtils-j7lBkeSN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0I4wQZ7.js";import"./useAnimationId-BjF_cXy3.js";import"./Trapezoid-BBf2jkzZ.js";import"./Sector-DJmKtBTn.js";import"./RegisterGraphicalItemId-Dzwld0hr.js";import"./ErrorBarContext-DROw9Wv2.js";import"./GraphicalItemClipPath-DhRCGnFu.js";import"./SetGraphicalItem-DzzG5GId.js";import"./getZIndexFromUnknown-BYzCyAf5.js";import"./graphicalItemSelectors-Cr3y-GFZ.js";import"./index-C4cmB5lh.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
