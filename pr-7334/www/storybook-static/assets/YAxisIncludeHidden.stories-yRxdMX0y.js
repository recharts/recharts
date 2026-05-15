import{r as f,e}from"./iframe-IedaLeal.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-j1HNTz_n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CDeFCuAt.js";import{C}from"./ComposedChart-BLFle0FW.js";import{X as K}from"./XAxis-CUj044ZC.js";import{L as v}from"./Legend-DVndYvev.js";import{B as s}from"./Bar-BU9_rEDL.js";import{R as x}from"./RechartsHookInspector-5qOOtg04.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DdlOSCj4.js";import"./Layer-COpu_kTm.js";import"./resolveDefaultProps-DinctDfH.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./Label-NwC3LlsS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-JYekqGDv.js";import"./zIndexSlice-BZ8DgwR3.js";import"./immer-Dd6dXjxy.js";import"./types-Ci9gDE8O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";import"./step-CR-qwJGd.js";import"./useElementOffset-XMbgmZkO.js";import"./uniqBy-CZ5FVlWP.js";import"./iteratee-DYAmoIVS.js";import"./tooltipContext-EEmfMTYp.js";import"./ReactUtils-De7AqaLg.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-cikzdunu.js";import"./isPlainObject-BBCFg2tK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0StcwZN.js";import"./useAnimationId-D3Yn3hG9.js";import"./Trapezoid-DD2FtYjE.js";import"./Sector-BSwgLZD3.js";import"./Curve-BzqwREyl.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./ErrorBarContext-C7FVOsru.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./getZIndexFromUnknown-T1G3s9Xv.js";import"./graphicalItemSelectors-DDSx4B9l.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
