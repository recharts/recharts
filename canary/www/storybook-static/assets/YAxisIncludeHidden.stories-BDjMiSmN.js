import{r as f,R as e}from"./iframe-BWgNvoHd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cw1g73tC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C7P0LeTp.js";import{C as k}from"./ComposedChart-CDicU1zI.js";import{X as K}from"./XAxis-NaVI4shj.js";import{L as v}from"./Legend-CrwpKrLS.js";import{B as a}from"./Bar-BBTzfxY9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B5Qmh4rZ.js";import"./Text-CY7tJJcL.js";import"./resolveDefaultProps-BWCwlNwt.js";import"./DOMUtils-Dr6Nulpk.js";import"./isWellBehavedNumber-CM5YB1xm.js";import"./useId-BqfKGNe3.js";import"./useBackwardsCompatibleTheme-CAXCwkj5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cmt_sSM5.js";import"./index-DmnQYdaI.js";import"./index-CK7j19MQ.js";import"./RechartsWrapper-CqggqYnG.js";import"./axisSelectors-Dam-iDrH.js";import"./throttle-Bg-BpQUC.js";import"./d3-scale-CFMZ35Kl.js";import"./index-BqzBYwQc.js";import"./index-FyKmNOxh.js";import"./renderedTicksSlice-Dqzed6yg.js";import"./index-ldLlQXbm.js";import"./CartesianAxis-ChN3yMr6.js";import"./Layer-C3eYLIIL.js";import"./types-CrSccog6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dh0jr6Yv.js";import"./chartDataContext-BK5iZPJH.js";import"./CategoricalChart-BAKFtZDW.js";import"./Symbols-DXOe_3B0.js";import"./symbol-BSkZIEXR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DTfG1d0_.js";import"./uniqBy-b4mUNSGI.js";import"./iteratee-BEUkWsOH.js";import"./AnimatedItems-hZV-WKF8.js";import"./useAnimationId-Bc7y922J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBMXDrA6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BslnG83G.js";import"./tooltipContext-BJeljRjS.js";import"./RegisterGraphicalItemId-DD6KbxKE.js";import"./ErrorBarContext-CCrZclZc.js";import"./GraphicalItemClipPath-MkJi9iI4.js";import"./SetGraphicalItem-BxHdn_2c.js";import"./getZIndexFromUnknown-D-oalug2.js";import"./useGraphicalItemIdentity-BBFCWIMQ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
