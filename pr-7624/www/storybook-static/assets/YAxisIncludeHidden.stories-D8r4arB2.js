import{r as f,R as e}from"./iframe-DQ5pdRpT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B3S1-9pB.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DQojUU3D.js";import{C as k}from"./ComposedChart-4NtsiuE-.js";import{X as K}from"./XAxis-BbDJVinv.js";import{L as v}from"./Legend-DJCD1p7S.js";import{B as s}from"./Bar-Dq-qj83O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ogcMQvX_.js";import"./Text-BbwznCj8.js";import"./resolveDefaultProps-C2j2eShk.js";import"./DOMUtils-3opGu7KJ.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LAqpTUNY.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./throttle-j7vxqIWJ.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./CartesianAxis-9E3w2iOb.js";import"./Layer-BrLbSCb2.js";import"./types-DwD8FSIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./Symbols-CEQie_2C.js";import"./symbol-CBHGzcW_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXvuwe-z.js";import"./uniqBy-Ccyf9NaN.js";import"./iteratee-DbAGhbRW.js";import"./tooltipContext-B3UCEZjV.js";import"./AnimatedItems-Bmg4d13Y.js";import"./useAnimationId-Bjim9SiW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BmXaPyvq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZRRc_Clb.js";import"./RegisterGraphicalItemId-gNTwGCiB.js";import"./ErrorBarContext-PCXvp0W_.js";import"./GraphicalItemClipPath-Cbyv8QGz.js";import"./SetGraphicalItem-BopL2iik.js";import"./getZIndexFromUnknown-BKOAK6BZ.js";import"./graphicalItemSelectors-JD8lH9Rn.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
