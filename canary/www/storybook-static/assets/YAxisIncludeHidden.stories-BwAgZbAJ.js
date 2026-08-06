import{r as f,R as e}from"./iframe-i0tdfO-S.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DpT96wDN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-kcLB36p_.js";import{C as k}from"./ComposedChart-CzSoXaYq.js";import{X as K}from"./XAxis-DVXCxOsO.js";import{L as v}from"./Legend-De9VUwMG.js";import{B as s}from"./Bar-E3t8z6C5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DT2Ych2e.js";import"./Text-BMlLhZu5.js";import"./resolveDefaultProps-Cqgjjt0o.js";import"./DOMUtils-CUxE2jbS.js";import"./isWellBehavedNumber-BGsBu9W1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZv5OG2W.js";import"./index-C1dNy9AB.js";import"./index-BlLn1ZJf.js";import"./RechartsWrapper-CQ-K3_cR.js";import"./index-BsuycueP.js";import"./index-BBdkxuke.js";import"./throttle-yuh6eqF5.js";import"./axisSelectors-C9dKusfX.js";import"./d3-scale-Clxk0FTV.js";import"./renderedTicksSlice-xuaKpSF7.js";import"./CartesianAxis-CDi0h_Ul.js";import"./Layer-CsmYaDC8.js";import"./types-CcIZQOYN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7h8s25b.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B95UWo8G.js";import"./chartDataContext-DuTDnpGx.js";import"./CategoricalChart-DFB3mzsf.js";import"./Symbols-BI3PLQUq.js";import"./symbol-CkQQR2Y2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSiJWWdb.js";import"./uniqBy-CKF-LbxF.js";import"./iteratee-DkO0J_ik.js";import"./tooltipContext-B71JGNeD.js";import"./AnimatedItems-DHFbNXP7.js";import"./useAnimationId-OfLHi_5O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEbMkxuP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EZQtDmwK.js";import"./RegisterGraphicalItemId-DtBmeLcC.js";import"./ErrorBarContext-FzqsPEvI.js";import"./GraphicalItemClipPath-BsfG3uc-.js";import"./SetGraphicalItem-DW3yQoWV.js";import"./getZIndexFromUnknown-iUg9cF37.js";import"./graphicalItemSelectors-Ce-R31iD.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
