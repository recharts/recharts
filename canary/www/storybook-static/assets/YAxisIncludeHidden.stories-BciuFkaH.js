import{r as f,e}from"./iframe-5gSlIHH4.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-BedJogos.js";import{R as A}from"./arrayEqualityCheck-BEqt-CBJ.js";import{C}from"./ComposedChart-Bu_3gnIH.js";import{X as K}from"./XAxis-CJFZHxba.js";import{L as v}from"./Legend-B04YP53h.js";import{B as a}from"./Bar-Cbg4c7ne.js";import{R as x}from"./RechartsHookInspector-DIk6ks1k.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BqaV8AGt.js";import"./CartesianAxis-BR-I9vbL.js";import"./Layer-OyNvh1Ue.js";import"./Text-BQ538cjB.js";import"./DOMUtils-Cwe4TU_Z.js";import"./Label-A5hrmEss.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgtyelTd.js";import"./zIndexSlice-BvmJeHFk.js";import"./types-D2uPaQlB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DcJw7lCF.js";import"./axisSelectors-DaxAJyom.js";import"./RechartsWrapper-D6JQB65s.js";import"./CartesianChart-BZLhng-O.js";import"./chartDataContext-CS2RN2FU.js";import"./CategoricalChart-CaF4nfMG.js";import"./Symbols-BlEQEpn8.js";import"./Curve-D2ClwKYm.js";import"./useElementOffset-CqC1QlRV.js";import"./iteratee-Cpl_VdmK.js";import"./tooltipContext-DWBZc0FA.js";import"./ReactUtils-DmzojIhK.js";import"./ActiveShapeUtils-B3Ii4nXp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsjrTG3t.js";import"./useAnimationId-CiuthG3f.js";import"./Trapezoid-CZIjMiGb.js";import"./Sector-BnVCCXEU.js";import"./RegisterGraphicalItemId-C8051Zi-.js";import"./ErrorBarContext-BOsyAuvl.js";import"./GraphicalItemClipPath-DuWpJ7iO.js";import"./SetGraphicalItem-GsI-naXM.js";import"./getZIndexFromUnknown-DUxz7EUs.js";import"./graphicalItemSelectors-vmrcIgpC.js";import"./index-BT-ezfJz.js";import"./ChartSizeDimensions-sc7nlrKR.js";import"./OffsetShower-DmAztKvM.js";import"./PlotAreaShower-Druc4JY3.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
