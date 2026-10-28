import{r as f,R as e}from"./iframe-6K1b1-eT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-_GZI3dYv.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B780JRIC.js";import{C as k}from"./ComposedChart-B8GwPjuZ.js";import{X as K}from"./XAxis-ClhB_79n.js";import{L as v}from"./Legend-CVqC3TW7.js";import{B as a}from"./Bar-J_x1lf0G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BWjzWDJx.js";import"./Text-CdUlZS4M.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DAIX196M.js";import"./throttle-CBl9h_oH.js";import"./axisSelectors-C-rSKBiJ.js";import"./d3-scale-vHo5DJBH.js";import"./CartesianAxis-D2Tqoy9W.js";import"./Layer-CJqJ-HtM.js";import"./types-O5YDoWOS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DqVTXzd2.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./Symbols-j-UxEopj.js";import"./symbol-Ccjplwna.js";import"./path-DyVhHtw_.js";import"./useElementOffset-c1RTDdmp.js";import"./uniqBy-OJKX_qkV.js";import"./iteratee-ItMtgKsp.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Da0m2dvB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNPdRBQn.js";import"./useAnimationId-DP-ttVRU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9jaloMvW.js";import"./tooltipContext-CgwHjfe-.js";import"./dataEntryStyles-DGPpD66W.js";import"./ErrorBarContext-BrR5ewV-.js";import"./activeStyles-C1gmhpCf.js";import"./SetGraphicalItem-CxuWSH9Y.js";import"./getZIndexFromUnknown-DzWOtZd_.js";import"./useEffectiveDataKey-Cqgp5Kke.js";import"./omit-Dy7X2uA0.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
