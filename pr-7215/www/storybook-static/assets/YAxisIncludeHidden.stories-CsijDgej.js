import{u as f,e}from"./iframe-CagDbm-R.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Qo8_bXaH.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-Bn08yLiN.js";import{C}from"./ComposedChart-CFPuckpi.js";import{X as K}from"./XAxis-CyILEj33.js";import{L as v}from"./Legend-CBThwByF.js";import{B as s}from"./Bar-B4bHhIXH.js";import{R as x}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-6zuZSvBM.js";import"./Layer-D2JglvMB.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./Label-COowhm97.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqsAA_KH.js";import"./zIndexSlice-Tvm87iuX.js";import"./immer-DWuco0BF.js";import"./types-D2ON-SRi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./Symbols-BeiYXLsa.js";import"./symbol-BcJh2PD3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bs1684WT.js";import"./uniqBy-CNxClo-U.js";import"./iteratee-DsFpFkHV.js";import"./tooltipContext-CGOz3fKt.js";import"./AnimatedItems-HQORsnaH.js";import"./useAnimationId-BEBp-SWr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B56fHVHN.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getZIndexFromUnknown-DoTS1eJA.js";import"./graphicalItemSelectors-69ZupsNd.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const Ye={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,Ye as default};
