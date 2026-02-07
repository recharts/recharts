import{r as f,e}from"./iframe-p_UG0KAI.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-DEIZfQQv.js";import{R as A}from"./arrayEqualityCheck-RFBrzMpT.js";import{C}from"./ComposedChart-CkU6p2-M.js";import{X as K}from"./XAxis-zKsPIOo2.js";import{L as v}from"./Legend-C5lnNtwO.js";import{B as a}from"./Bar-Sxc0Ux6X.js";import{R as x}from"./RechartsHookInspector-DC0vak21.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGxp3uGd.js";import"./CartesianAxis-0r0p8ryQ.js";import"./Layer-JpdK0Yhb.js";import"./Text-D6vjCcrH.js";import"./DOMUtils-CJ8h57fm.js";import"./Label-079Vd-9w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVbpoIAO.js";import"./zIndexSlice-BmIGVCRU.js";import"./types-PTj5YW0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-pJuOnib6.js";import"./axisSelectors-PDDTaSk3.js";import"./RechartsWrapper-tEJUk72V.js";import"./CartesianChart-pFigcRMV.js";import"./chartDataContext-CH9fTHhq.js";import"./CategoricalChart-BF8f5Erd.js";import"./Symbols-CtMkMnQW.js";import"./Curve-BzeYL40i.js";import"./useElementOffset-TZ-hkQh7.js";import"./iteratee-Drb2ZJYm.js";import"./tooltipContext-DbI0IIY-.js";import"./ReactUtils-Bi-gzM1a.js";import"./ActiveShapeUtils-BrkQD8_s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bxtfu4l2.js";import"./useAnimationId-CNvXWFg0.js";import"./Trapezoid-0x4_ia8j.js";import"./Sector-BYc0giK7.js";import"./RegisterGraphicalItemId-CYD9ORuF.js";import"./ErrorBarContext-CzGVMKe5.js";import"./GraphicalItemClipPath-QjUTAoiq.js";import"./SetGraphicalItem-JMwAn23t.js";import"./getZIndexFromUnknown-D3o9qi89.js";import"./graphicalItemSelectors-CBVmhFKB.js";import"./index-Cmf0vnA4.js";import"./ChartSizeDimensions-IHqJf279.js";import"./OffsetShower-X_nsBUDf.js";import"./PlotAreaShower-BlZaNjOc.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
