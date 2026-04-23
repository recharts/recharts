import{r as f,e}from"./iframe-9z1u-Aav.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DrCwJ6Az.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BxC1vNgX.js";import{C}from"./ComposedChart-BYDqkFXo.js";import{X as K}from"./XAxis-40ikClNA.js";import{L as v}from"./Legend-B3VISwut.js";import{B as s}from"./Bar-JHJx5Kei.js";import{R as x}from"./RechartsHookInspector-CPy6deVf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CCI6UuOV.js";import"./Layer-CQ8qv4WV.js";import"./resolveDefaultProps-hYLPXQk1.js";import"./Text-hlTX4MHR.js";import"./DOMUtils-C8Hk5ID2.js";import"./Label-CLPrmfez.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DD6-9cCr.js";import"./zIndexSlice-CgHKAdAg.js";import"./immer-Bw5e914R.js";import"./types-DkmL6Els.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BHud9xuy.js";import"./hooks-6Kt3djxY.js";import"./axisSelectors-COp_2eg-.js";import"./d3-scale-Gw1yRTSk.js";import"./RechartsWrapper-BCPy8B0Q.js";import"./index-B2EC147Y.js";import"./CartesianChart-BYVE1KsL.js";import"./chartDataContext-C3cOG7oG.js";import"./CategoricalChart-BSBYVT05.js";import"./Symbols-Do-WoS-v.js";import"./symbol-CozNTkvH.js";import"./step-DgnayOtY.js";import"./useElementOffset-CgJ9LAWC.js";import"./uniqBy-klSQtmRp.js";import"./iteratee-CZCXTLGV.js";import"./tooltipContext-Bq-Hx7YG.js";import"./ReactUtils-BhZgkjsQ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dr5kvCCk.js";import"./isPlainObject-C-oBiTzF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BL9Pth1-.js";import"./useAnimationId-DEUiQ2FH.js";import"./Trapezoid-Cob3LyNG.js";import"./Sector-Blap6T8q.js";import"./Curve-CaIVque-.js";import"./RegisterGraphicalItemId-BFftKPbg.js";import"./ErrorBarContext-C3IrAAAi.js";import"./GraphicalItemClipPath-BPP11Y5p.js";import"./SetGraphicalItem-DhXUBNxa.js";import"./getZIndexFromUnknown-WmXd9n4I.js";import"./graphicalItemSelectors-B_mo8ZnZ.js";import"./index-CQ_nBmPz.js";import"./ChartSizeDimensions-Dl068BxX.js";import"./OffsetShower-DaW6uSre.js";import"./PlotAreaShower-B88-OHCb.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
