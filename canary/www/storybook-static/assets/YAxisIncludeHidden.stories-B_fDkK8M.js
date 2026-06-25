import{r as f,R as e}from"./iframe-CpH4jn8g.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-D5kjy0nv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CMsbRcVo.js";import{C as k}from"./ComposedChart-DZX4aRXt.js";import{X as K}from"./XAxis-BqLLe0Cs.js";import{L as v}from"./Legend-qFKfEDy9.js";import{B as s}from"./Bar-B_M6vUB_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DfDzGUS7.js";import"./CartesianAxis-lejBVVP2.js";import"./Layer-CpyyR4fH.js";import"./resolveDefaultProps-DGN954Kv.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./Label-BID2wGRS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-FLcdyCMW.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./types-CDIAbI3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./immer-C21IJxSF.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./axisSelectors-Bq_vtAr0.js";import"./d3-scale-hekr18xW.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./Symbols-D2ZazDGw.js";import"./symbol-LM65-9kf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-FeBedyZd.js";import"./uniqBy-DybamGh7.js";import"./iteratee-D0Q2blRW.js";import"./tooltipContext-CHsPQpje.js";import"./AnimatedItems-BjSZm7AL.js";import"./useAnimationId-DOUqN62f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BETJzIFT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./ErrorBarContext-DQcN79r3.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getZIndexFromUnknown-Bv7SaV46.js";import"./graphicalItemSelectors-DfedSnqi.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
