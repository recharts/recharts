import{r as f,R as e}from"./iframe-BYFAmtTx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D2uzSmxi.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cpa1SLkC.js";import{C as k}from"./ComposedChart-Dn3fezmm.js";import{X as K}from"./XAxis-CrRUVNvL.js";import{L as v}from"./Legend-M760yFye.js";import{B as a}from"./Bar-MdIqKH67.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DbWQNQho.js";import"./Text-BflMB0k7.js";import"./resolveDefaultProps-BRjUIPxP.js";import"./DOMUtils-C-XY0CD-.js";import"./isWellBehavedNumber-DghiGM0-.js";import"./useId-DFIORHHp.js";import"./useBackwardsCompatibleTheme-Bwairpph.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-So4aUaj6.js";import"./index-y_H2sp7r.js";import"./index-BfUFBuzY.js";import"./RechartsWrapper-gz3ID__y.js";import"./axisSelectors-Fcxl1qih.js";import"./throttle-BncnDTze.js";import"./d3-scale-BWLi0PrL.js";import"./index-2r1iX6kD.js";import"./index-BnUV9qdG.js";import"./renderedTicksSlice-B5lYG2UO.js";import"./index-bDOV_Sp5.js";import"./CartesianAxis-Berywq5j.js";import"./Layer-CpiNCVXM.js";import"./types-CaHoHJJ-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CyzDI5B8.js";import"./chartDataContext-Dh2caTLe.js";import"./CategoricalChart-C6KS2LQO.js";import"./Symbols-s1P-C1j4.js";import"./symbol-6_mfp67r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_9jVPkcB.js";import"./uniqBy-Cz6dajQ_.js";import"./iteratee-B1BJ9kBw.js";import"./AnimatedItems-BVLC3LcC.js";import"./useAnimationId-CVJf-EC8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DG9B685L.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cm0ONgWE.js";import"./tooltipContext-DrhGoNFI.js";import"./RegisterGraphicalItemId-CmRCopob.js";import"./ErrorBarContext-D5SoE2yk.js";import"./GraphicalItemClipPath-xNgZEk9E.js";import"./SetGraphicalItem-DY3wRuGw.js";import"./getZIndexFromUnknown-CwSGOvE4.js";import"./useGraphicalItemIdentity-azVLbNjG.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
