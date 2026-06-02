import{P as f,c as e}from"./iframe-DcZ25aZq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-C_fkHFUI.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-Bx385Wu5.js";import{C as k}from"./ComposedChart-DlgAAB8M.js";import{X as K}from"./XAxis-DyhIsrPh.js";import{L as v}from"./Legend-D3iuJ925.js";import{B as s}from"./Bar-t_I4kfRf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BBHPk0wF.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./isWellBehavedNumber-DH8Wjvkj.js";import"./Label-madSHGhS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CX9fDFPC.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./immer-CNH0Qykv.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./Symbols-FaOp8ptw.js";import"./symbol-Cpj73b5m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHtU9LZv.js";import"./uniqBy-CxmJpd9c.js";import"./iteratee-DGXMHyCR.js";import"./tooltipContext-DRhfxuNN.js";import"./ReactUtils-BfQpQwdE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMeCNBC5.js";import"./useAnimationId-wbWpU06B.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./getZIndexFromUnknown-CWr4yDyL.js";import"./graphicalItemSelectors-onWYZPz1.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
