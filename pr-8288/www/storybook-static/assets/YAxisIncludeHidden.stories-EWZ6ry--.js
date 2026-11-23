import{r as f,R as e}from"./iframe-Cwhg5Alw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DmjTZE4U.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Fv3NhYWW.js";import{C as k}from"./ComposedChart-BUfd6mLX.js";import{X as K}from"./XAxis-DysdhPMn.js";import{L as v}from"./Legend-k73pQdKN.js";import{B as a}from"./Bar-DzfHR5uW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DOhfAK-3.js";import"./Text-Cv-7zpF9.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./throttle-Du5pgiUX.js";import"./axisSelectors-BXhIMUYz.js";import"./d3-scale-buNRHlZ7.js";import"./CartesianAxis-lC9jf5Zn.js";import"./Layer-Cvk4I16t.js";import"./types-B4BwHuKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CNLYFCV9.js";import"./uniqBy-k5K2zjYf.js";import"./iteratee-BXUvkud4.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJUu2CXA.js";import"./useAnimationId-B8-WGiI8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./tooltipContext-JpJPDcQ0.js";import"./ErrorBarContext-C5GJMenk.js";import"./activeStyles-C2N6Ab6e.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./getZIndexFromUnknown-BK-5SKkq.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./omit-D4WZHPlr.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
