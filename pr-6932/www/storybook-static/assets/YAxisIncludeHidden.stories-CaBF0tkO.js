import{r as f,e}from"./iframe-CWA75x6f.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis--OX2yYy6.js";import{R as A}from"./arrayEqualityCheck-BbPHrIiT.js";import{C}from"./ComposedChart-CikPPUoS.js";import{X as K}from"./XAxis-DIb7kM4Q.js";import{L as v}from"./Legend-5u77eCaZ.js";import{B as a}from"./Bar-CKWwcfPl.js";import{R as x}from"./RechartsHookInspector-SnjudCfW.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./CartesianAxis-CEnZCSRe.js";import"./Layer-Dyb8NBHJ.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./Label-QjXIZu_1.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-C1tQmmyV.js";import"./zIndexSlice-BxnMOy2T.js";import"./types-ieTTG77J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./Symbols-BfpcWYyT.js";import"./Curve-DzqGeZIr.js";import"./useElementOffset-Xph5u3Ao.js";import"./iteratee-YaRpC3LM.js";import"./tooltipContext-CcLmKiM8.js";import"./ReactUtils-BsQxKoDK.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./useAnimationId-CiXad0CX.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Sector-CjAZzh8K.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./ErrorBarContext-Bb8vM_ir.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./getZIndexFromUnknown-fcJuNc3Y.js";import"./graphicalItemSelectors-DNZwly0D.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
