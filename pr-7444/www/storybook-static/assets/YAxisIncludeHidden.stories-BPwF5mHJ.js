import{r as f,R as e}from"./iframe-DlHhS40N.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Co8rzPpk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BvmXOpzL.js";import{C as k}from"./ComposedChart-BU1MizAG.js";import{X as K}from"./XAxis-BYYxNJmZ.js";import{L as v}from"./Legend-Box85XiO.js";import{B as s}from"./Bar-CZK8AbiV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPDhRHlu.js";import"./CartesianAxis-CWmejQ4H.js";import"./Layer-DqnJz-la.js";import"./resolveDefaultProps-4rQlADP4.js";import"./Text-C8e4MCrJ.js";import"./DOMUtils-BzX9kZMs.js";import"./isWellBehavedNumber-BWgZXzoO.js";import"./Label-CKxxcWab.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BO_RiOSE.js";import"./index-BUtjLbCz.js";import"./index-eOMfBDqm.js";import"./types-CJTuBoPn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXDO0JDp.js";import"./immer-C3uuw8B2.js";import"./RechartsWrapper-BQ3sg0O8.js";import"./index-BvgD5YGJ.js";import"./index-BmuILyMJ.js";import"./axisSelectors-pVGzxNLo.js";import"./d3-scale-Be18i-DH.js";import"./CartesianChart-DhGeGokB.js";import"./chartDataContext-DsGTg2xD.js";import"./CategoricalChart-CoJqtrPl.js";import"./Symbols-C-zaMuJt.js";import"./symbol-CAoOuc3N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uYsnFzO5.js";import"./uniqBy--hIWrqYh.js";import"./iteratee-Bg1jPrtH.js";import"./tooltipContext-Dgpam99v.js";import"./AnimatedItems-DaDDpUgR.js";import"./useAnimationId-BsYp4mlV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByySwgNe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BvZP5z0J.js";import"./RegisterGraphicalItemId-CerVMuzL.js";import"./ErrorBarContext-CwPwud_C.js";import"./GraphicalItemClipPath-DrafemYl.js";import"./SetGraphicalItem-SnNwrY5U.js";import"./getZIndexFromUnknown-BvnCincg.js";import"./graphicalItemSelectors-DyoI6Nh-.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
