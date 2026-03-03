import{r as f,e}from"./iframe-q7EKBh7o.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-Dzu9zp52.js";import{R as A}from"./arrayEqualityCheck-CNeXmyp-.js";import{C}from"./ComposedChart-DSwqeICk.js";import{X as K}from"./XAxis-Cc06MLaN.js";import{L as v}from"./Legend-L2aYPyi0.js";import{B as a}from"./Bar-DKHVGzYl.js";import{R as x}from"./RechartsHookInspector-DewVmCy0.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DgR0v-Eb.js";import"./Layer-QiojE74q.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./Label-D0Yxhrga.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CyDdrDhA.js";import"./zIndexSlice-FB6DIKIg.js";import"./immer-so6Ulnev.js";import"./types-8fLOkEDP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-egFijHun.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./RechartsWrapper-B22qLPQG.js";import"./index-C4-9aL-F.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./Symbols-BiDhCEPu.js";import"./symbol-BD_3EPYV.js";import"./step-BUn93TOQ.js";import"./useElementOffset-w_DRWkBd.js";import"./uniqBy-C9c8NOE5.js";import"./iteratee-DCcyxzVq.js";import"./tooltipContext-D-kQhLHL.js";import"./ReactUtils-CCO8h_ST.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BUcYuJvN.js";import"./isPlainObject-DABaG52Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9CBwic5.js";import"./useAnimationId-CVW780SS.js";import"./Trapezoid-C9zo0qDT.js";import"./Sector-CO_u1rWF.js";import"./Curve-CMEBV0h5.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./ErrorBarContext-B0wOEolD.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./getZIndexFromUnknown-CuY1viBb.js";import"./graphicalItemSelectors-BqHaBQ_b.js";import"./index-z6UB51wB.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./OffsetShower-Dpn1KfVs.js";import"./PlotAreaShower-BRuQ0joF.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
