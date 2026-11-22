import{r as f,R as e}from"./iframe-Ctz7IHW3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B3lARwfm.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BOhKAINV.js";import{C as k}from"./ComposedChart-B4J-boeJ.js";import{X as K}from"./XAxis-C7TfuOxC.js";import{L as v}from"./Legend-BzVily9F.js";import{B as a}from"./Bar-DZKxygDq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cx25Byjk.js";import"./Text-d5sUAgwt.js";import"./resolveDefaultProps--WcksQI-.js";import"./ZIndexLayer-GawJhFHW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2S85hvBv.js";import"./throttle-BK8aOUUW.js";import"./axisSelectors-CmsQwY11.js";import"./d3-scale-B7S8RTAk.js";import"./CartesianAxis-D2YA5lRA.js";import"./Layer-DwO5QDCB.js";import"./types-o_vm3YHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B5-BQ43L.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./path-BBMZd4YL.js";import"./useElementOffset-ByunqyrY.js";import"./uniqBy-bNtr2rug.js";import"./iteratee-DTnJTgMl.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DhE1x9oW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKam2C2s.js";import"./useAnimationId-CDmHN2F8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./tooltipContext-DT4_kJxc.js";import"./ErrorBarContext-CWAd3_q9.js";import"./activeStyles-DYt1MbCF.js";import"./SetGraphicalItem-ZbovNH06.js";import"./getZIndexFromUnknown-emziqfMi.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./omit-CFl2-F-T.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
