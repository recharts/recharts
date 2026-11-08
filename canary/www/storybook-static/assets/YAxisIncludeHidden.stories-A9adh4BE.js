import{r as f,R as e}from"./iframe-Cn8BbXdc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CvKMQQHY.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cplo4OJz.js";import{C as k}from"./ComposedChart-COauRXZ_.js";import{X as K}from"./XAxis-OdkIm8mG.js";import{L as v}from"./Legend-8QFc7Zvg.js";import{B as a}from"./Bar-qhbqxOwN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BMteoko4.js";import"./Text-C0NLdB6_.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./throttle-BbuJxkpw.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./d3-scale-BDIN99PH.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CCqZUt6C.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./Symbols-V0KMXGx3.js";import"./symbol-B1AYOCFp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZTAY-ym.js";import"./uniqBy-BDioFPwN.js";import"./iteratee-Bi5Bqc-D.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-fXcaT9lZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSJXIYeh.js";import"./useAnimationId-BQvfHsDD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dlfc7hut.js";import"./tooltipContext-BE-7S2XF.js";import"./ErrorBarContext-zwHjEd7p.js";import"./activeStyles-DvMk-MBL.js";import"./SetGraphicalItem-7Fal13Qm.js";import"./getZIndexFromUnknown-Cj4eVme7.js";import"./useEffectiveDataKey-D8YFmfQj.js";import"./omit-nMd1Jn9K.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
