import{r as f,R as e}from"./iframe-CEcITxQg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-WtIBmSn8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DG2GpHlE.js";import{C as k}from"./ComposedChart-p5v9VmVF.js";import{X as K}from"./XAxis-DpYz8_Dh.js";import{L as v}from"./Legend-pC0N9pnS.js";import{B as a}from"./Bar-BiOnqh7r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAyVtv0N.js";import"./Text-BaR1ZvCW.js";import"./resolveDefaultProps-CkmfyhqW.js";import"./DOMUtils-CRevI1wr.js";import"./isWellBehavedNumber-DjN2b99T.js";import"./useId-BfWHYsCr.js";import"./useBackwardsCompatibleTheme-B-LDULxa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Crp9kN4i.js";import"./index-D2_zyIdl.js";import"./index-Bhk23PFU.js";import"./RechartsWrapper-BTJ2LZ14.js";import"./axisSelectors-BTQvXZat.js";import"./throttle-B3Xibe3Y.js";import"./d3-scale-CwC0nBHM.js";import"./index-D0x1dbK7.js";import"./index-DeVAKBla.js";import"./renderedTicksSlice-Dgfw4xeW.js";import"./index-DeuCtru2.js";import"./CartesianAxis-CRhVdfos.js";import"./Layer-DxHA8fzs.js";import"./types-CL5KqLm4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bf9v-Tj6.js";import"./chartDataContext-BzZyvQEB.js";import"./CategoricalChart-B6S6Zh35.js";import"./Symbols-wZDO_6SA.js";import"./symbol-CZuDR-tR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BT0tqnsY.js";import"./uniqBy-DqiiQuQc.js";import"./iteratee-D_w4T-w5.js";import"./AnimatedItems-Ys-2ZU7Q.js";import"./useAnimationId-Cz0tj6YQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rvPl5WSU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx9yEBbu.js";import"./tooltipContext-C719rlED.js";import"./RegisterGraphicalItemId-CodKeWvn.js";import"./ErrorBarContext-B5kiS63M.js";import"./GraphicalItemClipPath-BwGvKzSp.js";import"./SetGraphicalItem-ZqPAg0_A.js";import"./getZIndexFromUnknown-BEtTw01N.js";import"./useGraphicalItemIdentity-DDNep2_9.js";import"./dataEntryStyles-ChVGAtMZ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
