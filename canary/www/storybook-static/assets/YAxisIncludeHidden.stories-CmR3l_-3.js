import{r as f,R as e}from"./iframe-CEnpMkUD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-EWhR1Mjx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-05A266o9.js";import{C as k}from"./ComposedChart-Dl56oWTM.js";import{X as K}from"./XAxis-BSzDUhhq.js";import{L as v}from"./Legend-NUVilUcD.js";import{B as s}from"./Bar-CRuJ9KPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-keTZMkCE.js";import"./Text-BovGSesW.js";import"./resolveDefaultProps-BfNWPFnd.js";import"./DOMUtils-Bq__MZjJ.js";import"./isWellBehavedNumber-DR4aYfcx.js";import"./useId-DkQeXuoN.js";import"./useBackwardsCompatibleTheme-Cl8wy0Yl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--32eJAmt.js";import"./index-BLMKt3XR.js";import"./index-CJbnSVQD.js";import"./RechartsWrapper-0XuY0pKu.js";import"./index-D3euSQxt.js";import"./index-By9AGPbV.js";import"./throttle-Dmrqe0jJ.js";import"./axisSelectors-DC8u1mMs.js";import"./d3-scale-Dz-RCPbg.js";import"./renderedTicksSlice-CMfBipfM.js";import"./CartesianAxis-kR2Dl0Mj.js";import"./Layer-tgou8wwH.js";import"./types-Y-jxBs1c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RDTjk-Mf.js";import"./chartDataContext-fs3yspT4.js";import"./CategoricalChart-BbjRWCL9.js";import"./Symbols-DJnUr9Nq.js";import"./symbol-BMRcAJHE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfY-qvbk.js";import"./uniqBy-aUHDE_38.js";import"./iteratee-D1Sl_wcT.js";import"./AnimatedItems-BBWAA05W.js";import"./useAnimationId-CAXeIAhh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwQubN_8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUkWWRfj.js";import"./tooltipContext-uIua17wn.js";import"./RegisterGraphicalItemId-CbjDoXD2.js";import"./ErrorBarContext-COjMx0cf.js";import"./GraphicalItemClipPath-CisBO3GG.js";import"./SetGraphicalItem-WHlYrVZg.js";import"./getZIndexFromUnknown-BbxTe_0t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dzh6Njpd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
