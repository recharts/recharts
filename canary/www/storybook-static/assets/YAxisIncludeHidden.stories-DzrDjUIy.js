import{r as f,e}from"./iframe-BekWtzeP.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-D6pypf8E.js";import{R as A}from"./arrayEqualityCheck-Dex07G1y.js";import{C}from"./ComposedChart-wZSx9jy7.js";import{X as K}from"./XAxis-BaakOQmt.js";import{L as v}from"./Legend-Cy9Kfx5z.js";import{B as a}from"./Bar-MQUiWOJs.js";import{R as x}from"./RechartsHookInspector-DYfLD4ov.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DM_sVtnW.js";import"./CartesianAxis-CVhNrsBY.js";import"./Layer-Bfyqa5-M.js";import"./Text-GqnKFCwL.js";import"./DOMUtils-BX7aw3nI.js";import"./Label-Co8l3-0E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEmVcKyp.js";import"./zIndexSlice-C6dUOqXj.js";import"./types-BAUrPFwC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cs1v0Weq.js";import"./hooks-M7JbNACE.js";import"./axisSelectors-dkELBwuo.js";import"./RechartsWrapper-BLym1DZ5.js";import"./CartesianChart-DBKl6El9.js";import"./chartDataContext-DIse9eKf.js";import"./CategoricalChart-DjOHDvdh.js";import"./Symbols-CsDFwuaA.js";import"./Curve-DNeihdYA.js";import"./useElementOffset-BR2HBu2M.js";import"./iteratee-C8S_xBIu.js";import"./tooltipContext-VhsL2koV.js";import"./ReactUtils-V0CtXr9z.js";import"./ActiveShapeUtils-DEhZs-Ax.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BI0WfAac.js";import"./useAnimationId-BhuDd99U.js";import"./Trapezoid-BGCarJJl.js";import"./Sector-B9JgPSGu.js";import"./RegisterGraphicalItemId-DBrxdiVv.js";import"./ErrorBarContext-erPuSmOq.js";import"./GraphicalItemClipPath-CbuKIejK.js";import"./SetGraphicalItem-COH5jwOQ.js";import"./getZIndexFromUnknown-BsT1tdcp.js";import"./graphicalItemSelectors-DvBfqztM.js";import"./index-D7stEGDS.js";import"./ChartSizeDimensions-BIF9SI6Q.js";import"./OffsetShower-BzXSvdvm.js";import"./PlotAreaShower-fI9VNU4p.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
