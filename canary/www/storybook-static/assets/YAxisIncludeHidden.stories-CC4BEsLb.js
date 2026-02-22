import{r as f,e}from"./iframe-daRyhr9r.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-CfRyhpY9.js";import{R as A}from"./arrayEqualityCheck-2Pg-cl6R.js";import{C}from"./ComposedChart-7exnQAUu.js";import{X as K}from"./XAxis-CvxqYJF6.js";import{L as v}from"./Legend-B6AVa-gX.js";import{B as a}from"./Bar-GGONZARR.js";import{R as x}from"./RechartsHookInspector-Dokqg7We.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BAyDOgMb.js";import"./Layer-Bnvu8mRz.js";import"./resolveDefaultProps-BvBz7hsS.js";import"./Text-D-j5LY5X.js";import"./DOMUtils-CuoS797S.js";import"./Label-C2V68gYo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8DbAkQv.js";import"./zIndexSlice-B_dP-4_H.js";import"./immer-C5a-5af_.js";import"./types-B1BFfyfQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BTk_Zw15.js";import"./hooks-DA2pBF9B.js";import"./axisSelectors-Bbgcz-jZ.js";import"./d3-scale-CDmp_quo.js";import"./RechartsWrapper-C9EF5VFS.js";import"./index-CdQ0cAhw.js";import"./CartesianChart-DkSXqfIZ.js";import"./chartDataContext-BrPbwshQ.js";import"./CategoricalChart-IEhmtzxN.js";import"./Symbols-CmmXLG0z.js";import"./symbol-Bh5t8BoD.js";import"./step-Bh8CmZPH.js";import"./useElementOffset-D66ej-tJ.js";import"./uniqBy-BiF-HFyp.js";import"./iteratee-DVpKSMyj.js";import"./tooltipContext-D6W8k41Y.js";import"./ReactUtils-Dnts_VJo.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BwOb2O47.js";import"./isPlainObject-Lpl2eom0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0FBXqMT.js";import"./useAnimationId-DzCJLB3u.js";import"./Trapezoid-C-VqU7dw.js";import"./Sector-g7YAEghM.js";import"./Curve-CNVfap9K.js";import"./RegisterGraphicalItemId-idmB961p.js";import"./ErrorBarContext-CeBeQ7um.js";import"./GraphicalItemClipPath-CSX8rQ5J.js";import"./SetGraphicalItem-BO-TqYJN.js";import"./getZIndexFromUnknown-n5uiWyt4.js";import"./graphicalItemSelectors-XmO9ZXaW.js";import"./index-AR7D8lqg.js";import"./ChartSizeDimensions-B_gACk3Q.js";import"./OffsetShower-Cbu4mMas.js";import"./PlotAreaShower-CyrKPvGx.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
