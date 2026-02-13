import{r as f,e}from"./iframe-BrTwOhsr.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-DRNSDCDv.js";import{R as A}from"./arrayEqualityCheck-CfVGBoS6.js";import{C}from"./ComposedChart-Br1-FoJi.js";import{X as K}from"./XAxis-DQVoLVBJ.js";import{L as v}from"./Legend-T9mJv6Dw.js";import{B as a}from"./Bar-Baqb0dNt.js";import{R as x}from"./RechartsHookInspector-wr1qbxN7.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./CartesianAxis-BnpVD6GC.js";import"./Layer-B-9J2nmA.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./Label-Bx9GqcNI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-vpi4acAX.js";import"./zIndexSlice-q9T-BB65.js";import"./types-CgBItb-S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CwxxJRu9.js";import"./axisSelectors-DyCazfsW.js";import"./RechartsWrapper-D38DG274.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./Symbols-L5mWEGXG.js";import"./Curve-CFG-wGoi.js";import"./useElementOffset-CKja-FAu.js";import"./iteratee-BK7KGKiG.js";import"./tooltipContext-C74b5_44.js";import"./ReactUtils-BRgMO5-h.js";import"./ActiveShapeUtils-BDlzWM-D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkEKHy4P.js";import"./useAnimationId-DrcXJvRo.js";import"./Trapezoid-BSnUVGBW.js";import"./Sector-GT6Bl8Sq.js";import"./RegisterGraphicalItemId-DG1ATRc8.js";import"./ErrorBarContext-B6qv5CJK.js";import"./GraphicalItemClipPath-BJcM9DJz.js";import"./SetGraphicalItem-DZWKp8RZ.js";import"./getZIndexFromUnknown-D9w9YWsI.js";import"./graphicalItemSelectors-DnYp8OGY.js";import"./index-8XSHT_-Z.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./OffsetShower-Djp4qM9b.js";import"./PlotAreaShower-B7fNSASi.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
