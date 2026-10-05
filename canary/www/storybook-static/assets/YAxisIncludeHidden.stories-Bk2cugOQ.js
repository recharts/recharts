import{r as f,R as e}from"./iframe-Xtjdy8K6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C0P2yrRK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ca3_di9O.js";import{C as k}from"./ComposedChart-By0nh5Tu.js";import{X as K}from"./XAxis-Dsuy05EW.js";import{L as v}from"./Legend-BWy8kwYj.js";import{B as a}from"./Bar-BtUwrZ5H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BQUl4kmN.js";import"./Text-LNKD3nQn.js";import"./resolveDefaultProps-Boep7u7P.js";import"./DOMUtils-BmMu5huz.js";import"./isWellBehavedNumber-CZ785SIV.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B714zacF.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./RechartsWrapper-DLU1mxV-.js";import"./axisSelectors-CubJTdeO.js";import"./throttle-BJfO_UKv.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./CartesianAxis-CmHtOK-l.js";import"./Layer-FeyHjh4s.js";import"./types-DxDlUmLu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./Symbols-BCh1_Gtu.js";import"./symbol-CsXV0QLt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRzU6VaK.js";import"./uniqBy-C0abLPcx.js";import"./iteratee-CxPVqHqK.js";import"./AnimatedItems-CiMNNQac.js";import"./useAnimationId-CuSCtoXZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLk0GJfh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./tooltipContext-DDJBG4_2.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./getZIndexFromUnknown-DFZXDwtS.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./dataEntryStyles-BP_gmuxC.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
