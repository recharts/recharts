import{r as f,R as e}from"./iframe-Bo9DV_RF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CK1muElb.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ChGxP5I9.js";import{C as k}from"./ComposedChart-BSjH4eO6.js";import{X as K}from"./XAxis-hzMML8e7.js";import{L as v}from"./Legend-ujCCnnlq.js";import{B as a}from"./Bar-f-NW4gqj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BywaPoTf.js";import"./Text-DQn8LN2h.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./ZIndexLayer-D-AkOEB1.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DgJeannD.js";import"./throttle-CaIo9_rk.js";import"./axisSelectors-BUIYbOzk.js";import"./d3-scale-BoInTKj4.js";import"./CartesianAxis-_PdJmc1T.js";import"./Layer-C6lb2zxM.js";import"./types-DltK9JsS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D6SFyLdk.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./path-BBMZd4YL.js";import"./useElementOffset-UcOt8HAd.js";import"./uniqBy-Dalz8XIr.js";import"./iteratee-CXGy7xEC.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-RS1J8Vgk.js";import"./useAnimationId-TvJ5tZp1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./tooltipContext-BjT-zSCp.js";import"./ErrorBarContext-BobbhAG8.js";import"./activeStyles-mw-DKPXy.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./getZIndexFromUnknown-CC6iyV75.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./omit-CWBJZb8U.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
