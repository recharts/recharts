import{r as f,e}from"./iframe-Br4eYoVn.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-WZOcc484.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BTssjmx8.js";import{C}from"./ComposedChart-DO9Baogr.js";import{X as K}from"./XAxis-C8A1sscS.js";import{L as v}from"./Legend-Covp1wtm.js";import{B as s}from"./Bar-DJM807fU.js";import{R as x}from"./RechartsHookInspector-CJ4a_N61.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DnfdLPHJ.js";import"./Layer-BXiy0Hpp.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./Label-CUHpuvtr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkFJTbU_.js";import"./zIndexSlice-C3EiH9DM.js";import"./immer-DPmqhqsD.js";import"./types-Bdr3PbTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./hooks-qMCGdphr.js";import"./axisSelectors-CHWOzT-A.js";import"./d3-scale-CCjKFVY6.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";import"./step-DYF_aI-7.js";import"./useElementOffset-BqlbwxZo.js";import"./uniqBy-ByNeAQ4B.js";import"./iteratee-B-3U5ZDw.js";import"./tooltipContext-cjDug_hT.js";import"./ReactUtils-Dn-n-3Yl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C1KBE52j.js";import"./isPlainObject-Dnct6C6Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnOsz_oj.js";import"./useAnimationId-7Mhr-lzJ.js";import"./Trapezoid-CWbkVsvx.js";import"./Sector-DL1xggZ9.js";import"./Curve-C9oEn5cY.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./ErrorBarContext-B31x6VGT.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./getZIndexFromUnknown-D8Wk6pHV.js";import"./graphicalItemSelectors-BFuwCmEQ.js";import"./index-B-JygPoA.js";import"./ChartSizeDimensions-DeYSdXrS.js";import"./OffsetShower-B3belhb8.js";import"./PlotAreaShower-DSu4MaQt.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
