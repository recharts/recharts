import{r as f,e}from"./iframe-D0SJPJ1y.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DF4qEhbE.js";import{R as A}from"./arrayEqualityCheck-CYS0izrw.js";import{C}from"./ComposedChart-CGWtCm1x.js";import{X as K}from"./XAxis-CwSSbwpc.js";import{L as v}from"./Legend-JnfTeQE1.js";import{B as a}from"./Bar-DMcU348Z.js";import{R as x}from"./RechartsHookInspector-4NIikMun.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D59EO1CG.js";import"./Layer-Dax6EhgB.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./Label-Cf3oENl6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYNk2l8y.js";import"./zIndexSlice-CqQsXxK3.js";import"./immer-BFjNfeIQ.js";import"./types-Cyc_Gww5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-oZMg51oo.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./step-RKAN_I-J.js";import"./useElementOffset-DSoHOOe_.js";import"./uniqBy-BaRtkJAL.js";import"./iteratee-ssKXkiea.js";import"./tooltipContext-BCgsFGCF.js";import"./ReactUtils-a6BVn4Bt.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./useAnimationId-wUwzbzyQ.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./Curve-Cx3Ohe6s.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./getZIndexFromUnknown-DN1MhQT1.js";import"./graphicalItemSelectors-CeFUDeRv.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
