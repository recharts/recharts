import{r as f,e}from"./iframe-ildNGUcB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-CynyduVr.js";import{R as A}from"./arrayEqualityCheck-DoW--ad2.js";import{C}from"./ComposedChart-DO5A4L0f.js";import{X as K}from"./XAxis-BpmpMVxP.js";import{L as v}from"./Legend-CoVLDyKg.js";import{B as a}from"./Bar-DtFZXO33.js";import{R as x}from"./RechartsHookInspector-DjpRKvg6.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./CartesianAxis-BT55_pa3.js";import"./Layer-C1Vpqy4i.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./Label-hP_NWlrR.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./zIndexSlice-D5G-T-vj.js";import"./types-C_F-U0PG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./RechartsWrapper-BhDWMvuB.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./Symbols-DUzk_pf6.js";import"./Curve-C50TS3eJ.js";import"./useElementOffset-BYF9do47.js";import"./iteratee-Dd1-lgM9.js";import"./tooltipContext-Bpxhm3w9.js";import"./ReactUtils-DZ7Bf0_2.js";import"./ActiveShapeUtils-BXCOQYub.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dt6Qepe_.js";import"./useAnimationId-BnV1d9M_.js";import"./Trapezoid-BeDQjyAm.js";import"./Sector-0N1SRZV_.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./ErrorBarContext-Bjz9qEy8.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./getZIndexFromUnknown-DnPXTqdd.js";import"./graphicalItemSelectors-CQqGK5Nr.js";import"./index-Bl4fk5Ry.js";import"./ChartSizeDimensions-DAfFC157.js";import"./OffsetShower-DLkMsMHT.js";import"./PlotAreaShower-Bhcl3vg9.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
