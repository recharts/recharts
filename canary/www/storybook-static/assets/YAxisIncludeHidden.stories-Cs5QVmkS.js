import{r as f,e}from"./iframe-B49GSwh0.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis--1-yNCnR.js";import{R as A}from"./arrayEqualityCheck-DINBFxv3.js";import{C}from"./ComposedChart-DRfqwsU9.js";import{X as K}from"./XAxis-D-J-5rSI.js";import{L as v}from"./Legend-Dvy2hxm-.js";import{B as a}from"./Bar-yhKPdfTR.js";import{R as x}from"./RechartsHookInspector-OdbWm_9I.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C-joITAz.js";import"./CartesianAxis-hdd-vl6G.js";import"./Layer-D1N02uqa.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./Label-CpKUDdzk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDRmqb48.js";import"./zIndexSlice-BRDipK6V.js";import"./types-OGa7TdGT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./RechartsWrapper-csJjzcSq.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./Symbols-BhCWiDph.js";import"./Curve-D2h7ncG8.js";import"./useElementOffset-DzO4T-Oi.js";import"./iteratee-Di8bf76v.js";import"./tooltipContext-BGuZis9J.js";import"./ReactUtils-yuOGi8sn.js";import"./ActiveShapeUtils-JgGGelTB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdQI0GjN.js";import"./useAnimationId-CWbWu1ju.js";import"./Trapezoid-BEs5OYZ_.js";import"./Sector-CcMeAO1d.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./ErrorBarContext-Kb4FINZU.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./getZIndexFromUnknown-nK1_zmle.js";import"./graphicalItemSelectors-B20R-uhD.js";import"./index-DmOyJeTl.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./OffsetShower-Cs62sl11.js";import"./PlotAreaShower-DCgwyzvC.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
