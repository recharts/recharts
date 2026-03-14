import{r as f,e}from"./iframe-Dv2EI0Ju.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-Dl3Sd1eT.js";import{R as A}from"./arrayEqualityCheck-D1mGNef5.js";import{C}from"./ComposedChart-DAlN2hwo.js";import{X as K}from"./XAxis-BxPBpU10.js";import{L as v}from"./Legend-CgHA32nG.js";import{B as a}from"./Bar-pm4t2-Hh.js";import{R as x}from"./RechartsHookInspector-CyibsFS2.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Ci9kjPzN.js";import"./Layer-DEwUBVRy.js";import"./resolveDefaultProps-BAehELTf.js";import"./Text-C-pvoFVV.js";import"./DOMUtils-CeCikA4p.js";import"./Label-CoVOGhvs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yLy7ki0K.js";import"./zIndexSlice-bRjNTWyo.js";import"./immer-C8dYrQHT.js";import"./types-BOTa8dCr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./RechartsWrapper-bNtyFajX.js";import"./index-Bc1bjXU3.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./Symbols-Ol_rIUwX.js";import"./symbol-CAp9PJmI.js";import"./step-CXEpNkoj.js";import"./useElementOffset-eG66zy6Y.js";import"./uniqBy-Cea4n4hh.js";import"./iteratee-CUyse7Ut.js";import"./tooltipContext-WuIpWmu1.js";import"./ReactUtils-CPqsARhu.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BasgF1mW.js";import"./isPlainObject-INKspUfV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYsgtCMq.js";import"./useAnimationId-CFJ1HB8y.js";import"./Trapezoid-D6Z4JPgp.js";import"./Sector-D8FF4WXP.js";import"./Curve-BYfhifTo.js";import"./RegisterGraphicalItemId-Dt1T6Nvh.js";import"./ErrorBarContext-TBQU4_4Y.js";import"./GraphicalItemClipPath-QbozzGmj.js";import"./SetGraphicalItem-CO0LpAHO.js";import"./getZIndexFromUnknown-BT0xWnFT.js";import"./graphicalItemSelectors-C90ZStZx.js";import"./index-BQUBjWw-.js";import"./ChartSizeDimensions-BOSou-B6.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
