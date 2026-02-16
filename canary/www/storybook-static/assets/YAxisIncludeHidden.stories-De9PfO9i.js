import{r as f,e}from"./iframe-DvRa5dgx.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-CxgNkaty.js";import{R as A}from"./arrayEqualityCheck-Bp8MITA_.js";import{C}from"./ComposedChart-BwcJtZel.js";import{X as K}from"./XAxis-B9F7R6N6.js";import{L as v}from"./Legend-DkIfPeOw.js";import{B as a}from"./Bar-ByrRzTR2.js";import{R as x}from"./RechartsHookInspector-BA8H9BQA.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SoldR4SX.js";import"./CartesianAxis-EG33R3Ra.js";import"./Layer-D1P67DdH.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./Label-Btvu6YdH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYz5TQmP.js";import"./zIndexSlice-DOVBAap6.js";import"./types-B9z2jnxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./hooks-BvcgOwyj.js";import"./axisSelectors-s-qGbPsD.js";import"./RechartsWrapper-BMf934kH.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./Symbols-DZMMgp9J.js";import"./Curve-DLYOuSdb.js";import"./useElementOffset-DaJBl-QG.js";import"./iteratee-BmaGSJR8.js";import"./tooltipContext-XxmaSwiQ.js";import"./ReactUtils-CmHVY68G.js";import"./ActiveShapeUtils-CAuhGApT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNOkSbEV.js";import"./useAnimationId-BFi3XFtV.js";import"./Trapezoid-BUi5_O3W.js";import"./Sector-BF6BfHlW.js";import"./RegisterGraphicalItemId-CIANtz7R.js";import"./ErrorBarContext-RHRezGW4.js";import"./GraphicalItemClipPath-mIkxvXlB.js";import"./SetGraphicalItem-C9-rzWMm.js";import"./getZIndexFromUnknown-wuejp92i.js";import"./graphicalItemSelectors-BMXMKkAx.js";import"./index-B2ipCF0h.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
