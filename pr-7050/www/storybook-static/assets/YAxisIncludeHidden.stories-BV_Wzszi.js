import{r as f,e}from"./iframe-zwlZ9sO1.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-Dth2njTV.js";import{R as A}from"./arrayEqualityCheck-CJjag0zJ.js";import{C}from"./ComposedChart-B-ZDBPB-.js";import{X as K}from"./XAxis-CnAuA4rg.js";import{L as v}from"./Legend-C7lFPsh9.js";import{B as a}from"./Bar-BkBikOKz.js";import{R as x}from"./RechartsHookInspector-DHSpqDma.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis--bPf-qQg.js";import"./Layer-BoZ3FYfy.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./Label-IHkKI2op.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DApcsQWW.js";import"./zIndexSlice-oDtJWVOP.js";import"./immer-BiA4uk1x.js";import"./types-B9pmE4ka.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./Symbols-ChQBVl9-.js";import"./symbol-By180QeN.js";import"./step-DUUdO3U1.js";import"./useElementOffset--1_J6-2R.js";import"./uniqBy-1QvvVmO8.js";import"./iteratee-BbsKG0i1.js";import"./tooltipContext-CLsKdU7b.js";import"./ReactUtils-KsuQNZ47.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DJB4inM1.js";import"./isPlainObject-DWYFOBoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsLE6Qwo.js";import"./useAnimationId-BwEUZfoI.js";import"./Trapezoid-Dh6fdRWC.js";import"./Sector-1S-nbggX.js";import"./Curve-D-syDesq.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./ErrorBarContext-D80HzYFV.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./getZIndexFromUnknown-lmq-uC0L.js";import"./graphicalItemSelectors-bRBt4LBE.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
