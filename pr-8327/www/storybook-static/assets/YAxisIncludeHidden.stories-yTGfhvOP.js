import{r as f,R as e}from"./iframe-2f2w1eP7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CAInNDnd.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CjJDCeK0.js";import{C as k}from"./ComposedChart-D2F9GDNP.js";import{X as K}from"./XAxis-CJ4nXsTf.js";import{L as v}from"./Legend-K0ydl4Ax.js";import{B as a}from"./Bar-Cya6G7Zq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CGl449JI.js";import"./get-CjriyByo.js";import"./Label-CxsWdT_n.js";import"./Text-Ch8rCVXH.js";import"./ZIndexLayer-UYyaz2px.js";import"./index-C9gJxZVs.js";import"./index-Ftdy-Ulz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors--pE3aPXl.js";import"./throttle-b8Y6KxZo.js";import"./axisSelectors-D3RC08dV.js";import"./diverging-Cc08ccIM.js";import"./CartesianAxis-Bgf8P4J0.js";import"./Layer-BbIS_iGu.js";import"./types-DRiMB5bf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bc2u_l9O.js";import"./index-6HopGisC.js";import"./index-CczUKsLU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BnbJXMBG.js";import"./index-fhAHbGs4.js";import"./fillDefinitions-CQk55RgO.js";import"./CartesianChart-DpJaOFiF.js";import"./chartDataContext-D-ZzsBgN.js";import"./CategoricalChart-BX6OynRn.js";import"./Symbols-fsmg-V93.js";import"./symbol-CyxV486p.js";import"./path-BBMZd4YL.js";import"./useElementOffset-lvJWvhjj.js";import"./uniqBy-DGZQQqxr.js";import"./iteratee-DNN7vJ8e.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CX3wrxT3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chc6ZrLO.js";import"./useAnimationId-CyAJnZP0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_e7Ka4v.js";import"./tooltipContext-B_97zIqW.js";import"./ErrorBarContext-BMvZMoH6.js";import"./activeStyles-fmqkmIUl.js";import"./SetGraphicalItem-12XTWwtV.js";import"./getZIndexFromUnknown-BLvlP2qi.js";import"./useEffectiveDataKey-BS5IJ5Is.js";import"./omit-Dh6ze5nf.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
