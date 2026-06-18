import{r as f,R as e}from"./iframe-bh8Hdh0s.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-3Mh6rYEy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D-BYbnQO.js";import{C as k}from"./ComposedChart-D0rCA8sN.js";import{X as K}from"./XAxis-dMhU6DKu.js";import{L as v}from"./Legend--MEh8Dpm.js";import{B as s}from"./Bar-BLHn28PB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D3Bb09EQ.js";import"./CartesianAxis-Cczt14vl.js";import"./Layer-CFpuUaFs.js";import"./resolveDefaultProps-DrqDcb4q.js";import"./Text-DNFdD7FY.js";import"./DOMUtils-CqbIbq5Q.js";import"./isWellBehavedNumber-BEwe5En6.js";import"./Label-4dzVOcp4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkZ-MLZl.js";import"./index-BvOZTDpw.js";import"./index-BKp5y7FT.js";import"./types-CGzL9fNM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CAguNiQd.js";import"./immer-Di2Y-BX2.js";import"./RechartsWrapper-bPWrhjV6.js";import"./index-yP_7__bV.js";import"./index-DMGyx--D.js";import"./axisSelectors-CJnElyGk.js";import"./d3-scale-nMJeyC7B.js";import"./string-B6fdYHAA.js";import"./CartesianChart-EUP1j0p6.js";import"./chartDataContext-nAZQwMJZ.js";import"./CategoricalChart-D4vACcZf.js";import"./Symbols-DtKA6LMw.js";import"./symbol-B3zzIPTL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQr1dMfv.js";import"./uniqBy-SIO0NZ97.js";import"./iteratee-BMZqNRQz.js";import"./tooltipContext-DwGfEh7N.js";import"./AnimatedItems-2yvO_B45.js";import"./useAnimationId-CfFImJZH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSJj6R6N.js";import"./ActiveShapeUtils-BdiO1tHu.js";import"./RegisterGraphicalItemId-D7G5Ydkp.js";import"./ErrorBarContext-Co10Kn-s.js";import"./GraphicalItemClipPath-JLz8ewYQ.js";import"./SetGraphicalItem-Dnctc4Vz.js";import"./getZIndexFromUnknown-f_4lOsrp.js";import"./graphicalItemSelectors-DZZZgMPF.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
