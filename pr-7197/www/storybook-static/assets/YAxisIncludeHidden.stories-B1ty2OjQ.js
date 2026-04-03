import{r as f,e}from"./iframe-Bg9Z345n.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BhiIVd-U.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CR8W5Kti.js";import{C}from"./ComposedChart-XHqgTgy-.js";import{X as K}from"./XAxis-DhRZk_Mh.js";import{L as v}from"./Legend-CSWTPESq.js";import{B as s}from"./Bar-CBeMhw0U.js";import{R as x}from"./RechartsHookInspector-DZje97zi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-2wCCgYqS.js";import"./Layer-BdGV6vMM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./Label-CELZqSQs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPL5778T.js";import"./zIndexSlice-peT_55F_.js";import"./immer-BVutyhQF.js";import"./types-B4W4ehrV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-By7COYk0.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./RechartsWrapper-8iTtnHJd.js";import"./index-DmHLw308.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./Symbols-tflhkrqf.js";import"./symbol-Bo8u8Uca.js";import"./step-DoGAfiJ-.js";import"./useElementOffset-DW5Fjzna.js";import"./uniqBy-vl8O6EJ5.js";import"./iteratee-CDnMDBPk.js";import"./tooltipContext-BebsRlPR.js";import"./ReactUtils-BmxePv9D.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-te7DRz-E.js";import"./isPlainObject-Bo6U1upe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EnxeHGuf.js";import"./useAnimationId-DlZyApEc.js";import"./Trapezoid-DbTvkq0k.js";import"./Sector-Cn3PZ_qJ.js";import"./Curve-CW_ra8M9.js";import"./RegisterGraphicalItemId-CQ218WRb.js";import"./ErrorBarContext-Cj6LG5IF.js";import"./GraphicalItemClipPath-DwPF2ph8.js";import"./SetGraphicalItem-H_2GMEv6.js";import"./getZIndexFromUnknown-CX73gim4.js";import"./graphicalItemSelectors-Yc6FaWda.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./OffsetShower-C3m1IvZt.js";import"./PlotAreaShower-CfpcGPOz.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
