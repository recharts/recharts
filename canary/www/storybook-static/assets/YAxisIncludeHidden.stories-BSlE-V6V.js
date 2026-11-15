import{r as f,R as e}from"./iframe-CvMP9Fqo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-tiTGIdx3.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B5trHRCj.js";import{C as k}from"./ComposedChart-BEnlrqE9.js";import{X as K}from"./XAxis-BVBOoebg.js";import{L as v}from"./Legend-DlTvp0v7.js";import{B as a}from"./Bar-BiTnK4Ai.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BXQPTxU_.js";import"./Text-B1VQrHkc.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./ZIndexLayer-CYiENEwf.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./throttle-MhOaKDgE.js";import"./axisSelectors-B3ymYEcm.js";import"./d3-scale-b8kDtzlH.js";import"./CartesianAxis-BofYDveF.js";import"./Layer-CKCTZlK6.js";import"./types-CEx7Mrjp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-CDgZ4Loc.js";import"./index-B6lplofW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CzGrl1eT.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./Symbols-C-TD2pNc.js";import"./symbol-DH04N6rB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dzn1lI93.js";import"./uniqBy-CNOEx6rm.js";import"./iteratee-CxBX7Jt6.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D8XHfMQr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCriiKhl.js";import"./useAnimationId-DS6RlguF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8hEQ0x22.js";import"./tooltipContext-C9ebZ2Ut.js";import"./ErrorBarContext-BNZINJYG.js";import"./activeStyles-iNSBQg7J.js";import"./SetGraphicalItem-XLvPTSfC.js";import"./getZIndexFromUnknown-BKdlMg06.js";import"./useEffectiveDataKey-BdItYSIh.js";import"./omit-ClIc1avm.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
