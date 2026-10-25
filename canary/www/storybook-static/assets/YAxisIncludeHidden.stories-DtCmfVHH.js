import{r as f,R as e}from"./iframe-aKV-O9MJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ch3CqHid.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BKaqyajB.js";import{C as k}from"./ComposedChart-DApYnnbw.js";import{X as K}from"./XAxis-lhBNyzg_.js";import{L as v}from"./Legend-B_eYmoQf.js";import{B as a}from"./Bar-CTfxUez8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-zwi5-GQg.js";import"./Text-CopK1C24.js";import"./resolveDefaultProps-HqSLYtX8.js";import"./pageBackground-D0AIP4to.js";import"./isWellBehavedNumber-DhfM3JhV.js";import"./useId-CnmqgkQl.js";import"./useBackwardsCompatibleTheme-w5mekw_9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-A9-ipKwv.js";import"./index-CgdfyZHj.js";import"./index-CpNUBple.js";import"./dataEntryStyles-BzKYf-di.js";import"./axisSelectors-MbFPBavU.js";import"./throttle-Be3j2pw2.js";import"./d3-scale-CsyBOG8O.js";import"./CartesianAxis-Dm5On8Gk.js";import"./Layer-07gJ6FIr.js";import"./types-DTpzWv6l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-WTymoNbk.js";import"./index-D1DeZs1S.js";import"./index-HoQ8qajG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CMYKJCfZ.js";import"./index-C12TwcvC.js";import"./CartesianChart-C2vgDwW7.js";import"./chartDataContext-DB9-FPl4.js";import"./CategoricalChart-CDZMqsPI.js";import"./Symbols-Dqx3Vy8L.js";import"./symbol-D9UJ3By9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKf5VsK_.js";import"./uniqBy-BTRGg67Z.js";import"./iteratee-BvKBaWIX.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BvRJtjMn.js";import"./useAnimationId-Cb-3p2b2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bpv-EdUE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDtOvQ0I.js";import"./tooltipContext-B4EHNace.js";import"./RegisterGraphicalItemId-CFnb1OFM.js";import"./ErrorBarContext-Bqn6HxNU.js";import"./SetGraphicalItem-BtHSeMoh.js";import"./getZIndexFromUnknown-CDEqKyca.js";import"./useEffectiveDataKey-B3-MKjEu.js";import"./omit-DTcIMCrv.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
