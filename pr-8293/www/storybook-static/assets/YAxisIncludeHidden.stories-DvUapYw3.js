import{r as f,R as e}from"./iframe-BzxAUdBV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DCmm8K7b.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CpYrgVZX.js";import{C as k}from"./ComposedChart-hvP_dJoC.js";import{X as K}from"./XAxis-CtYxvtbo.js";import{L as v}from"./Legend-B6MIKlcq.js";import{B as a}from"./Bar-D8YpP4v0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-9brnKF6Z.js";import"./Text-DPkQNMpB.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./ZIndexLayer-BUHaqwT6.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CqQp2e17.js";import"./throttle-C2l7QP8r.js";import"./axisSelectors-D1428BGH.js";import"./d3-scale-BnAxRH73.js";import"./CartesianAxis-C9p6cgyy.js";import"./Layer-Df_NEF0m.js";import"./types-djSleOln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCictS_F.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DEzR6i3W.js";import"./uniqBy-BHLVblv7.js";import"./iteratee-BJNLYDOc.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-s-gxJKKB.js";import"./useAnimationId-CdQeQcKS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./tooltipContext-Bxtbw3Co.js";import"./ErrorBarContext-iCVMvaG7.js";import"./activeStyles-DjlDJ1Rs.js";import"./SetGraphicalItem-in8OQb6t.js";import"./getZIndexFromUnknown-D-mAhRYA.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./omit-BdgkeM2z.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
