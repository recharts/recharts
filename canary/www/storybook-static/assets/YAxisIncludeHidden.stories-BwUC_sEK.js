import{r as f,e}from"./iframe-DPPC5LCd.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-BkVN0NTj.js";import{R as A}from"./arrayEqualityCheck-Dvk8KT0D.js";import{C}from"./ComposedChart-Ds3ekokY.js";import{X as K}from"./XAxis-BG2Y_xwU.js";import{L as v}from"./Legend-CqiGLNsX.js";import{B as a}from"./Bar-GUQCpGOt.js";import{R as x}from"./RechartsHookInspector-Blp8PL-4.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./CartesianAxis-CbeAAhwj.js";import"./Layer-l1Ju_rpU.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./Label-CyOEca1T.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BYs5zm3k.js";import"./zIndexSlice-Cyke5ZAj.js";import"./types-BtZeuRvc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./RechartsWrapper-PEDxF674.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./Symbols-BVjVO6PI.js";import"./Curve-Bys-PvMV.js";import"./useElementOffset-C9FgqAtz.js";import"./iteratee-CxRByJ3f.js";import"./tooltipContext-DRPH6AnF.js";import"./ReactUtils-Dpo3QY29.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdGsT6u6.js";import"./useAnimationId-BL1JszpL.js";import"./Trapezoid-BQbcDxOL.js";import"./Sector-6q_tG2Nj.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./ErrorBarContext-DOTmmgqX.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./getZIndexFromUnknown-bKQSjpqc.js";import"./graphicalItemSelectors-Civiv12A.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
