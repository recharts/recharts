import{r as f,e}from"./iframe-BF30cewz.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-COwWoIRq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-54E-EMHV.js";import{C}from"./ComposedChart-vR6M8Csb.js";import{X as K}from"./XAxis-R3SRHTpu.js";import{L as v}from"./Legend-0ZDtjN6p.js";import{B as s}from"./Bar-BQ0DRCSk.js";import{R as x}from"./RechartsHookInspector-B0E9dfMt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CRTXwVx1.js";import"./Layer-1B0B10df.js";import"./resolveDefaultProps-CfzAmxrO.js";import"./Text-Bj9a0rsl.js";import"./DOMUtils-CfR-oYDo.js";import"./Label-CqAF8SIT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cm42983z.js";import"./zIndexSlice-Dzpaa8RG.js";import"./immer-1Y6b4ABg.js";import"./types-BtUrEkv_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DaQzOTaA.js";import"./hooks-DBaONgSL.js";import"./axisSelectors-BbIpa25b.js";import"./d3-scale-BQcoNVts.js";import"./RechartsWrapper-Ds6-czPk.js";import"./index-C4aFfAFk.js";import"./CartesianChart-Cib6BDKJ.js";import"./chartDataContext-C-ltUYxq.js";import"./CategoricalChart-Ax6WUToq.js";import"./Symbols-DMcSZqwV.js";import"./symbol-b3bNJW4O.js";import"./step-CE2o8WHd.js";import"./useElementOffset-CVcid2mJ.js";import"./uniqBy-nwrf9lUU.js";import"./iteratee-BPgmGahy.js";import"./tooltipContext-BBrtLnNN.js";import"./ReactUtils-COSqs2Fw.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DE4EzjJ7.js";import"./isPlainObject-CJnQjQWE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Tp-Mj0iL.js";import"./useAnimationId-CdSd8RaE.js";import"./Trapezoid-BEm6NDNW.js";import"./Sector-D-Bqj8eF.js";import"./Curve-C-HPs5Cn.js";import"./RegisterGraphicalItemId-DWRskJJq.js";import"./ErrorBarContext-ZqPrhrZR.js";import"./GraphicalItemClipPath-DbWDMhh-.js";import"./SetGraphicalItem-qm0_Djp4.js";import"./getZIndexFromUnknown-CMPUqOjA.js";import"./graphicalItemSelectors-B847Slfd.js";import"./index-Cmlct8zH.js";import"./ChartSizeDimensions-DqRU3Tup.js";import"./OffsetShower-Orj9RHn3.js";import"./PlotAreaShower-BaW8-cBL.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
