import{r as f,e}from"./iframe-CldnC2PN.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CrDGCN3a.js";import{R as A}from"./arrayEqualityCheck-BkMemVly.js";import{C}from"./ComposedChart-BngszoqL.js";import{X as K}from"./XAxis-Cj8qZ5rT.js";import{L as v}from"./Legend-DEyXurLw.js";import{B as a}from"./Bar-DjoSHrT_.js";import{R as x}from"./RechartsHookInspector-D62gTWo0.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BLyyO5TZ.js";import"./Layer-Bdw6vRTF.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./Label-CL4-mp52.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bu6n17y5.js";import"./zIndexSlice-Dkmz4iFf.js";import"./immer-DMaWcifR.js";import"./types-dYqueN3V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Be71JRZt.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./CategoricalChart-SLN0-3Ts.js";import"./Symbols-CezzAArh.js";import"./symbol-ChaweOtd.js";import"./step-DeOo6rRX.js";import"./useElementOffset-C4xRiB3V.js";import"./uniqBy-DJ3ohGyU.js";import"./iteratee-C-2fytJ4.js";import"./tooltipContext-CsI9KJcU.js";import"./ReactUtils-vDwQR-8r.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-PUYnWCIP.js";import"./isPlainObject-DfSr4O01.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzrYFnf.js";import"./useAnimationId-3owPHR_y.js";import"./Trapezoid-TT50IcST.js";import"./Sector-Olx8axXc.js";import"./Curve-Cs2JifYn.js";import"./RegisterGraphicalItemId-BmpgF9p0.js";import"./ErrorBarContext-Bu40-WC5.js";import"./GraphicalItemClipPath-_SIbPbOr.js";import"./SetGraphicalItem-QHdiFTBm.js";import"./getZIndexFromUnknown-Cw-Oh-0Y.js";import"./graphicalItemSelectors-t89E3Daq.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
