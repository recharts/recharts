import{u as f,e}from"./iframe-DWlBD4sR.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DjNbHZXF.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CNEGbaey.js";import{C}from"./ComposedChart-BAyx4O2z.js";import{X as K}from"./XAxis-DqK7mhYD.js";import{L as v}from"./Legend-BKRXt4LC.js";import{B as s}from"./Bar-gNH6kzEo.js";import{R as x}from"./RechartsHookInspector-BbwGamUB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Mlw-1mLJ.js";import"./Layer-CBKkaEhK.js";import"./resolveDefaultProps-CNcUKtS8.js";import"./Text-DHQSj0lc.js";import"./DOMUtils-LgZ0OFlh.js";import"./Label-B7fwnDQB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CcFVuy64.js";import"./zIndexSlice-D96LA4yw.js";import"./immer-DA_Y9NxP.js";import"./types-DufW0EQG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ClpTcocu.js";import"./hooks-OMlNr05X.js";import"./axisSelectors-CpE3e6Wf.js";import"./d3-scale-M7VTsA4f.js";import"./RechartsWrapper-qpXHOlBt.js";import"./index-CG7DpBSc.js";import"./CartesianChart-C5Nu26yg.js";import"./chartDataContext-tYXX0vXe.js";import"./CategoricalChart-DhnxgrNh.js";import"./Symbols-DVgdh6wF.js";import"./symbol-CoAVQGVr.js";import"./step-DBWpQbX9.js";import"./useElementOffset-DxOkvigD.js";import"./uniqBy-ClnHDv_J.js";import"./iteratee-cMSv06Nq.js";import"./tooltipContext-DkmKbkUG.js";import"./ReactUtils-Bv-62o8T.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DFxf-U2C.js";import"./isPlainObject-Cg4BwvD8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-q1bxg6yb.js";import"./useAnimationId-DeTKnBQG.js";import"./Trapezoid-DYkluK8E.js";import"./Sector-DrZ87OSF.js";import"./Curve-DtQybK0o.js";import"./RegisterGraphicalItemId-D8G2PQ9m.js";import"./ErrorBarContext-PluNcskT.js";import"./GraphicalItemClipPath-fLehOmj-.js";import"./SetGraphicalItem-CmDlGunV.js";import"./getZIndexFromUnknown-JQW3vpqd.js";import"./graphicalItemSelectors-4Z2vAgt9.js";import"./index-DfML4_6p.js";import"./ChartSizeDimensions-hqEEbS1-.js";import"./OffsetShower-DyOzfQGn.js";import"./PlotAreaShower-9P4lyNiw.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
