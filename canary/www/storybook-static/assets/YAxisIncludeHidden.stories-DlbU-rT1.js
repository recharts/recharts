import{r as f,e}from"./iframe-R35hz9hm.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BsChZZHK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-l_dnVtmw.js";import{C}from"./ComposedChart-4PYTru1q.js";import{X as K}from"./XAxis-iZqvrzZu.js";import{L as v}from"./Legend-CDDtjQBw.js";import{B as s}from"./Bar-Bo2sX_Vx.js";import{R as x}from"./RechartsHookInspector-DP3Qs2H_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BfU0E9Vd.js";import"./Layer-NhMRn63k.js";import"./resolveDefaultProps-DfULgVhS.js";import"./Text-CIuibZ8V.js";import"./DOMUtils-CUUuW9k8.js";import"./Label-CVLCzJ8S.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeTprR_g.js";import"./zIndexSlice-DymzsNPY.js";import"./immer-CFK8uJ_y.js";import"./types-CncuKFdL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DFK-mhd6.js";import"./hooks-DwD3G30p.js";import"./axisSelectors-BZF7ob4Z.js";import"./d3-scale-DK92Q0IA.js";import"./RechartsWrapper-BzZW_8cp.js";import"./index-BFs7fXnY.js";import"./CartesianChart-dKVKHPad.js";import"./chartDataContext-B0058VjU.js";import"./CategoricalChart-BeKpYgsM.js";import"./Symbols-uWpNLd5r.js";import"./symbol-CizJV2Ht.js";import"./step-BTcv05YG.js";import"./useElementOffset-BvkeSyWD.js";import"./uniqBy-B7WsKYqq.js";import"./iteratee-BjdV9oEw.js";import"./tooltipContext-D1Y9qK8x.js";import"./ReactUtils-CnWgF_pv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BCSEa4J9.js";import"./isPlainObject-HxgO3KZH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRq5yFCv.js";import"./useAnimationId-bDa-RfQI.js";import"./Trapezoid-DsSNyfmU.js";import"./Sector-DcJh_DF9.js";import"./Curve-C1o9Us3j.js";import"./RegisterGraphicalItemId-CFhaP5Xg.js";import"./ErrorBarContext-ySjR7PXX.js";import"./GraphicalItemClipPath-C9lbZ9U9.js";import"./SetGraphicalItem-CXTqk9fv.js";import"./getZIndexFromUnknown-Bqn2hlwj.js";import"./graphicalItemSelectors-B4uC_GkR.js";import"./index-Dr19aGzn.js";import"./ChartSizeDimensions-CNipumKi.js";import"./OffsetShower-BtN_LmjI.js";import"./PlotAreaShower-DeWLuHk-.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
