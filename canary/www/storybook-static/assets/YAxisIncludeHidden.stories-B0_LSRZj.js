import{r as f,e}from"./iframe-CcI14rjx.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-CbFx-Oik.js";import{R as A}from"./arrayEqualityCheck-B8tVyMzV.js";import{C}from"./ComposedChart-FcFBNN0D.js";import{X as K}from"./XAxis-CzdMAN4d.js";import{L as v}from"./Legend-BkiUSDO3.js";import{B as a}from"./Bar-BhYeplZK.js";import{R as x}from"./RechartsHookInspector-BirTV-4S.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-po8mUv-4.js";import"./CartesianAxis-Vu_uTkrX.js";import"./Layer-8dVuGqJD.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./Label-Dpi6i3BM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DuQEL0lP.js";import"./zIndexSlice-BZyTHnj4.js";import"./types-Ce3J44ym.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./Symbols-CXif55_q.js";import"./Curve-CHXnr1rt.js";import"./useElementOffset-B1zTkUQu.js";import"./iteratee-ljczhaBr.js";import"./tooltipContext-C9iRPvdc.js";import"./ReactUtils-C84uddRP.js";import"./ActiveShapeUtils-DL6WZdbr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSZATy_S.js";import"./useAnimationId-B5oI4zFf.js";import"./Trapezoid-D4oUuF48.js";import"./Sector-DCwH9VE3.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./ErrorBarContext-CRPnKTk6.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./getZIndexFromUnknown-C2vSSX07.js";import"./graphicalItemSelectors-BKqXZH6g.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
