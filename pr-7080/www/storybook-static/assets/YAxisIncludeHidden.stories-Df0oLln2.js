import{r as f,e}from"./iframe-DtsdDKdZ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-Ca_gtZCr.js";import{R as A}from"./arrayEqualityCheck-Droc7dSW.js";import{C}from"./ComposedChart-DJd-FMM5.js";import{X as K}from"./XAxis-BoqN_M_f.js";import{L as v}from"./Legend-BkrtJQfp.js";import{B as a}from"./Bar-Btp23MlU.js";import{R as x}from"./RechartsHookInspector-BlgcmNAN.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-XgYIScCi.js";import"./Layer-SH7Pqpr5.js";import"./resolveDefaultProps-CYphw90L.js";import"./Text-DywitbW7.js";import"./DOMUtils-_7Ng8zPY.js";import"./Label-DA1oiymG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBoKoGoH.js";import"./zIndexSlice-C9mn4FBr.js";import"./immer-Cl4pjRPT.js";import"./types-8PVRu1dQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DiHGExst.js";import"./hooks-BeulUkkW.js";import"./axisSelectors-DFbwRFUO.js";import"./d3-scale-C3JQrokV.js";import"./RechartsWrapper-BHAf4vKZ.js";import"./index-C-dV99_B.js";import"./CartesianChart-dUJOPO3Y.js";import"./chartDataContext-BYoNMw3_.js";import"./CategoricalChart-G5xMZxW2.js";import"./Symbols-Ct3soTwA.js";import"./symbol-Biu6vDdW.js";import"./step-BAMUjg0M.js";import"./useElementOffset-Cb5MxjJe.js";import"./uniqBy-jMwGgNZk.js";import"./iteratee-Bs43YSd1.js";import"./tooltipContext-DsgXlwBL.js";import"./ReactUtils-D2snZVWC.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DTqZq5h0.js";import"./isPlainObject-PKiGLw7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bs14o4jp.js";import"./useAnimationId-BeYERtYV.js";import"./Trapezoid-CfylSPEx.js";import"./Sector-BvQTjcKL.js";import"./Curve-DR4nUNk7.js";import"./RegisterGraphicalItemId-CUTcSbcF.js";import"./ErrorBarContext-BXVMNut-.js";import"./GraphicalItemClipPath-BnsyXWl3.js";import"./SetGraphicalItem-B8wIveBb.js";import"./getZIndexFromUnknown-TfBFkrNM.js";import"./graphicalItemSelectors-DjSkvU14.js";import"./index-txaMAxKK.js";import"./ChartSizeDimensions-RUaYI8h3.js";import"./OffsetShower-Cc_Brw8F.js";import"./PlotAreaShower-Ch2pfbhA.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
