import{r as f,R as e}from"./iframe-QMSevZ_Z.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CX1GPX_T.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CqmMHsGQ.js";import{C as k}from"./ComposedChart-BanYSBKC.js";import{X as K}from"./XAxis-C0cN_JCK.js";import{L as v}from"./Legend-wCSof1VH.js";import{B as s}from"./Bar-DIAZY5dc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dt9ZBUsD.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./Label-CDZiRvSt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CEBsGFM8.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./immer-CSWl79hr.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./Symbols-BaSB-6_g.js";import"./symbol-D8fjms2j.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_J7pSVP.js";import"./uniqBy-U_isDGby.js";import"./iteratee-DR35FRfo.js";import"./tooltipContext-BaJfxc5d.js";import"./AnimatedItems-BDsdaMkZ.js";import"./useAnimationId-DlcOUKTA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lJXzMoVm.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./getZIndexFromUnknown-CL3JCHGf.js";import"./graphicalItemSelectors-risRb6qe.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
