import{r as f,e}from"./iframe-bYFtU2gB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-Cal0939d.js";import{R as A}from"./arrayEqualityCheck-BHNF6PA7.js";import{C}from"./ComposedChart-CUjgMZ9l.js";import{X as K}from"./XAxis-B6h0khsn.js";import{L as v}from"./Legend-TMZ8htuv.js";import{B as a}from"./Bar-DzlKoxBs.js";import{R as x}from"./RechartsHookInspector-Cgqq1XBh.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RCRz3E4-.js";import"./CartesianAxis-B3J6v13U.js";import"./Layer-BBEIeca0.js";import"./Text-DGNM2np6.js";import"./DOMUtils-BRFWW1JK.js";import"./Label-CFtnFUI6.js";import"./PolarUtils-BwgqFbq3.js";import"./ZIndexLayer-BgNsQjiU.js";import"./zIndexSlice-UFbR30dZ.js";import"./types-rMmo8sSI.js";import"./hooks-ZDdJpBw-.js";import"./axisSelectors-Bz_L1ZR6.js";import"./RechartsWrapper-Cr_qDhUZ.js";import"./CartesianChart-lWIloUy5.js";import"./chartDataContext-CbNClMtX.js";import"./CategoricalChart-ByKQIpLz.js";import"./Symbols-CNah5pWh.js";import"./Curve-CtUoNekQ.js";import"./useElementOffset-roU2yyo7.js";import"./iteratee-B1tiXU94.js";import"./tooltipContext-BoUwqDRy.js";import"./ReactUtils-C_A_edxl.js";import"./ActiveShapeUtils-CJjJYwGu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhTN5tPV.js";import"./useAnimationId-DJ17eyu2.js";import"./Trapezoid-DSgAJSbG.js";import"./Sector-CLRLJGPS.js";import"./RegisterGraphicalItemId-BrxUTcxA.js";import"./ErrorBarContext-Dr9wrC8F.js";import"./GraphicalItemClipPath-BBMk50de.js";import"./SetGraphicalItem-nU2Wrmlo.js";import"./getZIndexFromUnknown-kAWfXndU.js";import"./graphicalItemSelectors-DzdAJcbD.js";import"./index-DOxosQgk.js";import"./ChartSizeDimensions-RFkmb5Zl.js";import"./OffsetShower-CjBekQlW.js";import"./PlotAreaShower-DwHvcBqq.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
