import{r as f,R as e}from"./iframe-DHvlXZZp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DYTJhxlv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D7_5YQCx.js";import{C as k}from"./ComposedChart-C7ZUQvNE.js";import{X as K}from"./XAxis-C0xAN7Vm.js";import{L as v}from"./Legend-DfYfxjVN.js";import{B as s}from"./Bar-Bp-uNdjR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Label-TKCFRexK.js";import"./Text-D-2er-qS.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./DOMUtils-CXaSfF0Q.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7_As1-8.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./throttle-Bg-VcpoN.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./d3-scale-Cey7ctPf.js";import"./CartesianAxis-DdKNIbtf.js";import"./Layer-BW5xomOj.js";import"./types-CRJA0nge.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BqfUunGe.js";import"./isBuffer-Crkas5dz.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./Symbols-vArPBIj6.js";import"./symbol-CMZuJUeF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWKaUxb_.js";import"./uniqBy-B1Poqyga.js";import"./iteratee-CZdVePke.js";import"./tooltipContext-DuieK5f0.js";import"./AnimatedItems-BVZCnb1h.js";import"./useAnimationId-uiW7aOrL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getZIndexFromUnknown-DWWc97aG.js";import"./graphicalItemSelectors-DXwSa3U9.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
