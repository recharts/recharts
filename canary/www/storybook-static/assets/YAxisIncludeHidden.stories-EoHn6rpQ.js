import{r as f,R as e}from"./iframe-8C24Tydd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-jbouJBfL.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dw4Oq4dL.js";import{C as k}from"./ComposedChart-B4z2qb51.js";import{X as K}from"./XAxis-CI8sx2Rv.js";import{L as v}from"./Legend-C8p-zLrz.js";import{B as a}from"./Bar-DVGMb1fc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D_2s_KcH.js";import"./Text-CBQ4JzNL.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-OkcN41hW.js";import"./throttle-BnR0knX4.js";import"./axisSelectors-wolYJBqC.js";import"./d3-scale-DhysOGqs.js";import"./CartesianAxis-CNwz3srm.js";import"./Layer-D45TlyFk.js";import"./types-BD1-xaIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CN9elUVX.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHUchDOx.js";import"./uniqBy-ChjuKGB9.js";import"./iteratee-23TXNM0i.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-XtYPtKfF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEd6ta5Q.js";import"./useAnimationId-CvLS5yyi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./tooltipContext-DlcS1gLa.js";import"./ErrorBarContext-CfhLJDta.js";import"./activeStyles-D92_uiFB.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getZIndexFromUnknown-BAROIWne.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./omit-BSR9Vs8s.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
