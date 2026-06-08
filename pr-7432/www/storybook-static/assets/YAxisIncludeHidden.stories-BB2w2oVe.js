import{r as f,R as e}from"./iframe-B2GUem4R.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-_CiWUi77.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CZi7E6fW.js";import{C as k}from"./ComposedChart-C0b-ufbL.js";import{X as K}from"./XAxis-CFUeYXnK.js";import{L as v}from"./Legend-Bhh8SQ-f.js";import{B as s}from"./Bar-CQYzrmsh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dz6Q_sAk.js";import"./CartesianAxis-DVMfjDIU.js";import"./Layer-D33k1icw.js";import"./resolveDefaultProps-D8aANFv1.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./isWellBehavedNumber-Dny2ojXK.js";import"./Label-BkYexeGT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./types-D4D5wSub.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./immer-DXmH-xiw.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./axisSelectors-eBcYGUc1.js";import"./d3-scale-BTfuin0j.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./Symbols-CIcu7Z1r.js";import"./symbol-NVEfhO40.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qp1GxR-0.js";import"./uniqBy-DhTftgCy.js";import"./iteratee-N9KERHhC.js";import"./tooltipContext-DitHrbmm.js";import"./AnimatedItems-LimEMMjo.js";import"./useAnimationId-D653EGzA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNlPjGbB.js";import"./ActiveShapeUtils-1-wftwDY.js";import"./RegisterGraphicalItemId-CH4DvZUM.js";import"./ErrorBarContext-CorbPQDF.js";import"./GraphicalItemClipPath-CAM-mwtd.js";import"./SetGraphicalItem-C_-j0gLb.js";import"./getZIndexFromUnknown-Cxdy8wIR.js";import"./graphicalItemSelectors-DegQp3fd.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
