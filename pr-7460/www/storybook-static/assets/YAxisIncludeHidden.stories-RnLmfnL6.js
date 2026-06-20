import{r as f,R as e}from"./iframe-D-d0UxKx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-AsX76kO1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BzS2rwPG.js";import{C as k}from"./ComposedChart-CxbWr-tb.js";import{X as K}from"./XAxis-D-U3c8PB.js";import{L as v}from"./Legend-CfUz-HfC.js";import{B as s}from"./Bar-2PKb9nbB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DvwB2phC.js";import"./CartesianAxis-BYNBLpS-.js";import"./Layer-DoiILNSz.js";import"./resolveDefaultProps-BULhiKbt.js";import"./Text-BFbCMtys.js";import"./DOMUtils-BKfb6-ez.js";import"./isWellBehavedNumber-Cwzb-39K.js";import"./Label-1pCxWysR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ikBJbvxL.js";import"./index-hrPGNLyo.js";import"./index-Ch_o8Zsm.js";import"./types-CjTc4pGQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dhujer-i.js";import"./immer-Bcymh1Oy.js";import"./RechartsWrapper-eUO8gZBV.js";import"./index-BFabSAMq.js";import"./index-CSjSfLNV.js";import"./axisSelectors-gJCz_NoR.js";import"./d3-scale-CAmzDAEa.js";import"./CartesianChart-CfHu0MoO.js";import"./chartDataContext-SgkfnsQg.js";import"./CategoricalChart-_USPwHCV.js";import"./Symbols-DvPqf0ou.js";import"./symbol-l5NtWDxl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dy9eSR4I.js";import"./uniqBy-IX-17FwE.js";import"./iteratee-BSWYHyHw.js";import"./tooltipContext-BueOG8C5.js";import"./AnimatedItems-BX5PTjVC.js";import"./useAnimationId-TLS-J4It.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBqM3f2v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BYmp4x7X.js";import"./RegisterGraphicalItemId-P4cnc2kT.js";import"./ErrorBarContext-9wDlrEu1.js";import"./GraphicalItemClipPath-CHhCw_J2.js";import"./SetGraphicalItem-B0zIa8gn.js";import"./getZIndexFromUnknown-PQd98N5t.js";import"./graphicalItemSelectors-CBgrggUD.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
