import{r as f,e}from"./iframe-ZLLTs1L2.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-BCMoz5bl.js";import{R as C}from"./arrayEqualityCheck-DulyWTfD.js";import{C as K}from"./ComposedChart-I5bjg5En.js";import{X as A}from"./XAxis-CHTCY5Jh.js";import{L as v}from"./Legend-Dqil_PZE.js";import{B as a}from"./Bar-BjBvWlb1.js";import{R as x}from"./RechartsHookInspector-BKmDjbuV.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./CartesianAxis-C0wXEvxF.js";import"./Layer-Z1TeMr3K.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./Label-B7ECka5v.js";import"./PolarUtils-B9p_wTge.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./zIndexSlice-CBRMfbRc.js";import"./types-DBavnEN9.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./CartesianChart-Ck4WnZ-P.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./Symbols-CzmBRPG3.js";import"./Curve-F2oZRqDm.js";import"./useElementOffset-C-GQABMK.js";import"./iteratee-DOdS9XFe.js";import"./tooltipContext-Cv1LqyUw.js";import"./ReactUtils-WSqE_xht.js";import"./ActiveShapeUtils-DYOPRKym.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUa7ysAN.js";import"./useAnimationId-BvHzHoR_.js";import"./Trapezoid-qhd__VDX.js";import"./Sector-C6G3hgjU.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./ErrorBarContext-ByATrnH8.js";import"./GraphicalItemClipPath-BLImpVHN.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./getZIndexFromUnknown-DDnJ9sPl.js";import"./graphicalItemSelectors-CVqmQioH.js";import"./index-CuDIHWly.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./OffsetShower-DgUH6KPA.js";import"./PlotAreaShower-Caaac_r-.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
