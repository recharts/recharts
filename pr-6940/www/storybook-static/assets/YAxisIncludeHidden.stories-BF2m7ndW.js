import{r as f,e}from"./iframe-DKKmvtM4.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-opqB1HJ5.js";import{R as A}from"./arrayEqualityCheck-BH7M1_Mo.js";import{C}from"./ComposedChart-DEbE_DRg.js";import{X as K}from"./XAxis-D0l8_bF1.js";import{L as v}from"./Legend-D5kefzR7.js";import{B as a}from"./Bar-BOLbm5bF.js";import{R as x}from"./RechartsHookInspector-_f5C5MnG.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKSvQ-CI.js";import"./CartesianAxis-BfEn85oF.js";import"./Layer-CRV4337m.js";import"./Text-sKIHJABx.js";import"./DOMUtils-CGnu9ifx.js";import"./Label-Da19cvil.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-ub3Xu4w-.js";import"./zIndexSlice-AjUFaEiP.js";import"./types-Bj4-1oYY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CAZEb-K2.js";import"./axisSelectors-BwBIfn7P.js";import"./RechartsWrapper-DSOfgqQ4.js";import"./CartesianChart-DhY9l1Jf.js";import"./chartDataContext-C3SlyDgH.js";import"./CategoricalChart-BpOJCian.js";import"./Symbols-CMo2qdsV.js";import"./Curve-Cf01ES6k.js";import"./useElementOffset-RuoUI7ms.js";import"./iteratee-Bddy4rkb.js";import"./tooltipContext-OBwlOkwA.js";import"./ReactUtils-CYxP7B05.js";import"./ActiveShapeUtils-czniNIT7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B6ULbvfC.js";import"./useAnimationId-Hx06RWvS.js";import"./Trapezoid-RWF7Vajg.js";import"./Sector-Dn7O6oob.js";import"./RegisterGraphicalItemId-D_mkL-K8.js";import"./ErrorBarContext-BUSUJFaK.js";import"./GraphicalItemClipPath-BPF3OyQO.js";import"./SetGraphicalItem-DxgYEhry.js";import"./getZIndexFromUnknown-C-8A48K9.js";import"./graphicalItemSelectors-rhw8Er39.js";import"./index-COzuImjz.js";import"./ChartSizeDimensions-C-W9gvmn.js";import"./OffsetShower-BXtHvm8O.js";import"./PlotAreaShower-CYWF0naR.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
