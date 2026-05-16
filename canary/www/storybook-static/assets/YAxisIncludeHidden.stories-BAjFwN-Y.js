import{u as f,e}from"./iframe-De3AYcmL.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DeG6FNaX.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-8J4d381_.js";import{C}from"./ComposedChart-BkLYbBCh.js";import{X as K}from"./XAxis-yu0JnOft.js";import{L as v}from"./Legend-DtXXk6Qf.js";import{B as s}from"./Bar-D9BkDy0_.js";import{R as x}from"./RechartsHookInspector-D_q1sFah.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CTQd1Whd.js";import"./Layer-CvP2ZRzB.js";import"./resolveDefaultProps-CcM6EHAr.js";import"./Text-C6Iq6Q5F.js";import"./DOMUtils-CspO4-oS.js";import"./Label-BNrDAtep.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CofVuiDD.js";import"./zIndexSlice-pmRq5Z0K.js";import"./immer-B3IrcYoh.js";import"./types-B0moMXXW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CJRhDBm9.js";import"./hooks-B6mrGJaY.js";import"./axisSelectors-0INLWORQ.js";import"./d3-scale-C-QBsPkn.js";import"./RechartsWrapper-zGbVOYaW.js";import"./index-uL_5FIKS.js";import"./CartesianChart-BqrRTf2N.js";import"./chartDataContext-CqPzveAf.js";import"./CategoricalChart-7Ea_WF3s.js";import"./Symbols-C1VJaBCL.js";import"./symbol-CpBATsG6.js";import"./step-CaS84Y98.js";import"./useElementOffset-BQSNS7pX.js";import"./uniqBy-DqX0Rf1p.js";import"./iteratee-BoAs4z-B.js";import"./tooltipContext-B0Lnf7jK.js";import"./ReactUtils-smyHXU-m.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Br556SC7.js";import"./isPlainObject-Bf8xB-ha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dd6aqeBt.js";import"./useAnimationId-DfOYRRzz.js";import"./Trapezoid-t9gr1WzF.js";import"./Sector-V0157Hdp.js";import"./Curve-C6hmNTxr.js";import"./RegisterGraphicalItemId-DAYanOqB.js";import"./ErrorBarContext-CX9g_kEB.js";import"./GraphicalItemClipPath-CJOH5ivR.js";import"./SetGraphicalItem-Cu0fWv08.js";import"./getZIndexFromUnknown-OiedmwFH.js";import"./graphicalItemSelectors-ClrANwM6.js";import"./index-5m3zpj_N.js";import"./ChartSizeDimensions-DhJtSzTW.js";import"./OffsetShower-C6EyWY-L.js";import"./PlotAreaShower-Ddz7JCST.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
