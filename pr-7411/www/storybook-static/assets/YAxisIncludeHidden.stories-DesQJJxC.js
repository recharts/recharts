import{r as f,R as e}from"./iframe-BUJOmzqi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DKbaQ5d8.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BsaVfiwf.js";import{C as k}from"./ComposedChart-D5MlcB5U.js";import{X as K}from"./XAxis-DaOKHhNP.js";import{L as v}from"./Legend-Cy2Ofah6.js";import{B as s}from"./Bar-CXM7wx16.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BL4oPmOH.js";import"./CartesianAxis-Bv_4t9YA.js";import"./Layer-DAIr4ncG.js";import"./resolveDefaultProps-hlzoE81R.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./Label-BNcqFpiL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYX-KLdv.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./types-BzrTCe99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./immer-DH0vdgZo.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./axisSelectors-BsZbVas6.js";import"./d3-scale-DS8AhCL8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CwVYswgd.js";import"./chartDataContext-BLLyTvAK.js";import"./CategoricalChart--vXw4uUZ.js";import"./Symbols-BhutvzPD.js";import"./symbol-3aTO9bbP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BhRUWmtD.js";import"./uniqBy-D07a0IUx.js";import"./iteratee-3mUZv5fI.js";import"./tooltipContext-n5p5vu7t.js";import"./AnimatedItems-JOMjWh90.js";import"./useAnimationId-BY-iJyWy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2JiSHo9.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./ErrorBarContext-DA6daDg9.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getZIndexFromUnknown-C2YVw8tG.js";import"./graphicalItemSelectors-6So_Cw7T.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
