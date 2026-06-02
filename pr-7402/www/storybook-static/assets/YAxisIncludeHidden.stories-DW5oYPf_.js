import{P as f,c as e}from"./iframe-CbFBC3pt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DVG7yXmp.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-B8XantvI.js";import{C as k}from"./ComposedChart-Bc5HbX-g.js";import{X as K}from"./XAxis-CuiMGrX2.js";import{L as v}from"./Legend-B3P9K48B.js";import{B as s}from"./Bar-vLlpsNYO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CeJ-O4Ro.js";import"./CartesianAxis-CA9u32-P.js";import"./Layer-DTzSPWpf.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./Label-8xdcvYL4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BgzH297Q.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./types-CX4nwvsZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./immer-BwRByMMH.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./index-TGdP4Icg.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./Symbols-xbBzb2HM.js";import"./symbol-CDDmFjF_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-WNt73Ltm.js";import"./uniqBy-DX3rhGUr.js";import"./iteratee-C94OH8qj.js";import"./tooltipContext-1cf4NF_l.js";import"./ReactUtils-PDSB0db_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaQ7rI5r.js";import"./useAnimationId-B6jMJ5_9.js";import"./ActiveShapeUtils-CC3LhhHX.js";import"./RegisterGraphicalItemId-BWff6MJa.js";import"./ErrorBarContext-eKi9YHyC.js";import"./GraphicalItemClipPath-3Dbzdjfh.js";import"./SetGraphicalItem-D4AnrrJM.js";import"./getZIndexFromUnknown-CV157jOw.js";import"./graphicalItemSelectors-BU-bA2Rl.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
