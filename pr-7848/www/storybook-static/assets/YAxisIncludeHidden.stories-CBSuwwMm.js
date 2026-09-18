import{r as f,R as e}from"./iframe-DyNflmpD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DRbcnQBN.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DcbzUDl1.js";import{C as k}from"./ComposedChart-DK3vhTkG.js";import{X as K}from"./XAxis-BRq0uwwt.js";import{L as v}from"./Legend-CoVvwsm0.js";import{B as a}from"./Bar-Cqj-Xi0f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-8baFJ3SD.js";import"./Text-DubbQCtu.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./DOMUtils-CnMp_f2C.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkImCK5k.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./RechartsWrapper-DcT-g24f.js";import"./axisSelectors-D8oAfUCo.js";import"./throttle-JOKyqjkh.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./index-D1o802DX.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./CartesianAxis-FmtEoT3c.js";import"./Layer-BAK3mXOF.js";import"./types-BmhrOP68.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./Symbols-CjUN-vzP.js";import"./symbol-tC-AzMw7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yI9njwCE.js";import"./uniqBy-3XMkSlBq.js";import"./iteratee-CgqxdBPn.js";import"./AnimatedItems-Bg7iXKcU.js";import"./useAnimationId-B6Hjzqdy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ewchM9Jh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./tooltipContext-DMH8dqMh.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getZIndexFromUnknown-BgbHQNkS.js";import"./useGraphicalItemIdentity-BUorwys7.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
