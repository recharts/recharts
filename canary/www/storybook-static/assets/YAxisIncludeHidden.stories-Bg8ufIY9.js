import{r as f,R as e}from"./iframe-2TbE3qYT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DJiyoeoo.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CDl_l-89.js";import{C as k}from"./ComposedChart-Dv9sDNdE.js";import{X as K}from"./XAxis-J5474B1k.js";import{L as v}from"./Legend-zcd4ylac.js";import{B as a}from"./Bar-C8xZzeNd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./Label-BqpWbzgg.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BVGWIciz.js";import"./throttle-AC4zKKET.js";import"./axisSelectors-BRsQeeHB.js";import"./diverging-gVDFTlHt.js";import"./CartesianAxis-DY1zMkgy.js";import"./Layer-7DEP56Bj.js";import"./types-Dx30sS-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DSdhDIUK.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D9QIVvZV.js";import"./uniqBy-B9J3txXo.js";import"./iteratee-BLZOulYj.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-T1g5qPBF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DnludKWy.js";import"./useAnimationId-D_GZEFYT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./tooltipContext-StFilsvp.js";import"./ErrorBarContext-D7D-MJNc.js";import"./activeStyles-Rm_R6i1P.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./getZIndexFromUnknown-DUto4dfY.js";import"./useEffectiveDataKey-CWpkrBwa.js";import"./omit-C5W9il06.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
