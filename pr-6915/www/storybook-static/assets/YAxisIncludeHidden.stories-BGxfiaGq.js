import{r as f,e}from"./iframe-NQnSavsc.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-B4mT5_6h.js";import{R as A}from"./arrayEqualityCheck-ClUhvVMc.js";import{C}from"./ComposedChart-CtfPGNRU.js";import{X as K}from"./XAxis-BVWUh-i7.js";import{L as v}from"./Legend-BMjXqy5o.js";import{B as a}from"./Bar-Bmq4VPww.js";import{R as x}from"./RechartsHookInspector-CrS4ifUj.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clR4-9At.js";import"./CartesianAxis-BxH1zk3Y.js";import"./Layer-BUJpEzYu.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./Label-CdLQa_Zq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D7r7UDo0.js";import"./zIndexSlice-nS_oTVB0.js";import"./types-Ditu6fq2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BcaLrk1Y.js";import"./axisSelectors-GttesoX_.js";import"./RechartsWrapper-BFx6ycKR.js";import"./CartesianChart-DsO03C2-.js";import"./chartDataContext-BPtWcoks.js";import"./CategoricalChart--MZ7Ud20.js";import"./Symbols-C7hNVpPd.js";import"./Curve-D3iL2MuF.js";import"./useElementOffset-C8NPmaKx.js";import"./iteratee-R7qkJOYZ.js";import"./tooltipContext-BSe215jy.js";import"./ReactUtils-B56Ms0vK.js";import"./ActiveShapeUtils-CdNAARSB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dUbZu5CP.js";import"./useAnimationId-DY2MKiMD.js";import"./Trapezoid-BZ0zgDCf.js";import"./Sector-DKYprxhX.js";import"./RegisterGraphicalItemId-CF9d6kYM.js";import"./ErrorBarContext-CSixxnwN.js";import"./GraphicalItemClipPath-DBWQaJ3W.js";import"./SetGraphicalItem-BSyTvg-d.js";import"./getZIndexFromUnknown-Bc6e8_kW.js";import"./graphicalItemSelectors-Bq6_wx_b.js";import"./index-CtOaP7ae.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
