import{r as f,R as e}from"./iframe-CExY2eWA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B_hjfjB_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C37XV2sv.js";import{C as k}from"./ComposedChart-jeltTTaE.js";import{X as K}from"./XAxis-CfGhwt3z.js";import{L as v}from"./Legend-BIDrTJ_w.js";import{B as a}from"./Bar-BIzrW_0f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKiyvKzI.js";import"./Text-B8G25q0u.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-YwnVtORU.js";import"./throttle-BBNIp7bK.js";import"./axisSelectors-DD16TRVI.js";import"./d3-scale-0yyW8T9p.js";import"./CartesianAxis-BL500t0F.js";import"./Layer-Bau4eIyO.js";import"./types-Dc-N9olf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DLH4YKyL.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C39tezyP.js";import"./uniqBy-Crl5fHd8.js";import"./iteratee--CMPcs_W.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-jPGn2qdg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbDfzF7k.js";import"./useAnimationId-DqJ2hXPF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./tooltipContext--EjU2Cgd.js";import"./dataEntryStyles-iq_Y384c.js";import"./ErrorBarContext-CwvWWbXd.js";import"./activeStyles-DJMtR5DX.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getZIndexFromUnknown-C-aErwO8.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./omit-Ds15kvGd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
