import{r as f,R as e}from"./iframe-DG1yZPWZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D8fDz-Jg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-asfAkO72.js";import{C as k}from"./ComposedChart-Bg3J3jLh.js";import{X as K}from"./XAxis-Cx1v_iob.js";import{L as v}from"./Legend-Bg__uj4m.js";import{B as a}from"./Bar-BWw69e6a.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CP0s7Q77.js";import"./Text-jtW7RKFp.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./throttle-QLzPTGhw.js";import"./axisSelectors-BLyrYAI0.js";import"./d3-scale-p1mp5kit.js";import"./CartesianAxis-D2CTuJLk.js";import"./Layer-DzG8YxQe.js";import"./types-DqMoKlmp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-BlTUNZQc.js";import"./index-Bt1QYmkD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bchp_o7p.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C7BJRYTP.js";import"./themeFill-D_uX30kF.js";import"./useElementOffset-gChE2lz3.js";import"./uniqBy-BMDahjm8.js";import"./iteratee-Bd2duUdb.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DDOiPfis.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvctkOLL.js";import"./useAnimationId-C_9VGehw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./tooltipContext-BFoc-4sQ.js";import"./dataEntryStyles-B8PPCs32.js";import"./ErrorBarContext-C4LHoflN.js";import"./activeStyles-BM7qy7T1.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getZIndexFromUnknown-D7VqBCD9.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./omit-TH1DhSSY.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
