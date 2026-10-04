import{r as f,R as e}from"./iframe-C-Iuj2CY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CH97-ORP.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C4JSr5KN.js";import{C as k}from"./ComposedChart-nt2Gmc-a.js";import{X as K}from"./XAxis-d6u4l33E.js";import{L as v}from"./Legend-BIvnt31n.js";import{B as a}from"./Bar-DX0DDBrZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BQbGJ4sW.js";import"./Text-CuFXobZ8.js";import"./resolveDefaultProps-DL7WVnFH.js";import"./DOMUtils-D1JEdLYA.js";import"./isWellBehavedNumber-Ku-m6vnz.js";import"./useId-DB-RDK5Y.js";import"./useBackwardsCompatibleTheme-CO0ZmmTO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChUJUaqX.js";import"./index-BYGjDTj5.js";import"./index-CKdK4Tlm.js";import"./RechartsWrapper-7_EuFQF-.js";import"./axisSelectors-BMEelndQ.js";import"./throttle-Bp4liTDw.js";import"./d3-scale-C4GnCzHc.js";import"./index-C4z0ADpB.js";import"./index-8RkzDuen.js";import"./renderedTicksSlice-Cor1xeVL.js";import"./index-DFGRvPnn.js";import"./CartesianAxis-kD5DlR3-.js";import"./Layer-CTC_B_AO.js";import"./types-DTCaWYmj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BAWmemtm.js";import"./chartDataContext-oGc_LYLd.js";import"./CategoricalChart-CSHLIlSH.js";import"./Symbols-CkEXkoTn.js";import"./symbol-l9rlzWv-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CrkLBw9h.js";import"./uniqBy-rSYIRPWX.js";import"./iteratee-DCxMM0MI.js";import"./AnimatedItems-BJhHPNtS.js";import"./useAnimationId-Cs7J9c_D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DfduTvBp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DE2-A3Sf.js";import"./tooltipContext-BmT7uc0P.js";import"./RegisterGraphicalItemId-C_gzfzaw.js";import"./ErrorBarContext-LN9zzfth.js";import"./GraphicalItemClipPath-D1JmIf9k.js";import"./SetGraphicalItem-CVWA9VpP.js";import"./getZIndexFromUnknown-DsKsoDBj.js";import"./useGraphicalItemIdentity-_eCurvUA.js";import"./dataEntryStyles-Bl6MIlcl.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
