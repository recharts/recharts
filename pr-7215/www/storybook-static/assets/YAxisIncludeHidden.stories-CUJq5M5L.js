import{r as f,e}from"./iframe-DDxjm-WU.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CFpFu4li.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BDTW-iCp.js";import{C}from"./ComposedChart-CQsXSi4S.js";import{X as K}from"./XAxis-Bk56gde7.js";import{L as v}from"./Legend-BLeAbQPh.js";import{B as s}from"./Bar-WqS5OTOT.js";import{R as x}from"./RechartsHookInspector-Bsn_fuN0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-ClZZ2QTc.js";import"./Layer-DLlz0gUf.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./Text-Dhvbhtov.js";import"./DOMUtils-BA-rpJ1d.js";import"./Label-yPRdE_cG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMzzahCv.js";import"./zIndexSlice-CyBi_8s9.js";import"./immer-Dkl5Am7g.js";import"./types-BJgxgmcc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bbo75at4.js";import"./hooks-YOhxCck_.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./Symbols-KpMFDNBi.js";import"./symbol-rnYDxF4k.js";import"./step-SAK8fO-u.js";import"./useElementOffset-jNB1bLaO.js";import"./uniqBy-DUJoZvc-.js";import"./iteratee-B_gEuLW0.js";import"./tooltipContext-Md3OOTSl.js";import"./AnimatedItems-CSkyjlHH.js";import"./useAnimationId-BR6TF1aX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLASNkc5.js";import"./isPlainObject-BBpCzhfD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IbIg2bFH.js";import"./Trapezoid--noiZBKT.js";import"./Sector-DsN_tQHR.js";import"./Curve-Dkov4-pW.js";import"./RegisterGraphicalItemId-ClGGvm6o.js";import"./ErrorBarContext-DW-8h9VL.js";import"./GraphicalItemClipPath-DqVRZ_0S.js";import"./SetGraphicalItem-CuKG-JqA.js";import"./getZIndexFromUnknown-D6KNUSwG.js";import"./graphicalItemSelectors-B-9STNlh.js";import"./index-PKdkWvoA.js";import"./ChartSizeDimensions-DNtnVTHS.js";import"./OffsetShower-kAoxPyWs.js";import"./PlotAreaShower-CCGJY3Cl.js";const Oe={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Se=["WithIncludeHidden"];export{t as WithIncludeHidden,Se as __namedExportsOrder,Oe as default};
