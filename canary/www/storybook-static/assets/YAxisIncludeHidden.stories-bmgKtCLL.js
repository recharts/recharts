import{r as f,e}from"./iframe-DzhPvN_j.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CJCzR98R.js";import{R as A}from"./arrayEqualityCheck-BbmOyD_G.js";import{C}from"./ComposedChart-HheWKBIJ.js";import{X as K}from"./XAxis-DZpORi3T.js";import{L as v}from"./Legend-uAOOqC4N.js";import{B as a}from"./Bar-CitRlM84.js";import{R as x}from"./RechartsHookInspector-DDr9RNlY.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CcEKfal4.js";import"./Layer-Ckqyyj_I.js";import"./resolveDefaultProps-D5C472LP.js";import"./Text-BqZmDUPE.js";import"./DOMUtils-vP3gppvy.js";import"./Label-CHDEQY5T.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-9g5l0O9I.js";import"./zIndexSlice-5RAhS0gW.js";import"./immer-DMYiXdM8.js";import"./types-9iuX30XL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DXS4yQsn.js";import"./hooks-Cd6CKD6W.js";import"./axisSelectors-OzG46XbO.js";import"./d3-scale-Cb1pH4Jp.js";import"./RechartsWrapper-CRkniHVj.js";import"./index-Cw6ekdu2.js";import"./CartesianChart-poiqq0Wp.js";import"./chartDataContext-CN9Cvh4X.js";import"./CategoricalChart-CBxLoiN8.js";import"./Symbols-D_1r08sf.js";import"./symbol-pZVEj6PC.js";import"./step-DPzB36jn.js";import"./useElementOffset-FCvPp8XD.js";import"./uniqBy-Cr1l51kb.js";import"./iteratee-BZcK010Q.js";import"./tooltipContext-DtvMYYQ8.js";import"./ReactUtils-B8wQ0lPM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BGxztl8t.js";import"./isPlainObject-D9nlrq_x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cFF1lzvY.js";import"./useAnimationId-Bm5L9VBy.js";import"./Trapezoid-CWsYalEn.js";import"./Sector-CP3wITBk.js";import"./Curve-Bg7OAFiB.js";import"./RegisterGraphicalItemId-Cy7sjBKU.js";import"./ErrorBarContext-BWKSo9NZ.js";import"./GraphicalItemClipPath-Ca8NlFcX.js";import"./SetGraphicalItem-mQIOZYtb.js";import"./getZIndexFromUnknown-DNq7p_js.js";import"./graphicalItemSelectors-Bw4v3F4R.js";import"./index-BwszIH2h.js";import"./ChartSizeDimensions-CZzZunh8.js";import"./OffsetShower-CS-dGikj.js";import"./PlotAreaShower-Ch9v7dMV.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
