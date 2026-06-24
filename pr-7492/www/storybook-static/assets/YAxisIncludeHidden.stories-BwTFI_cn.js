import{r as f,R as e}from"./iframe-Cmv2uZik.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BKFIWsdJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-kpWLrDSf.js";import{C as k}from"./ComposedChart-vEbKd6d1.js";import{X as K}from"./XAxis-BHNxMNK7.js";import{L as v}from"./Legend-mUAAvKi4.js";import{B as s}from"./Bar-DDE0aC9z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-26q7mLtB.js";import"./CartesianAxis-BCDXmj_o.js";import"./Layer-BSNuGngv.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./Label-COZByZz9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D1dh8rie.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./types-DtyijqTI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-De354RnA.js";import"./immer-BpVJ12_R.js";import"./RechartsWrapper-B1y6zL6A.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./Symbols-C9K35YDq.js";import"./symbol-UjsPHlP5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSu7wa8E.js";import"./uniqBy-Bk8Zomuw.js";import"./iteratee-DwbYjoyw.js";import"./tooltipContext-BeMwIDSP.js";import"./AnimatedItems-lktoz8YW.js";import"./useAnimationId-9e7OJi4C.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OJfYPkwR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./ErrorBarContext-kFIcQTi0.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./getZIndexFromUnknown-Cpt6_Sgz.js";import"./graphicalItemSelectors-C1u59eed.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
