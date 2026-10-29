import{r as f,R as e}from"./iframe-BmdtsHI1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D_YhB_w8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CLt9waUo.js";import{C as k}from"./ComposedChart-DHlxdvQ8.js";import{X as K}from"./XAxis-SiUufnTD.js";import{L as v}from"./Legend-ZellOFxE.js";import{B as a}from"./Bar-BLD4fDC5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-efFOyHP_.js";import"./Text-DgdwosBP.js";import"./resolveDefaultProps-D3fedd0f.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DqiScafe.js";import"./throttle-DIqkA_6B.js";import"./axisSelectors-CWAMaE0j.js";import"./d3-scale-C4n2-g_Q.js";import"./CartesianAxis-6ZKwTVD2.js";import"./Layer-uwW889ah.js";import"./types-TcTpNVA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CW25TSBD.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C7_rhOBH.js";import"./dataEntryStyles-C-VVWe1s.js";import"./useElementOffset-Dh1asSMz.js";import"./uniqBy-BUDfukUQ.js";import"./iteratee-B0xN_w6V.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BBJeoy6S.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oyaeTZIU.js";import"./useAnimationId-C4l6OBef.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./tooltipContext-BNM5udMa.js";import"./ErrorBarContext-C7bFffEo.js";import"./activeStyles-0PlrA4t0.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getZIndexFromUnknown-DYeOV0S6.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./omit-Es-d5Yne.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
