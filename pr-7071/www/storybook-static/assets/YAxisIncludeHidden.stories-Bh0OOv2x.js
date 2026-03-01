import{r as f,e}from"./iframe-DKyU_iXE.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-C-bpHLVI.js";import{R as A}from"./arrayEqualityCheck-CBuQt-LQ.js";import{C}from"./ComposedChart-W1r0Y87Q.js";import{X as K}from"./XAxis-4nisg1uZ.js";import{L as v}from"./Legend-DUZ9Bze5.js";import{B as a}from"./Bar-CtZKzK00.js";import{R as x}from"./RechartsHookInspector-Dv9I4YHQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D-Yy--uR.js";import"./Layer--fTJnsnP.js";import"./resolveDefaultProps-cUmGB5BP.js";import"./Text-D31e4mTY.js";import"./DOMUtils-BSHfgs8I.js";import"./Label-kMa1V762.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6WeTgCgn.js";import"./zIndexSlice-w00ysM4m.js";import"./immer-CaNK2Wnd.js";import"./types-DZPKaEAC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CWpXf5qL.js";import"./hooks-CcwQQS4K.js";import"./axisSelectors-CdP5XGoN.js";import"./d3-scale-frJU2Btm.js";import"./RechartsWrapper-B1k7PNNo.js";import"./index-Bc9uivsf.js";import"./CartesianChart-DR1aPl1R.js";import"./chartDataContext-B1YWbHj7.js";import"./CategoricalChart-BzovAk5i.js";import"./Symbols-0HhL3rnr.js";import"./symbol-CXDVJGuj.js";import"./step-DMWIYdYk.js";import"./useElementOffset-WeTLfDYP.js";import"./uniqBy-DGPRmWwo.js";import"./iteratee-BYRcrczO.js";import"./tooltipContext-NQeLXPf3.js";import"./ReactUtils-CiNFkB-2.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BhHFALxr.js";import"./isPlainObject-ClBz4bnQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFv_pW3l.js";import"./useAnimationId-De9-pIXx.js";import"./Trapezoid-CI4993jy.js";import"./Sector-dJduajY3.js";import"./Curve-CExLt2Iv.js";import"./RegisterGraphicalItemId-BtuRgDxJ.js";import"./ErrorBarContext-BwvMd7Q8.js";import"./GraphicalItemClipPath-f-LT7H0l.js";import"./SetGraphicalItem-geCsQwmc.js";import"./getZIndexFromUnknown-DMkUfaAO.js";import"./graphicalItemSelectors-Dq1ctxKl.js";import"./index-CAiBL-v8.js";import"./ChartSizeDimensions-BOJu1RXr.js";import"./OffsetShower-CJI2DXcR.js";import"./PlotAreaShower-Bq5ePm5q.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
