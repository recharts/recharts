import{r as f,R as e}from"./iframe-C7jIZL6o.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-w5VbFl9t.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BnlSqkDK.js";import{C as k}from"./ComposedChart-BKTk_vyX.js";import{X as K}from"./XAxis-CTYxjOVZ.js";import{L as v}from"./Legend-B9Qrx366.js";import{B as s}from"./Bar-Ay8FbuMt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-H_VCaiK7.js";import"./CartesianAxis-iRUdZDvI.js";import"./Layer-BCVE1kDT.js";import"./resolveDefaultProps-DUb7sDlC.js";import"./Text-olerkQs4.js";import"./DOMUtils-yTKptuJ8.js";import"./isWellBehavedNumber-C3vUk83l.js";import"./Label-D0um-vtH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRAdfR1Z.js";import"./index-B3xQbeZu.js";import"./index-Bovuavvd.js";import"./types-DLi_I9qn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Birh5NDk.js";import"./immer-BOr4g5Y7.js";import"./RechartsWrapper-Dl0_CiQp.js";import"./index-B-BRc6T6.js";import"./index-B9TBnend.js";import"./axisSelectors-EwOPdfxu.js";import"./d3-scale-CRcY7xoU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DrR5EsNs.js";import"./chartDataContext-CAMuJJ0l.js";import"./CategoricalChart-CUzYs4pg.js";import"./Symbols-DVLyZtvx.js";import"./symbol-DjcvBl0m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CebXInqc.js";import"./uniqBy-jLv--wkj.js";import"./iteratee-Bl16rMt0.js";import"./tooltipContext-Dn_wq6oE.js";import"./AnimatedItems-CcF7dW3l.js";import"./useAnimationId-B6ozUAwY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRO6EB0t.js";import"./ActiveShapeUtils-E8cq6prr.js";import"./RegisterGraphicalItemId-D1djZTUZ.js";import"./ErrorBarContext-B42jzrUJ.js";import"./GraphicalItemClipPath-CFgBJqlA.js";import"./SetGraphicalItem-DKs6sIFw.js";import"./getZIndexFromUnknown-DyhbKTqH.js";import"./graphicalItemSelectors-CRIMlrDD.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
