import{r as f,R as e}from"./iframe-yFUZOAXo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Bm1MK_pl.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-gBXHaIY6.js";import{C as k}from"./ComposedChart-CLIGRHzc.js";import{X as K}from"./XAxis-VuWV4oHL.js";import{L as v}from"./Legend-CuAsWV0B.js";import{B as a}from"./Bar-bVQJzEbq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./Label-C38PHRGq.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./axisSelectors-EZDSIF5u.js";import"./diverging-BRWdQdSe.js";import"./CartesianAxis-Cl0edJ8g.js";import"./Layer-DccvzxoJ.js";import"./types-DUCsLnxG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./path-BBMZd4YL.js";import"./getUniqPayload-DAvcTrd6.js";import"./uniqBy-DOg5MgEB.js";import"./iteratee-BGJ_B21x.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D7kCW6zO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Btd8NkER.js";import"./useAnimationId-JmfqkQro.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./tooltipContext-BBA8ygrX.js";import"./ErrorBarContext-Bka5ymRE.js";import"./activeStyles-DarVPLRL.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./getZIndexFromUnknown-BOAwtTcw.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./omit-BqtapwUM.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
