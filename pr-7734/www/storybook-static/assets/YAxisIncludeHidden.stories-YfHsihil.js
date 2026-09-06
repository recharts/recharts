import{r as f,R as e}from"./iframe-CdBlg-At.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CCdrxwQa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bd2ctzyz.js";import{C as k}from"./ComposedChart-Ba360Gul.js";import{X as K}from"./XAxis-2XVZuSLi.js";import{L as v}from"./Legend-CcznjWgK.js";import{B as a}from"./Bar-BhLqHXXE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BhvRy9p8.js";import"./Text-B72QzR_J.js";import"./resolveDefaultProps-BE0meIIe.js";import"./DOMUtils-B8jV7L5A.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRtQaXip.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./RechartsWrapper-BtwnjrPH.js";import"./axisSelectors-B8B8qq9w.js";import"./throttle-BMwUG5uc.js";import"./d3-scale-BBzFAB1R.js";import"./index-BTlZQ11f.js";import"./index-COSgbA9u.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./CartesianAxis-CVVHUAde.js";import"./Layer-DJ6KlbON.js";import"./types-BwgN4eIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-5haPaxu4.js";import"./chartDataContext-8OMpeo_C.js";import"./CategoricalChart-KxwhOg8o.js";import"./Symbols-DsDFX5_W.js";import"./symbol-BOju37_N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhmioEfl.js";import"./uniqBy-CvvZwjKG.js";import"./iteratee-DqsE923K.js";import"./AnimatedItems-DF8TZk9M.js";import"./useAnimationId-C5J-XAz0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-WNRZi7C8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DmMWVfaj.js";import"./tooltipContext-Bc2kp5o4.js";import"./RegisterGraphicalItemId-CHEBFfi8.js";import"./ErrorBarContext-CT7bwl-o.js";import"./GraphicalItemClipPath-DCCqyqY0.js";import"./SetGraphicalItem-BiBqIxpO.js";import"./getZIndexFromUnknown-B0wpRjkL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Df1fayRD.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
