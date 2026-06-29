import{r as f,R as e}from"./iframe-Ce1K7ebi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DnjNgR7C.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-8Zo3fsoU.js";import{C as k}from"./ComposedChart-COfY451m.js";import{X as K}from"./XAxis-3C9aClrU.js";import{L as v}from"./Legend-BQlBEeuR.js";import{B as s}from"./Bar-DveN8pxO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BJIMs5EG.js";import"./CartesianAxis-vXS1PjkI.js";import"./Layer-B1_feEXA.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./Label-CmiiW9da.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVK_cW1P.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./types-EmN6t4vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GRKlOorj.js";import"./immer-wBCCevMF.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./Symbols-BDRy21CR.js";import"./symbol-aMWaQb_D.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXn7gAmc.js";import"./uniqBy-DJfS3mll.js";import"./iteratee-CHawhTEq.js";import"./tooltipContext-CgjaYqE5.js";import"./AnimatedItems-DUKSjkGs.js";import"./useAnimationId-BsE4V4Ok.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8DUmN55.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getZIndexFromUnknown-CR0Xal0t.js";import"./graphicalItemSelectors-B1zm0KHL.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
