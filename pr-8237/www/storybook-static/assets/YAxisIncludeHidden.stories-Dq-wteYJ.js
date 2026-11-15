import{r as f,R as e}from"./iframe-C75BlFXB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CM0RKDPz.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-4GxCw66H.js";import{C as k}from"./ComposedChart-Bw6iA5fE.js";import{X as K}from"./XAxis-bu4t9p5Z.js";import{L as v}from"./Legend-tyGKAzo8.js";import{B as a}from"./Bar-HPLqlKYV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D2Ecv790.js";import"./Text-CFNdT-9W.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./ZIndexLayer-SbUjc4VB.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./throttle-BrgJpY2A.js";import"./axisSelectors-DvLkyA4P.js";import"./d3-scale-PhqlfAou.js";import"./CartesianAxis-Cq0K36Zo.js";import"./Layer-9txovic7.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Di9_KxKG.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ryIYl6el.js";import"./uniqBy-IpgSihwf.js";import"./iteratee-BtVXkLhx.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-LhN5JgeO.js";import"./useAnimationId-BsyXEGTp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./tooltipContext-3pVC19GE.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./activeStyles-DZYHYdm_.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getZIndexFromUnknown-BO0gfpbs.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./omit-C9DhcYFD.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
