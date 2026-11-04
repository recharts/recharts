import{r as f,R as e}from"./iframe-G0Ik9O6t.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CryECj4R.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CYnNRWxE.js";import{C as k}from"./ComposedChart-B4cIjG4K.js";import{X as K}from"./XAxis-CWTgMLCK.js";import{L as v}from"./Legend-d7TBOIw0.js";import{B as a}from"./Bar-BS8jmIY3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CylpphjQ.js";import"./Text-B4HlcW6K.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./throttle-0RzAOwSl.js";import"./axisSelectors-D9yir6Xs.js";import"./d3-scale-B1oMv4d2.js";import"./CartesianAxis-CcGZ5e89.js";import"./Layer-DsYtJDK_.js";import"./types-D7lN_jRq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0SK3-tY.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cix9UpUK.js";import"./uniqBy-CkgI_JIc.js";import"./iteratee-lKPQ2sEZ.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Bc94H-h2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BekZI2Ti.js";import"./useAnimationId-BSSTqixR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./tooltipContext-9zcdWQEa.js";import"./dataEntryStyles-C4cqIMlE.js";import"./ErrorBarContext-BMXI6Vn7.js";import"./activeStyles-BHukLnjd.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getZIndexFromUnknown-DJRGehp7.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./omit-DU67DOH4.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
