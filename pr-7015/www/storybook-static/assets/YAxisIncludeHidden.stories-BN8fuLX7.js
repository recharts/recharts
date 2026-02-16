import{r as f,e}from"./iframe-BI7oaA_G.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-RsyqFzC6.js";import{R as A}from"./arrayEqualityCheck-CqFOZzs4.js";import{C}from"./ComposedChart-Bmljd1qJ.js";import{X as K}from"./XAxis-CapxM4jv.js";import{L as v}from"./Legend-BfEOYlFj.js";import{B as a}from"./Bar-CTPhFxIv.js";import{R as x}from"./RechartsHookInspector-B5lL4wmf.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmsjXKM6.js";import"./CartesianAxis-maHjO968.js";import"./Layer-_hLoKUUt.js";import"./Text-uzPlC_zS.js";import"./DOMUtils-D_254HoM.js";import"./Label-CW-OXdCr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ow9Mnhy6.js";import"./zIndexSlice-BJBRf06a.js";import"./types-BMyhg35s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C7y0xKdM.js";import"./hooks-BYYSr3I0.js";import"./axisSelectors-CGdfGHmv.js";import"./RechartsWrapper-o4Mh8MkL.js";import"./CartesianChart-C-ZN2oGk.js";import"./chartDataContext-Bvker2sK.js";import"./CategoricalChart-Cgi21fgg.js";import"./Symbols-BV4zxwPS.js";import"./Curve-DhRTsi0L.js";import"./useElementOffset-Cs90PYbu.js";import"./iteratee-Bl6YWlFc.js";import"./tooltipContext-WDXGlhXg.js";import"./ReactUtils-CElkG0RD.js";import"./ActiveShapeUtils-BLY2D3T7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ICwvq_9q.js";import"./useAnimationId-DTs7L-5Q.js";import"./Trapezoid-DmJQSZ1N.js";import"./Sector-CLQqFD3N.js";import"./RegisterGraphicalItemId-D0nTrYTJ.js";import"./ErrorBarContext-Cfw2K8JX.js";import"./GraphicalItemClipPath-BcJbyhsI.js";import"./SetGraphicalItem-C9Na75Z3.js";import"./getZIndexFromUnknown-D5nBbLu1.js";import"./graphicalItemSelectors-Czqo4CT5.js";import"./index-DJbyc3-8.js";import"./ChartSizeDimensions-DfSqX2vT.js";import"./OffsetShower-DIooMjVh.js";import"./PlotAreaShower-9a9xIQCa.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
