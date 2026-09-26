import{r as f,R as e}from"./iframe-B-cvRuUs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D8dVEXO3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CMjvBZBG.js";import{C as k}from"./ComposedChart-CN8RK9qn.js";import{X as K}from"./XAxis-y94IxigF.js";import{L as v}from"./Legend-Cjy-igUs.js";import{B as a}from"./Bar-Cx-2n8_Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-vDwlhiVA.js";import"./Text-CxPZ3A1T.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./DOMUtils-3oIj9XlO.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLKwVcRH.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./RechartsWrapper-Sn-pOtLi.js";import"./axisSelectors-BWIhKYR0.js";import"./throttle-CDbcUl2N.js";import"./d3-scale-DR_59xyj.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./index-43fZ4l-Z.js";import"./CartesianAxis-k7ozjxp6.js";import"./Layer-BuVUUS9m.js";import"./types-BMpC1VHb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./Symbols-DpS-Xr6D.js";import"./symbol-C7VPsUTZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRlCn3Qn.js";import"./uniqBy-BHcpSUT2.js";import"./iteratee-DJT2RpEq.js";import"./AnimatedItems-Dsd4czhw.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kx2mJ5WN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./tooltipContext-B1g6FgP3.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./ErrorBarContext-B6INZz-c.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getZIndexFromUnknown-BkkeV9sV.js";import"./useGraphicalItemIdentity-BfmGadKt.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
