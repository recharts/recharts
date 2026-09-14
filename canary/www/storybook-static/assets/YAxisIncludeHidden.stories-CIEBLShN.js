import{r as f,R as e}from"./iframe-n-o_GhOg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CMjiedBc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-rH1Vz5Mp.js";import{C as k}from"./ComposedChart-B569yWTF.js";import{X as K}from"./XAxis-D3N7JqFL.js";import{L as v}from"./Legend-BgbqAGT0.js";import{B as a}from"./Bar-DxfdkGBC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CNUZ8IJr.js";import"./Text-SNR8n6Fx.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./DOMUtils-c7gF72Lb.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RuyYCT_q.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./RechartsWrapper-_cU67sC5.js";import"./axisSelectors-CZyPeZLC.js";import"./throttle-C59GD_w_.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./CartesianAxis-_Tflg6Fj.js";import"./Layer-DpixjnOX.js";import"./types-D19g2GXX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./Symbols-aG0O7e-s.js";import"./symbol-DDHaGIGb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-7vo21qqB.js";import"./uniqBy-B49bM81v.js";import"./iteratee-DelPt-ee.js";import"./AnimatedItems-BXuL_9-l.js";import"./useAnimationId-Bs6Pq3h0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wO11WXpz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8hxeMxzA.js";import"./tooltipContext-Bxjr2TM7.js";import"./RegisterGraphicalItemId-D70QTB5K.js";import"./ErrorBarContext-BSDbxWtX.js";import"./GraphicalItemClipPath-Ce-x1jHU.js";import"./SetGraphicalItem-0HQpcTKH.js";import"./getZIndexFromUnknown-D6gYVuPo.js";import"./useGraphicalItemIdentity-BKlZkD6N.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
