import{r as f,R as e}from"./iframe-BU2uaiQT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D8lRSYCy.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B7Ww3qol.js";import{C as k}from"./ComposedChart-0ICAtkFu.js";import{X as K}from"./XAxis-BnGZclY4.js";import{L as v}from"./Legend-BRb4WwmG.js";import{B as a}from"./Bar-CLLqFQpZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CM1LVEBq.js";import"./Text-DcepGaW8.js";import"./resolveDefaultProps-C2wLywwD.js";import"./ZIndexLayer-DWfXGHkj.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./throttle-CcBx4b7F.js";import"./axisSelectors-D_lL4SFu.js";import"./d3-scale-BmCizgpV.js";import"./CartesianAxis-CdjY0Szh.js";import"./Layer-Bk2JkGA1.js";import"./types-BGeljdCR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJs7SFO5.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BuXfzakd.js";import"./uniqBy-BDVNLrho.js";import"./iteratee-CgzDSGu2.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BQSK-138.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uMWe5cKm.js";import"./useAnimationId-DGhOgRI0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./tooltipContext-BjFnZuq0.js";import"./ErrorBarContext-CIErDLim.js";import"./activeStyles-C3KdIcht.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./getZIndexFromUnknown-l5v6dV56.js";import"./useEffectiveDataKey-u5bBQA4i.js";import"./omit-DOZ0aYhm.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
