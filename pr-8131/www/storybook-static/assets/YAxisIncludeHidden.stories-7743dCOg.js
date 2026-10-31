import{r as f,R as e}from"./iframe-SkF1Z4RX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BRrjXnEX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Di849QVt.js";import{C as k}from"./ComposedChart-CQq3s6LL.js";import{X as K}from"./XAxis-D03_TvJt.js";import{L as v}from"./Legend-Dp-pWpoA.js";import{B as a}from"./Bar-BVJG8KM3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cq-EymG9.js";import"./Text-BJaHuQQc.js";import"./resolveDefaultProps-Doom015c.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BotG4f4O.js";import"./throttle-DtLWJI8N.js";import"./axisSelectors-BsfIJIuR.js";import"./d3-scale-CkXd-iRe.js";import"./CartesianAxis-C8zLGICr.js";import"./Layer-CVy-0b4t.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D7eCqZJw.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BCa24z6l.js";import"./uniqBy-CFMexfao.js";import"./iteratee-CvWL5GPd.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-iUgi9C9_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeUeWV1w.js";import"./useAnimationId-_Q1GlxqN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./tooltipContext-DPtGy-7-.js";import"./dataEntryStyles-BsghJbw2.js";import"./ErrorBarContext-DFT45or-.js";import"./activeStyles-f736jV_-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getZIndexFromUnknown-BZWBqZNJ.js";import"./useEffectiveDataKey-DnqAh09W.js";import"./omit-CbZkK91b.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
