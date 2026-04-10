import{r as f,e}from"./iframe-JWSOvVZL.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DRMcQ1t7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DJxJsIgg.js";import{C}from"./ComposedChart-C3wId2he.js";import{X as K}from"./XAxis-CiEGa-2H.js";import{L as v}from"./Legend-DW6HVUWo.js";import{B as s}from"./Bar-C6FWHMDE.js";import{R as x}from"./RechartsHookInspector-DbINuC6c.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BBAUsbPY.js";import"./Layer-CVGwLCGQ.js";import"./resolveDefaultProps-Db3kyesD.js";import"./Text-C1wuLOW9.js";import"./DOMUtils-BGNYNETS.js";import"./Label-Cxg_vq25.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKFbEZ_O.js";import"./zIndexSlice-xDRQRS04.js";import"./immer-Cx8sbOuB.js";import"./types-B3dpB15X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D4Sds7TF.js";import"./hooks-D_fkqjif.js";import"./axisSelectors-BfW2jaQP.js";import"./d3-scale-Cvg0WP4x.js";import"./RechartsWrapper-_ZAgcFWH.js";import"./index-qboEQSUS.js";import"./CartesianChart-6CEzPVWQ.js";import"./chartDataContext-CGNvCd4v.js";import"./CategoricalChart-XXxbMYfW.js";import"./Symbols-CJQeMuDE.js";import"./symbol-CzcstGin.js";import"./step-NHTakNU6.js";import"./useElementOffset-CvtiAL57.js";import"./uniqBy-BLTAZ1cN.js";import"./iteratee-DMhTgxAn.js";import"./tooltipContext-CKXxmadF.js";import"./ReactUtils-qs-97Ac8.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DUqlRNnh.js";import"./isPlainObject-DAbDjRrv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dy9rRH3J.js";import"./useAnimationId-BDQqVS92.js";import"./Trapezoid-Np68xL8c.js";import"./Sector-DgiCwcle.js";import"./Curve-BSIyWE0E.js";import"./RegisterGraphicalItemId-7hQHg__D.js";import"./ErrorBarContext-Cka3vvlo.js";import"./GraphicalItemClipPath-BzNC4mI6.js";import"./SetGraphicalItem-Do9Jrivq.js";import"./getZIndexFromUnknown-BBnTpoRN.js";import"./graphicalItemSelectors-caUpih74.js";import"./index-B-NDJh2x.js";import"./ChartSizeDimensions-B0YZDNOc.js";import"./OffsetShower-Pl0lZwIc.js";import"./PlotAreaShower-CT6U6KfM.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
