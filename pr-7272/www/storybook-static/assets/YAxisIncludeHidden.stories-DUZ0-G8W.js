import{r as f,e}from"./iframe-BB47BP_R.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BYM4hMQ-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DsmpO4hY.js";import{C}from"./ComposedChart-6bKTqoqC.js";import{X as K}from"./XAxis-DQxW9k0r.js";import{L as v}from"./Legend-CncfBo-T.js";import{B as s}from"./Bar-CyuZbTr6.js";import{R as x}from"./RechartsHookInspector-Bw_zVSe3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BRoz3wmQ.js";import"./Layer-CRK7-uYr.js";import"./resolveDefaultProps-ChHsTaSR.js";import"./Text-BaUe6hyp.js";import"./DOMUtils-nrc65p4C.js";import"./Label-C6JmnJH6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DNdZ_4fl.js";import"./zIndexSlice-BL1P8vjr.js";import"./immer-BPWc-cD_.js";import"./types-DuFBytmr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CRYHzUP0.js";import"./hooks-0PGFTC0L.js";import"./axisSelectors-DwtBuocC.js";import"./d3-scale-DgdfyRiI.js";import"./RechartsWrapper-Dv8Lspfl.js";import"./index-hrFcE4SI.js";import"./CartesianChart-iArLd4YM.js";import"./chartDataContext-CX2kZkbq.js";import"./CategoricalChart-nIJc5rAa.js";import"./Symbols-BE9_Ndbl.js";import"./symbol-CvKjPx-j.js";import"./step-CIqLegi0.js";import"./useElementOffset-D2HSTUn5.js";import"./uniqBy-De_iXMly.js";import"./iteratee-DT1-JJ0T.js";import"./tooltipContext-H6sUbkmj.js";import"./ReactUtils-EZ_AUGtU.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C06yHpcU.js";import"./isPlainObject-DJ4Ss-Vn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCPvPDZL.js";import"./useAnimationId-CZw8U2vZ.js";import"./Trapezoid-Bue5bot_.js";import"./Sector-pI1eovgo.js";import"./Curve-DocFTLoT.js";import"./RegisterGraphicalItemId-BStK0gR5.js";import"./ErrorBarContext-zf4eWKzk.js";import"./GraphicalItemClipPath-4XrHnf0Z.js";import"./SetGraphicalItem-BjF_TCCf.js";import"./getZIndexFromUnknown-CaQfz4wa.js";import"./graphicalItemSelectors-3yN5Tulb.js";import"./index-C_6qwcxC.js";import"./ChartSizeDimensions-BMFZIPSb.js";import"./OffsetShower-CPW2UGpW.js";import"./PlotAreaShower-CjbeU8IP.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
