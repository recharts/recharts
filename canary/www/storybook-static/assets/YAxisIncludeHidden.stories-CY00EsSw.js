import{r as f,e}from"./iframe-C_JnpPxC.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-DzTe-R4y.js";import{R as A}from"./arrayEqualityCheck-sT-8H7T8.js";import{C}from"./ComposedChart-BOL0KSYh.js";import{X as K}from"./XAxis-BpjCkomw.js";import{L as v}from"./Legend-C3gdFYUm.js";import{B as a}from"./Bar-QHndTe_0.js";import{R as x}from"./RechartsHookInspector-C-nhVX4u.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMs63srN.js";import"./CartesianAxis-VwfEIEjI.js";import"./Layer-WpsYuzZU.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./Label-CxS5BAR7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-ShVZV-.js";import"./zIndexSlice-DoGitowx.js";import"./types-BnNymUFW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./RechartsWrapper-Be1xWQVx.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./Symbols-fhVjgxn_.js";import"./Curve-qS1_4eph.js";import"./useElementOffset-mphMDU7E.js";import"./iteratee-DOHkUNXJ.js";import"./tooltipContext-BX1tpN4n.js";import"./ReactUtils-D29wERIN.js";import"./ActiveShapeUtils-Ft9Dseux.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnZDt0bN.js";import"./useAnimationId-BOqolhoS.js";import"./Trapezoid-D9fBkVlH.js";import"./Sector-H2-tBEz5.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./ErrorBarContext-BfsPTak7.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./getZIndexFromUnknown-BJoZaYnJ.js";import"./graphicalItemSelectors-jcBTwPg8.js";import"./index-BwFDqC8u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
