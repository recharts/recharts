import{r as f,e}from"./iframe-D8RsH_ZD.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-C3MuBlcJ.js";import{R as A}from"./arrayEqualityCheck-DfUQQqNG.js";import{C}from"./ComposedChart-D5T5b3BK.js";import{X as K}from"./XAxis-9qpGEcGJ.js";import{L as v}from"./Legend-fLu_mWqg.js";import{B as a}from"./Bar--mMrRiZM.js";import{R as x}from"./RechartsHookInspector-DuFREeNP.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./CartesianAxis-ewa7ZF2u.js";import"./Layer-BDdUxbHF.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./Label-DsxuCRwy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DiTXvVi3.js";import"./zIndexSlice-CPBYLdgp.js";import"./types-Dyd5Crad.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./RechartsWrapper-CikDBT3M.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./Symbols-CBAU6oWP.js";import"./Curve-CIshv-2z.js";import"./useElementOffset-Cd_ueVxk.js";import"./iteratee-CpPZwPCh.js";import"./tooltipContext-DuqSWYAC.js";import"./ReactUtils-6PKXXThp.js";import"./ActiveShapeUtils-DLbkhbSb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpAQA-Oa.js";import"./useAnimationId-DRWFjGg3.js";import"./Trapezoid-bxIuEYMQ.js";import"./Sector-DQgAed3H.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./ErrorBarContext-CAtMmrl9.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./getZIndexFromUnknown-CD6jXCW3.js";import"./graphicalItemSelectors-Bhv9Ot21.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
