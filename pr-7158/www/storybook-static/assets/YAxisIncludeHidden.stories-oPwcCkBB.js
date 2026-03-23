import{r as f,e}from"./iframe-CJ63uMHg.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BJ9lAReC.js";import{R as A}from"./arrayEqualityCheck-CjZgOdyP.js";import{C}from"./ComposedChart-BUz5v2gp.js";import{X as K}from"./XAxis-CaS203aX.js";import{L as v}from"./Legend-D94wkKyo.js";import{B as a}from"./Bar-16OyXkDd.js";import{R as x}from"./RechartsHookInspector-JQmetI7b.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DJXCnb2v.js";import"./Layer-DwPjM_1S.js";import"./resolveDefaultProps-CMjyVNNi.js";import"./Text-C4Zilip_.js";import"./DOMUtils-CEnHACCK.js";import"./Label-BT9o0AB1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hB7INJpc.js";import"./zIndexSlice-DcFOWvFe.js";import"./immer-CKeBagLw.js";import"./types-Cg-iPHUY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BxvVTmCz.js";import"./hooks-DAjaeQkS.js";import"./axisSelectors-Cmmc63M7.js";import"./d3-scale-Ba7WtcOV.js";import"./RechartsWrapper-DPJT4FLk.js";import"./index-BTkZssxQ.js";import"./CartesianChart-CnhtnX-W.js";import"./chartDataContext-BCusU8xR.js";import"./CategoricalChart-mP3FKWNM.js";import"./Symbols-Yo7h6BqR.js";import"./symbol-6foS3Lbf.js";import"./step-CrMJLvxS.js";import"./useElementOffset-Db3u9B4j.js";import"./uniqBy-YwcJNLS3.js";import"./iteratee-BOLGpibr.js";import"./tooltipContext-Cef4V_rp.js";import"./ReactUtils-BrLU3nhQ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B2UK-_O2.js";import"./isPlainObject-DxawGvw9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-RAhStLpg.js";import"./useAnimationId-B1Pbcgq5.js";import"./Trapezoid-DE_yg1mh.js";import"./Sector-D96mfy5y.js";import"./Curve-CD35vdaK.js";import"./RegisterGraphicalItemId-B1D-i393.js";import"./ErrorBarContext-dABLLY8L.js";import"./GraphicalItemClipPath-B2w_akpT.js";import"./SetGraphicalItem-BO21g4cB.js";import"./getZIndexFromUnknown-BDYbSAOS.js";import"./graphicalItemSelectors-CXVO_e4z.js";import"./index-BTv7XF5w.js";import"./ChartSizeDimensions-C_IgMMTX.js";import"./OffsetShower-TshGFHAM.js";import"./PlotAreaShower-BX2Nq4gV.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
