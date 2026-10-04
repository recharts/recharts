import{r as f,R as e}from"./iframe-Ek26OKJE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DEoqYThk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cb7AOhUN.js";import{C as k}from"./ComposedChart-Bemin9MV.js";import{X as K}from"./XAxis-BnPYeIW7.js";import{L as v}from"./Legend-Cz3kEQrZ.js";import{B as a}from"./Bar-CRRMv6Qt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bl-xJBza.js";import"./Text-DbwWqm58.js";import"./resolveDefaultProps-DikHbtvd.js";import"./DOMUtils-BY_uPlRS.js";import"./isWellBehavedNumber-C3YqTazs.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CR_MqsJe.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./RechartsWrapper-B_5MzBNC.js";import"./axisSelectors-BZyUnxor.js";import"./throttle-nAaWLAvW.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./index-CddS4NP_.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./CartesianAxis-D3cjFJua.js";import"./Layer-DRl71Sg_.js";import"./types-USIGaiIt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./Symbols-B5r7o9db.js";import"./symbol-CFHkB0SW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5V_fM0x.js";import"./uniqBy-Cj7_lSTC.js";import"./iteratee-DmOgoTF5.js";import"./AnimatedItems-B7V8aYKV.js";import"./useAnimationId-CwN306xk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9wtqsi7b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./tooltipContext-Du4uSjVV.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./ErrorBarContext-Cn_05uOu.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getZIndexFromUnknown-D8chw0Cz.js";import"./useGraphicalItemIdentity-CLabRpL-.js";import"./dataEntryStyles-BHGVQA2X.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
