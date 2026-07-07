import{r as f,R as e}from"./iframe-BZg1zG5B.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CworNICM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CkkPSViG.js";import{C as k}from"./ComposedChart-Czc2DQcq.js";import{X as K}from"./XAxis-BFO1dJFq.js";import{L as v}from"./Legend-ygKZqW3s.js";import{B as s}from"./Bar-C0RiEweN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CqYm8UKw.js";import"./Layer-AM2ZERM9.js";import"./resolveDefaultProps-CI_HL12t.js";import"./Text-K_EkIkuP.js";import"./DOMUtils-Bs3ZzMQS.js";import"./isWellBehavedNumber-Bk-91M8w.js";import"./Label-D1KCxb60.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-oU6a0KMz.js";import"./index-BzAnTBpk.js";import"./index-Cmvzg-0C.js";import"./types-CP45QuEc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DxnsaDc8.js";import"./throttle-DFHrPmFV.js";import"./RechartsWrapper-DyRofC5m.js";import"./index-DuAyB1ct.js";import"./index-BSOub4mJ.js";import"./axisSelectors-CZQj26DE.js";import"./d3-scale-CHbHYnH2.js";import"./CartesianChart-NJt7vXp9.js";import"./chartDataContext-gkePnQjL.js";import"./CategoricalChart-CacFZjBO.js";import"./Symbols-DSd1EVM7.js";import"./symbol-RD3e_Ysr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-vOgnM54n.js";import"./uniqBy-38RNx4xl.js";import"./iteratee-OjymSSaI.js";import"./tooltipContext-Cpa5bPP9.js";import"./AnimatedItems-C9XnYXoB.js";import"./useAnimationId-D8zRqkvh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-p2Bv9KHw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9Jnofarx.js";import"./RegisterGraphicalItemId-CnFfEqxk.js";import"./ErrorBarContext-HRURTUgd.js";import"./GraphicalItemClipPath-DCZKfxi9.js";import"./SetGraphicalItem-DRJD094C.js";import"./getZIndexFromUnknown-Dy9uoi9q.js";import"./graphicalItemSelectors-DZoCF1F0.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
