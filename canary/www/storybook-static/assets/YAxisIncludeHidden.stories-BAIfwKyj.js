import{r as f,R as e}from"./iframe-CUlWXK_q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-noEkR1dh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DM6pr2-S.js";import{C as k}from"./ComposedChart-BTSMlYc4.js";import{X as K}from"./XAxis-Djxn7jPm.js";import{L as v}from"./Legend-BLIxrjwe.js";import{B as a}from"./Bar-CBMZttDC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CHddXrDn.js";import"./Text-Dwcbogye.js";import"./resolveDefaultProps-D0jJQ7td.js";import"./DOMUtils-C2wyshXr.js";import"./isWellBehavedNumber-dgjlUMt0.js";import"./useId-xdSBMbRU.js";import"./useBackwardsCompatibleTheme-DPUtEB0l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBqpLv67.js";import"./index-DeLCoNGq.js";import"./index-DkyNoZPG.js";import"./RechartsWrapper-C5F4JVOA.js";import"./axisSelectors-BD41NxQw.js";import"./throttle-C_r5ITnz.js";import"./d3-scale-hq__MZkp.js";import"./index-B7A70wTi.js";import"./index-BLklzkKd.js";import"./renderedTicksSlice-BdBFpUvH.js";import"./index-BBeD-IIB.js";import"./CartesianAxis-CvaDBGbl.js";import"./Layer-DTo8-sn1.js";import"./types-C9dSmSxn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CRlJjBxC.js";import"./chartDataContext-NP5kWzmf.js";import"./CategoricalChart-BnjqCNZT.js";import"./Symbols-CsvRLVdW.js";import"./symbol-CgPnmDmb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D67iyqh-.js";import"./uniqBy-MjWJtKt-.js";import"./iteratee-i1UfEwDS.js";import"./AnimatedItems-DODKpEkU.js";import"./useAnimationId-JJOW80s5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCmoInZ0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTWGbocf.js";import"./tooltipContext-Dv4BvnFb.js";import"./RegisterGraphicalItemId-CjUENZzL.js";import"./ErrorBarContext-Ff5dUprW.js";import"./GraphicalItemClipPath-gLO2Kyz_.js";import"./SetGraphicalItem-CLwyvQ_z.js";import"./getZIndexFromUnknown-t73Hq9dl.js";import"./useGraphicalItemIdentity-B9Lyw3Fg.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
