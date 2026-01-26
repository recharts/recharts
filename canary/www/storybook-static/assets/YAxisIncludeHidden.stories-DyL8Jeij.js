import{r as f,e}from"./iframe-PyjOQzGK.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-B6zPQ9mM.js";import{R as A}from"./arrayEqualityCheck-_dHyT-RZ.js";import{C}from"./ComposedChart-BVUASlqQ.js";import{X as K}from"./XAxis-P49Iul1Y.js";import{L as v}from"./Legend-DmAWj6Mm.js";import{B as a}from"./Bar-xgJOySSm.js";import{R as x}from"./RechartsHookInspector-D26E9kzM.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./CartesianAxis-DYXf8O7N.js";import"./Layer-CHnOmiRY.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./Label-CvwrqBXQ.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DUzVAEAH.js";import"./zIndexSlice-B8KtXzX9.js";import"./types-UMLEboQ_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./RechartsWrapper-C_qiBOfF.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./Symbols-Jat4kELE.js";import"./Curve-BookXfP4.js";import"./useElementOffset-CYUbJaFG.js";import"./iteratee-ClTcsDgX.js";import"./tooltipContext-D-hTrTbJ.js";import"./ReactUtils-ChAGskY_.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./useAnimationId-DVpAz_Js.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./getZIndexFromUnknown-C55m1d9I.js";import"./graphicalItemSelectors-BvzVMp8r.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
