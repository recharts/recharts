import{r as f,R as e}from"./iframe-DpsH3FWg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BVDotbGx.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DpXR3r86.js";import{C as k}from"./ComposedChart-CPIOfZdo.js";import{X as K}from"./XAxis-D8_Sc658.js";import{L as v}from"./Legend-D7vb3GG_.js";import{B as a}from"./Bar-eLCPm9Oi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-3DC01MfC.js";import"./Text-SIhZd4Wm.js";import"./resolveDefaultProps-B653NMBN.js";import"./DOMUtils-BqoTnLQ5.js";import"./isWellBehavedNumber-CtQQO4KW.js";import"./useId-T5MCLwe8.js";import"./useBackwardsCompatibleTheme-Buw_TzFQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DviGCp3_.js";import"./index-nXowbRrq.js";import"./index-DYUXUABx.js";import"./RechartsWrapper-WUMeUOBJ.js";import"./axisSelectors-Cnsws1ta.js";import"./throttle-pd_IuHQK.js";import"./d3-scale-Cs9sdONk.js";import"./index-CIajmslP.js";import"./index-DxSZbnRs.js";import"./renderedTicksSlice-DrH2a5-v.js";import"./index-CVZddw2l.js";import"./CartesianAxis-CWPiqkJL.js";import"./Layer-Btr6yg86.js";import"./types-FBSj3Ggh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C8K3fZMD.js";import"./chartDataContext-_uRDQIfr.js";import"./CategoricalChart-DsF0HvmF.js";import"./Symbols-saiSGD9Z.js";import"./symbol-C8mnB45c.js";import"./path-DyVhHtw_.js";import"./useElementOffset-eYeZo5wP.js";import"./uniqBy-BuW3nUeI.js";import"./iteratee-Burh-v8j.js";import"./AnimatedItems-BAz_Z0dD.js";import"./useAnimationId-CkVnF8is.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B1vLC_1K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHwgxjaA.js";import"./tooltipContext-CkYLS92J.js";import"./RegisterGraphicalItemId-Byr_SbEj.js";import"./ErrorBarContext-Dy-Oq2cq.js";import"./GraphicalItemClipPath--FUz8cke.js";import"./SetGraphicalItem-eZDMBVc_.js";import"./getZIndexFromUnknown-B53VTmQU.js";import"./useGraphicalItemIdentity-DH6n4cBQ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
