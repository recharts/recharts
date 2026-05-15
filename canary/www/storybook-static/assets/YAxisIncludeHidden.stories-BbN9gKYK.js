import{r as f,e}from"./iframe-B0S7Bw5r.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Cfh_dm5A.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-B6UHuCSW.js";import{C}from"./ComposedChart-DcRLOIWA.js";import{X as K}from"./XAxis-DiUkTxAp.js";import{L as v}from"./Legend-Q88WEYIF.js";import{B as s}from"./Bar-CwAxX5_w.js";import{R as x}from"./RechartsHookInspector-CMq6C7Gt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-xLcMiLgB.js";import"./Layer-Dc2WQE0F.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./Label-Sf__cS6l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8Z-QIey.js";import"./zIndexSlice-9UjK9UdZ.js";import"./immer-evaWtkoc.js";import"./types-DOzdXJDs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./Symbols-CYKSAWm0.js";import"./symbol-B-6h4y7x.js";import"./step-BpWwZl0O.js";import"./useElementOffset-z_Q4U8yI.js";import"./uniqBy-L7bCXYuO.js";import"./iteratee-BbOKiONH.js";import"./tooltipContext-ChfpWUaV.js";import"./ReactUtils-X5Zc33o_.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BunL0KP8.js";import"./isPlainObject-Dg3LRGot.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-R6r6MP54.js";import"./useAnimationId-NZHn6B37.js";import"./Trapezoid-CwbraNO9.js";import"./Sector-CoxeQB-O.js";import"./Curve-DEKI4hEN.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./ErrorBarContext-CJSJ027V.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./getZIndexFromUnknown-CJAZLNag.js";import"./graphicalItemSelectors-DiYrGPFG.js";import"./index-j_275XjD.js";import"./ChartSizeDimensions-C7fjLK0m.js";import"./OffsetShower-xAOZ3hBm.js";import"./PlotAreaShower-VWh9CzYD.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
