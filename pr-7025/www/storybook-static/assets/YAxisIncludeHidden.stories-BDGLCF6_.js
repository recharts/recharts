import{r as f,e}from"./iframe-DRECDyJu.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-DS55SlTE.js";import{R as A}from"./arrayEqualityCheck-CwmcLezE.js";import{C}from"./ComposedChart-CFtzaxo-.js";import{X as K}from"./XAxis-0kgYDqpD.js";import{L as v}from"./Legend-B1J7sLGS.js";import{B as a}from"./Bar-D8ay3I_c.js";import{R as x}from"./RechartsHookInspector-CkXF-mFA.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./CartesianAxis-BgGI7FTB.js";import"./Layer-BVdUfIl0.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./Label-CYBLI-Y2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsAf8BK3.js";import"./zIndexSlice-DfG_LBZH.js";import"./types-BSPZHGNH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BLRX00yy.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./RechartsWrapper-CU5EzhmX.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./Symbols-4bVcflIB.js";import"./Curve-BflKxEFk.js";import"./useElementOffset-Cf8ftoIX.js";import"./iteratee-BVIXGgQH.js";import"./tooltipContext-kU_ZqqVJ.js";import"./ReactUtils--6xJa5xj.js";import"./ActiveShapeUtils-BIKdmm5h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bt3TSPnX.js";import"./useAnimationId-DgWDlavz.js";import"./Trapezoid-D7oKFicN.js";import"./Sector-DGNmg5hs.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./ErrorBarContext-Du4SjFis.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./getZIndexFromUnknown-D6kEC5-j.js";import"./graphicalItemSelectors-C1R8rUPC.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
