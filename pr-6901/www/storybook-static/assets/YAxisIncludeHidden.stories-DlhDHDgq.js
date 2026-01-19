import{r as f,e}from"./iframe-CYxrfzzg.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-BTS_JFed.js";import{R as A}from"./arrayEqualityCheck-DP0kYLs9.js";import{C}from"./ComposedChart-DMI7pDE-.js";import{X as K}from"./XAxis-Dmnl9BhD.js";import{L as v}from"./Legend-9AuwFTjD.js";import{B as a}from"./Bar-C9RrmFY_.js";import{R as x}from"./RechartsHookInspector-CKj7z6NA.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKLgGEJu.js";import"./CartesianAxis-nwRWnCEW.js";import"./Layer-2CuCTQZP.js";import"./Text-DTTsbVV0.js";import"./DOMUtils-DHZkznbd.js";import"./Label-CODmrKP6.js";import"./PolarUtils-DvrgzDo3.js";import"./ZIndexLayer-C2lFhuDH.js";import"./zIndexSlice-BSioTKNu.js";import"./types-VzENM0tL.js";import"./hooks-D7sBhVDC.js";import"./axisSelectors-tnzCSBUQ.js";import"./RechartsWrapper-BZIHJFZl.js";import"./CartesianChart-IXi_xLkG.js";import"./chartDataContext-CfwPSU5Z.js";import"./CategoricalChart-SSUATRMB.js";import"./Symbols-BD1jJmy1.js";import"./Curve-BNAJs-1X.js";import"./useElementOffset-BB0azcU5.js";import"./iteratee-DysRkLxA.js";import"./tooltipContext-Ir0EVXeq.js";import"./ReactUtils-BBB3MvZm.js";import"./ActiveShapeUtils-DyLP3gGN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_ysU7C8.js";import"./useAnimationId-CUiISCsF.js";import"./Trapezoid-B1yeBwPe.js";import"./Sector-BlYN7QdB.js";import"./RegisterGraphicalItemId-C3n7rMAE.js";import"./ErrorBarContext-fxacjPOS.js";import"./GraphicalItemClipPath-CBtigOwz.js";import"./SetGraphicalItem-DBWDI1yN.js";import"./getZIndexFromUnknown-BPWz5uXR.js";import"./graphicalItemSelectors-CMyoVC1C.js";import"./index-DoBieDfB.js";import"./ChartSizeDimensions-HwMCl-rE.js";import"./OffsetShower-B_S1QpU_.js";import"./PlotAreaShower-CbgSdBZD.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
