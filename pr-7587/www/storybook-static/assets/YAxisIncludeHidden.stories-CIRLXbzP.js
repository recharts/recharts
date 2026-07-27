import{r as f,R as e}from"./iframe-DPsVQxbE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BS8G-HFw.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-1brzNbqc.js";import{C as k}from"./ComposedChart-DGN6ie7I.js";import{X as K}from"./XAxis-CYt1-RxN.js";import{L as v}from"./Legend-CTD1e9MS.js";import{B as s}from"./Bar-DoXsTAuM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D5qEkVje.js";import"./Layer-DGWGYgzk.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./Label-C2Rhcs8s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MqiRX2rl.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./types-ColFKgNS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./throttle-Cj8wAsiz.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./axisSelectors-CEp7-2uA.js";import"./d3-scale-BNrinBxy.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./Symbols-kHTiKlEK.js";import"./symbol-CakplyVk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-d53krvrq.js";import"./uniqBy-DsIVeImw.js";import"./iteratee-CvNQaPV0.js";import"./tooltipContext-JSmrFWXh.js";import"./AnimatedItems-BlseN1Dx.js";import"./useAnimationId-CtVxLpdf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYpMekmC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getZIndexFromUnknown-Pv3L6gc-.js";import"./graphicalItemSelectors-CnK9mn1U.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
