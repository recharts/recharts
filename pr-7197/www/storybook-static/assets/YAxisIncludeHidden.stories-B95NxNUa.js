import{r as f,e}from"./iframe-CbsqwKCk.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DsWBihca.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-B4FTx25I.js";import{C}from"./ComposedChart-CyCs0zfk.js";import{X as K}from"./XAxis-BIdlq_pt.js";import{L as v}from"./Legend-CYN62kHT.js";import{B as s}from"./Bar-Dsie0JFn.js";import{R as x}from"./RechartsHookInspector-Damt6MYH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-wjZQBsHa.js";import"./Layer-wLThQp-f.js";import"./resolveDefaultProps-DHVE9Qfq.js";import"./Text-DA8mBm_w.js";import"./DOMUtils-BTAw3duz.js";import"./Label-r3u5Hs--.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CIamb34_.js";import"./zIndexSlice-CDw3ZEmc.js";import"./immer-D83u5OhZ.js";import"./types-QtIGWOWS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BdDgwbXy.js";import"./hooks-F0Z_c1HD.js";import"./axisSelectors-DXxkO63G.js";import"./d3-scale-PAY7D1_G.js";import"./RechartsWrapper-CaUG62oZ.js";import"./index-Bo04Zijq.js";import"./CartesianChart-CbTSIjqR.js";import"./chartDataContext-IGsi4pC_.js";import"./CategoricalChart-Xd7p2iPq.js";import"./Symbols-hUvwFh1j.js";import"./symbol-BCOnJOrD.js";import"./step-uZ9iGWhX.js";import"./useElementOffset-DO1SxrOK.js";import"./uniqBy-CP8a4Cfy.js";import"./iteratee-BD6dQnaZ.js";import"./tooltipContext-8SW7kC4Y.js";import"./ReactUtils-DODSDo-0.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bhkbjsma.js";import"./isPlainObject-DdM1ysjb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ctrb2AG7.js";import"./useAnimationId-ika4uZpq.js";import"./Trapezoid-uYQTNnF6.js";import"./Sector-GnbpuK9-.js";import"./Curve-d3v-cFMl.js";import"./RegisterGraphicalItemId-DHXh_EOv.js";import"./ErrorBarContext-DUhaTo8P.js";import"./GraphicalItemClipPath-Cc_74RAJ.js";import"./SetGraphicalItem-wEHd-RTz.js";import"./getZIndexFromUnknown-C3gwIqZx.js";import"./graphicalItemSelectors-v4TiX4--.js";import"./index-BHJKnvwH.js";import"./ChartSizeDimensions-D9ExJIau.js";import"./OffsetShower-Bv4vecoR.js";import"./PlotAreaShower-XHfKy6Ay.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
