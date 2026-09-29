import{r as f,R as e}from"./iframe-B8WiTaBv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BeTfGw8Q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D5_q7rMj.js";import{C as k}from"./ComposedChart-CgOoahPV.js";import{X as K}from"./XAxis-CJ0oEHon.js";import{L as v}from"./Legend-BQvP-u9A.js";import{B as a}from"./Bar-C9mQUHqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BgOirL-a.js";import"./Text-DTdnI9Wt.js";import"./resolveDefaultProps-DE7ai4U1.js";import"./DOMUtils-CVPbEKMw.js";import"./isWellBehavedNumber-BNs6A6nd.js";import"./useId-BQjGOdOZ.js";import"./useBackwardsCompatibleTheme--hv8ghFv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dp2lwUDn.js";import"./index-CkpdDqnf.js";import"./index-CK2GwVFT.js";import"./RechartsWrapper-D4X8qM3L.js";import"./axisSelectors-fwkbTSQU.js";import"./throttle-Bf7HFTSb.js";import"./d3-scale-DPpdjCkc.js";import"./index-BEIQXCWA.js";import"./index-C4vHDdGM.js";import"./renderedTicksSlice-XS0yYXwf.js";import"./index-DFXXQ9h7.js";import"./CartesianAxis-B062qB3S.js";import"./Layer-DykiohLY.js";import"./types-CBGkJi7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ct7y2r_J.js";import"./chartDataContext-BzLrqzRe.js";import"./CategoricalChart-DNXrcn0T.js";import"./Symbols-Dw-ATZdW.js";import"./symbol-Cfz1UmnV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-JTP_ODLW.js";import"./uniqBy-CnCANcHU.js";import"./iteratee-CdLDDlyj.js";import"./AnimatedItems-DoJommjq.js";import"./useAnimationId-BEfI3V-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbDRcByH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ccGnTT5q.js";import"./tooltipContext-DnF1Rmhb.js";import"./RegisterGraphicalItemId-D1erTERG.js";import"./ErrorBarContext-Bffy1Kmi.js";import"./GraphicalItemClipPath-C1v82me1.js";import"./SetGraphicalItem-CT3FOcLU.js";import"./getZIndexFromUnknown-D0nf7nCV.js";import"./useGraphicalItemIdentity-CGETAvly.js";import"./dataEntryStyles-3o-er-t1.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
