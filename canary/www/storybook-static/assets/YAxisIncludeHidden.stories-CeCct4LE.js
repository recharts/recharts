import{r as f,R as e}from"./iframe-C0aK3mAR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-7NanDh-1.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CaqKW8u4.js";import{C as k}from"./ComposedChart-Bb9qF-bw.js";import{X as K}from"./XAxis-oAoSo46I.js";import{L as v}from"./Legend-BS0W-7MT.js";import{B as a}from"./Bar-CuckYCvH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DrUlGLQ7.js";import"./Text-sM2vj8c3.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CptuzTw1.js";import"./throttle-Csdh9d4D.js";import"./axisSelectors-D_X7VOsT.js";import"./d3-scale-B_djSwnK.js";import"./CartesianAxis-CUkLyyeh.js";import"./Layer-CagqC790.js";import"./types-CmOm39qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D12_Reb0.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bd-Smj9e.js";import"./uniqBy-BgGQ3Z2O.js";import"./iteratee-BXSX8eL-.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-cRuikTAi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2OQ5a3O.js";import"./useAnimationId-sv0XuVET.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./tooltipContext-BzFP69XA.js";import"./ErrorBarContext-zrW_wYS_.js";import"./activeStyles-D8lDViyk.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getZIndexFromUnknown-B15Wxwj-.js";import"./useEffectiveDataKey-C4GReELG.js";import"./omit-BsLcpZjr.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
