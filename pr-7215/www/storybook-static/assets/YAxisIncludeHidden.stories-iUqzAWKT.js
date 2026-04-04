import{r as f,e}from"./iframe-BA-zV7_F.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-32LA6dK9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BqA822v0.js";import{C}from"./ComposedChart-DGaIMIIA.js";import{X as K}from"./XAxis-DC7WjUX8.js";import{L as v}from"./Legend-CsUHl_0_.js";import{B as s}from"./Bar-Cch4cH_2.js";import{R as x}from"./RechartsHookInspector-D0XJS29G.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C3WTNiVK.js";import"./Layer-CfzD199M.js";import"./resolveDefaultProps-DAB-gcAU.js";import"./Text-reYRnfFB.js";import"./DOMUtils-DH-1IhDl.js";import"./Label-CHedA7kt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBpTuRSZ.js";import"./zIndexSlice-CahP5Bvu.js";import"./immer-CQr9v0v0.js";import"./types-mhJjiQ_4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CICucQq1.js";import"./hooks-BhKgrcGm.js";import"./axisSelectors-C-c05xug.js";import"./d3-scale-DG9Ho5_0.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-mihAAWay.js";import"./index-B7YX6_DJ.js";import"./CartesianChart-BDebLbDY.js";import"./chartDataContext-CAEi_CMV.js";import"./CategoricalChart-C254V1pE.js";import"./Symbols-D9ObUrus.js";import"./symbol-BIEGaDb4.js";import"./step-j_6aZTKG.js";import"./useElementOffset-ChyJXsRo.js";import"./uniqBy-CagLAZRG.js";import"./iteratee-DxFZgfS6.js";import"./tooltipContext-Cx-Qjrob.js";import"./AnimatedItems-Dh5-Zm6U.js";import"./useAnimationId-DojuRQal.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fUtPyr_w.js";import"./isPlainObject-C-Ml-lWL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9DVT5n.js";import"./Trapezoid-Bk1aSQBG.js";import"./Sector-DJLTI9DR.js";import"./Curve-C9qfySG5.js";import"./RegisterGraphicalItemId-pJFOOmQA.js";import"./ErrorBarContext-CGvFvXH0.js";import"./GraphicalItemClipPath-Bm1jNNtI.js";import"./SetGraphicalItem-ebt92THW.js";import"./getZIndexFromUnknown-ixd4-wqn.js";import"./graphicalItemSelectors-DKq5kTda.js";import"./index-C9L2m6gr.js";import"./ChartSizeDimensions-C4osSvkZ.js";import"./OffsetShower-DaLST6nw.js";import"./PlotAreaShower-D2fXHUqq.js";const Oe={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Se=["WithIncludeHidden"];export{t as WithIncludeHidden,Se as __namedExportsOrder,Oe as default};
