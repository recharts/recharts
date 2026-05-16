import{u as f,e}from"./iframe-D0NgTmOF.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CwDQurre.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CwgUv_ht.js";import{C}from"./ComposedChart-DJ5Lkyrz.js";import{X as K}from"./XAxis-CncyYZDx.js";import{L as v}from"./Legend-MDlw3RMW.js";import{B as s}from"./Bar-_Ug1k7q3.js";import{R as x}from"./RechartsHookInspector-5yLt0C9L.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Ci5CupD_.js";import"./Layer-CdU29MCm.js";import"./resolveDefaultProps-C2iJSQuR.js";import"./Text-CYJBI_N5.js";import"./DOMUtils-B93EOx77.js";import"./Label-CwJJPXCN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgbYN4dr.js";import"./zIndexSlice-B6knb3no.js";import"./immer-DnKwXwYM.js";import"./types-BAabENvn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B6w59eqG.js";import"./hooks-BjdflWes.js";import"./axisSelectors-D-soVtjN.js";import"./d3-scale-CuJiQ300.js";import"./RechartsWrapper-B5gUoFOn.js";import"./index-DvYw8x0Z.js";import"./CartesianChart-vOQQa6wo.js";import"./chartDataContext-B3eSYf3f.js";import"./CategoricalChart-Cw-_htEg.js";import"./Symbols-BQ_Pkm6Y.js";import"./symbol-DTnIuW2s.js";import"./step-Dotb7kAI.js";import"./useElementOffset-ERiIM-pz.js";import"./uniqBy-D9B9Na9v.js";import"./iteratee-C2EwE-pZ.js";import"./tooltipContext-BV2fx3KY.js";import"./ReactUtils-CP67hvAP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Ck9x9SAt.js";import"./isPlainObject-Cp-FcUrF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7KfHMDv.js";import"./useAnimationId-BMh-hzSk.js";import"./Trapezoid-Bw4_2Ajp.js";import"./Sector-D7Ir7kN1.js";import"./Curve-CmeNNcZa.js";import"./RegisterGraphicalItemId-CIKun5N4.js";import"./ErrorBarContext-DWShVRAe.js";import"./GraphicalItemClipPath-DIWpokpF.js";import"./SetGraphicalItem-7Ry64uPY.js";import"./getZIndexFromUnknown-CljXbuAW.js";import"./graphicalItemSelectors-CrhQHOrv.js";import"./index-CUywKB4R.js";import"./ChartSizeDimensions-KQoM2E8Q.js";import"./OffsetShower-18-bLdR4.js";import"./PlotAreaShower-C4z2y4fi.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
