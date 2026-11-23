import{r as f,R as e}from"./iframe-DmqRNFpA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BVwyU1u1.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B1K-Cx6E.js";import{C as k}from"./ComposedChart-C16lvRll.js";import{X as K}from"./XAxis-D3OnHsd5.js";import{L as v}from"./Legend-Bm2HUo-N.js";import{B as a}from"./Bar-BigJiKPB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CGOHFUUI.js";import"./Text-CUDSRJfa.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./throttle-DniwHdPI.js";import"./axisSelectors-CgQoXC7y.js";import"./d3-scale-a0YrBx9c.js";import"./CartesianAxis-B7FOD29F.js";import"./Layer-BMG2yPM5.js";import"./types-ClR1fgnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CTNqlU94.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CeDnXL_W.js";import"./uniqBy-DGhKd4sh.js";import"./iteratee-CQuB2rq_.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-ClWs31k0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2jF24kk.js";import"./useAnimationId-BfPOVraS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wD2P373B.js";import"./tooltipContext-DRFTWGzc.js";import"./ErrorBarContext-BaRUKqrY.js";import"./activeStyles-2GMTQ11y.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./getZIndexFromUnknown-BPyNJBsM.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./omit-GwFxkX5l.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
