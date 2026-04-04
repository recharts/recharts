import{r as f,e}from"./iframe-Y_RGNuVZ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-a000WLRS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-Ds7SKd67.js";import{C}from"./ComposedChart-CVsBvOUG.js";import{X as K}from"./XAxis-DOlhxeJx.js";import{L as v}from"./Legend-Bvq1ik-S.js";import{B as s}from"./Bar-_oYdWkra.js";import{R as x}from"./RechartsHookInspector-BaDAEILC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-UB1S8E_N.js";import"./Layer-B3aEjvUI.js";import"./resolveDefaultProps-CNDGD4av.js";import"./Text-2I-RPtH4.js";import"./DOMUtils-Cmq9iEnp.js";import"./Label-C7BzYfbz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkWVTcKj.js";import"./zIndexSlice-Ba0CiZj_.js";import"./immer-CvMOMmfr.js";import"./types-DUF6Oaqa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BNYNUWgh.js";import"./hooks-D-ukaKl5.js";import"./axisSelectors-B08StVJi.js";import"./d3-scale-xMg1wH9a.js";import"./RechartsWrapper-0AKdwcb0.js";import"./index-6zWqcpfE.js";import"./CartesianChart-tAchdUZG.js";import"./chartDataContext-DLrhoiOn.js";import"./CategoricalChart-xZ700W9g.js";import"./Symbols-BkK6C4o8.js";import"./symbol-CHniFcTm.js";import"./step-BeTRk8e6.js";import"./useElementOffset-DXlRn5Ww.js";import"./uniqBy-CJG1yfnn.js";import"./iteratee-N29jbGML.js";import"./tooltipContext-CkMbJ1vn.js";import"./ReactUtils-DW9WQHfP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fVk6EKo1.js";import"./isPlainObject-1pSWT5Op.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr0T3_ga.js";import"./useAnimationId-D3O-mVgt.js";import"./Trapezoid-52KgDugC.js";import"./Sector-NVf3Jf9G.js";import"./Curve-okqgdx-1.js";import"./RegisterGraphicalItemId-DQOzlEQV.js";import"./ErrorBarContext-D2MsqZ2g.js";import"./GraphicalItemClipPath-DV3rsVOw.js";import"./SetGraphicalItem-Cr3Eh_Ii.js";import"./getZIndexFromUnknown-Ce0_1ASJ.js";import"./graphicalItemSelectors-Bi7mzSEO.js";import"./index-Bw2HFO2T.js";import"./ChartSizeDimensions-Kjtp9_ay.js";import"./OffsetShower-X1duxMkd.js";import"./PlotAreaShower-C08ktU3-.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
