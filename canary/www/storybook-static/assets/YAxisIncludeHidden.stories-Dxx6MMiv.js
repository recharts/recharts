import{r as f,R as e}from"./iframe-eHTE8XbR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BfTKYpb9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CwHm8jEL.js";import{C as k}from"./ComposedChart-BxOpXvKQ.js";import{X as K}from"./XAxis-Cvnzf1dT.js";import{L as v}from"./Legend-QRCMyOs4.js";import{B as a}from"./Bar-CYe-FamI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BHKNCvXv.js";import"./Text-qSZv8Fj3.js";import"./resolveDefaultProps-l2cuQuhM.js";import"./DOMUtils-C0F5dZFI.js";import"./isWellBehavedNumber-BEewLsBb.js";import"./useId-6ohiSOpB.js";import"./useBackwardsCompatibleTheme-BGy_-u8K.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPdP9SWD.js";import"./index-Dxr-7wC-.js";import"./index-gcAHcJS-.js";import"./RechartsWrapper-DGSwepyW.js";import"./axisSelectors-CazxXIUK.js";import"./throttle-D7Re1Y2w.js";import"./d3-scale-CyTtDi_G.js";import"./index-BaEdESzW.js";import"./index-sqcRhlaW.js";import"./renderedTicksSlice-GO_dvkn7.js";import"./index-1QxhuPS4.js";import"./CartesianAxis-Dyb6UtbO.js";import"./Layer-Rvjy0lqp.js";import"./types-BOeFjqIc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DWMHxp7T.js";import"./chartDataContext-B57YfjZ7.js";import"./CategoricalChart-NxXAGTpx.js";import"./Symbols-DDfe-hwq.js";import"./symbol-D-YCUPvh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bry01jEA.js";import"./uniqBy-BULF0lLX.js";import"./iteratee-rBBB7cDD.js";import"./AnimatedItems-iYX-QLNJ.js";import"./useAnimationId-Dn1LCCOz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4GCLYDl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DCxXoOp2.js";import"./tooltipContext-DOYr1Oo-.js";import"./RegisterGraphicalItemId-Cmo8QrR_.js";import"./ErrorBarContext-B3ngcVu0.js";import"./GraphicalItemClipPath-Dm2FfYtP.js";import"./SetGraphicalItem-Byf3PY1O.js";import"./getZIndexFromUnknown-DKStHV64.js";import"./useGraphicalItemIdentity-Bl8ISiJK.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
