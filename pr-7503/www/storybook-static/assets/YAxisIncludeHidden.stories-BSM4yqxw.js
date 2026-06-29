import{r as f,R as e}from"./iframe-yOPx9Gik.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CkktISrz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D67vVDIo.js";import{C as k}from"./ComposedChart-CNKZcRKd.js";import{X as K}from"./XAxis-CJ8HGhD8.js";import{L as v}from"./Legend-D02SZGli.js";import{B as s}from"./Bar-CWyWiV7T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfHGT2kl.js";import"./CartesianAxis-C7MTbV32.js";import"./Layer-Bwtnd2Qr.js";import"./resolveDefaultProps-DB1B-raE.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./Label-BqUT8U7H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4R3RCf9.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./types-BJAf4K7V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./immer-MwiuxAbo.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./Symbols-DEw2IZw_.js";import"./symbol-DX-jtzBs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DPzY_T8I.js";import"./uniqBy-B8wALonH.js";import"./iteratee-C7Rvqn86.js";import"./tooltipContext-D5XslCAM.js";import"./AnimatedItems-CE38GYBB.js";import"./useAnimationId-D3arzwOC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeKBG9DN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./ErrorBarContext-qp41ygoF.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getZIndexFromUnknown-D_za1m-1.js";import"./graphicalItemSelectors-D7_dqTyQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
