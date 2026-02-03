import{r as f,e}from"./iframe-b3l0oylc.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-DBt_3tXp.js";import{R as A}from"./arrayEqualityCheck-CjMmMQbn.js";import{C}from"./ComposedChart-Ci_ymdae.js";import{X as K}from"./XAxis-DQI4GC2q.js";import{L as v}from"./Legend-lYl_YH7_.js";import{B as a}from"./Bar-BVqJJUMY.js";import{R as x}from"./RechartsHookInspector-XGSushi8.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DcvR48Du.js";import"./CartesianAxis-BaEBZn5E.js";import"./Layer-2yxRimi5.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./Label-DllavO7s.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CtStE837.js";import"./zIndexSlice-6dxWRD0w.js";import"./types-DcS7TQb1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./Symbols-CncGFVbc.js";import"./Curve-1kQ3M0AJ.js";import"./useElementOffset-DmRsiLis.js";import"./iteratee-iYPIXGSq.js";import"./tooltipContext-Bg8AINqD.js";import"./ReactUtils-BwdRCLdj.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./useAnimationId-DdymZr7z.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./ErrorBarContext-4m-euoOZ.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./getZIndexFromUnknown-CccjTYTB.js";import"./graphicalItemSelectors-DomU9J31.js";import"./index-BKFod4yn.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
