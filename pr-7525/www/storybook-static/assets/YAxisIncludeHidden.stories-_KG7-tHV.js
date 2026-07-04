import{r as f,R as e}from"./iframe-D1iFT1mY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CW-ZNT8W.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B6TgBQrN.js";import{C as k}from"./ComposedChart-oca7_NcQ.js";import{X as K}from"./XAxis-zY-Ami2t.js";import{L as v}from"./Legend-BTLJBjOT.js";import{B as s}from"./Bar-xg32_Y6M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-HsnRG105.js";import"./Layer-FA9hcod8.js";import"./resolveDefaultProps-BMIUma5c.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./Label-DT6YPp8b.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8c0NuDUK.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./types-DXiAmoHC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./throttle-CzPbu-Ix.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./axisSelectors-CxzN54IZ.js";import"./d3-scale-DpibCxtP.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./Symbols-CH82EXM3.js";import"./symbol-CYXjKspB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BL3e6iYA.js";import"./uniqBy-VJyTBDYH.js";import"./iteratee-XPzf7EjH.js";import"./tooltipContext-C2c4wP3L.js";import"./AnimatedItems-LcNNhy-w.js";import"./useAnimationId-CoQh4DtZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-V-255kdt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BKYrsUZj.js";import"./RegisterGraphicalItemId-DRA4KH43.js";import"./ErrorBarContext-mOiZNw9f.js";import"./GraphicalItemClipPath-DfjPk2Kq.js";import"./SetGraphicalItem-B34_j8RK.js";import"./getZIndexFromUnknown-Rvr_Rduc.js";import"./graphicalItemSelectors-Dkxb8D4R.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
