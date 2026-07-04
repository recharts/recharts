import{r as f,R as e}from"./iframe-Bs1YcocL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DPiwbt5y.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-t-gzu3GV.js";import{C as k}from"./ComposedChart-BwzNzHHG.js";import{X as K}from"./XAxis-CkMNNwML.js";import{L as v}from"./Legend-CMH9EFVv.js";import{B as s}from"./Bar-eTb35Wr8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D8VsSsOs.js";import"./Layer-C-8BEA-e.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./Label-XTRgfpgH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CN0cINvr.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./types-DYZE7YT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./throttle--2-Gh3Mm.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./axisSelectors-DMllfokS.js";import"./d3-scale-37tvwNAS.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CategoricalChart-WxCIVI_m.js";import"./Symbols-B5HVxo-V.js";import"./symbol-CTzxYCh9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-i2SJ2I4M.js";import"./uniqBy-DwCD0XBb.js";import"./iteratee-DbbXjD5I.js";import"./tooltipContext-CysZnF7i.js";import"./AnimatedItems-BJx7sqXo.js";import"./useAnimationId-BX2lcr_s.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQAZ15JG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CQH8McUN.js";import"./RegisterGraphicalItemId-CjkTx9Ub.js";import"./ErrorBarContext-CMWCgNCI.js";import"./GraphicalItemClipPath-DVFJRr4Y.js";import"./SetGraphicalItem-Bacz05Gx.js";import"./getZIndexFromUnknown-BAfULdEA.js";import"./graphicalItemSelectors-CfWPzRa0.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
