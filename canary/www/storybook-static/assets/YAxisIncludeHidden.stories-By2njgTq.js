import{u as f,e}from"./iframe-Yt5kG58B.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-fNPxfz24.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CmivkQHU.js";import{C}from"./ComposedChart-hlF-8j9Q.js";import{X as K}from"./XAxis-BMPl7mYX.js";import{L as v}from"./Legend-F4IN3yHj.js";import{B as s}from"./Bar-4ychMzyP.js";import{R as x}from"./RechartsHookInspector-Cviat0cY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CkTrjpZB.js";import"./Layer-C5jjOkvS.js";import"./resolveDefaultProps-unPLvkOT.js";import"./Text-Ch8634yl.js";import"./DOMUtils-BHiH0dNd.js";import"./Label-BnSyr1ay.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-V8l53dIn.js";import"./zIndexSlice-pBWW2gMH.js";import"./immer-CcDOB7WW.js";import"./types-DbVT1P7h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CAjiTAMh.js";import"./hooks-DdT8YGKV.js";import"./axisSelectors-Cu_RAN-5.js";import"./d3-scale-ClNNBzhr.js";import"./RechartsWrapper-CNwUSHj6.js";import"./index-CCn_KrYt.js";import"./CartesianChart-CbX7HdzJ.js";import"./chartDataContext-D89eDWXB.js";import"./CategoricalChart-LTsMGKb4.js";import"./Symbols-U--EO8M8.js";import"./symbol-CjsKKohT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrOONtSV.js";import"./uniqBy-D4Gfq8Pv.js";import"./iteratee-CA1CdI-j.js";import"./tooltipContext-CgYEq9N5.js";import"./ReactUtils-Jy4OurHq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7uU6IRNU.js";import"./useAnimationId-D8AADvXI.js";import"./ActiveShapeUtils-C6u69RRm.js";import"./RegisterGraphicalItemId-u9uNYDRF.js";import"./ErrorBarContext-CIW2Opuu.js";import"./GraphicalItemClipPath-BVHUKTdw.js";import"./SetGraphicalItem-BQyEnfew.js";import"./getZIndexFromUnknown-CWobBZdP.js";import"./graphicalItemSelectors-DyzWQpks.js";import"./index-BGUbPMKQ.js";import"./ChartSizeDimensions-DfUWMKem.js";import"./OffsetShower-DwOtQel9.js";import"./PlotAreaShower-C3hlHEsr.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
