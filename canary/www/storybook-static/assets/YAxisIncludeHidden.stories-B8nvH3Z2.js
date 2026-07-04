import{r as f,R as e}from"./iframe-BMwTDcev.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CCCDM9CF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CPh4fBg6.js";import{C as k}from"./ComposedChart-DZYtQfew.js";import{X as K}from"./XAxis-7lt7L-uw.js";import{L as v}from"./Legend-NAo33OPm.js";import{B as s}from"./Bar-Sbr_1d-q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DZkRw9Hy.js";import"./Layer-DhxEcDzW.js";import"./resolveDefaultProps-DPnbdQu5.js";import"./Text-JRu-Gvgm.js";import"./DOMUtils-BEqLO6hC.js";import"./isWellBehavedNumber-BJdFuSyd.js";import"./Label-nIa50DhA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzcpQumx.js";import"./index-CE-0bGiS.js";import"./index-3001YAOl.js";import"./types-zXcSMCPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Co-nhFmz.js";import"./throttle-D2Td0Lm2.js";import"./RechartsWrapper-BRX6xo6C.js";import"./index-ya5mjY_f.js";import"./index-CVc-PuqQ.js";import"./axisSelectors-sdy2ioo_.js";import"./d3-scale-Dl0VFgtV.js";import"./CartesianChart-BteRC4rl.js";import"./chartDataContext-CXqd6BGE.js";import"./CategoricalChart-CdHUt0U8.js";import"./Symbols-CTn4qtz4.js";import"./symbol-Dy07bA17.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CtkGwEHZ.js";import"./uniqBy-pyVWw1j2.js";import"./iteratee-CJeFQgUm.js";import"./tooltipContext-C32om4rY.js";import"./AnimatedItems-BgUudFYn.js";import"./useAnimationId-CiOVdLQp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-By_LjXZY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BPh2ccfV.js";import"./RegisterGraphicalItemId-B8C7xs2e.js";import"./ErrorBarContext-DgB1iysu.js";import"./GraphicalItemClipPath-C1lbmTQ1.js";import"./SetGraphicalItem-D1eQX8Ui.js";import"./getZIndexFromUnknown-78UrIRyD.js";import"./graphicalItemSelectors-B0JMcxas.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
