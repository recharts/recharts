import{r as f,e}from"./iframe-BtT0SffI.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CB6KhlLv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CUZpg3gX.js";import{C}from"./ComposedChart-Bz4spIYG.js";import{X as K}from"./XAxis-DXJhdPvR.js";import{L as v}from"./Legend-BON36ZKC.js";import{B as s}from"./Bar-DjnLlc8R.js";import{R as x}from"./RechartsHookInspector-CB7j-2_m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-By19jgIb.js";import"./Layer-C7tDoNBc.js";import"./resolveDefaultProps-D8J53oj2.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./Label-DMCJfrwq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./zIndexSlice-EIyEPPia.js";import"./immer-BbVrPebv.js";import"./types-mmIvaWnd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./d3-scale-Crn8UFeD.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./Symbols-Bh8GvTwl.js";import"./symbol-BNo9YZcN.js";import"./step-B__dH_Lt.js";import"./useElementOffset-4EhrUaEt.js";import"./uniqBy-DpQ-3Wwt.js";import"./iteratee-BTq1FiMa.js";import"./tooltipContext-CHPlZIfa.js";import"./ReactUtils-BK_CWQIO.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-qAI1kzWp.js";import"./isPlainObject-DlgbpHVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DihoywZ_.js";import"./useAnimationId-Dq1v2kj_.js";import"./Trapezoid-CtXqEzYB.js";import"./Sector-BupA_fFM.js";import"./Curve-BjgRzFMd.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./ErrorBarContext-ClxAS9vu.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./getZIndexFromUnknown-CTC1A1j4.js";import"./graphicalItemSelectors-ZGOGf_TD.js";import"./index-Da5q_Tsr.js";import"./ChartSizeDimensions-77XN8iRa.js";import"./OffsetShower-DzUOYmPE.js";import"./PlotAreaShower-CT5v2Ou7.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
