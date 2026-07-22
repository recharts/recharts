import{r as f,R as e}from"./iframe-Cy6UHwH8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Czbc2cL9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dv2HqMCj.js";import{C as k}from"./ComposedChart-Dm8MO2Et.js";import{X as K}from"./XAxis-BEHj4vqI.js";import{L as v}from"./Legend-CHfq6ixo.js";import{B as s}from"./Bar-B-_IkChf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D4Lg0Pka.js";import"./Layer-Ju7yA9Ak.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./Label-D4x62xM0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhFWLYxf.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./types-Wlq7LyUb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./throttle-CrXcydw9.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./axisSelectors-DXOe3ZcM.js";import"./d3-scale-Bvw0bMMA.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./Symbols-COXnL47l.js";import"./symbol-CcEOpE0b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CogvFxV1.js";import"./uniqBy-BpJlFfbc.js";import"./iteratee-DsECz__7.js";import"./tooltipContext-CzT9W937.js";import"./AnimatedItems-P3TyXGJ4.js";import"./useAnimationId-q_i8pRM6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NwWJwHZO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./ErrorBarContext-DbNi8xqP.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getZIndexFromUnknown-Bxnmr_BJ.js";import"./graphicalItemSelectors-CUpJgTvK.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
