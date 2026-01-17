import{r as f,e}from"./iframe-CLIMsGOZ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-BCedXT45.js";import{R as A}from"./arrayEqualityCheck-CbYFkYA0.js";import{C}from"./ComposedChart-CdyWcK0I.js";import{X as K}from"./XAxis-D0rBjGgi.js";import{L as v}from"./Legend-CAXkYAPU.js";import{B as a}from"./Bar-BtNuA1eL.js";import{R as x}from"./RechartsHookInspector-B158dvGO.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./CartesianAxis-tT7FqCIW.js";import"./Layer-l9L2Sb8o.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./Label-QzDxpC8q.js";import"./PolarUtils-BIAYT_Jm.js";import"./ZIndexLayer-5xiPbIim.js";import"./zIndexSlice-DazYr2Iy.js";import"./types-HWBumAOZ.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./RechartsWrapper-lPK7Cxev.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./Symbols-DbV1O1CF.js";import"./Curve-DXQteT8k.js";import"./useElementOffset-CLqe_5PL.js";import"./iteratee-Bt0H2n0P.js";import"./tooltipContext-BI8Gpz0W.js";import"./ReactUtils-Bk0OFjED.js";import"./ActiveShapeUtils-YEQ3f73b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JG6TvpVB.js";import"./useAnimationId-wMl1lWMr.js";import"./Trapezoid-D79jjH6v.js";import"./Sector-C08coEZ4.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./ErrorBarContext-D97KkegB.js";import"./GraphicalItemClipPath-D_8sBR8P.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./getZIndexFromUnknown-BIHzH5Tz.js";import"./graphicalItemSelectors-C2k1hf8k.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
