import{P as f,c as e}from"./iframe-CaARQ0s4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Cf1zna9j.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-CT6cs3HE.js";import{C as k}from"./ComposedChart-0hkFxU0y.js";import{X as K}from"./XAxis-CMZlUJn9.js";import{L as v}from"./Legend-B2STmo1G.js";import{B as s}from"./Bar-dsqcN9LU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CO6N6w1L.js";import"./CartesianAxis-CKiY6dqA.js";import"./Layer-CrNDeidH.js";import"./resolveDefaultProps-B52lcPQI.js";import"./Text-V5D_mpos.js";import"./DOMUtils-_DsZOp5Z.js";import"./isWellBehavedNumber-D2fOOboq.js";import"./Label-COAzSUqp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSRcolRF.js";import"./index-BPXM-FiZ.js";import"./index-BihqodT2.js";import"./types-v4PqfPoB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-MMq6D890.js";import"./immer-DoZyPWPm.js";import"./RechartsWrapper-BhQjrq0m.js";import"./index-B_8hMxBA.js";import"./index-DNa9UEyx.js";import"./axisSelectors-BR_tDNDG.js";import"./d3-scale-BQLIct9Q.js";import"./CartesianChart-CtVi6KY7.js";import"./chartDataContext-B9lvWDA4.js";import"./CategoricalChart-CAffiMXn.js";import"./Symbols-J_X5bPew.js";import"./symbol-DX4-dAWc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPbzcAKR.js";import"./uniqBy-zpnrZsbG.js";import"./iteratee-BvPUjnAU.js";import"./tooltipContext-xP0DYZ-p.js";import"./ReactUtils-BDfejln-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CSr7ELVn.js";import"./useAnimationId-9oP4gOjo.js";import"./ActiveShapeUtils-DYy5kA1Z.js";import"./RegisterGraphicalItemId-s6qV58ed.js";import"./ErrorBarContext-B2OH1xFp.js";import"./GraphicalItemClipPath-ZB8y26XE.js";import"./SetGraphicalItem-CLCCJcFS.js";import"./getZIndexFromUnknown-DOqrYhBX.js";import"./graphicalItemSelectors-B8Fy9Cw5.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
