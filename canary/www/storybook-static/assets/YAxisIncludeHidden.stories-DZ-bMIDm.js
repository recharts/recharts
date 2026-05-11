import{r as f,e}from"./iframe-DrwMi_jY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BCaqdjY5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-B-j0Xn6j.js";import{C}from"./ComposedChart-pyYzeAOr.js";import{X as K}from"./XAxis-31NaFi-n.js";import{L as v}from"./Legend-D4Qp493-.js";import{B as s}from"./Bar-1lB4ApZa.js";import{R as x}from"./RechartsHookInspector-Dgz_6twg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DnPHxzem.js";import"./Layer-DYkX7ETa.js";import"./resolveDefaultProps-s4nUKxVc.js";import"./Text-BDAX0lGk.js";import"./DOMUtils-JSRhYAW0.js";import"./Label-Y-xTk_cW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BvKo2Q94.js";import"./zIndexSlice-Cq0CmY1s.js";import"./immer-CGi3HKm3.js";import"./types-BfZOKs5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-6MUNcuFU.js";import"./hooks-DuA_RFk6.js";import"./axisSelectors-Df-PAYL2.js";import"./d3-scale-CR0wzDjj.js";import"./RechartsWrapper-BPsUoTC1.js";import"./index-BfRPVrJS.js";import"./CartesianChart-C-l714_S.js";import"./chartDataContext-Dpw29ePn.js";import"./CategoricalChart-Cnq8zR7d.js";import"./Symbols-B6BVciUF.js";import"./symbol-B1XBVJt7.js";import"./step-8t-ymKLI.js";import"./useElementOffset-DJYK6Hsq.js";import"./uniqBy-b0QTBHFG.js";import"./iteratee-Dhe2fzDM.js";import"./tooltipContext-CU8PSybI.js";import"./ReactUtils-QKY7d0Xg.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BuFEUH-Q.js";import"./isPlainObject-DaSvI5No.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-s1druNuz.js";import"./useAnimationId-BDrjbpdr.js";import"./Trapezoid-AXqmqz4r.js";import"./Sector-DniAdCyK.js";import"./Curve-B_0v1Aat.js";import"./RegisterGraphicalItemId-C8YIxCe8.js";import"./ErrorBarContext-DoWBXbsV.js";import"./GraphicalItemClipPath-CHSUdKNG.js";import"./SetGraphicalItem-Bw_3CFfP.js";import"./getZIndexFromUnknown-l8sjgBMd.js";import"./graphicalItemSelectors-CJ3cCUfC.js";import"./index-CmbvRTYj.js";import"./ChartSizeDimensions-D4m-G81R.js";import"./OffsetShower-r4JmIKW8.js";import"./PlotAreaShower-CAZL1ycm.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
