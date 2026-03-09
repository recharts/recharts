import{r as f,e}from"./iframe-zNZ6gtuS.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-QWxltK0B.js";import{R as A}from"./arrayEqualityCheck-Dt2SCAs7.js";import{C}from"./ComposedChart-Dsj55aBj.js";import{X as K}from"./XAxis-DgIpX0Qf.js";import{L as v}from"./Legend-CMcjGl_9.js";import{B as a}from"./Bar-C90lkObm.js";import{R as x}from"./RechartsHookInspector-C4FQcsDn.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CVokkLFp.js";import"./Layer-BQ0S_2Uh.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./Label-BCeegupp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqvP1SAm.js";import"./zIndexSlice-DvWemZ8b.js";import"./immer-M5VU9jjz.js";import"./types-ynSAt5pr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./RechartsWrapper-C9d9AYjY.js";import"./index-FhY_ESTg.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";import"./step-CCZqHQ-h.js";import"./useElementOffset-C-dERYCT.js";import"./uniqBy-Cyl5F9xm.js";import"./iteratee-L6muNfU6.js";import"./tooltipContext-BCl8WHt4.js";import"./ReactUtils-CDHy-yxP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CGpmN3Ni.js";import"./isPlainObject-BwG0gXsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOPBXjWX.js";import"./useAnimationId-C73SjrYi.js";import"./Trapezoid-D3gu8WeD.js";import"./Sector-BY1ck4On.js";import"./Curve-o1yhe_oH.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./ErrorBarContext-DueqJhS_.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./getZIndexFromUnknown-D8Kml3kW.js";import"./graphicalItemSelectors-Cw8dX2Q4.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
