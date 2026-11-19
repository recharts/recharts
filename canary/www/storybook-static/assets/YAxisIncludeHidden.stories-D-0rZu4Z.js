import{r as f,R as e}from"./iframe-Cr4SLAPG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CY62iJg-.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DyLLhom_.js";import{C as k}from"./ComposedChart-fx4m_TFy.js";import{X as K}from"./XAxis-B99-G5ow.js";import{L as v}from"./Legend-ClOcTqq5.js";import{B as a}from"./Bar-Tb9OLyEI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-iIhWQC5W.js";import"./Text-BBE8dgLe.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./ZIndexLayer-B4fE1k7j.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./throttle-m67LhZgN.js";import"./axisSelectors-DrKqMaOQ.js";import"./d3-scale-WAvM56kv.js";import"./CartesianAxis-Ds5qTBHM.js";import"./Layer-CWQ0f2zH.js";import"./types-B6oZtPsa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BMMPlSoi.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CHpDveFz.js";import"./uniqBy-BO6YYRyn.js";import"./iteratee-DQY9n11K.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-IfVv-8UK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PLu_R94q.js";import"./useAnimationId-kAVaPV6O.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./tooltipContext-Dwc5DzUh.js";import"./ErrorBarContext-6e7pSH1e.js";import"./activeStyles-aUydRVRE.js";import"./SetGraphicalItem-C9um0bAO.js";import"./getZIndexFromUnknown-DlBRJe4T.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./omit-D750KmtC.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
