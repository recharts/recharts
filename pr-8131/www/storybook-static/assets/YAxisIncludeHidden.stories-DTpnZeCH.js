import{r as f,R as e}from"./iframe-CSurJGXt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-COz_c9GE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DeOoXCvu.js";import{C as k}from"./ComposedChart-Bt02-7JT.js";import{X as K}from"./XAxis-DPspp0Rg.js";import{L as v}from"./Legend-DEw1zt_H.js";import{B as a}from"./Bar-DTR8tN3_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B_q4DRvh.js";import"./Text-D1wUWC9f.js";import"./resolveDefaultProps-CLiXTxMl.js";import"./DOMUtils-Ch0i58SB.js";import"./ZIndexLayer-7wO-Br8Q.js";import"./index-BLu4PMPi.js";import"./index-DXQ1HyAX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8qEX0kp.js";import"./throttle-BimBWg8F.js";import"./axisSelectors-BTded_EU.js";import"./d3-scale-wNVR4pxp.js";import"./CartesianAxis-CCV5sIGf.js";import"./Layer-CuCaFJUW.js";import"./types-DAGGFXxQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BulAjXaG.js";import"./index-DL-0zMUZ.js";import"./index-By1e8KSj.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5uJkji8.js";import"./index-BUjegfsF.js";import"./fillDefinitions-Dy2IhL03.js";import"./CartesianChart-BYJBOySk.js";import"./ZIndexPortal-B_GPxKbG.js";import"./CategoricalChart-CMXRpEe-.js";import"./Symbols-C4saACxL.js";import"./symbol-XqakD_BN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_rvnf9W.js";import"./uniqBy-E8SwNtbJ.js";import"./iteratee-C1NgR1np.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Dzy6Gaop.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1IvnXW0.js";import"./useAnimationId-BxuBL60s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lYTYoEV1.js";import"./tooltipContext-DxTbI9zA.js";import"./dataEntryStyles-DMbzXUIb.js";import"./ErrorBarContext-ORq27qm1.js";import"./activeStyles-DIe-HGPn.js";import"./SetGraphicalItem-S8ZD9BPZ.js";import"./getZIndexFromUnknown-DJ6dv0rU.js";import"./useEffectiveDataKey-DXY519D2.js";import"./omit-CQ7623FA.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
