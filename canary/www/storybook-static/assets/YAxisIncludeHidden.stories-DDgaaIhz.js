import{r as f,R as e}from"./iframe-HFtXtWDU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DsjAAI5S.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cqq8ngM8.js";import{C as k}from"./ComposedChart-CDdAMZJx.js";import{X as K}from"./XAxis-BpsaCJf7.js";import{L as v}from"./Legend-Da62BJrp.js";import{B as s}from"./Bar-YSzhDfJh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BnlRkakD.js";import"./Layer-DWG7b0hl.js";import"./resolveDefaultProps-CtgsYIUG.js";import"./Text-CDRZZb9B.js";import"./DOMUtils-Cr-MkK7_.js";import"./isWellBehavedNumber-DknTQDme.js";import"./Label-BrbXEreR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0igMx-O2.js";import"./index-CfzmDy1X.js";import"./index-qsTytkhm.js";import"./types-CqGtNHfB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CnA3aPIs.js";import"./throttle-BOHTa9OG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-3eKbtU-n.js";import"./index-CX6-2c79.js";import"./index-DpFOPUyx.js";import"./axisSelectors-DgDHkI2g.js";import"./d3-scale-BFpMyz7A.js";import"./CartesianChart-Chec9F6S.js";import"./chartDataContext-v3QpNePy.js";import"./CategoricalChart-wF3j6ivZ.js";import"./Symbols-TDHQ499_.js";import"./symbol-BjgqCFXe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DddFNO6b.js";import"./uniqBy-DB3_HqTc.js";import"./iteratee-D-KV-lOb.js";import"./tooltipContext-C34k9vkX.js";import"./AnimatedItems-uy3iUhMQ.js";import"./useAnimationId-CzZVkbxz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1hle0OgU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYmG8TYR.js";import"./RegisterGraphicalItemId-CYdn0cBX.js";import"./ErrorBarContext-uHz1jF0z.js";import"./GraphicalItemClipPath-njx9wXrL.js";import"./SetGraphicalItem-7uBPAKUB.js";import"./getZIndexFromUnknown-BeIvHtB6.js";import"./graphicalItemSelectors-B_8Rkk91.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
