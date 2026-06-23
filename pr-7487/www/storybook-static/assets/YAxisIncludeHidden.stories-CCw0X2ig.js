import{r as f,R as e}from"./iframe-Dgfa45pO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-XwOa9eE6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C1KjhRe9.js";import{C as k}from"./ComposedChart-DlT_NDd5.js";import{X as K}from"./XAxis-BSLC3Bv_.js";import{L as v}from"./Legend-RF---zeU.js";import{B as s}from"./Bar-C9JUbNld.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BZICNy-w.js";import"./CartesianAxis-DznDQPew.js";import"./Layer-BwLAkNRA.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./Label-Dzw51f8E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./types-C1ZkWqT0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./immer-DVLCs_h8.js";import"./RechartsWrapper-XphNsNZ5.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./Symbols-CMqY6tCx.js";import"./symbol-DjxHbtiD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BqMobiPE.js";import"./uniqBy-A8hmwwhf.js";import"./iteratee-B2FVpM9G.js";import"./tooltipContext-gANt9rxI.js";import"./AnimatedItems-CIa4005N.js";import"./useAnimationId-CjXgi841.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQY8rJu-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./ErrorBarContext-DUzmHtBE.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./getZIndexFromUnknown-Dp2Ioitv.js";import"./graphicalItemSelectors-Bgpj2GzB.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
