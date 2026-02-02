import{r as f,e}from"./iframe-CehQ8xFj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-D-v27uKG.js";import{R as A}from"./arrayEqualityCheck-CJf3kznu.js";import{C}from"./ComposedChart-Db5HmFmR.js";import{X as K}from"./XAxis-Dibf-8ej.js";import{L as v}from"./Legend-Bj4cUftl.js";import{B as a}from"./Bar-DZ8BE50g.js";import{R as x}from"./RechartsHookInspector-C9Dv8rR_.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1y00WFc.js";import"./CartesianAxis-CZCa0md7.js";import"./Layer-6nj2T2Rl.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./Label-Dw6m4C0Z.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DeWQbK55.js";import"./zIndexSlice-39s27tLx.js";import"./types-CYKcJHFL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./Symbols-D-9teC2q.js";import"./Curve-D1ENGCAK.js";import"./useElementOffset-tZncUcCf.js";import"./iteratee-5PeM9vti.js";import"./tooltipContext-le9Sh_OC.js";import"./ReactUtils-tMfbrahw.js";import"./ActiveShapeUtils-DjjpZslN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5fxMoAB.js";import"./useAnimationId-D1z7wJlQ.js";import"./Trapezoid-Cym11nDl.js";import"./Sector-mF7w8-S5.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./ErrorBarContext-CUQfGU6Y.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./getZIndexFromUnknown-zuSsiO3K.js";import"./graphicalItemSelectors-B5eaprk4.js";import"./index-jUFHLVIb.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
