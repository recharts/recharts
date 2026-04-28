import{r as f,e}from"./iframe-CcieUljj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-ChIRv6Dr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CBSvOn2m.js";import{C}from"./ComposedChart-iK8PeiJH.js";import{X as K}from"./XAxis-DRW_fzsF.js";import{L as v}from"./Legend-DJWPsUvs.js";import{B as s}from"./Bar-DInerr8U.js";import{R as x}from"./RechartsHookInspector-gpfAdvlL.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-y4_48Kdj.js";import"./Layer-kYv4pH7g.js";import"./resolveDefaultProps-DtzB7iWl.js";import"./Text-ByRBAoo5.js";import"./DOMUtils-CgPYrlEh.js";import"./Label-x_qN36Er.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJKRgvH9.js";import"./zIndexSlice-COf-5-fj.js";import"./immer-CRL2VYbe.js";import"./types-CacpOb3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-OQ158BwU.js";import"./hooks-DPwXI4Gw.js";import"./axisSelectors-Pbek4Jez.js";import"./d3-scale-CoPY6zJ-.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-CNR_n_x6.js";import"./index-Dbc8u9bF.js";import"./CartesianChart-OaoDdpk7.js";import"./chartDataContext-CVz5YgWY.js";import"./CategoricalChart-B0CWPrGL.js";import"./Symbols-CuWHy7F-.js";import"./symbol-iKW_0e7L.js";import"./step-CgpTw60r.js";import"./useElementOffset-CqK0Vxa0.js";import"./uniqBy-Biztq0Nb.js";import"./iteratee-DlqS2PSY.js";import"./tooltipContext-DGg66U6z.js";import"./AnimatedItems-RMCtBAwF.js";import"./useAnimationId-DddwMKxX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-OiQWsOUN.js";import"./isPlainObject-DI_W5C57.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Z_JKhr7t.js";import"./Trapezoid-CWN34y2W.js";import"./Sector-BSfRVALc.js";import"./Curve-Bx8QBaeT.js";import"./RegisterGraphicalItemId-BJxOIzsy.js";import"./ErrorBarContext-DmagIxUm.js";import"./GraphicalItemClipPath-Cd4vnEzu.js";import"./SetGraphicalItem-Dz7oH1lw.js";import"./getZIndexFromUnknown-Dcwo1ym9.js";import"./graphicalItemSelectors-DiR5EaBc.js";import"./index-Ca5GsAAq.js";import"./ChartSizeDimensions-C-S9llVm.js";import"./OffsetShower-B6NxlzmC.js";import"./PlotAreaShower-DQmFSr8w.js";const Oe={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Se=["WithIncludeHidden"];export{t as WithIncludeHidden,Se as __namedExportsOrder,Oe as default};
