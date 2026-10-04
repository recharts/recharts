import{r as f,R as e}from"./iframe-BRRwZ9OM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-QWCMNG8w.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-HqKAKynn.js";import{C as k}from"./ComposedChart-BgZB43-v.js";import{X as K}from"./XAxis-34NAxun3.js";import{L as v}from"./Legend-DRO1g7hl.js";import{B as a}from"./Bar-Bbdg2Kf-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BF1g4qnl.js";import"./Text-m4YXivgw.js";import"./resolveDefaultProps-CZ3dceSm.js";import"./DOMUtils-kcWo8Tu5.js";import"./isWellBehavedNumber-PSI2l2A6.js";import"./useId-DqioIEDp.js";import"./useBackwardsCompatibleTheme-BRwc3p-N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1LIYZVJ.js";import"./index-C-3qUDzk.js";import"./index-dIUimeeY.js";import"./RechartsWrapper-BuRv36IR.js";import"./axisSelectors-Duf7CX9E.js";import"./throttle-CI7PhwKd.js";import"./d3-scale-CSNIZQpC.js";import"./index-D46Km6-p.js";import"./index-BjAGoEo5.js";import"./renderedTicksSlice-D7aXzM-e.js";import"./index-Ce-PaXeC.js";import"./CartesianAxis-Dgab3bjn.js";import"./Layer-DaA93mOO.js";import"./types-BTYbdlsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DeYwOeaV.js";import"./chartDataContext-C1k0ydEu.js";import"./CategoricalChart-CWBsWl6U.js";import"./Symbols-BDXxh8ib.js";import"./symbol-CWxaNYuB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-j1dL7wm3.js";import"./uniqBy-Bc7r0gcZ.js";import"./iteratee-cCh71UMl.js";import"./AnimatedItems-Dxhu-tqD.js";import"./useAnimationId-WhlrcPo0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUtmhkWL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiAhe8wn.js";import"./tooltipContext-CxLEjHbB.js";import"./RegisterGraphicalItemId-x9sXDMnN.js";import"./ErrorBarContext-WHUbM02-.js";import"./GraphicalItemClipPath-5REgjKEh.js";import"./SetGraphicalItem-BVwAptcr.js";import"./getZIndexFromUnknown-DKrE3eCu.js";import"./useGraphicalItemIdentity-BCsXVCoB.js";import"./dataEntryStyles-rkDUn2gq.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
