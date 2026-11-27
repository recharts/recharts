import{r as f,R as e}from"./iframe-BN7wAejV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-LOiiKFb4.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BlaP7sYq.js";import{C as k}from"./ComposedChart-CDS5E2ok.js";import{X as K}from"./XAxis-VA1Akzpv.js";import{L as v}from"./Legend-BtD9EuDm.js";import{B as a}from"./Bar-BwmDMnLO.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./Label-Bpsa1uOU.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CchWb7G-.js";import"./throttle-OOfctLZP.js";import"./axisSelectors-D4jZOjlQ.js";import"./diverging-BuYLSsjs.js";import"./CartesianAxis-DWm3W2j1.js";import"./Layer-gDVCcB56.js";import"./types-B8ZxybVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BzFY2Xxa.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./path-BBMZd4YL.js";import"./useElementOffset-zW88tSra.js";import"./uniqBy-DTQZ_SiU.js";import"./iteratee-DVkTdlvM.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CrycyMb5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MX5du-y3.js";import"./useAnimationId-ClFn0gGk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./tooltipContext-CFdyblI-.js";import"./ErrorBarContext-eg_EChks.js";import"./activeStyles-CXY1xJkQ.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./getZIndexFromUnknown-B6PYvdpj.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./omit-Bfdsviqt.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
