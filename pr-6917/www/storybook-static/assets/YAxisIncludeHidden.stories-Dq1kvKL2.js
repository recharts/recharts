import{r as f,e}from"./iframe-D2DyXbcn.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-9nabWNdp.js";import{R as A}from"./arrayEqualityCheck-WjtHcJHc.js";import{C}from"./ComposedChart-CLh2SeRt.js";import{X as K}from"./XAxis-B_Rkajbb.js";import{L as v}from"./Legend-EKyNRW-_.js";import{B as a}from"./Bar-dRkic83f.js";import{R as x}from"./RechartsHookInspector-CDdA-ZFQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DA54HTPm.js";import"./CartesianAxis-YVPJ9daY.js";import"./Layer-BwzoyCOr.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./Label-CjanQvYq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-NA5ERVnG.js";import"./zIndexSlice-BQ_BDZqW.js";import"./types-uxMSZ2Tc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-JMcNkC16.js";import"./axisSelectors-opT4Xs9T.js";import"./RechartsWrapper-BOCCBYR7.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./Symbols-f5SXrcZl.js";import"./Curve-O5r-1d1a.js";import"./useElementOffset-1lDb_Lm2.js";import"./iteratee-CPGn8MN2.js";import"./tooltipContext-CpcGEiKt.js";import"./ReactUtils-D1zizFIc.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDAmNHcJ.js";import"./useAnimationId-D72jT57q.js";import"./Trapezoid-CuHn90H-.js";import"./Sector-D91ncyh4.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./ErrorBarContext-C7pLQCZx.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./getZIndexFromUnknown-CllPyzXX.js";import"./graphicalItemSelectors-BmyhV5fW.js";import"./index-B5oQXnTT.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./OffsetShower-DmmXcLnJ.js";import"./PlotAreaShower-CpTy_FbM.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
