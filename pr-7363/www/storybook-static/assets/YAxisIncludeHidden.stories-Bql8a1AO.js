import{u as f,e}from"./iframe-CA2bza4n.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DFFbe6p-.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-DAdSVd1l.js";import{C}from"./ComposedChart-BKM2Jk4b.js";import{X as K}from"./XAxis-CURUMdQ0.js";import{L as v}from"./Legend-CdIG9cbK.js";import{B as s}from"./Bar-OkGzbPS1.js";import{R as x}from"./RechartsHookInspector-QZX819t0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-4aGY63Ak.js";import"./Layer-2pQ-0vOW.js";import"./resolveDefaultProps-BnLaySgP.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./Label-BmhtQvJ8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_xwh97le.js";import"./zIndexSlice-CSAGQhtB.js";import"./immer-DasQIOIX.js";import"./types-CZ_BmrzD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./RechartsWrapper-B5q3WxuV.js";import"./index-CsA15_6S.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./Symbols-DX9XhuTU.js";import"./symbol-BQO-r6kd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DkAsfz-Q.js";import"./uniqBy-BH7dCUiF.js";import"./iteratee-DL8B346b.js";import"./tooltipContext-B-sWdrzQ.js";import"./ReactUtils-CEO6nkw8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDekyl0v.js";import"./useAnimationId-CvBgWeeZ.js";import"./ActiveShapeUtils-k84bNm8s.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./ErrorBarContext-CKpFXypA.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./getZIndexFromUnknown-k1Xucgs_.js";import"./graphicalItemSelectors-Cx0iqyOb.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./OffsetShower-CTWF0vR4.js";import"./PlotAreaShower-CqWXxpLn.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
